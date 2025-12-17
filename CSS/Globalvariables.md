# CSS Variables & Custom Properties

```css
:root {
  --primary-color: blue;
  --danger-color: red;
  --maxw: 333px;
}
.box {
  width: 300px;
  height: 250px;
  background-color: var(--primary-color);
  border: 4px solid var(--danger-color);
  box-shadow: 3px 2px var(--box-color);
  margin: 20px 23px;
}
.container {
  display: flex;
  max-width: var(--maxw);
  margin: auto;
  background-color: var(--danger-color);
  align-items: center;
  justify-content: center;
  background-color: var(--box-color);
}
```

### What is :root?

:root is a pseudo-class that refers to the top-most element in your HTML — which is the `<html>` tag.

So basically, :root is like saying: "Let’s define global CSS variables here so we can use them anywhere in the CSS."

What are these -- lines?
These are CSS custom properties, also known as variables!

Here's your example:

```css
:root {
  --primary-color: blue;
  --danger-color: red;
  --maxw: 333px;
}
```

You just created 3 variables:

**--primary-color** Your main color theme
**--danger-color** A warning or error color
**--maxw** A max-width value

How to use them:

To use these variables in your CSS, you write:

```css
color: var(--primary-color);
width: var(--maxw);
```

**Example:**

```css
button {
  background-color: var(--primary-color);
  color: white;
  max-width: var(--maxw);
}
```

This will apply the blue background and 333px max-width to your button, using the variables you defined in :root.
