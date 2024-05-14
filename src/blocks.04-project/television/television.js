import $ from 'jquery';
import slider from 'ion-rangeslider';
class Television {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;
		this.canvas = this.block.querySelector('.television__canvas');
		this.canvasWrapper = this.block.querySelector('.television__tv-wrapper');
		this.mustacheList = this.block.querySelector('.television__list');
		this.mustachePlace = this.block.querySelector('.television__frame');
		this.input = $('.television__input');
		this.inputWrapper = this.block.querySelector('.television__range');
		this.downloadBtn = this.block.querySelector('.btn-outline');

		this.initSlider();
		this.initCanvas();
		this.choosingMustache(this.mustacheList.querySelector('.img'));

		this.mustacheList.addEventListener('click', (event) => this.choosingMustache(event.target));
		this.inputWrapper.addEventListener('change', this.mustacheSize);
		this.downloadBtn.addEventListener('click', this.downloadImage)

		this.init();
	}

	init = () => {
		this.block.classList.add('television_inited');
	};

	downloadImage = () => {
		const file = document.querySelector('.window-header__input')

		console.log(file.files)
		if (file.files.length > 0) {
			const dataUrl = this.canvas.toDataURL('image/png', 1);
			const link = document.createElement('a');
			link.href = dataUrl;
			link.download = 'mustache.png';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}

	choosingMustache = (target) => {
		if(target.classList.contains('img')) {
			this.mustachePlace.innerHTML = `<img class="img" src="${target.src}">`;
			this.imageInFrame = this.mustachePlace.querySelector('.img');

			this.imageSize = {
				width: this.imageInFrame.clientWidth,
				height: this.imageInFrame.clientHeight,
			}

			this.ionRangeSlider.update({
				from: 100,
			});
		}
	}

	mustacheSize = () => {
		if (this.imageInFrame) {
			this.imageInFrame.style.width = (60 * this.ionRangeSlider.result.from / 100) + 'px';
			this.imageInFrame.style.height = (30 * this.ionRangeSlider.result.from / 100) + 'px';

			this.imageSize = {
				width: this.imageInFrame.clientWidth,
				height: this.imageInFrame.clientHeight,
			}
		}
	}

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

				context.drawImage(event.detail.img, 0, 0, this.canvas.width, this.canvas.height);

				if (this.imageInFrame) {
					let canvasWidth = (this.canvas.width / 2) - this.imageSize.width / 2;
					let canvasHeight = (this.canvas.height / 2) - this.imageSize.height / 2;
					context.drawImage(this.imageInFrame, canvasWidth, canvasHeight, this.imageSize.width, this.imageSize.height);
				}
			}

		})
	}

	initSlider = () => {
		this.input.ionRangeSlider({
			skin: 'round',
			hide_min_max: true,
			hide_from_to: true,
			min: 50,
			max: 300,
			from: 550,
			onChange: () => {
				this.input[0].dispatchEvent(new CustomEvent('change', {bubbles: true}));
			}
		});

		this.ionRangeSlider = this.input.data("ionRangeSlider");
	}
	static init() {
		return Array.from(document.querySelectorAll('.television:not(.television_inited)')).forEach((elem) => new Television(elem));
	}
}

document.addEventListener('DOMContentLoaded', Television.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Television = Television;

