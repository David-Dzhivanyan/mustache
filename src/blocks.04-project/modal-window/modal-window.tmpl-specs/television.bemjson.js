module.exports = [
	require('./func.bemjson')({id: 'MODAL_TELEVISION', content: require('../../television/television.tmpl-specs/base.bemjson'), title: [
			{block: 'img', lazy: true, src: './images/application/tv.png'},
			{content: 'Television'}
		]}),
];