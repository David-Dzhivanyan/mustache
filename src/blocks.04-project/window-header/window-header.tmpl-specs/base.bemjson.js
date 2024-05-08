module.exports = [
  {block: 'window-header', content: [
      {elem: 'nav', content: [
          {block: 'a', content: [
              {block: 'fi', mods: {icon: 'mustache'}},
            ]},
          {block: 'a', attrs: {href: ''}, content: 'mustache.com'},
          {block: 'a', content: 'File'},
          {elem: 'dropdown', cls: 'dropdown', content: [
              {block: 'a', cls: 'dropdown-toggle', attrs: {'data-bs-toggle': 'dropdown', 'data-bs-offset': '0, 5px'}, content: 'Help'},
              {cls: 'dropdown-menu', content: [
                  {block: 'a', mods: {white: true}, content: 'Open info'}
                ]},
            ]},
        ]},
      {elem: 'info', content: [
          {elem: 'date', content: 'We applied 567 whinkers 5 May <span class="small"> 2024</span>'},
          {elem: 'time', content: '19:33 <span class="small">AM</span>'},
        ]},
    ]}
];