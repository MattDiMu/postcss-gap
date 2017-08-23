var postcss = require('postcss');

const props = [
    {
        legacy: 'grid-row-gap',
        current: 'row-gap'
    },
    {
        legacy: 'grid-column-gap',
        current: 'column-gap'
    },
    {
        legacy: 'grid-gap',
        current: 'gap'
    }
];

module.exports = postcss.plugin('postcss-gap', function (opts) {
    opts = opts || {};
    const method = opts.method || 'replace';

    return root => {
        props.forEach(propsObj => {
            root.walkDecls(propsObj.current, (decl) => {
                decl.cloneBefore({ prop: propsObj.legacy });
                if (method !== 'duplicate') {
                    decl.remove();
                }
            });
        });
    };
});
