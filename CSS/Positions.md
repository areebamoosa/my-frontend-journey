# CSS Positions

## Static(Default), Absolute, Relative, Fixed, Sticky

In CSS, positioning is all about how elements are placed on the page. By default, everything sits in the normal flow (top-to-bottom, left-to-right). But with different position values, you can control exactly where elements appear and how they behave when the page scrolls or when other elements move.

By default, every HTML element in CSS has static position.

This is the default position that the browser gives to every element unless you change it using CSS.

Position: static means:
The element stays in the normal document flow (top to bottom, left to right).

It cannot be moved using top, left, right, or bottom values.

It's just placed where it naturally belongs in the layout.


The five main position values are:

- Static (default)
- Relative
- Absolute
- Fixed
- Sticky

## HTML Structure

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Position</title>
  </head>
  <body>
    <div class="container">
      <div class="box" id="box1">1</div>
      <div class="box" id="box2">2</div>
      <div class="box" id="box3">3</div>
      <div class="box" id="box4">4</div>
    </div>
  </body>
</html>

## Relative ```css #box1 { /* relative to its normal position & will leave a gap
at its normal position */ /* Position : Relative */ position: relative; top:
134px; left: 30px; }
````

## Absolute

```css
#box3 {
  /* Position : Absolute */
  /* relative to the position of its parent */
  /* ye apni original position ki jaga nhi chodta like no space */
  position: absolute;
  top: 34px;
  left: 140px;
}
```

## Fixed

```css
#box4 {
  /* Position : Fixed */
  /* The container will be fixed at the side no matter how much you scroll */

  position: fixed;
  right: 4px;
}
```

## Sticky

```css
#box2 {
  /* Position : Sticky */
  position: sticky;
  top: 3px;
}
```
