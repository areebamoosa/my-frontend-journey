# CSS Selectors

`#` is for id & `.` is for class

```css
/* ID Selector*/
#redElement {
  color: red;
}

/* Element Selector */
p {
  border: 2px solid red;
}

/* Class Selector */
.green {
  color: yellow;
}
.bgblue {
  background-color: blue;
}

/* Grouping Selectors */
footer,
span {
  background-color: pink;
}
```


## More CSS Selectors

```css
div p {
  color: yellow;
  background-color: green;
}

/* This means, All <p> tags inside any <div> will be yellow text on green background */
```

```css
div li p {
  color: red;
  background-color: blue;
}
/* This means, <p> inside <li> which is inside <div> will have red text and blue background */
```

```css
div > p {
  color: red;
  background-color: blue;
}
/* This means, Only <p> tags that are directly inside a <div> (not nested deeper) will be affected */
```

```css
div + p {
  color: red;
  background-color: blue;
}

/* This means, if a <p> tag comes immediately after a <div> (as a next sibling), it will have red text and blue background */
```
