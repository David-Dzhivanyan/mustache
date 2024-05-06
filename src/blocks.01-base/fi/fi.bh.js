module.exports = function(bh) {
    bh.match('fi', function(ctx, json) {
        ctx.tag('i');
    });
};
