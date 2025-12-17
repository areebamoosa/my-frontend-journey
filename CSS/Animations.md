# Animations & KeyFrames

CSS animations provide a smooth and gradual way to animate an element's style changes from one keyframe to another.

### Components of CSS Animations

CSS animations consist of two components:
**1.Keyframes**
**2.Animation properties**

#### CSS @keyframes

`@keyframes` define the styles you want browsers to apply smoothly to an element at some specified key moments (frames).

How to define change-color's keyframes

```css
@keyframes change-color {
  /* The first keyframe */
  0% {
    background-color: purple;
  }
  /* The last keyframe */
  100% {
    background-color: yellow;
  }
}
```

**Explaination :**

We created the @keyframes at-rule named `change-color.`

We defined a keyframe for browsers to apply when an associated element's animation is at its zero percent (0%) duration.

We defined a keyframe for browsers to apply when an associated element's animation is at its one hundred percent (100%) duration.

#### Important Rule

The important rule (!important) does not work in keyframes. Browsers will ignore any keyframe declaration with an !important rule.

## CSS Animation Properties

CSS animation properties inform browsers about the animation you wish to apply to a specific element.

In other words, CSS animation properties describe the animation's attributes, such as its name, duration, direction, and iteration.

#### Types of CSS Animation Properties

The nine (9) types of CSS animation properties are:

1. animation-name
2. animation-duration
3. animation-timing-function
4. animation-delay
5. animation-iteration-count
6. animation-direction
7. animation-play-state
8. animation-fill-mode
9. animation

### 1. animation-name Property

```css
div {
  width: 150px;
  height: 150px;
  animation-name: change-color;
}

@keyframes change-color {
  from {
    background-color: purple;
  }
  to {
    background-color: yellow;
  }
}
```

The animation-name property specifies the @keyframes we wish to apply to the div element.

We created change-color's @keyframes ruleset.

We defined two keyframes for browsers to use when the div element's animation is at its zero percent (0%) and one hundred percent (100%) duration.

### 2. animation-duration Property

The CSS animation-duration property defines the time to complete one animation cycle.

Zero seconds (0s) is animation-duration's default value

### 3. animation-timing-function Property

The CSS animation-timing-function property defines an animation's implementation timing (speed) throughout its duration.

The values the animation-timing-function property accepts are:

**ease**

**ease-in**

**ease-out**

**ease-in-out**

**linear**

### 4. animation-delay Property

The CSS animation-delay property defines how long browsers should wait before starting an animation.

### 5. animation-iteration-count Property

The CSS animation-iteration-count property defines the number of times browsers should repeat an animation.

### 6. animation-direction Property

The CSS animation-direction property specifies whether the animation's first iteration should run forward or backward.

### 7. animation-play-state Property

The CSS animation-play-state property specifies whether the browser is running or has paused a specific animation.

### 8. animation-fill-mode Property

The CSS animation-fill-mode property defines the styles browsers should apply to an element before (or after) its animation runs.

## Animation Shorthand Property

We use the animation property as a shorthand for:

animation-name

animation-duration

animation-timing-function

animation-delay

animation-iteration-count

animation-direction

animation-play-state

animation-fill-mode

```css
div {
  animation: 5s ease-in-out 2s 3 alternate both running change-width;
}
```

### Box Styling & Animation Properties

```css
.box {
  background-color: red;
  width: 200px;
  height: 150px;
  color: rgb(255, 255, 253);
  margin: 20px 18px;
  position: relative;

  animation-name: Areeba01;
  animation-name: Areeba02;
  /* Only Areeba02 will be applied because the second animation-name declaration overwrites the first one.*/
  /* If you want both animations to run together, you need to list them together in a single animation-name property, like this: */
  /* animation-name: Areeba01, Areeba02;
  animation-duration: 8s, 8s;*/

  animation-duration: 8s;
  animation-iteration-count: 3;
  animation-fill-mode: alternate;
  animation-timing-function: ease-out;
  animation-delay: 2s; /* animation will start after 2s */
  animation-direction: reverse;

  /* Shortcut for Animation */
  /* Animation: ani name ani duration anitiming function ani delay ani iteration count ani fill mode  */
  /* animation: Areeba01 5s ease-in 1s 12 backwards; */
}
```
