var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('no option, replace grid-row-gap', () => {
    return run('a{ row-gap: 1em; }', 'a{ grid-row-gap: 1em; }', { });
});


it('method duplicate, keep both grid-gap', () => {
    return run('.abc { gap: 3vmin 2vmax; }', '.abc { grid-gap: 3vmin 2vmax; gap: 3vmin 2vmax; }', { method: 'duplicate' }); // eslint-disable-line
});


it('grid-column-gap test', () => {
    return run('[column-gap] { column-gap: initial; }', '[column-gap] { grid-column-gap: initial; }', {}); // eslint-disable-line
});
