module.exports = ({icon, title, format = '.svg'}) => [
	{block: 'application', content: [
			{elem: 'icon', content: [
					{block: 'img', src: './images/main-window/' + icon + format}
				]},
			{elem: 'title', content: title}
		]}
];