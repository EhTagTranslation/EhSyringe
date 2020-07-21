import { Opaque } from 'type-fest';

export type ListenerId = Opaque<unknown, Listener>;
export type Listener = (key: string, oldValue?: string, newValue?: string) => unknown;

export interface Storage {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    delete(key: string): Promise<void>;
    keys(): Promise<string[]>;
    on(key: string, listener: Listener): ListenerId;
    off(key: string, id: ListenerId): void;
}
