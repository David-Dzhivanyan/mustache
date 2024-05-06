module.exports = function(bh) {
    bh.match('image__char', function(ctx, json) {
        ctx.tag('span');
    });
};
