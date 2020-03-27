---
id: html-fund
title: Fundamentals of HTML
---

## The basics of Html

The basics of Html skimmed down into note form

## Basic Template

```text
<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>
```

HTML is organized as a collection of family tree relationships. It can be split up using div tags.

## Headings

In HTML, there are six different headings, or heading elements. These start at  as the biggest, and the smallest heading is .

## Divs

One of the most popular elements in HTML is the `<div>` element. It is short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together. You can also give div's ids and classes in order to link them with a style sheet for css or js file.

```text
<body>
  <div>
    <h1>Why use divs?</h1>
    <p>Great for grouping elements!</p>
  </div>
</body>
```

## Displaying Text

If you want to display text you can use either the paragraph or Span: Paragraphs `<p>HELLO WORLD</p>` contain a block of plain text. `<span></span>` contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content.

## Styling text

You can use the `<em></em>` to change text to italic.  chnages text to bold on a page.

Example

```text
<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).</p>
```

## Line Breaks

The spacing between code in an HTML file doesn’t affect the positioning of elements in the browser. To modify the spacing in the browser use the line break element. `<br><br>`

## Unordered Lists

An unordered list can display content in an easy to read list. `<ul></ul>` This syntax creates an ordered list. Inside it use `<li></li>` tags to enter data.

An unordered list is display with bullet points

Examples

```text
<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>
```

## Ordered Lists

Ordered lists are like unordered lists, except that each list item is numbered instead of bullet points. Use the above example but only change `<ul></ul>` to `<ol></ol>`

## images

The `<img>` tag allows you to add an image to a web page. Most elements require both opening and closing tags, but the img tag is a self-closing tag. Note that the end of the img tag has a forward slash /.

Example `<img src="image-location.jpg" />`

The tag has a `src=""`. The src attribute must be set to the image’s source, or the location of the image. This can either be a URL or a local file.

## Image Alts

This helps when assistive technologies such as screen readers come across image tags.

The alt attribute means alternative text. The attribute can be added to the image tag just like the src attribute. The value of alt should be a description of the image in order to give a clear understanding to the viewer who mght be using a screen reader.

`<img src="#" alt="A field of yellow sunflowers" />`

The alt attribute also helps SEO, this because search engines cannot see the images on websites as they trawl the internet. Having descriptive alt attributes can improve the ranking of your site in the index.

## Videos

Like images, videos can also be hosted on a webpage. The difference is that the video element needs an opening and closing tag. `<video></video>`

Example

```text
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```

After the src attribute, the width and height attributes are used to set the size of the video displayed in the browser. The controls attribute instructs the browser to include basic video controls such as: pause, play and skip.

The text Video not supported, between the opening and closing video tags will only be displayed if the browser is unable to load the video.

