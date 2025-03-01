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
		this.colorBtn = [this.block.querySelector('.television__color-white'), this.block.querySelector('.television__color-black')];

		this.initSlider();
		this.choosingMustache(this.mustacheList.querySelector('.img'));
		document.addEventListener('open_MODAL_TELEVISION', (event) => this.initCanvas(event));
		this.initCanvas();

		this.mustacheList.addEventListener('click', (event) => this.choosingMustache(event.target));
		this.inputWrapper.addEventListener('change', this.mustacheSize);
		this.downloadBtn.addEventListener('click', this.downloadImage);

		this.changeColor();
		this.init();
	}

	init = () => {
		this.block.classList.add('television_inited');
	};

	changeColor = () => {
		this.colorBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				this.colorBtn.forEach((btn) => btn.classList.toggle('active'));

				let imgs = this.block.querySelector('.television__constructor').querySelectorAll('.img');
				imgs.forEach((img, index) => {
					if (index > imgs.length - 3) return;

					let imgSrc = img.src;
					if (!imgSrc.includes('_dark')) {
						imgSrc = imgSrc.replace(/(\.\w+)$/, '_dark$1');
					} else {
						imgSrc = imgSrc.replace('_dark', '');
					}
					img.src = imgSrc;
				});
			})
		})
	}

	downloadImage = () => {
		const file = document.querySelector('.window-header__input')

		if (file.files.length > 0) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = this.canvasImage.width;
			canvas.height = this.canvasImage.height;

			context.drawImage(this.canvasImage, 0, 0, canvas.width, canvas.height);

			const attitudeWidth = this.canvasImage.width / this.canvas.width;

			const attitudeHeight = this.canvasImage.height / this.canvas.height;

			const mustacheWidth = this.imageSize.width * attitudeWidth;
			const mustacheHeight = this.imageSize.height * attitudeHeight;

			context.drawImage(this.imageInFrame, this.mustacheX * attitudeWidth - mustacheWidth / 2, this.mustacheY * attitudeHeight - mustacheHeight / 2, mustacheWidth, mustacheHeight);

			const dataUrl = canvas.toDataURL('image/png', 1);
      fetch(dataUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'mustache.png';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));
		}
	}

	choosingMustache = (target) => {
		if(target.classList.contains('img')) {

			this.mustacheList.querySelectorAll('.img').forEach((img) => img.classList.remove('current'));
			target.classList.add('current');

			this.mustachePlace.innerHTML = `<img class="img fade" src="${target.src}">`;
			this.imageInFrame = this.mustachePlace.querySelector('.img');
			setTimeout(() => {
				this.mustachePlace.querySelector('.img').classList.add('show');
			}, 100)

			this.imageSize = {
				width: this.imageInFrame.clientWidth,
				height: this.imageInFrame.clientHeight,
			}

			this.ionRangeSlider.update({
				from: 100,
			});

			if (this.context) {
				this.canvasCenterX = (this.canvas.width / 2) - this.imageSize.width / 2;
				this.canvasCenterY = (this.canvas.height / 2) - this.imageSize.height / 2;

				this.drawCanvas(this.context, this.canvasImage, this.mustacheX, this.mustacheY);
			}
		}
	}

	mustacheSize = () => {
		if (this.imageInFrame) {
			const current = this.mustacheList.querySelector('.current');
			const width = current.clientWidth;
			const height = current.clientHeight;

			this.imageInFrame.style.width = (width * this.ionRangeSlider.result.from / 100) + 'px';
			this.imageInFrame.style.height = (height *  this.ionRangeSlider.result.from / 100) + 'px';

			this.imageSize = {
				width: this.imageInFrame.clientWidth,
				height: this.imageInFrame.clientHeight,
			}

			if (this.context) {
				this.drawCanvas(this.context, this.canvasImage, this.mustacheX, this.mustacheY);
			}
		}
	}

	initCanvas = (event) => {
		if (event) {
			if (event.detail.img) {
				this.context = this.canvas.getContext('2d');
				this.canvasImage = event.detail.img;

				if (this.canvasImage.height <= this.canvasImage.width) {
					this.canvas.width = (this.canvasWrapper.clientWidth * 0.85); //width канваса в television.css
					this.canvas.height = (this.canvasWrapper.clientWidth * 0.85) * this.canvasImage.height / this.canvasImage.width;
					if(this.canvas.height > this.canvasWrapper.clientHeight * 0.84) {
						this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * this.canvasImage.width / this.canvasImage.height;
						this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
					}
				} else {
					this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * this.canvasImage.width / this.canvasImage.height;
					this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
					if(this.canvas.width > this.canvasWrapper.clientWidth  * 0.85) {
						this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * this.canvasImage.width / this.canvasImage.height;
						this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
					}
				}

				if (this.imageInFrame) {
					this.imageSize = {
						width: this.imageInFrame.clientWidth,
						height: this.imageInFrame.clientHeight,
					};

					this.canvasCenterX = (this.canvas.width / 2);
					this.canvasCenterY = (this.canvas.height / 2);

					this.drawCanvas(this.context, this.canvasImage, this.canvasCenterX, this.canvasCenterY);

					this.canvas.removeEventListener('mousedown', this.canvasMouseHandleMousemove);
					this.canvas.addEventListener('mousedown', this.canvasMouseHandleMousemove);
					this.canvas.addEventListener('mouseup', () => {
						this.canvas.removeEventListener('mousemove', this.mustacheMove);
					})

					this.canvas.removeEventListener('touchstart', this.canvasMouseHandleMousemove);
					this.canvas.addEventListener('touchstart', this.canvasMouseHandleTouchmove);
					this.canvas.addEventListener('touchend', () => {
						this.canvas.removeEventListener('touchmove', this.mustacheMove);
					})
				}
			}
		}
	}

	canvasMouseHandleMousemove = (event) => {
		this.canvasMouse(event, 'mousemove')
	}
	canvasMouseHandleTouchmove = (event) => {
		this.canvasMouse(event, 'touchmove')
	}
	mustacheMove = (event) => {
		const rect = this.canvas.getBoundingClientRect();

		let mouseX = event.clientX - rect.left;
		let mouseY = event.clientY - rect.top;

		if (event.type === 'touchmove') {
			mouseX = event.touches[0].clientX - rect.left;
			mouseY = event.touches[0].clientY - rect.top;
		}

		this.drawCanvas(this.context, this.canvasImage, mouseX, mouseY);
	}

	canvasMouse = (event, eventMove) => {
		event.preventDefault();
		const rect = this.canvas.getBoundingClientRect();

		this.imageSize = {
			width: this.imageInFrame.clientWidth,
			height: this.imageInFrame.clientHeight,
		}

		let mouseX = event.clientX - rect.left;
		let mouseY = event.clientY - rect.top;

		if (event.type === 'touchstart') {
			mouseX = event.touches[0].clientX - rect.left;
			mouseY = event.touches[0].clientY - rect.top;
		}

		let x = this.mustacheX;
		let y = this.mustacheY;

		if (Math.abs(Math.max(mouseX, x) - Math.min(mouseX, x)) < this.imageSize.width && Math.abs(Math.max(mouseY, y) - Math.min(mouseY, y)) < this.imageSize.height) {
			this.drawCanvas(this.context, this.canvasImage, mouseX, mouseY);

			this.canvas.addEventListener(eventMove, this.mustacheMove);
		}
	}

	drawCanvas = (context, bgImage, X, Y) => {
		if (bgImage.height <= bgImage.width) {
			this.canvas.width = (this.canvasWrapper.clientWidth * 0.85); //width канваса в television.css
			this.canvas.height = (this.canvasWrapper.clientWidth * 0.85) * bgImage.height / bgImage.width;
			if(this.canvas.height > this.canvasWrapper.clientHeight * 0.84) {
				this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * bgImage.width / bgImage.height;
				this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
			}
		} else {
			this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * bgImage.width / bgImage.height;
			this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
			if(this.canvas.width > this.canvasWrapper.clientWidth  * 0.85) {
				this.canvas.width = (this.canvasWrapper.clientHeight * 0.84) * bgImage.width / bgImage.height;
				this.canvas.height = (this.canvasWrapper.clientHeight * 0.84); //height канваса в television.css
			}
		}

		context.drawImage(bgImage, 0, 0, this.canvas.width, this.canvas.height);

		this.mustacheX = X;
		this.mustacheY = Y;

		context.drawImage(this.imageInFrame, X - this.imageSize.width / 2, Y - this.imageSize.height / 2, this.imageSize.width, this.imageSize.height);
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

