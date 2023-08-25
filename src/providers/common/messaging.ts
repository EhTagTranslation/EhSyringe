import type { Opaque } from 'type-fest';

export type MessageListener<K extends string, T, R> = Opaque<{ key: K; value: Listener<T, R> }, Messaging>;

type Listener<T, R> = (args: T) => Promise<R> | R;

export class Multicast<T, R> {
    constructor(readonly key: string) {}
    private readonly listeners = new Set<Listener<T, R>>();

    get size(): number {
        return this.listeners.size;
    }

    add(listener: Listener<T, R>): void {
        this.listeners.add(listener);
    }
    remove(listener: Listener<T, R>): boolean {
        return this.listeners.delete(listener);
    }

    async handle(request: T): Promise<R> {
        const promises = [...this.listeners.keys()].map((listener) => Promise.resolve(listener(request)));
        let first: R | undefined, all: R[] | undefined;
        try {
            first = await Promise.race(promises);
            all = await Promise.all(promises);
            return first;
        } catch (error) {
            Object.defineProperty(error, 'request', { value: request, enumerable: true });
            if (first) Object.defineProperty(error, 'firstReply', { value: first, enumerable: true });
            if (all) Object.defineProperty(error, 'replies', { value: all, enumerable: true });
            throw error;
        }
    }
}

export class Messaging {
    readonly handlers = new Map<string, Multicast<unknown, unknown>>();

    on<K extends string, T, R>(key: string, listener: Listener<T, R>): MessageListener<K, T, R> {
        let handler = this.handlers.get(key);
        if (!handler) {
            handler = new Multicast<T, R>(key) as Multicast<unknown, unknown>;
            this.handlers.set(key, handler);
        }
        handler.add(listener as Listener<unknown, unknown>);
        return { key, value: listener } as MessageListener<K, T, R>;
    }
    off<K extends string, T, R>(listener: MessageListener<K, T, R>): boolean {
        const handler = this.handlers.get(listener.key);
        if (!handler) return false;
        return handler.remove(listener.value as Listener<unknown, unknown>);
    }
    async emit<K extends string, T, R>(key: K, args: T, broadcast = false): Promise<R> {
        const handler = this.handlers.get(key) as Multicast<T, R>;
        if (!handler || handler.size === 0) {
            if (broadcast) return Promise.resolve(undefined as unknown as R);
            return Promise.reject(new Error(`消息 ${key} 还未注册过处理程序`));
        }
        const handles = handler.handle(args);
        if (broadcast) {
            try {
                return await handles;
            } catch (ex) {
                console.error(ex);
                return undefined as unknown as R;
            }
        }
        return handles;
    }
}

export const messaging = new Messaging();
