# Pseudo Selectors

Pseudo-selectors are like special keywords you add to selectors in CSS that let you style elements based on their state or position — without adding extra classes or IDs.

## Pseudo-Classes (:)

These are used to style elements based on user interaction or their position.

#### Examples:

**:hover** When your mouse is hovering over an element
**:active** When you click the element
**:focus** When an input is focused (clicked or tabbed into)
**:first-child** Selects the first child inside a parent
**:last-child** Selects the last child
**:nth-child(2)** Selects the second child
**:visited** used to style links that the user has already clicked on (visited).

## Pseudo-Elements (::)

These let you style parts of an element, like the first letter, or add content before/after.

#### Examples:

**::before** Add content before an element
**::after** Add content after an element
**::first-letter** Styles only the first letter
**::first-line** Styles only the first line of text

```css
a:hover {
  color: rgb(20, 8, 10);
  background-color: rgb(233, 245, 95);
}
/* a hover means jab ham cursor le k jayingy read more p tw it will give shade of pink */

a:visited {
  background-color: rgb(251, 235, 60);
  /* jab ham ek link ko open kr k aur usy use kr k wapis ayeingy tab ye color dekhaygea us button p */
}

a:active {
  background-color: darkblue;
}

.btn:hover {
  color: darkgoldenrod;
  background-color: rgb(246, 246, 245);
  border: 2px solid black;
}
```
