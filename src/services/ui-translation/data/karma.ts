import { merge } from '../helper';

merge(/^\/karma\.php/, undefined, {
    '\nYou cannot imbue yourself with Karma!\n': '您不能赋予自己 Karma！',
    '\nYou have imbued this member with karma too recently.': '您最近赋予过此用户 Karma。',
    'Time remaining before you can imbue this member again:': '距离下次可赋予此用户的时间为：',
    '\n\tYou are about to imbue ': '您将要赋予 ',
    ' with ': ' ',
    ' karma.': ' karma。',
    '\n\tIf you wish, you can leave a short message below.\n': '\n\t如果您愿意，可以在下方简短留言。\n',
    Imbue: '赋予',
},
[
    [/^([\d.]+) days and ([\d.]+) hours$/, '$1 天 $2 小时'],
    [/^([\d.]+) hours and ([\d.]+) minutes$/, '$1 小时 $2 分钟'],
    [/^([\d.]+) days$/, '$1 天'],
    [/^([\d.]+) hours$/, '$1 小时'],
    [/^([\d.]+) minutes$/, '$1 分钟'],
],
);
