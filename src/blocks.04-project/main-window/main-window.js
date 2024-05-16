class MainWindow {
	constructor(elem) {
		this.block = elem;
		this.block.MainWindow = this;
    this.themeDescription = $('.main-window__theme-description');

		this.init();
	}

	init = () => {
    this.textPrinting();
		this.block.classList.add('main-window_inited');
	};

  textPrinting = () => {
    let text = this.themeDescription[0].textContent,
      p = 0;
    this.themeDescription[0].textContent = '';
    const printSmbl = () =>  {
      let timeout = Math.round(Math.random() * 150);
      this.themeDescription.html(this.themeDescription.html()+text[p]);
      p++;
      if (p < text.length) {
        setTimeout(printSmbl, timeout);
      }
    }
    setTimeout(printSmbl, 100);
  }

	static init() {
		return Array.from(document.querySelectorAll('.main-window:not(.main-window_inited)')).forEach((elem) => new MainWindow(elem));
	}
}

document.addEventListener('DOMContentLoaded', MainWindow.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.MainWindow = MainWindow;

