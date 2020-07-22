import './polyfills';
import { Container } from 'services';
import { ExtensionUpdater } from 'plugin/extension-updater';
import { DatabaseUpdater } from 'plugin/database-updater';
import { OmniBox } from 'plugin/omnibox';
import { Suggest } from 'plugin/suggest';
import { TagDatabase } from 'plugin/tag-database';
import { TagContextMenu } from 'plugin/tag-context-menu';
import { ImageContextMenu } from 'plugin/image-context-menu';

Object.defineProperty(window, 'Container', { value: Container, enumerable: true });

Container.get(ExtensionUpdater);
Container.get(DatabaseUpdater);
Container.get(TagDatabase);
Container.get(Suggest);
Container.get(OmniBox);
Container.get(TagContextMenu);
Container.get(ImageContextMenu);
