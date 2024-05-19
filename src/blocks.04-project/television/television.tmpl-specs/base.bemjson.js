const mustaches = [
	'mustache-1',
	'mustache-2',
	'mustache-3',
	'mustache-4',
	'mustache-5_dark',
	'mustache-6_dark',
];

module.exports = [
	{block: 'television', content: [
			{elem: 'tv-wrapper', content: [
					{elem: 'canvas', tag: 'canvas'},
					{block: 'image', mods: {size: '560x380'}, content: [
							{block: 'img', lazy: true, src: './images/television/television.png'}
						]},
				]},
			{elem: 'constructor', content: [
					{elem: 'frame'},
					{elem: 'range', content: [
							{content: 'mustache size:'},
							{elem: 'input', tag: 'input', attrs: {type: 'range'}}
						]},
					{elem: 'type-mustache', content: [
							{cls: 'mb-4', content: 'type of mustache:'},
							{elem: 'list', content: mustaches.map((mustache, index) => [
									{elem: 'img', content: [
											{block: 'img', lazy: true, src: index < 4 ? './images/television/' + mustache + '.svg' : './images/television/' + mustache + '.png'}
										]},
								])}
						]},
					{block: 'btn', cls: 'btn-outline', content: 'Download Image'},
					{cls: 'mb-4', content: 'change color:'},

					{elem: 'color', content: [
							{elem: 'color-white', cls: 'active'},
							{elem: 'color-black'},
						]}
				]}
		]}
];