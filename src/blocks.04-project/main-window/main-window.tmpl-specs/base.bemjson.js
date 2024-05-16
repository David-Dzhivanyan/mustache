const imgData = [
  {icon: 'tv', title: '<span>Television</span>', format: '.png', modal: '#MODAL_TELEVISION'},
  {icon: 'mustache_white', title: '<span>Mustache</span><br><span>Info</span>', modal: '#MODAL_MUSTACHE-INFO'},
  {icon: 'twitter', title: '<span>Twitter</span>'},
  {icon: 'tg', title: '<span>Telegram</span>'},
  {icon: 'dex', title: '<span>Dex</span><br><span>Tools</span>'},
  {icon: 'eagle', title: '<span>Dex</span>'},
]

module.exports = [
  {block: 'main-window', content: [
      require('../../window-header/window-header.tmpl-specs/base.bemjson'),
      {elem: 'inner', content: [
          {elem: 'applications', content: imgData.map(({icon, title, format, modal}) => [
              require('../../application/application.tmpl-specs/base.bemjson')({icon, title, format, modal}),
            ])},
          require('../../modal-window/modal-window.tmpl-specs/all.bemjson'),
        ]},
      {elem: 'theme-button', content: [
          {elem: 'theme-bg'},
          {elem: 'theme-description', content: 'Hello! Change the subject here'},
          {block: 'img', src: './images/main-window/theme.png'}
        ]},
    ]},
];