# Box Shadow & Text Shadow

```css
.container {
  display: flex;
}
.card {
  padding: 23px 20px;
  border: 2px solid rgb(102, 30, 30);
  margin: 20px 15px;
  background-color: rgb(108, 118, 128);

  /* For shadow : offset-x offset-y color*/
  box-shadow: 10px 12px black;

  /* For shiny shadow : offset-x offset-y blurRadius color */
  box-shadow: 20px 15px 16px black;

  /* Spread Radius: offset-x offset-y blurRadius spreadRadius  color  */
  box-shadow: 20px 15px 16px 17px black;

  box-shadow: 12px 16px 17px 20px rgba(71, 172, 172, 0.5);

  /* For shadow inside box*/
  box-shadow: inset 13px 14px rgb(221, 94, 115);

  /* For multiple colors of shadows */
  box-shadow: 12px 11px red, 15px 12px yellow;
}
.card h2 {
  /* text-shadow: 3px 2px yellow; */
  text-shadow: 3px 2px 4px rgb(57, 50, 135);
}
```
