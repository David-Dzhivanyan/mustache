const imgData = [
  {icon: 'tv', title: '<span>Television</span>', format: '.png'},
  {icon: 'mustache_white', title: '<span>Mustache</span><br><span>Info</span>'},
  {icon: 'twitter', title: '<span>Twitter</span>'},
  {icon: 'tg', title: '<span>Telegram</span>'},
  {icon: 'dex', title: '<span>Dex</span><br><span>Tools</span>'},
  {icon: 'eagle', title: '<span>Dex</span>'},
]

module.exports = [
  {block: 'main-window', content: [
      require('../../window-header/window-header.tmpl-specs/base.bemjson'),
      {elem: 'inner', content: imgData.map(({icon, title, format}) => [
          require('../../application/application.tmpl-specs/base.bemjson')({icon, title, format}),
        ])},
      {elem: 'theme-button', content: [
          {block: 'img', src: './images/main-window/theme.png'}
        ]}
    ]}
];