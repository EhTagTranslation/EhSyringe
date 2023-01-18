import { Container } from 'typedi';
import { Logger } from 'services/logger';

/** 网页加载后调用 */
export function ready(callback: () => void | Promise<void>): void {
    const onError = (ex: unknown): void => {
        const logger = Container.get(Logger);
        logger.error('执行文档加载回调失败', ex);
    };
    const f = (): void => {
        try {
            Promise.resolve(callback()).catch(onError);
        } catch (ex) {
            onError(ex);
        }
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', f, { passive: true, once: true });
    } else {
        setTimeout(f);
    }
}
