declare module 'resources/*' {
    const dataUrl: string;
    export default dataUrl;
}

declare module 'assets/*' {
    const dataUrl: string;
    export default dataUrl;
}

declare module '*.less' {
    const value: unknown;
    export default value;
}

declare const browser: import('webextension-polyfill').Browser;
