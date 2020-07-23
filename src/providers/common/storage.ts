import { Opaque, JsonValue } from 'type-fest';

export type ListenerId = Opaque<unknown, Listener>;
export type Listener = (key: string, oldValue?: JsonValue, newValue?: JsonValue) => unknown;

export interface Storage {
    get(key: string): Promise<JsonValue | undefined>;
    set(key: string, value: JsonValue): Promise<void>;
    delete(key: string): Promise<void>;
    keys(): Promise<string[]>;
    on(key: string, listener: Listener): ListenerId;
    off(key: string, id: ListenerId): void;
}
