# Emmet

Emmet is a shorthand toolkit that helps in writing HTML and CSS code super fast by using short abbreviations that auto-expand into full code.

---

### Example — Instead of writing this manually:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

We can use this Emmet abbreviation in code editors like VS Code:

```html
ul>li*3
```

Creating multiple elements using Emmet

Example abbreviation:

```html
span#myClass*4
```

This prints 4 similar elements:

```html
<span id="myClass"></span>
<span id="myClass"></span>
<span id="myClass"></span>
<span id="myClass"></span>
```

Some main Emmet abbreviations

| Abbreviation   | Expands To                                               |
| -------------- | -------------------------------------------------------- |
| p              | `<p></p>`                                                |
| h1{Welcome}    | `<h1>Welcome</h1>`                                       |
| div.container  | `<div class="container"></div>`                          |
| ul>li\*5       | `<ul><li></li><li></li><li></li><li></li><li></li></ul>` |
| .box           | `<div class="box"></div>`                                |
| #main          | `<div id="main"></div>`                                  |
| a:link         | `<a href=""></a>`                                        |
| input:checkbox | `<input type="checkbox" />`                              |

---

## Abbreviations in HTML

```html
The <abbr title="World Health Organization">WHO</abbr> is a global health
agency.
```

By placing the cursor on the abbreviation, users can see the full form.
