(()=>{
    class Palette {
        constructor(elem) {
            this.palette = elem;
            this.style = getComputedStyle(document.body);
            this.color = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'white', 'gray', 'gray-dark'];
            this.theme = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
            this.grays = ['gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900'];
            this.getItem = this.getItem.bind(this);
            this.getPalette = this.getPalette.bind(this);
            this.init();
        }
        init() {
            window.getBH((bh)=>{
                this.palette.outerHTML = bh.apply(this.getPalette());
            });
        }
        getItem(name) {
            let hex = this.style.getPropertyValue('--'+name).trim();
            return {elem: 'item', attrs: {'style': 'background:'+hex}, content: {elem: 'title', content: ['$'+name, ': ', hex]}};
        }
        getPalette() {
            return [
                {block: 'palette', content: [
                    {block: 'h', size: '2', content: 'Цвета темы'},
                    this.theme.map(this.getItem),
                    {block: 'h', size: '2', content: 'Оттенки серого'},
                    this.grays.map(this.getItem),
                    {block: 'h', size: '2', content: 'Предопределенные цвета'},
                    this.color.map(this.getItem),
                ]},
            ];
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        Array.prototype.map.call(document.getElementsByClassName('palette'), (item) => new Palette(item));
    });
    return Palette;
})();

