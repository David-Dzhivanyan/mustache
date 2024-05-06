module.exports = function(bh) {
    bh.match('bh', function(ctx, json) {
        ctx
            .tParam('ID', ctx.generateId())
            .attr('id', ctx.tParam('ID'))
            .content([
                {tag: 'script', attrs: {async: true}, content: ctx.process(`document.addEventListener('DOMContentLoaded', function(){window.getBH(function(BH) {${ctx.tParam('ID')}.outerHTML = BH.apply(${JSON.stringify(ctx.content())})})});`)},
            ], true);
    });
};
