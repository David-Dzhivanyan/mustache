module.exports = ({id, content, title = ' ', cls = ''}) => [
	{block: 'modal-window', attrs: {id}, content: [
			{elem: 'header', content: [
					{elem: 'title', cls: title === ' ' ? 'opacity-0' : '', content: title},
					{block: 'img', lazy: true, src: './images/modal-window/close.png', attrs: {'data-close': true}}
				]},
			{elem: 'content', cls, content: content}
		]}
];