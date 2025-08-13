# Tailwind CSS Notes

Tailwind CSS is a **utility-first** framework that makes building modern and responsive websites easier and faster.

Unlike Bootstrap (which has predefined components), Tailwind gives you **full control** with small reusable utility classes.

---

## 🧭 Navigation Bar Example

```html
<nav class="mx-4 py-4 bg-red-300 text-white">
  <ul class="flex justify-between">
    <li class="mx-2 cursor-pointer">Home</li>
    <li class="mx-2 cursor-pointer">About</li>
    <li class="mx-2 cursor-pointer">Contact</li>
  </ul>
</nav>
```

---

## 🎯 Basics

### 📦 Margin Syntax

```
m{t|r|b|l}-{size}
mt: margin-to
ml: margin-left
mr: margin-right
mb: margin-bottom
my: top + bottom
mx: left + right
```

### 🎨 Colors

```html
<!-- Customised text color -->
<h1 class="border-4 border-green-600 mt-10 ml-5 mr-5 text-vuejs">Tailwind</h1>
```

---

## 🔤 Fonts

```html
<div class="font-sans">I am font one</div>
<div class="font-serif">I am font two</div>
<div class="font-mono">I am font three</div>
```

### 🔠 Heading Sizes

```html
<h1 class="text-3xl">This is h1</h1>
<h2 class="text-2xl">This is h2</h2>
<h3 class="text-xl">This is h3</h3>
<h4 class="text-lg">This is h4</h4>
```

### ✒️ Tracking (Letter-Spacing)

```html
<div class="tracking-tighter">Tight</div>
<div class="tracking-widest">Widest</div>
```

---

## 📏 Margin, Padding, Borders

### 📐 Margin Utilities

| Utility | Description   |
| ------- | ------------- |
| `m-0`   | No margin     |
| `m-1`   | 0.25rem (4px) |
| `m-2`   | 0.5rem (8px)  |
| `m-4`   | 1rem (16px)   |
| `m-10`  | 2.5rem (40px) |

### ➖ Negative Margins

```html
-mt-4 → margin-top: -1rem
-ml-2 → margin-left: -0.5rem
```

### 📌 Auto Margin

```html
mx-auto → horizontally center element
```

### 🧍 Spacing Between Items

```html
space-x-{value} → horizontal spacing
space-y-{value} → vertical spacing
```

```html
<div class="flex space-x-4 space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### 🟦 Borders

```html
<div class="border-4 border-blue-500 rounded-lg p-4">Box with border</div>
```

#### Border Widths

* `border`, `border-2`, `border-4`, `border-8`
* `border-t`, `border-b`, etc. (for specific sides)

#### Border Styles

* `border-solid`, `border-dashed`, `border-dotted`, `border-double`

#### Border Radius

* `rounded`, `rounded-md`, `rounded-lg`, `rounded-full`
* `rounded-t-lg`, `rounded-b-full`, etc.

---

## 🧠 Square Bracket Notation

Tailwind allows **arbitrary values** using square brackets:

```html
w-[300px] → width: 300px
h-[40%] → height: 40%
m-[5%] → margin: 5%
text-[18px] → font-size: 18px
bg-[#ff5733] → background-color: #ff5733
```

```html
<div class="mx-4 bg-pink-400 text-white my-[32px]">Bracket Notation</div>
```

---

## 📱 Responsive Design

### 📐 Breakpoints (Mobile-first)

| Prefix | Min Width | Devices          |
| ------ | --------- | ---------------- |
| sm     | 640px     | Phones landscape |
| md     | 768px     | Tablets          |
| lg     | 1024px    | Laptops          |
| xl     | 1280px    | Desktops         |
| 2xl    | 1536px    | Large screens    |

### Responsive Example

```html
<div class="text-sm md:text-lg lg:text-xl">
  Hi! Lets do breakpoints now!!
</div>
```

```html
<div class="flex flex-col md:flex-row">
  <p>Contact</p>
  <p>Home</p>
  <p>Login</p>
</div>
```

---

## ✨ States: Hover, Focus, Active

```html
<button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-green-500 active:bg-yellow-700 focus:outline-red-700">
  Submit Now
</button>
```

---

## 🌟 Shadow Utilities

```html
<div class="shadow shadow-cyan-500 p-4 bg-white border-4">
  Default shadow
</div>
```

| Class          | Description   |
| -------------- | ------------- |
| `shadow-sm`    | Small shadow  |
| `shadow-md`    | Medium shadow |
| `shadow-lg`    | Large shadow  |
| `shadow-inner` | Inner shadow  |

---

## 🌫️ Blur & Backdrop Blur

```html
<img src="image.jpg" class="blur-lg" />
<div class="backdrop-blur-md bg-white/30 p-6 rounded-lg">Frosted content</div>
```

---

## 💡 Brightness

```html
<img src="photo.jpg" class="brightness-50" />
```

---

## 🌈 Hue Rotate

```html
<img src="photo.jpg" class="hue-rotate-90" />
```

---

## 👀 Media Queries & Visibility

```html
<div class="hidden md:block">
  <p>I appear on screens wider than 768px</p>
</div>
```

---

## 🧰 Flexbox Example

```html
<div class="flex flex-col items-center justify-around space-y-6 mt-12">
  <div class="h-16 w-16 rounded-full bg-red-600"></div>
  <div class="h-16 w-16 rounded-full bg-yellow-600"></div>
  <div class="h-16 w-16 rounded-full bg-green-600"></div>
</div>
```

---

## 🧱 Grid Example

```html
<div class="grid grid-cols-3 gap-2 mt-3 mx-3">
  <div class="h-16 rounded-full bg-red-600"></div>
  <div class="h-16 rounded-full bg-yellow-600"></div>
  <div class="h-16 rounded-full bg-green-600"></div>
</div>
```

---

## 🌒 Dark Mode

```html
<div class="bg-white text-black dark:bg-black text-white">
  Dark mode Disabled
</div>
```

Enable dark mode in config and use `dark:` prefix for styling.

---

## 🧪 Custom Utilities

```html
<p class="p-[16px] text-[30px] text-chestnut bg-pink-200 flex-center">
  More styles
</p>
```

---

## ✅ Accent Color for Checkbox

```html
<input type="checkbox" class="accent-pink-500" checked />
```

---

## 💧 Fluid Typography

```html
<p class="text-[min(10vw,70px)]">Something Fluid</p>
```

---

## ✨ Text Highlighting

```html
<div class="selection:bg-green-400 selection:text-white">
  <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>
```

---

Made with ❤️ by you!
