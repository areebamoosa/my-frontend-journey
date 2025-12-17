# CSS Transitions

CSS transitions provide a smooth and gradual way to change a specific CSS property's value.

So, instead of allowing browsers to change a property's value immediately, CSS transitions cause the change to happen smoothly over a specified period of time.

For instance, suppose you wish to change an element's size on hover. In that case, you have two options:

1. Implement the change without CSS transitions.
2. Use CSS transitions to transition smoothly from the element's initial size to its new state

#### 1. How to change an image's size on mouse hover without using CSS transitions

```css
img {
  width: 40%;
}

img:hover {
  width: 100%;
}
```

The code above instantaneously changes the image's size from its initial width (40%) to its new dimension (100%) because we did not use CSS transitions.

With CSS transitions, you will get a much more pleasing experience.

Let's see an example below.

#### 2. How to change an image's size on mouse hover with CSS transitions

```css
img {
  width: 40%;
  transition: width 3s ease-out 0.4s;
}

img:hover {
  width: 100%;
}
```

The transition property applied a smooth and gradual transition from width: 40% to width: 100% on the image.

### Categories of CSS Transition Properties:

We have two categories of CSS transition properties:

##### 1.Required transition properties

##### 2.Optional transition properties

#### Required CSS Transition Properties:

The two required properties you need to create CSS transitions are:

1. transition-property
2. transition-duration

**CSS transition-property:**
The CSS transition-property specifies the CSS property you wish to transition from its initial to its new state.

**CSS transition-duration Property:**
The CSS transition-duration property defines the length of time in which browsers should complete the selected element's transition. In other words, transition-duration sets the total start-to-finish time.

**Note:**

The transition-duration property only accepts time in milliseconds (ms) or seconds (s).
Zero seconds (0s) is the transition-duration's default value. Therefore, no transition event will occur if you do not define a transition-duration property.

#### Optional CSS Transition Properties:

The two optional CSS transition properties are:

1. transition-timing-function
2. transition-delay

#### CSS transition-timing-function Property:

The CSS transition-timing-function property defines the implementation timing (speed) of the selected element's transition.

In other words, the transition-timing-function specifies the speed for implementing the transition at various intervals of its duration.

The values the transition-timing-function property accepts are:

**ease:** Starts the transition slowly. Then, speeds it up and ends it slowly. ease is the transition-timing-function property's default value. It is equivalent to cubic-bezier(0.25,0.1,0.25,1).

**ease-in:** Starts the transition slowly with a gradual increase in speed. It is equal to cubic-bezier(0.42,0,1,1).

**ease-out:** Starts fast and ends the transition slowly. It is equivalent to cubic-bezier(0,0,0.58,1).

**ease-in-out:** Starts and ends the transition slowly. It is equal to cubic-bezier(0.42,0,0.58,1).

**linear:** Starts and ends the transition using a consistent speed throughout the transition's duration. It is equivalent to cubic-bezier(0,0,1,1).

#### CSS transition-delay Property:

The CSS transition-delay property defines how long the browser should wait before it starts the transition.

### Shorthand for Defining the CSS Transition Properties:

We use the transition property as shorthand for the transition-property, transition-duration, transition-timing-function, and transition-delay properties.

In other words, instead of writing:

```css
img {
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}
/* You can alternatively use the transition property to shorten your code like so: */

img {
  transition: width 3s linear 2s;
  /* transition: <property-name> <duration> <timing-function> <delay>; */
}
```

```css
#box {
  display: flex;
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 120, 142);

  /* Transition */
  /* transition-property: background-color, height, width, border-radius, font-size; */
  transition-duration: 1s; /* Total transition time */
  transition-timing-function: ease-in; /* Smooth transition in and out */
  transition-delay: 0.5s; /* Optional: delay before transition starts */
}
```
