module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./../blocks.01-base/header/header.tmpl-specs/base.bemjson'),
    {block: 'main', content: [
        {elem: 'section', content: 'Слайдер'},
        {elem: 'section', content: [
          'забег, ', 'дайджест'
          ]},
        {elem: 'section', content: 'все события'},
      ]},
    require('./../blocks.01-base/footer/footer.tmpl-specs/base.bemjson'),
    ],
};
