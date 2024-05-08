module.exports = ({icon, title}) => [
	{block: 'application', content: [
			{elem: 'icon', content: [
					// {block: 'fi', mods: {icon: icon}},
					{block: 'img', src: './images/main-window/' + icon + '.svg'}
				]},
			{elem: 'title', content: title}
		]}
];