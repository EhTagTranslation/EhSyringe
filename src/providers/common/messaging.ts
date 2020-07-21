import { Opaque } from 'type-fest';

export type MessageListener = Opaque<unknown, Messaging>;
export interface Messaging {
    on(key: string, listener: (args: unknown) => Promise<unknown> | unknown): MessageListener;
    off(listener: MessageListener): void;
    emit(key: string, args: unknown): Promise<unknown>;
}
