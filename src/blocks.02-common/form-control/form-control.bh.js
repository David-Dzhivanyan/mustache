module.exports = function(bh) {
    bh.match('form-control', function(ctx, json) {
        ctx.attr('id', ctx.generateId());
        json.placeholder && ctx.attr('placeholder', json.placeholder);
        switch (ctx.tag()) {
            case 'textarea':
                break;
            case 'select':
                Array.isArray(ctx.content()) &&
                ctx.content(
                    ctx.content().map((item) => {
                        if (ctx.isSimple(item)) return {tag: 'option', attrs: {value: ctx.generateId()}, content: item};
                        return item;
                    }),
                    true
                );
                break;
            default:
                ctx.attr('value', ctx.content());
                ctx.tag('input').content(false, true);
                ctx.attr('type', 'text');
                if (ctx.attr('type') == 'password') {
                    ctx.attr('autocomplete', 'current-password');
                }
        }
    });
};
