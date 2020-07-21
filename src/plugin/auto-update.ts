import { Service } from 'services';
import { Logger } from 'services/logger';
import { Storage } from 'services/storage';
import { Messaging } from 'services/messaging';

@Service()
export class AutoUpdate {
    constructor(readonly logger: Logger, readonly storage: Storage, readonly messaging: Messaging) {
        this.init().catch(logger.error);
    }
    private async init(): Promise<void> {
        this.messaging.emit('update-extension', undefined).catch(this.logger.error);

        const conf = await this.storage.get('config');
        if (!conf.autoUpdate) return;
        this.messaging.emit('update-database', { force: false }).catch(this.logger.error);
    }
}
