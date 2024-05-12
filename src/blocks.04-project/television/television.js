import $ from 'jquery';
import slider from 'ion-rangeslider';
class Television {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;
		this.rangeSlider = this.block.querySelector('.television__input');

		this.init();
	}

	init = () => {
		$('.television__input').ionRangeSlider({
			skin: 'round',
			hide_min_max: true,
			hide_from_to: true,
			min: 10,
			max: 100,
			from: 550
		});
		this.block.classList.add('television_inited');
	};

	static init() {
		return Array.from(document.querySelectorAll('.television:not(.television_inited)')).forEach((elem) => new Television(elem));
	}
}

document.addEventListener('DOMContentLoaded', Television.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Television = Television;

