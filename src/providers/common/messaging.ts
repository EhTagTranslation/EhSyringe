export interface Messaging {
    listen(key: string, listener: (args: unknown) => Promise<unknown> | unknown): void;
    emit(key: string, args: unknown): Promise<unknown>;
}
