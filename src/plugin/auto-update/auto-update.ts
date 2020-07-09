import { chromeMessage } from '../../tool/chrome-message';
import { config } from '../../tool/config-manage';

export const autoUpdateInit = async (): Promise<void> => {
    void chromeMessage.send('ext-update', undefined);

    const conf = await config.get();
    if (!conf.autoUpdate) return;
    void chromeMessage.send('auto-update', false);
};
