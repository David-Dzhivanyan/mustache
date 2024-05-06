module.exports = function(bh) {
    bh.match('main', function(ctx) {
        ctx.tag('main');
        ctx.content({
            cls: 'container-xxl',
            content: ctx.content()
        }, true);
    });

    bh.match('main__section', function(ctx) {
        ctx.tag('section');
    });
};
