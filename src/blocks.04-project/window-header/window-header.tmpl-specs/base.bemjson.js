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
          {elem: 'date', content: 'We applied 567 whinkers 5 May <span class="small"> 2024</span>'},
          {elem: 'time', content: '19:33 <span class="small">AM</span>'},
        ]},
    ]}
];