# Size Units

```css
.container {
  font-size: 10px;

  /* viewport height and viewport width is for container taking full height and width of the page without us setting it manually */

  /* height: 100vh; */
  /* width: 100vw; */

  /* Unit	What it represents
        vh 1% of the viewport height
        vw 1% of the viewport width
        100vh Full height of the viewport
        100vw Full width of the viewportm*/
}

#first {
  font-size: 3em;
  /* the size of this item will be n times the size of parent container : 3 * 10 = 30 */

  padding: 3em;
  /* padding will be n times the font size mentioned above */
  /* in this case it will be 3 * 30  = 90px */
}
#second {
  font-size: 3rem;
  padding: 3rem;
  /* here the font size will be multiplied by html font size */
  /* 25 * 3 = 75px */
}
```
