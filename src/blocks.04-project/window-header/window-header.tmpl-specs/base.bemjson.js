module.exports = [
  {block: 'window-header', content: [
      {elem: 'nav', content: [
          {block: 'a', attrs: {'data-modal': '#MODAL_MUSTACHE'}, content: [
              {block: 'fi', mods: {icon: 'mustache'}},
            ]},
          {block: 'a', cls: 'fw-bold', attrs: {href: ''}, content: 'mustache.com'},
          {elem: 'dropdown', cls: 'dropdown', content: [
              {block: 'a', cls: 'dropdown-toggle', attrs: {'data-bs-toggle': 'dropdown', 'data-bs-offset': '0, 5px'}, content: 'File'},
              {cls: 'dropdown-menu', content: [
                  {block: 'window-header', elem: 'input', tag: 'input', attrs: {id: 'inputFile', type: 'file'}},
                  {block: 'a', tag: 'label', mods: {white: true}, attrs: {href: '', for: 'inputFile'}, content: [
                      {tag: 'span', content: 'Open File'},
                      {block: 'img', src: './images/main-window/file.png'}
                    ]},
                ]},
            ]},
          {elem: 'dropdown', cls: 'dropdown', content: [
              {block: 'a', cls: 'dropdown-toggle', attrs: {'data-bs-toggle': 'dropdown', 'data-bs-offset': '0, 5px'}, content: 'Help'},
              {cls: 'dropdown-menu', content: [
                  {block: 'a', mods: {white: true}, attrs: {'data-modal': '#MODAL_INFO'}, content: [
                      {tag: 'span', content: 'Open info'},
                      {block: 'img', src: './images/main-window/info.png'}
                    ]},
                ]},
            ]},
        ]},
      {elem: 'info', content: [
          {elem: 'date', content: 'We applied <span class="fw-bold"> &nbsp;567&nbsp;</span> whinkers 5 May <span class="small">&nbsp;2024</span>'},
          {elem: 'time', content: '19:33 <span class="small">AM</span>'},
        ]},
    ]}
];