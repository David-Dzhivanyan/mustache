module.exports = function(bh) {
    bh.match('image', function(ctx, json) {
        ctx.content({block: 'img', mods: {lazy: true}, src: json.src || `http://placehold.it/${ctx.mod('size') || '260x260'}`});
        ctx.content([
            {elem: 'inner', content: [
                ctx.content(),
            ]},
        ], true);
    });
};
