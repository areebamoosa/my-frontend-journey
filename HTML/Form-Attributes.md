# Data Format

## 1. Date 

```html
<form action="" method="get">
  Select Date : <input type="date" />
  <input type="submit" value="Ok" />
</form>
```
<form action="" method="get">
  Select Date : <input type="date" />
  <input type="submit" value="Ok" />
</form>

## 2. Time 

```html
<form action="" method="get">
  Select Time : <input type="time" />
  <input type="submit" value="Ok" />
</form>
```
<form action="" method="get">
  Select Time : <input type="time" />
  <input type="submit" value="Ok" />
</form>

## 3. Both Date & Time

```html
<form action="" method="get">
  Local Date & Time : <input type="datetime-local" />
  <input type="submit" value="Submit" />
</form>
```
<form action="" method="get">
  Local Date & Time : <input type="datetime-local" />
  <input type="submit" value="Submit" />
</form>
<br>
<br>

We can also write date & time as this

```html
<form action="" method="get">
  Date & Time : <input type="datetime" />
  <input type="submit" value="Submit" />
</form>
```


## 4. Month 

```html
<form action="" method="get">
  Month : <input type="month" />
  <input type="submit" value="Ok" />
</form>
```
<form action="" method="get">
  Month : <input type="month" />
  <input type="submit" value="Ok" />
</form>

## 5. Range 

```html
<form action="" method="get">
  Select any Number:
  <input type="range" min="0" max="1000" step="1" value="10" />
  <input type="submit" value="Submit this Number" />
</form>
```
<form action="" method="get">
  Select any Number:
  <input type="range" min="0" max="1000" step="1" value="10" />
  <input type="submit" value="Submit this Number" />
</form>

## 6. Email Address

```html
<form action="" method="get">
  Enter Email Address: <input type="email" />
  <input type="submit" value="Submit" />
</form>
```

## 7. Auto Focus

The autofocus attribute automatically places the cursor inside an input field when the page loads — so the user can start typing immediately without clicking.

```html
<form>
  <input type="text" placeholder="Your name" autofocus />
  <input type="email" placeholder="Your email" />
</form>
```

When you open this page, the cursor will already be blinking in the “Your name” field.

**Note**:

You can use autofocus on:

`<input>`
`<textarea>`
`<select>`

Only one element can have autofocus per page.

Doesn’t need a value: just autofocus (boolean attribute).

## 8. Password

```html
<form action="" method="post">
  Enter Password : <input type="password" />
  <input type="submit" value="Submit" />
</form>
```


## 9. Multiple User Input

```html
<form action="" method="get">
  Username : <input type="text" /> Password : <input type="password" /> Email :
  <input type="email" /> Address :
  <input type="text" />

  <input type="submit" value="Submit" />
</form>
```

## 10. User Input Validation - Required


The required attribute makes an input field mandatory — the form won’t submit unless the user fills it in.

```html
<form action="" method="post">
  Username : <input type="text" required /> Password :
  <input type="password" required /> Email :
  <input type="email" required /> Address : <input type="text" required />

  <input type="submit" value="Submit" />
</form>
```
<br>
<br>

## Common HTML Entities and Their Codes

| Attribute     | Description                                                   | Example                            |
| ------------- | ------------------------------------------------------------- | ---------------------------------- |
| `action`      | Specifies where to send form data when submitted              | `<form action="/submit">`          |
| `method`      | HTTP method to use when sending form data                     | `<form method="post">`             |
| `type`        | Defines the type of input field                               | `<input type="text">`              |
| `name`        | Name of the input (used to identify data in submission)       | `<input name="username">`          |
| `value`       | Default value of the input                                    | `<input value="John">`             |
| `placeholder` | Text shown when input is empty                                | `<input placeholder="Enter name">` |
| `required`    | Makes the input mandatory                                     | `<input required>`                 |
| `maxlength`   | Maximum number of characters allowed                          | `<input maxlength="10">`           |
| `min`         | Minimum value (for number/date)                               | `<input type="number" min="1">`    |
| `max`         | Maximum value (for number/date)                               | `<input type="number" max="100">`  |
| `step`        | Step interval for numeric inputs                              | `<input type="number" step="5">`   |
| `checked`     | Marks a checkbox or radio as selected by default              | `<input type="checkbox" checked>`  |
| `selected`    | Marks an option in a `<select>` as selected by default        | `<option selected>`                |
| `multiple`    | Allows multiple file selection or multiple `<select>` choices | `<input type="file" multiple>`     |
