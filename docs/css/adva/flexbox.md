# FlexBox

## FlexBox

To designate an element as a flex container, set the element’s display property to flex or inline-flex.

justify-content align-items flex-grow flex-shrink flex-basis flex flex-wrap align-content flex-direction flex-flow\

```text
div.container {
  display: flex;
}
```

If you don't want div elements to be block-level elements, we would use display: inline. Flexbox, however, provides the inline-flex value for the display attribute, which allows us to create flex containers that are also inline elements.

## Exampe of setting up a flexbox container

```text
<div class="container">
  <p>I’m also a flex item!</p>
  <p>Me too!</p>
</div>
```

```text
.container {
  width: 200px;
  height: 200px;
  display: inline-flex;
}
```

## Justify Content \(FlexBox Positing\)

To position the items from left to right, we use a property called justify-content  flex-start — all items will be positioned in order starting, from the left of the parent container, with no extra space between or before them. flex-end — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them. center — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them. space-around — items will be positioned with equal space before and after each item, resulting in double the space between elements. space-between — items will be positioned with equal space between them, but no extra space before the first or after the last elements.

## Align Items

The align-items property makes it possible to space flex items vertically.

```text
.container {
  align-items: baseline;
}
```

In the example, the align-items property is set to baseline. This means that the baseline of the content of each item will be aligned.

There are five values we can use for the align-items property:

flex-start — all elements will be positioned at the top of the parent container.

flex-end — all elements will be positioned at the bottom of the parent container.

center — the center of all elements will be positioned halfway between the top and bottom of the parent container.

baseline — the bottom of the content of all items will be aligned with each other.

stretch — if possible, the items will stretch from top to bottom of the container \(this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch\).

## Flex-Grow \(Grows the css in porportion to the screen size\)

The flex-grow property allows us to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.

```text
<div class="container">
  <div class="side">
    <h1>I’m on the side of the flex container!</h1>
  </div>
  <div class="center">
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class=”side”>
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>
```

```text
.container {
  display: flex;
}

.side {
  width: 100px;
  flex-grow: 1;
}

.center {
  width: 100px;
  flex-grow: 2;
}
```

## Flex-Shrink

Just as the flex-grow property proportionally stretches flex items, the flex-shrink property can be used to specify which elements will shrink and in what proportions.

```text
.container {
  display: flex;
}

.side {
  width: 100px;
  flex-shrink: 1;
}

.center {
  width: 100px;
  flex-shrink: 2;
}
```

## Flex-basis

