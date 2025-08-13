# Tailwind CSS

Tailwind CSS is a **utility-first** framework that makes building modern and responsive websites easier and faster.

It helps you style your html pages, without you having to leave your html file.

Unlike Bootstrap (which has predefined components), Tailwind gives you **full control** with small reusable utility classes.

---

## 1. Margin Syntax

### Basic Margins

| Utility | Description   |
| ------- | ------------- |
| `m-0`   | No margin     |
| `m-1`   | 0.25rem (4px) |
| `m-2`   | 0.5rem (8px)  |
| `m-4`   | 1rem (16px)   |
| `m-10`  | 2.5rem (40px) |

<br>

| Abbreviation | Meaning                        |
| ------------ | ------------------------------ |
| m            | margin (all sides)             |
| mx           | margin left and right (x-axis) |
| my           | margin top and bottom (y-axis) |
| mt           | margin-top                     |
| mr           | margin-right                   |
| mb           | margin-bottom                  |
| ml           | margin-left                    |

### Negative Margins

Add a - before the utility to apply negative margin:

```html
-mt-4 → margin-top: -1rem -ml-2 → margin-left: -0.5rem
```

### Auto Margin

Used mostly for centering elements horizontally:

```html
mx-auto margin-left: auto; margin-right: auto;
```

## 2. Colors

Customised text color

```html
<h1 class="border-4 border-green-600 mt-10 ml-5 mr-5 text-vuejs">Tailwind</h1>
```

---

## 3. Fonts

```html
<div class="font-sans">I am font one</div>
<div class="font-serif">I am font two</div>
<div class="font-mono">I am font three</div>
```

## 4. Heading Sizes

In CSS, the sizes of headings are standarized. But in Tailwind we have to apply the sizes

```html
<h1 class="text-3xl">This is h1</h1>
<h2 class="text-2xl">This is h2</h2>
<h3 class="text-xl">This is h3</h3>
<h4 class="text-lg">This is h4</h4>
```

## 5. Tracking (Letter-Spacing)

```html
<div class="tracking-tighter">Tight</div>
<div class="tracking-widest">Widest</div>
```

---

## 6. Spacing Between Items

In Tailwind CSS, the space-between utilities are used to control the spacing between child elements along the horizontal (x) or vertical (y) direction — without adding margin to the first or last element

`space-x-{value}` → horizontal spacing

`space-y-{value}` → vertical spacing

`between children` (left-right)

`between children` (top-bottom)

```html
<div class="flex space-x-4 space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<br>

| Class     | Spacing       |
| --------- | ------------- |
| space-x-0 | 0px           |
| space-x-1 | 0.25rem (4px) |
| space-x-2 | 0.5rem (8px)  |
| space-x-4 | 1rem (16px)   |
| space-y-6 | 1.5rem (24px) |
| space-y-8 | 2rem (32px)   |

## 7. Borders

Border utilities help you add, remove, and style borders for any element. You can control the border width, color, style, radius (rounded corners), and individual sides.

```html
<div class="border-4 border-blue-500 rounded-lg p-4">Box with border</div>
```

#### Border Widths

- `border`, `border-2`, `border-4`, `border-8`
- `border-t`, `border-b`, etc. (for specific sides)

#### Border Styles

- `border-solid`, `border-dashed`, `border-dotted`, `border-double`

#### Border Radius

- `rounded`, `rounded-md`, `rounded-lg`, `rounded-full`
- `rounded-t-lg`, `rounded-b-full`, etc.

#### Border Color Utilities

- `border-{color}`

#### Example

```html
border-red-500
```

#### Custom side + color:

- `border-t-green-500` // green top border only

---

## 8. States: Hover, Focus, Active

```html
<button
  class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-green-500 active:bg-yellow-700 focus:outline-red-700"
>
  Submit Now
</button>
```

---

## 9. Shadow Utilities

In Tailwind CSS, the shadow utilities are used to apply box shadows to elements, giving them depth and elevation. These utilities are useful for buttons, cards, modals, and other UI components

```html
<div class="shadow shadow-cyan-500 p-4 bg-white border-4">Default shadow</div>
```

- shadow: applies the box shadow itself

- shadow-cyan-500/50: sets the color of the shadow (cyan with 50% opacity)

<br>

| Class          | Description   |
| -------------- | ------------- |
| `shadow-sm`    | Small shadow  |
| `shadow-md`    | Medium shadow |
| `shadow-lg`    | Large shadow  |
| `shadow-inner` | Inner shadow  |

---

## 10. Blur

Blur utilities are used to apply CSS blur effects (via filter) to elements — often used for frosted glass, background blur, or soft focus effects.

```html
<img src="image.jpg" class="blur-lg" />
<div class="backdrop-blur-md bg-white/30 p-6 rounded-lg">Frosted content</div>
```

| Class     | Description                |
| --------- | -------------------------- |
| blur-none | No blur                    |
| blur-sm   | Small blur (4px)           |
| blur      | Default blur (8px)         |
| blur-md   | Medium blur (12px)         |
| blur-lg   | Large blur (16px)          |
| blur-xl   | Extra-large blur (24px)    |
| blur-2xl  | 2x Extra-large blur (40px) |
| blur-3xl  | Maximum blur (64px)        |

Must be used with filter enabled (default is on)

## 11. Backdrop-blur (Background Blur with backdrop-filter)

Used to blur what's behind the element — like frosted glass effect.

```html
<div class="backdrop-blur-md bg-white/30 p-6 rounded-lg">
  Frosted glass content
</div>
```

```html
<div class="w-64 h-32 bg-white/30 backdrop-blur-md blur-sm p-4 rounded-lg">
  Blurred box with glassmorphism
</div>
```

| Class              | Description                 |
| ------------------ | --------------------------- |
| backdrop-blur-none | No blur                     |
| backdrop-blur-sm   | Small background blur       |
| backdrop-blur      | Default background blur     |
| backdrop-blur-md   | Medium background blur      |
| backdrop-blur-lg   | Large background blur       |
| backdrop-blur-xl   | Extra-large background blur |
| backdrop-blur-2xl  | 2x Extra blur               |
| backdrop-blur-3xl  | Max background blur         |

---

## 12. Brightness

The Brightness utilities are used to adjust the brightness of an element, often applied to images, backgrounds, or divs with color using the CSS filter property.

**Make image dimmer:**

```html
<img src="photo.jpg" class="brightness-50" />
```

---

## 13. Hue Rotate

hue-rotate utilities are used to apply CSS hue rotation filters, which rotate the color hue of an element — useful for adding colorful effects to images, backgrounds, icons, etc.

```html
<img src="photo.jpg" class="hue-rotate-90" />
```

---

## Square Bracket Notation

In Tailwind CSS, square brackets [ ] are used for **arbitrary values** — to let you write custom values that are not available by default in Tailwind’s utility classes.
This gives you more control without writing custom CSS!

**Syntax:**

`class="property-[value]"`

#### Examples:

**w-[300px]** → width: 300px

**h-[40%]** → height: 40%

**m-[5%]** → margin: 5%

**text-[18px]** → font-size: 18px

**bg-[#ff5733]** → background-color: #ff5733

```html
<div class="mx-4 bg-pink-400 text-white my-[32px]">Bracket Notation</div>
```

---

## Flexbox

```html
<div class="flex flex-col items-center justify-around space-y-6 mt-12">
  <div class="h-16 w-16 rounded-full bg-red-600"></div>
  <div class="h-16 w-16 rounded-full bg-yellow-600"></div>
  <div class="h-16 w-16 rounded-full bg-green-600"></div>
</div>
```

---

## Grids

```html
<div class="grid grid-cols-3 gap-2 mt-3 mx-3">
  <div class="h-16 rounded-full bg-red-600"></div>
  <div class="h-16 rounded-full bg-yellow-600"></div>
  <div class="h-16 rounded-full bg-green-600"></div>
</div>
```

---

## Dark Mode

```html
<div class="bg-white text-black dark:bg-black text-white">
  Dark mode Disabled
  <!-- @custom-varient dark (&:where(.dark, .dark * ));-->
  <!-- By adding this in our css file, whatever utilities or styles we want to provide to dark theme just add dark before them and those styles will be applied on the theme  -->
</div>
```

---

## Custom Utilities

```html
<p class="p-[16px] text-[30px] text-chestnut bg-pink-200 flex-center">
  More styles
</p>
```

---

## Accent Color for Checkbox

Customised color for checkboxes.

```html
<input type="checkbox" class="accent-pink-500" checked />
```

---

## Fluid Typography

Instead of media query, the size changes automatically depending upon the screen size

```html
<p class="text-[min(10vw,70px)]">Something Fluid</p>
```

---

## Text Highlighting

```html
<div class="selection:bg-green-400 selection:text-white">
  <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>
```

When you select the text it gives the particular color you provided

---

## Navigation Bar Example

```html
<nav class="mx-4 py-4 bg-red-300 text-white">
  <ul class="flex justify-between">
    <li class="mx-2 cursor-pointer">Home</li>
    <li class="mx-2 cursor-pointer">About</li>
    <li class="mx-2 cursor-pointer">Contact</li>
  </ul>
</nav>
```

## Media Queries & Visibility

Responsiveness, in Tailwind we use BreakPoints!

Breakpoints are used to create responsive designs — so your styles change depending on the screen size.

Tailwind uses mobile-first approach, which means styles apply to small screens by default, and you add breakpoint prefixes to apply styles at larger sizes.

### Breakpoints

| Breakpoint | Screen Size (min-width) | Usage Example  | Devices          |
| ---------- | ----------------------- | -------------- | ---------------- |
| sm         | 640px                   | sm:bg-red-500  | Phones landscape |
| md         | 768px                   | md:text-xl     | Tablets          |
| lg         | 1024px                  | lg:flex        | Laptops          |
| xl         | 1280px                  | xl:grid-cols-4 | Desktops         |
| 2xl        | 1536px                  | 2xl:gap-10     | Large screens    |

### Responsive Example

##### 1. Responsive Text

```html
<div class="text-sm md:text-lg lg:text-xl">Hi! Lets do breakpoints now!!</div>
```

##### 2. Responsive Layout

```html
<div class="flex flex-col md:flex-row">
  <p>Contact</p>
  <p>Home</p>
  <p>Login</p>
</div>
<!-- Column layout on small screens, row layout on medium and up-->
```

##### 3. Display

```html
<div class="hidden md:block">
  <p>I appear on screens wider than 768px</p>
  <!-- This means we will apply a display of none but only on medium devices when width is >= 40rem which is about 770px    -->
</div>
```

##### 2. Color Variation dependinng on differennt sizes.

```html
<div class="sm: bg-amber-800 md:bg-fuchsia-400">
  <p>Hi! Lets start Tailwind CSS</p>
  <!-- The background color will change based on the screen size -->
</div>
```
