const fantasticon = require('fantasticon');

/**
 * Сборка иконок
 */
function iconBuild() {
	fantasticon.generateFonts({
		inputDir: 'src/blocks.01-base/fi/svg',
		outputDir: 'src/blocks.01-base/fi/font',
		prefix: 'fi',
		name: 'fi',
		fontTypes: ['woff2'],
		assetTypes: ['css', 'scss', 'html'],
		templates: {
			css: 'src/blocks.01-base/fi/templates/css.hbs',
			html: 'src/blocks.01-base/fi/templates/html.hbs',
			scss: 'src/blocks.01-base/fi/templates/scss.hbs',
		},
	}).then();
}

module.exports = iconBuild;
