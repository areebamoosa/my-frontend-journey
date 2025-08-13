# HTML LANGUAGE BASICS

## HTML Boilerplate Structure Understanding
```html
<!DOCTYPE html>
```

`<!DOCTYPE html>` is a declaration that tells the browser the document is written in HTML5.


```html
<html lang="en">
```
`<html lang="en">`  starts the HTML document and specifies that the page language is English.



```html
<meta charset="UTF-8"/>
```

`<meta charset="UTF-8"/>` sets the character encoding so the page can display all letters, numbers, and symbols correctly.


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.
A meta viewport element gives the browser instructions on how to control the page's dimensions and scalling 

It basically makes the webpage responsive by adjusting it to the device's screen width.



```html
content="2; https://google.com"
```
content refreshes the page after 2 secs and moves to the link
## 1. Headings in HTML

```html
<h1>Hello!</h1>
<h2>Pakistan</h2>
<h3>NEDUET</h3>
<h4>NEDUET</h4>
<h5>NEDUET</h5>
<h6>NEDUET</h6>
```
`<h1>` to `<h6>` are heading tags, with `<h1>` being the largest and `<h6>` the smallest.

## 2. Paragraphs and Text Formatting
```html

<p>This is Areeba</p>
```
```html

<p>
  Hi I am <strong>Areeba Moosa</strong>
  <em>Starting my Front End Journey in Web Development</em>
</p>

```

`<strong>` = bold (semantic)

`<em>` = italic (semantic)

`<br>` = line break (self-closing)

## 3. Ordered List
```html
<ol>
  <li>Computer Science</li>
  <li>Software Engineering</li>
  <li>Textile Sciences</li>
</ol>
```
## 4. Unordered List
```html

<ul>
  <li>Sara</li>
  <li>Meerub</li>
  <li>Zara</li>
</ul>
```
## 5. Custom List Styles
We can even customise the ordering types : Squares, circles, numbers,letters etc

### Unordered list with square bullets:
```html

<ul type="square">
  <li>This is the first item of my unordered list</li>
  <li>This is the second item of my unordered list</li>
  <li>This is the third item of my unordered list</li>
</ul>
```
### Ordered list with letters:
```html

<ol type="a">
  <li>This is the first item of my ordered list</li>
  <li>This is the second item of my ordered list</li>
  <li>This is the third item of my ordered list</li>
</ol>
```
## 6. Centering Text
```html

<p>
  <center>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    voluptas ipsa ipsum porro.
  </center>
</p>
```
## 7. Aside Section
Content will be on side of the page
```html

<aside>
  <h1>Frontend</h1>
  <p>Backend</p>
</aside>
```
## 8. Pre Tag

The `<pre>` tag in HTML stands for "preformatted text."

It displays text exactly as written in the HTML code.
Line breaks, spaces, and tabs are preserved—unlike in normal HTML where multiple spaces are collapsed into one.

```html

<pre>
  Line 1
      Line 2 (with spaces)
          Line 3 (more indented)
</pre>
```
It preserves spaces, line breaks, and formatting exactly as in the code.

## 9. Non-Breaking Space
A non-breaking space in HTML is a special character used to prevent an automatic line break at its position.
 It stops the browser from breaking the line at that point. Basically It keeps two words together on the same line. 
```html

<p>Hello&nbsp;World</p>
```
This ensures that "Hello" and "World" stay on the same line no matter what.
Basically`&nbsp;` keeps words together on the same line.


## 10. Highlighted Text
marked text is created using the `<mark>` tag. It’s used to highlight text — like a yellow highlighter on paper — to show something is important.
```html

<p>This is a <mark>highlighted</mark> word.</p>
```


