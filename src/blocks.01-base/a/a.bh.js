module.exports = function(bh) {
    bh.match('a', function(ctx, json) {
        ctx.tag('a').attr('href', '#');
    });
};
