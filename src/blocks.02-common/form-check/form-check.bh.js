module.exports = function(bh) {
    bh.match('form-check', function(ctx, json) {
        ctx.tParam('ID', ctx.generateId());
        let props = Object.assign({
            type: 'checkbox',
        }, json.props ? json.props : {});
        let content = ctx.content();
        if (ctx.isSimple(content)) {
            ctx.content([
                {elem: 'input', attrs: props},
                {elem: 'label', content},
            ], true);
        }
    });
};
