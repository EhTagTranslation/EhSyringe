import type { NotificationInfo } from './common/notification';
import type { Badge } from './common/badge';

export declare function openInTab(url: string): void;

export declare function sendNotification(info: NotificationInfo): void;

export declare function setBadge(info: Badge): void;
