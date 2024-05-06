(()=>{
    class GideLine {
        constructor(elem) {
            this.elem = elem;
            this.style = getComputedStyle(document.body);
            this.init();
        }
        init() {
            window.getBH((bh)=>{
                this.elem.outerHTML = bh.apply([
                    {block: 'gide-line', content: [
                        {block: 'h', size: '3', content: 'Основной текст'},
                        {block: 'list', content: [
                            'Семейство шрифтов для основного текста: ' + this.style.getPropertyValue('font-family'),
                            'Базовый размер шрифта для основного текста на сайте 1rem = ' + this.style.getPropertyValue('font-size'),
                            'Межстрочечный интервал ('+this.style.getPropertyValue('line-height')+'): ' + parseFloat(this.style.getPropertyValue('line-height')) / parseFloat(this.style.getPropertyValue('font-size')),
                        ]},
                        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((tag, index) => {
                            let elem = document.getElementsByTagName(tag)[0];
                            let style = getComputedStyle(elem);
                            return [
                                {block: 'h', size: ++index, content: 'Заголовок ' + tag},
                                {block: 'list', content: [
                                    'Семейство шрифтов для заголовков: ' + style.getPropertyValue('font-family'),
                                    'Размер шрифта: ' + style.getPropertyValue('font-size'),
                                    'Межстрочечный интервал ('+style.getPropertyValue('line-height')+'): '+ parseFloat(style.getPropertyValue('line-height')) / parseFloat(style.getPropertyValue('font-size')),
                                ]},
                            ];
                        }),
                    ]},
                ]);
            });
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        Array.prototype.map.call(document.getElementsByClassName('gide-line'), (item) => new GideLine(item));
    });
    return GideLine;
})();

