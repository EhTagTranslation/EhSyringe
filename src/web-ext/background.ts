import { Container } from 'services';
import { ExtensionUpdater } from 'plugin/extension-updater';
import { ContextMenu } from 'plugin/context-menu';

Container.get(ContextMenu);
Container.get(ExtensionUpdater);

export * from 'background';
