class MainWindow {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;
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
		this.block.classList.add('main-window_inited');
	};

	static init() {
		return Array.from(document.querySelectorAll('.main-window:not(.main-window_inited)')).forEach((elem) => new MainWindow(elem));
	}
}

document.addEventListener('DOMContentLoaded', MainWindow.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.MainWindow = MainWindow;

