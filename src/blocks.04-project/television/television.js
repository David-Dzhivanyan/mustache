class Television {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;

		this.init();
	}

	init = () => {
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

