import pkg from '../package.json';

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
    bugs: {
        url: string;
    };
    readme: string;
    homepage: string;
}

export const packageJson = pkg as MyPackageJson;
