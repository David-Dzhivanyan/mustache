module.exports = function(bh) {
    bh.match('header', function(ctx) {
        ctx.tag('header');
        ctx.content({
            cls: 'container-xxl',
            content: ctx.content()
        }, true);
    });
};
