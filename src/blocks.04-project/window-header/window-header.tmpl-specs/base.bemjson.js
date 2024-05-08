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

// {block: 'event-dropdown', cls: 'dropdown', content: [
//   {elem: 'title', content: title},
//   {elem: 'toggle', tag: 'button', cls: 'dropdown-toggle', attrs: {'data-bs-toggle': 'dropdown', 'data-bs-offset': '0, 0'}, content: [
//       {cls: 'd-flex align-items-center', content: [
//           {block: 'fi', mods: {icon}},
//           {cls: 'fw-bolder fs-20 fs-md-30', content: categoryTitle},
//         ]},
//     ]},
//   {elem: 'menu', cls: 'dropdown-menu', content: list.map(({ title, icon }) => [
//       {elem: 'link', tag: 'button', content: [
//           {cls: 'd-flex align-items-center', content: [
//               {block: 'fi', mods: {icon}},
//               {cls: 'fw-bolder fs-20 fs-md-30', content: title},
//             ]},
//         ]},
//     ])},
// ]}