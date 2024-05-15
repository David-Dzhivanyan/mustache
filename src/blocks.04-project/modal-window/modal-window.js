class ModalWindow {
	constructor(elem) {
		this.block = elem;
		this.block.ModalWindow = this;

		this.open();
		this.close();
		this.init();
	}

	close = () => {
		this.closeBtn = this.block.querySelector('[data-close]');

		this.closeBtn && this.closeBtn.addEventListener('click', () => {
			this.block.classList.remove('show');
			// this.block.style.transform = 'scale(0)';
		})
	};

	open = () =>{
		this.onenBtn = document.querySelector('[data-modal="#'+ this.block.id +'"]');
		this.onenBtn && this.onenBtn.addEventListener('click', () => {
			this.block.classList.add('show');

			this.onenBtn.dispatchEvent(new CustomEvent('open_' + this.block.id, {
				detail: {},
				bubbles: true
			}));
		})
	};

	init = () => {
		this.block.classList.add('modal-window_inited');
	};

	static init() {
		return Array.from(document.querySelectorAll('.modal-window:not(.modal-window_inited)')).forEach((elem) => new ModalWindow(elem));
	}
}

document.addEventListener('DOMContentLoaded', ModalWindow.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.ModalWindow = ModalWindow;

