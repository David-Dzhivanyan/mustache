module.exports = function(bh) {
    bh.match('form-check__input', function(ctx, json) {
        ctx
            .tag('input')
            .mix({block: 'form-check-input'})
            .attrs({
                type: 'checkbox',
                id: ctx.tParam('ID'),
                name: ctx.tParam('ID'),
                value: ctx.generateId(),
            });
    });
};
