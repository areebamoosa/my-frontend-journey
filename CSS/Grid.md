# CSS GRIDS

CSS Grid is like drawing a table or a board with rows and columns, and then putting your stuff (boxes, images, text, etc.) in the exact square you want.

It's perfect when you want to make a layout that looks like a grid (like a chessboard, calendar, or gallery).

### Seting Up the Grid Container :

To start, you first need a "parent box" that becomes the grid:

```html
.container { display: grid; }
```

Now .container is a grid container and its children become grid items.

**Step 2:** Create Rows and Columns
Use:

`grid-template-columns`

`grid-template-rows`

This tells the grid how many columns and rows it should have.

You can also use:

**fr** → Fraction of space

(like "1fr 2fr" means second column is twice as big)

grid-template-columns: 1fr 2fr;

#### Repeat Columns or Rows

You can use `repeat()` to avoid writing the same thing again and again:

```
grid-template-columns: repeat(3, 1fr);
```

That means → 3 columns, each taking equal space.

### Gap Between Items

Use gap, column-gap, and row-gap:

```
gap: 10px;
```

This adds space between boxes in both directions.

### Placing Items

Grid is smart, it automatically puts items in the next cell. But you can tell it where to go using:

1. grid-column-start
2. grid-column-end
3. grid-row-start
4. grid-row-end

Or shortcut:

1.  grid-column: 1 / 3;
2.  grid-row: 2 / 3;

                  grid-column: 1/2;
                  /*Places this item in column 1, ending before column 2. */
                  grid-row: 1/2 ;
                  /* Places this item in row 1, ending before row 2. */
                  /* So this item goes to the top-left cell of the grid. */

This means:

Start at column 1 and go till before column 3

Start at row 2 and stop before row 3

# Layouts using Grid Templates

```css
.container {
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    " navbar navbar navbar navbar"
    "section section section aside"
    "footer footer footer footer";
}
.item {
  background-color: yellow;
  border: 3px solid black;
}
#navbar {
  grid-area: navbar;
}
#section {
  grid-area: section;
}
#aside {
  grid-area: aside;
}
footer {
  grid-area: footer;
}
```

### Auto Rows and Auto Columns

If you don’t define enough rows or columns, grid can add them:

```
grid-auto-rows: 100px;
grid-auto-columns: 1fr;
```

### Grid Template Areas (Name your cells):

You can create named areas like a map:

```html
grid-template-areas: "header header" "sidebar main" "footer footer";
```

And then assign:

```
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: sidebar;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: footer;
}
```

## Grid Autofit & MinMax

This line creates as many columns as can fit in the row.
Each column will be at least 30px wide and at most 40px wide.
The layout automatically adjusts depending on screen size.

```css
grid-template-columns: repeat(auto-fit, minmax(30px, 40px));
```

```css
/* You can also name the grids */
grid-template-columns: [first] 120px [end] 100px;
/* This is another way of writing the same thing, but it names the grid lines: */
/* Line before 120px is called first */
/* Line after 120px and before 100px is called end */
```

```css
grid-template-rows: 1fr 1fr 4fr 5fr;
/* This sets the first 4 row sizes.
           1fr means 1 part of space, so the 3rd row will be 4 times taller,
           and the 4th row will be 5 times taller than the first row. */

grid-auto-rows: 2fr;
/* Any extra rows that are not defined above
           will automatically be 2 times the size of a single fraction (2fr). */

/* grid-template-columns: 1fr 4fr 2fr; */
/* This will create 3 columns with different widths: 1 part, 4 parts, and 2 parts. */
```

## Grid Spanning Rows & Columns

```css
 .item:first-child
 /* Make the first item span across multiple columns and rows   */
 /* Start at column 1 and span 3 columns (1 to 4)   */
 grid-column: 1 / span 3;
 /* Start at row 1 and span 3 rows (1 to 4)  */
 grid-row: 1 / span 3;
```
