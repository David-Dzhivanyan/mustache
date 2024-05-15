module.exports = ({icon, title, format = '.svg', modal = ''}) => [
	{block: 'application', tag: 'a', attrs: modal ? {'data-modal': modal} : {}, content: [
			{elem: 'icon', content: [
					{block: 'img', src: './images/application/' + icon + format}
				]},
			{elem: 'title', content: title}
		]}
];