module.exports = {
    block: 'page',
    title: 'Пустая',
    content: [
      require('./../blocks.01-base/header/header.tmpl-specs/base.bemjson'),
      {cls: 'container', content: [
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
            ]},
      require('./../blocks.01-base/footer/footer.tmpl-specs/base.bemjson'),
    ],
};
