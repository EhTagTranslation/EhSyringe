import { merge } from '../helper';

merge(/^\/karma\.php/, undefined, {
    '\nYou cannot imbue yourself with Karma!\n': '您不能赋予自己 Karma！',
    '\n\tYou are about to imbue ': '您将要赋予 ',
    ' with ': ' ',
    ' karma.': ' karma。',
    '\n\tIf you wish, you can leave a short message below.\n': '\n\t如果您愿意，可以在下方简短留言。\n',
    'Imbue': '赋予',
});
