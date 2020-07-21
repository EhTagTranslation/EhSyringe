export interface NotificationInfo {
    title: string;
    message: string;
    action?: () => unknown;
}
