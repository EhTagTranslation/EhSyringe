import { chromeMessage } from '../tool/chrome-message';
import { Service } from 'services';
import { Logger } from 'services/logger';
import { Storage } from 'services/storage';

@Service()
export class AutoUpdate {
    constructor(readonly logger: Logger, readonly storage: Storage) {
        this.init().catch(logger.error);
    }
    private async init(): Promise<void> {
        chromeMessage.send('ext-update', undefined).catch(this.logger.error);

        const conf = await this.storage.get('config');
        if (!conf.autoUpdate) return;
        chromeMessage.send('auto-update', false).catch(this.logger.error);
    }
}
