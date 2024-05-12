const mustaches = [
	'mustache-1',
	'mustache-2',
	'mustache-3',
	'mustache-4',
];

module.exports = [
	{block: 'television', content: [
			{elem: 'tv-wrapper', content: [
					{block: 'img', lazy: true, src: './images/television/television.png'}
				]},
			{elem: 'constructor', content: [
					{elem: 'frame'},
					{elem: 'range', content: [
							{content: 'mustache size:'},
							{elem: 'input', tag: 'input', attrs: {type: 'range'}}
						]},
					{elem: 'type-mustache', content: [
							{cls: 'mb-4', content: 'type of mustache:'},
							{elem: 'list', content: mustaches.map((mustache) => [
									{block: 'img', lazy: true, src: './images/television/' + mustache + '.svg'}
								])}
						]},
					{block: 'btn', cls: 'btn-outline', content: 'Download Image'}
				]}
		]}
];