import { merge } from '../helper';

merge(/^\/bounce_login\.php/, undefined, {
    'This page requires you to log on.': '此页面需要登录才能访问',
    'Login!': '登录',
    '\xA0or\xA0': ' 或 ',
    Register: '注册',
});
