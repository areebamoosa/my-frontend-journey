# Atrribute & nth Child Pseudo Selectors

```css
input {
  display: block;
}
.container {
  display: block;
  width: 225px;
  margin: auto;
}
input[type="text"] {
  padding: 23px;
  border: 2px solid blue;
  margin: 10px;
}
a[target] {
  font-size: 64px;
  color: pink;
}
/* this will change css for third child i.e 3rd li */
li:nth-child(3) {
  color: purple;
}
/* This will aply css to every odd element */
li:nth-child(odd) {
  color: pink;
}
```

```html
  <body>
    <div class="container">
      <h2><a href="https://google.com" target="_blank">Go to Google</a></h2>
      <!-- target attribute will open the page link in next tab -->
      <form action="" class="form-control">
        <input type="text" placeholder="Enter your name " />
        <input type="password" placeholder="Enter your password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <ul>
      <li class="item" id="item1">Item 1</li>
      <li class="item" id="item2">Item 2</li>
      <li class="item" id="item3">Item 3</li>
      <li class="item" id="item4">Item 4</li>
      <li class="item" id="item5">Item 5</li>
    </ul>
  </body>
</html>
```
