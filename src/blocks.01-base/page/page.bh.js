module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx
            .tag('body')
            .bem(false)
            .content([
                '<!--noindex-->',
                {elem: 'alert', tag: 'noscript', content: 'В вашем браузере отключен JavaScript. Многие элементы сайта могут работать некорректно.'},
                {elem: 'alert', cls: 'visible-no-modern', content: 'Ваш браузер устарел и не обеспечивает полноценную и безопасную работу с сайтом. Пожалуйста <a rel="nofollow" target="_blank" onclick="window.open(this.href, \'_blank\');return 0" href="https://browsehappy.com/">обновите</a> браузер чтобы улучшить взаимодействие с сайтом.'},
                '<!--/noindex-->',
                ctx.content(),
                json.scripts,
            ], true);

        return [
            '<!DOCTYPE html>',
            {tag: 'html', attrs: {lang: json.lang || 'ru'}, cls: 'ua-no-js', content: [
                {tag: 'head', content: [
                    {tag: 'meta', attrs: {charset: 'utf-8'}},
                    {tag: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=0.1, maximum-scale=1.0, minimal-ui, shrink-to-fit=no'}},
                    {tag: 'meta', attrs: {name: 'apple-mobile-web-app-capable', content: 'yes'}},
                    {tag: 'meta', attrs: {name: 'format-detection', content: 'telephone=no'}},
                    {tag: 'title', content: json.title},
                    {tag: 'link', attrs: {rel: 'shortcut icon', href: 'favicons/favicon.ico', type: 'image/x-icon'}},
                    {elem: 'ua'},
                    {elem: 'ua', content: `!function(o,n){document.documentElement.className+="ontouchstart"in o||navigator.maxTouchPoints?" ua-touch":" ua-no-touch"}(window);`},
                    {tag: 'link',  attrs: { rel: 'stylesheet', href: `${ process.env.SAND ? '' : process.env.SITE_PUBLIC_PATH ?? ''}merged.css?${Date.now()}` }},
                    json.head,
                    json.styles,
                ]},
                ctx.json(),
                {tag: 'script',  attrs: { type: 'text/javascript', src: `${ process.env.SAND ? '' : process.env.SITE_PUBLIC_PATH ?? ''}merged.js?${Date.now()}` }},
            ]},
        ];
    });
};
