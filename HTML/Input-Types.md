# HTML Input Types and Attributes

## 1. Value Attribute

`value="Eng"` means when this checkbox is checked and the form is submitted, the value `"Eng"` will be sent to the server.

If you don’t include value, the checkbox still gets submitted, but it sends a default value of "on" instead.

**Example without value:**

```html
<input type="checkbox" name="subject" /> Eng
```

If this is checked, it sends: `subject=on`

**Example with value:**

```html
<input type="checkbox" name="subject" value="Eng" /> Eng
```

If this is checked, it sends: `subject=Eng`

## 2. ID Attribute

`id="102"` uniquely identifies the checkbox in the HTML document.

Helps connect the checkbox to a `<label>` or access it via JavaScript.

**Without id:**

- Cannot connect a label using `for=""`

- Harder to access via JavaScript unless you use other attributes like class.

<br>

**Note:**
So, what happens if we don’t use value and id?
No value: It still works, but sends "on" instead of a meaningful label like "Eng".
No id: It still works visually, but it’s harder to link it with a `<label>` or control it via JavaScript.
If you're making a form to submit user selections like subjects, using value makes the data useful.

---

## 3. Feedback Field

```html
<textarea
  name="feedback"
  id="105"
  placeholder="Please give your Feedback"
></textarea>
```

## 4. Name Input

```html
<label for="1">
  <input type="text" placeholder="Enter your name" />
</label>
```

## 5. Radio Buttons

Only one option can be selected in a group of radio buttons.

```html
<input type="radio" name="Subject" value="Math" /> Math
<input type="radio" name="Subject" value="Science" /> Science
<input type="radio" name="Subject" value="English" /> English
```

## 6. Checkoxes

```html
<input type="checkbox" value="Math" id="101" /> Maths
<input type="checkbox" value="Eng" id="102" /> Eng
<input type="checkbox" value="PF" id="103" /> PF
<input type="checkbox" value="OOP" id="104" /> OOP
```

## 7. Special Attributes

### 1. required

Forces the user to fill the field.

```html
<input type="text" required />
```

If they leave it empty, the form won’t submit.

### 2. min and max

Used with types like number, date, time.

```html
<input type="number" min="1" max="10" />
```

User can only enter numbers from 1 to 10.

### 3. minlength and maxlength

Sets how short or long a text input can be.

```html
<input type="text" minlength="5" maxlength="15" />
```

Text must be between 5 and 15 characters.

## 8. Class Selection Radio Buttons

```html
<label for="101">
  <input type="radio" value="Class 1" name="class" id="101" /> Class XI
</label>
```

```html
<label for="102">
  <input type="radio" value="Class 2" name="class" id="102" /> Class XII
</label>
```

## Name Attribute for Radio Buttons

`"name"` attribute is super important for radio buttons.

Here’s why:

It groups the radio buttons together.
When multiple radio buttons have the same name, it tells the browser:
<br> These buttons belong to the same group — the user can choose only one of them.<br>
Example:
<br>

```html
<input type="radio" name="class" value="Class 1" />Class XI
<input type="radio" name="class" value="Class 2" />Class XII
```

<br>

Since both have `name="class"` , the user can only pick one option.

What happens if we don’t use the same name?

```html
<input type="radio" name="one" value="Class 1" />Class XI
<input type="radio" name="two" value="Class 2" />Class XII
```

Now these are two separate groups, so the user can select both at the same time, which is not how radio buttons should work.

**Summary:**

- `name` groups radio buttons.
- All buttons in the same group must share the same name.
- It ensures only one option can be selected from that group.
- On form submission, it sends the selected value like: `class=Class 1`

## Name Attribute with Checkboxes

You can have multiple checkboxes with the same name, and when the user selects multiple options, all selected values are sent under that name.

**Example:**

```html
<input type="checkbox" name="subject" value="Math" /> Math
<input type="checkbox" name="subject" value="English" /> English
<input type="checkbox" name="subject" value="Physics" /> Physics
```

If the user checks Math and Physics, the form will submit:

- `subject` = `Math`
- `subject` = `Physics`

Yes, the same name can appear more than once in the data

## Using Label with For

The for attribute in a `<label>` connects the label to an `<input>` element by its id.

```html
<input type="checkbox" id="eng" /> <label for="eng">English</label>
```

Clicking the word `"English"` will check/uncheck the checkbox.

It improves accessibility and makes forms more user-friendly.

## Using Label Without for:

If you don’t use for, the label won’t be linked to the input.

Clicking the text won’t activate the checkbox or input.
It also makes it harder for screen readers to understand which label belongs to which input.

Rule: `for="someID"` in `<label>` must match `id="someID"` in `<input>`

So it's basically like saying:
"This label belongs to this input!"

---

## Common Input Types

| Type           | Purpose                        |
| -------------- | ------------------------------ |
| text           | Single-line plain text input   |
| password       | Hides the text (for passwords) |
| email          | Validates email format         |
| number         | Allows only numbers            |
| tel            | For telephone numbers          |
| url            | Validates URL format           |
| search         | Search box                     |
| date           | Date picker                    |
| time           | Time picker                    |
| datetime-local | Date & time picker (local)     |
| month          | Select a month and year        |
| week           | Select a week and year         |
| color          | Color picker                   |

## Choice Inputs

| Type     | Purpose                    |
| -------- | -------------------------- |
| checkbox | Allows multiple selections |
| radio    | Only one option per group  |

## File & Buttons

| Type   | Purpose                         |
| ------ | ------------------------------- |
| file   | Upload a file                   |
| submit | Submit the form                 |
| reset  | Reset the form fields           |
| button | Generic button (you add JS)     |
| image  | Submit button with an image     |
| hidden | Hidden data (not shown to user) |
