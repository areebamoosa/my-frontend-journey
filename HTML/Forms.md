# HTML Forms

A form in HTML is a container used to collect user input and send it to a server.

Form ka kaam hota hai data collect krna aur backend.php ye ek file hy jahn data submit krty wahn send krna.

---

## 1. Name Field

- Use `<label>` to associate text with the input.
- Clicking the label automatically focuses the input box.

```html
<form action="backend.php">
  <label for="name">Name</label>
  <div>
    <input type="text" name="myName" id="name" />
  </div>
</form>
```

The benefit of label is that by clicking on name automatically wo name enter krny deingy without you having to click on the box

## 2. ID Field

Collect user ID.

```html
<div>ID : <input type="text" name="myId" /></div>
```

## 3. Email Field

Collect user email.

```html
<div>Email : <input type="text" name="myEmail" /></div>
```

## 4. Date Field

Calendar pop-up to select a date.

```html
<div>Date : <input type="date" name="myDate" /></div>
```

## 5. Marks Field

Expected marks or numeric input.

```html
<div>
  Marks : <input type="marks" name="myMarks" />
  <!-- ideally yahan type="number" hona chahiye -->
</div>
```

## 6. Checkbox

Multiple-choice type input.

```html
<div>Are you Eligible? : <input type="checkbox" name="myEligibilty" /></div>
```

## 7. Radio Buttons

Only one option can be selected if multiple radio buttons share the same name.

```html
<div>
  Gender : Male <input type="radio" name="myGender" /> Female
  <input type="radio" name="myGender" />
</div>
```

## 8. Select Dropdown

Lets user pick one option from a list.

```html
<div>
  <label for="car"> Car </label>
  <select name="myCar" id="Car">
    <option value="rev">Revo</option>
    <option value="fort">Fortuner</option>
  </select>
</div>
```

## 9. Textarea

For user to write detailed information.

```html
<div>
  Write about yourself : <br />
  <textarea name="myText" cols="50" rows="50"></textarea>
</div>
```

## 10. Form Buttons

Submit button sends form data.

Reset button clears all fields.

```html
<div>
  <input type="submit" value="Submit Now" />
  <input type="reset" value="Reset Now" />
  <button>Submit Now</button>
</div>
```

## 11. Dropdown Example with Preselected Option

```html
<select name="dropdown">
  <option value="KARACHI" selected>Khi</option>
  <option value="LAHORE">Lhr</option>
  <option value="ISB">Isb</option>
</select>
```

**Notes**

- Radio buttons should share the same name for single selection.

- Use selected in `<option>` to pre-select default values.

- Textarea dimensions can be controlled with cols and rows.
