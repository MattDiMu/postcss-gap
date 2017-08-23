# PostCSS Gap [![Build Status][ci-img]][ci]

[PostCSS] plugin to create fallbacks for the css properties `row-gap`, `column-gap` and `gap`..

See the current [css spec](https://drafts.csswg.org/css-align-3/#gap-legacy) for further details.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/MattDiMu/postcss-gap.svg
[ci]:      https://travis-ci.org/MattDiMu/postcss-gap

```css
.foo {
    gap: 3vmin 2vmax;
    row-gap: 1em;
}

[column-gap] {
    column-gap: initial;
}

```

```css
.foo {
    grid-gap: 3vmin 2vmax;
    grid-row-gap: 1em;
}

[column-gap] {
    grid-column-gap: initial;
}
```

## Usage

```js
/* default usage, with no options (method = replace) */
postcss([ require('postcss-gap') ])
```

```js
/* add the fallbacks right before, but keep the original css props (row-gap, column-gap and gap)*/
postcss([ require('postcss-gap') ])({ method: 'duplicate' })
```
See [PostCSS] docs for examples for your environment.
