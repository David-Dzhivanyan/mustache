import {BH} from '@intervolga/bh-ext/dist/bh.min.js';
const bh = new BH();
const getBH = (cb) => {
    window.initMatches && window.initMatches.forEach((func) => func(bh));
    window.initMatches = false;
    cb(bh);
};
bh.setOptions({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json',
    xhtml: false,
});
window.bh = bh;
window.getBH = getBH;
export {
    bh,
    getBH,
};
