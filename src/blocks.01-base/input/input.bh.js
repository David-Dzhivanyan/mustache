module.exports = function(bh) {
    bh.match('input', function(ctx, json) {
        ctx.attr('id', ctx.generateId());
        json.placeholder && ctx.attr('placeholder', json.placeholder);
        ctx.attr('value', ctx.content());
        ctx.tag('input').content(false, true);
        ctx.attr('type', 'text');
        if (ctx.attr('type') == 'password') {
            ctx.attr('autocomplete', 'current-password');
        }
    });
};
