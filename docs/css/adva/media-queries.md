# Media Queries

CSS uses media queries to adapt a website’s content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.\

```text
@media only screen and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```

Range can also be included - \(min-width: 320px\) and \(max-width: 480px\) come after 'only screen and' and replace the original max width. This allows the CSS to include the rule set for devices and screens in this range.

Instead of width you can use DPI \(Dots per inch\)

```text
@media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
}
```

