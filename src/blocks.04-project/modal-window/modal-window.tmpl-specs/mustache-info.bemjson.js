module.exports = [
	require('./func.bemjson')({id: 'MODAL_MUSTACHE-INFO', content: [
			{cls: 'w-75 m-auto my-20', content: [
					{cls: 'mb-20 text-center', content: '<span class="fw-bold">Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'},
					{cls: 'text-center py-20', content: [
							{block: 'img', lazy: true, src: './images/modal-window/mustache_3D.png'},
						]},
					{cls: 'my-20 text-center', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span class="text-uppercase">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</span>'},
				]},
		], title: [
			{block: 'img', lazy: true, src: './images/main-window/mustache_white.svg'},
			{content: 'Mustache Info'}
		]}),
];