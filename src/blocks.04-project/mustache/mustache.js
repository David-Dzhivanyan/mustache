class Mustache {
	constructor(elem) {
		this.block = elem;
		this.block.Television = this;

		this.init();
	}

	init = () => {
		this.block.classList.add('mustache_inited');
	};

	static init() {
		return Array.from(document.querySelectorAll('.mustache:not(.mustache_inited)')).forEach((elem) => new Mustache(elem));
	}
}

document.addEventListener('DOMContentLoaded', Mustache.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Mustache = Mustache;

