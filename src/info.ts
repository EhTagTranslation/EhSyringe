import _packageJson from '../package.json';

interface MyPackageJson {
    name: string;
    displayName: string;
    version: string;
    description: string;
    author: string;
    repository: {
        type: string;
        url: string;
    };
    license: string;
    bugs: string;
    homepage: string;
}

export const packageJson: MyPackageJson = _packageJson;
