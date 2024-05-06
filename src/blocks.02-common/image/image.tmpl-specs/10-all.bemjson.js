module.exports = [
    {block: 'image', mods: {size: '200x200'}},
    {block: 'image', mods: {size: '200x200'}, cls: 'text-center', content: [
        {block: 'img', mods: {lazy: true}, src: 'http://placehold.it/100x100'},
    ]},
    {block: 'image', mods: {size: '200x200'}, content: [
        {block: 'img', mods: {lazy: true}, src: 'http://placehold.it/100x100'},
    ]},
    {block: 'image', mods: {size: '200x200', align: 'middle'}, content: [
        {block: 'img', mods: {lazy: true}, src: 'http://placehold.it/100x100'},
    ]},
    {block: 'image', mods: {size: '200x200', align: 'top'}, content: [
        {block: 'img', mods: {lazy: true}, src: 'http://placehold.it/100x100'},
    ]},
];
