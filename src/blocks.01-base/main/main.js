class Main {
	constructor(elem) {
		this.block = elem;
		this.block.Main = this;
		this.html = document.querySelector('html');
		this.themeButton = document.querySelector('.main-window__theme-button');

		this.init();
	}

	init = () => {

		this.themeButton.addEventListener('click', () => {
			let theme = this.html.dataset.bsTheme;
			if(!theme || theme === 'light') {
				this.html.dataset.bsTheme = 'dark';
			} else {
				this.html.dataset.bsTheme = 'light';
			}
		})
		this.block.classList.add('main_inited');
	};

	static init() {
		return Array.from(document.querySelectorAll('.main:not(.main_inited)')).forEach((elem) => new Main(elem));
	}
}

document.addEventListener('DOMContentLoaded', Main.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Main = Main;

