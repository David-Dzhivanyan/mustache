module.exports = [
  {block: 'window-header', content: [
      {elem: 'nav', content: [
          {block: 'a', content: [
              {block: 'fi', mods: {icon: 'mustache'}},
            ]},
          {block: 'a', content: 'mustache.com'},
          {block: 'a', content: 'File'},
          {block: 'a', content: 'Help'},
        ]},
      {elem: 'info', content: [
          {tag: 'span', content: 'We applied 567 whinkers 5 May 2024'},
          {tag: 'span', content: '19:33 am'},
        ]},
    ]}
];