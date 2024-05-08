
class WindowHeader {
	constructor(elem) {
		this.block = elem;
		this.block.WindowHeader = this;

		this.time()
		this.init();
	}

	init = () => {
		this.block.classList.add('window-header_inited');
	};

	time = () => {
		let time = setInterval(() => {
			let date = new Date();
			this.block.querySelector('.window-header__time').innerHTML = (date.getHours() + ":" + date.getMinutes()) + ' <span class="small">AM</span>'
		}, 1000);
	}

	static init() {
		return Array.from(document.querySelectorAll('.window-header:not(.window-header_inited)')).forEach((elem) => new WindowHeader(elem));
	}
}

document.addEventListener('DOMContentLoaded', WindowHeader.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.WindowHeader = WindowHeader;

