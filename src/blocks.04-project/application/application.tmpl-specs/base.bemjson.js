module.exports = ({icon, title, format = '.svg', modal = ''}) => [
	{block: 'application', attrs: modal ? {'data-modal': modal} : {}, content: [
			{elem: 'icon', content: [
					{block: 'img', src: './images/main-window/' + icon + format}
				]},
			{elem: 'title', content: title}
		]}
];