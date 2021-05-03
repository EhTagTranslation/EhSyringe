import { Opaque } from 'type-fest';

export type MessageListener = Opaque<{ key: string; value: Listener }, Messaging>;

type Listener = (args: unknown) => Promise<unknown> | unknown;

export class Multicast {
    constructor(readonly key: string) {}
    private readonly listeners = new Set<Listener>();

    get size(): number {
        return this.listeners.size;
    }

    add(listener: Listener): void {
        this.listeners.add(listener);
    }
    remove(listener: Listener): boolean {
        return this.listeners.delete(listener);
    }

    async handle(request: unknown): Promise<unknown> {
        const promises = [...this.listeners.keys()].map((listener) => Promise.resolve(listener(request)));
        let first: unknown, all: unknown[] | undefined;
        try {
            first = await Promise.race(promises);
            all = await Promise.all(promises);
            return first;
        } catch (ex) {
            const error = ex as unknown;
            Object.defineProperty(error, 'request', { value: request, enumerable: true });
            if (first) Object.defineProperty(error, 'firstReply', { value: first, enumerable: true });
            if (all) Object.defineProperty(error, 'replies', { value: all, enumerable: true });
            throw error;
        }
    }
}

export class Messaging {
    readonly handlers = new Map<string, Multicast>();

    on(key: string, listener: Listener): MessageListener {
        let handler = this.handlers.get(key);
        if (!handler) {
            handler = new Multicast(key);
            this.handlers.set(key, handler);
        }
        handler.add(listener);
        return { key, value: listener } as MessageListener;
    }
    off(listener: MessageListener): boolean {
        const handler = this.handlers.get(listener.key);
        if (!handler) return false;
        return handler.remove(listener.value);
    }
    async emit(key: string, args: unknown, broadcast = false): Promise<unknown> {
        const handler = this.handlers.get(key);
        if (!handler || handler.size === 0) {
            if (broadcast) return Promise.resolve();
            return Promise.reject(new Error(`消息 ${key} 还未注册过处理程序`));
        }
        const handles = handler.handle(args);
        if (broadcast) {
            try {
                return await handles;
            } catch (ex) {
                console.error(ex);
                return;
            }
        }
        return handles;
    }
}

export const messaging = new Messaging();
