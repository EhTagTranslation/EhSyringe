import { Service } from 'typedi';
import { NotificationInfo } from 'providers/common/notification';
import { sendNotification } from 'providers/utils';

@Service()
export class Notification {
    send(info: NotificationInfo): void {
        return sendNotification(info);
    }
}
