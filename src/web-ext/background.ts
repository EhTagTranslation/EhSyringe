import { Container } from 'services';
import { ExtensionUpdater } from 'plugin/extension-updater';
import { ContextMenu } from 'plugin/context-menu';
import { DatabaseUpdater } from 'plugin//database-updater';
import { OmniBox } from 'plugin/omnibox';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';

Object.defineProperty(window, 'Container', { value: Container, enumerable: true });

Container.get(ContextMenu);
Container.get(DatabaseUpdater);
Container.get(ExtensionUpdater);
Container.get(OmniBox);
Container.get(Suggest);
Container.get(TagDatabase);
