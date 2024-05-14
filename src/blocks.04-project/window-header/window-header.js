
class WindowHeader {
	constructor(elem) {
		this.block = elem;
		this.block.WindowHeader = this;
		this.input = this.block.querySelector('.window-header__input')
		this.canvas = document.querySelector('.television__canvas')
		this.canvasWrapper = document.querySelector('.television__tv-wrapper');

		this.fileUpload();
		this.time()
		this.init();
	}

	init = () => {
		this.block.classList.add('window-header_inited');
	};

	fileUpload = () => {
		this.input.addEventListener('change', () => {
			let file = this.input.files[0];
			let reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => {
				let img = new Image()

				img.src = reader.result;
				img.onload = () => {

					document.getElementById('MODAL_TELEVISION').style.display = 'flex';
					document.dispatchEvent(new CustomEvent('open_MODAL_TELEVISION', {
						detail: {img},
						bubbles: true
					}));
				}
			}
		});
	}

	time = () => {
		let time = setInterval(() => {
			let date = new Date();
			this.block.querySelector('.window-header__time').innerHTML = (date.getHours() + ":" + date.getMinutes()) + ' <span class="small">AM</span>'
			this.block.querySelector('.window-header__date').innerHTML = `We applied <span class="fw-bold"> &nbsp;567&nbsp;</span> whinkers ${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })} <span class="small">&nbsp;${date.getFullYear()}</span>`;
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

