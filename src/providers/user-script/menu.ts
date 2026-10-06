import type { Menu } from '../common/menu';
import { Service } from 'typedi';
import { Logger } from 'services/logger';
import { Container } from 'services';
export * from '../common/menu';

@Service()
class MenuProvider {
    constructor(readonly logger: Logger) {
        logger.warn(`不支持右键菜单`);
    }

    createMenu(_info: Menu): void {
        return;
    }
}

const provider = Container.get(MenuProvider);
export const createMenu = provider.createMenu.bind(provider);
