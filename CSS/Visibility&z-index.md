# Visibility & Z-Index

```css
.box {
  width: 270px;
  height: 270px;
  border: 2px solid black;
}
#box1 {
  /* Visibility visible is by default property */
  /* visibility: visible; */
  background-color: green;
}
#box2 {
  /* visibility hidden will reserve the place but hide the element */
  /* visibility: hidden; */
  background-color: pink;
}
#box3 {
  /* Display none will not reserve the place and also hide the element*/
  /* display: none; */
  background-color: rgb(31, 31, 83);
  /* z-index will work only for positions : relative,absolute,fixed or sticky */
  /* z-index means ek shape k uper dosry shape depending on which has bigger z-index */
  position: relative;
  top: 49px;
  z-index: -35;
}
#box4 {
  background-color: rgb(246, 246, 25);
  position: relative;
  top: 14px;
  z-index: -165;
}
```
