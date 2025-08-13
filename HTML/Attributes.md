# HTML ATTRIBUTES

HTML attributes provide additional information about an element. They are always included in the opening tag.

---

## 1. id – Assigns a unique identifier to an element

```html
<p id="intro">Welcome to my website.</p>
```

## 2. class – Groups elements under the same class for styling or scripting

```html
<div class="box">Content</div>
```

## 3. style – Adds inline CSS to an element

```html
<p style="color: red">This is red text.</p>
```

## 4. title – Displays additional information when hovered over

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

## 5. href – Specifies a hyperlink reference (used in `<a>` tags)

```html
<a href="https://example.com">Visit Example</a>
```

## 6. src – Defines the source of an image, video, or script

```html
<img src="image.jpg" alt="Image description" />
```

## 7. alt – Provides alternative text for images

```html
<img src="logo.png" alt="Company Logo" />
```

## 8. width & height – Set the dimensions of images or elements

```html
<img src="pic.jpg" width="200" height="150" />
```

## 9. placeholder – Defines a hint inside input fields

```html
<input type="text" placeholder="Enter your name" />
```

## 10. required – Makes an input field mandatory

```html
<input type="email" required />
```

## 11. checked – Sets a checkbox or radio button as selected by default

```html
<input type="checkbox" checked />
```

## 12. type – Defines the type of an input field

```html
<input type="password" />
```

## 13. name – Assigns a name to an input for form submission

```html
<input type="text" name="username" />
```

### Examples of HTML Attributes in Action

```html
<p align="center">This is an example of HTML attributes</p>
<p align="right">This is an example of HTML attributes</p>
<p style="font-family: 'Courier New', Courier, monospace; color: blue;">
  This is an example of style
</p>
```

INTERNATIONALIZATION (i18n)
Internationalization (often abbreviated as i18n) refers to features that help make content adaptable for different languages and regions.

## 1. lang – Specifies the language of the element's content

```html
<p lang="en">Hello</p>
<p lang="fr">Bonjour</p>
<p lang="ur">ہیلو!</p>
```

### Common Language Codes:

```html
en = English fr = French ur = Urdu ar = Arabic es = Spanish
```

### Example

```html
<html lang="en-US">
  <!-- English (United States) -->
  <html lang="en-GB">
    <!-- English (United Kingdom) -->
  </html>
</html>
```

## 2. dir – Specifies the text direction

ltr = left to right (like English)

rtl = right to left (like Arabic or Urdu)

```html
<p dir="rtl">السلام علیکم</p>
```

##3. hreflang – Used in `<a>` or `<link>` tags to specify the language of the linked document

```html
<a href="about-fr.html" hreflang="fr">French Version</a>
```

## SUPER AND SUBSCRIPT

```html
<p>
  This is an <sup>example of superscript text</sup> and this is
  <sub>a example of subscript text</sub>
</p>
```

## INSERTED TEXT

```html
<ins>This is newly inserted text.</ins>
Often used with
<del>
  (deleted text):

  <p>This is <del>old</del> <ins>new</ins> content.</p></del
>
```

## MARKED TEXT

Marked text is created using the `<mark>` tag. It’s used to highlight text — like a yellow highlighter on paper — to show something is important or relevant.

```html
<p>This is a <mark>highlighted</mark> word.</p>
```

## ABBREVIATIONS

In HTML, to define a text abbreviation, you use the <abbr> tag. This helps readers understand the full form of shortened words when they hover over them — super helpful for accessibility and clarity!

```html
<abbr title="HyperText Markup Language">HTML</abbr>
<p>
  The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
</p>
```
