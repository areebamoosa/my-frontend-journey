# CSS Transform

```css
.container {
  height: 80vh;
  background-color: burlywood;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* This box that will be transformed on hover */
.box {
  display: flex;
  background-color: rgb(134, 134, 233);
  border: 3px solid black;
  border-radius: 3px;
  height: 250px;
  width: 250px;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);

  /* Enable smooth animation during transform */
  transition: all 0.5s ease-in-out;
}
```

**transition:** CSS property used to define how changes (like hover effects) should animate.

**all :** Apply the transition to all properties that change (e.g., color, size, position, etc.). You can also write specific ones like background-color,transform, etc.

**0.5s :** Duration of the transition = 0.5 seconds

**ease-in-out :** Timing function — starts slow, gets faster in the middle, and slows down again at the end (smooth effect).

```css
/* When you hover over the box, it will move diagonally */
.box:hover {
  transform: rotate(360deg);
  /* Rotates the box fully */

  transform: skew(40deg);
  /* Skews the box diagonally */

  transform: scale(2);
  /* Doubles the size of the box */

  transform: translateX(123px);
  transform: translateY(123px);
  /* Here only oNe property will be applied - the later one, to apply both write both together as shown below: */

  transform: translate(123px, 123px);
}
```

translate() is a function that moves an element from its current position.

The values 123px, 123px specify how far the element should move horizontally (X-axis) and vertically (Y-axis).

`100% → far right`

`0% → center`

`-100% → far left`

### Opacity:

This controls how visible the element is

`1` = fully visible

`0` = invisible
