module.exports = function(bh) {
    bh.match('footer', function(ctx) {
        ctx.tag('footer');
        ctx.content({
            cls: 'container-xxl',
            content: ctx.content()
        }, true);
    });
};
