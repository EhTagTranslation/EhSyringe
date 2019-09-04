const fs = require("fs");
const path = require("path");
const keypair = require('keypair');
const ChromeExtension = require("crx");

class CrxPacket {

    constructor(options) {
        this.options = options || {};
        this.tempKey = path.resolve(__dirname, "tempKey.pem");
        this.outputFileName = `${options.name || "packed"}.crx`;

        if (this.options.key) {
            this.key = path.resolve(__dirname, options.key);
        } else {
            const pair = keypair();
            fs.writeFileSync(this.tempKey, pair.private);
            this.key = this.tempKey;
        }
        this.src = path.resolve(__dirname, this.options.src);
        this.dest = path.resolve(__dirname, this.options.dest);
        this.updateFile = path.resolve(__dirname, this.dest, options.updateFile || "update.xml");
        this.crxFile = path.resolve(__dirname, path.join(this.dest, this.outputFileName));
        this.version = options.version || 3;
    }

    apply(compiler) {
        compiler.hooks.done.tap('CrxPacket', compilation => {
            try {
                this.pack();
            }catch (err) {
                console.error(err);
            }
        });
    }

    async pack() {
        const privateKey = fs.readFileSync(this.key, 'utf8');
        console.log('privateKey', privateKey);
        const crx = new ChromeExtension({
            codebase: `http://localhost:8000/${this.outputFileName}`,
            privateKey: privateKey,
            version: this.version
        });
        const crxBuffer = await crx.load(this.src).then(crx => crx.pack());
        const updateXML = crx.generateUpdateXML();
        if (!fs.existsSync(this.dest)) {
            fs.mkdirSync(this.dest);
        }
        fs.writeFileSync(this.updateFile, updateXML);
        console.info(`Saving CRX file to ${this.crxFile}`);
        fs.writeFileSync(this.crxFile, crxBuffer);
        if (fs.existsSync(this.tempKey)) {
            fs.unlinkSync(this.tempKey);
        }
    }
}
module.exports = CrxPacket;
