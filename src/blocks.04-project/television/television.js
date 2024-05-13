import $ from 'jquery';
import slider from 'ion-rangeslider';
class Television {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;
		this.canvas = this.block.querySelector('.television__canvas');
		this.canvasWrapper = this.block.querySelector('.television__tv-wrapper');

		this.initCanvas();
		this.initSlider();
		this.init();
	}

	init = () => {

		this.block.classList.add('television_inited');
	};

	initCanvas = () => {
		const context = this.canvas.getContext('2d');
		document.addEventListener('open_MODAL_TELEVISION', (event) => {
			if (event.detail.img) {
				const image = event.detail.img;
				if (image.height <= image.width) {
					this.canvas.width = this.canvasWrapper.clientWidth;
					this.canvas.height = this.canvasWrapper.clientWidth * image.height / image.width;
				} else {
					this.canvas.width = this.canvasWrapper.clientHeight * image.width / image.height;
					this.canvas.height = this.canvasWrapper.clientHeight;
				}

				// this.canvas.width = this.canvasWrapper.clientWidth;
				// this.canvas.height = this.canvasWrapper.clientHeight;
				context.drawImage(event.detail.img, 0, 0, this.canvas.width, this.canvas.height);
			}

		})
	}

	initSlider = () => {
		$('.television__input').ionRangeSlider({
			skin: 'round',
			hide_min_max: true,
			hide_from_to: true,
			min: 10,
			max: 100,
			from: 550
		});
	}
	static init() {
		return Array.from(document.querySelectorAll('.television:not(.television_inited)')).forEach((elem) => new Television(elem));
	}
}

document.addEventListener('DOMContentLoaded', Television.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Television = Television;

