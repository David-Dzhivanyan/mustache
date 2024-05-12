class Main {
	constructor(elem) {
		this.block = elem;
		this.block.Main = this;
		this.html = document.querySelector('html');
		this.themeButton = document.querySelector('.main-window__theme-button');
		this.application = this.block.querySelectorAll('.application');
		this.modalWindow = this.block.querySelectorAll('.modal-window')
		this.init();
	}
	init = () => {

		this.themeButton.addEventListener('click', () => {
			let theme = this.html.dataset.bsTheme;
			this.applicationChangeTheme();
			this.modalWindowChangeTheme();
			if(!theme || theme === 'light') {
				this.html.dataset.bsTheme = 'dark';
			} else {
				this.html.dataset.bsTheme = 'light';
			}
		})

		this.block.classList.add('main_inited');
	};

	applicationChangeTheme = () => {
		this.application.forEach((item ) => {
			let imgSrc = item.querySelector('.img').src;
			if (!imgSrc.includes('_dark')) {
				imgSrc = imgSrc.replace(/(\.\w+)$/, '_dark$1');
			} else {
				imgSrc = imgSrc.replace('_dark', '');
			}
			item.querySelector('.img').src = imgSrc;
		})
	}

	modalWindowChangeTheme = () => {
		this.modalWindow.forEach((item) => {
			let imgs = item.querySelectorAll('.img');
			imgs.forEach((img) => {
				let imgSrc = img.src;
				if (!imgSrc.includes('_dark')) {
					imgSrc = imgSrc.replace(/(\.\w+)$/, '_dark$1');
				} else {
					imgSrc = imgSrc.replace('_dark', '');
				}
				img.src = imgSrc;
			});
		})
	}

	static init() {
		return Array.from(document.querySelectorAll('.main:not(.main_inited)')).forEach((elem) => new Main(elem));
	}
}

document.addEventListener('DOMContentLoaded', Main.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Main = Main;

