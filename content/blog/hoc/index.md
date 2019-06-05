---
title: High-Order Components
date: "2019-06-05"
author: fosteman
---

# High-Order Components

An old saying "Don't Repeat Yourself" or <em>DRY</em> applied to a React codebase is a worthwhile challenge.

Before delving into React,
let's get a sense of High-Order Functions:

#### [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```javascript
Array.prototype.map(callbackfn)
```
#### [`Array​.prototype​.for​Each()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
```javascript
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```
#### `Typical Math Abstraction`
```javascript
const multiply = (x) => (y) => x * y
multiply(1)(2) 
// -> 2
```
#### <em>`Wild Caught oneliner`</em>
##### Function Composition
```javascript
const composition = (...callbacks) => callbacks.reduce((a,b) => (...args) => a(b(...args)));
```
Decodes as: 
```
const compose = (...callbacks) => callbacks.reduce((a, b) => (...args) => a(b(...args)));
    const addTwo = x => x + 2;
    const double = x => x * 2;
    const square = x => x * x;
    const fn = compose(addTwo, double, square);
    console.log(fn(1)); // -> 4 addTwo(double(square(1)))
```
### HOC in React ...
##### HOC is a pattern that emerges from React’s compositional nature.
Note, that HOC is an advanced <strong>technique</strong> in React, they are not part of React API. 

These are the means to abstract over given React Components to implement piece of logic and return a freshly augmented Component

Prototype is this:
```javascript
const AugmentedComponent = HOC(OriginalComponent);
```

To demonstrate, the following function returns component `<ReversedNameComponent>` with reversed innerText of originally passed `<OriginalNameComponent>`:
```javascript
const reverse = ChildComponent =>
  ({ children, ...props }) =>
    <ChildComponent {...props}>
      {children.split("").reverse().join("")}
    </ChildComponent>
    
const OriginalNameComponent = props => <span>{props.children}</span>

const ReversedNameComponent = reverse(OriginalNameComponent)

```
Receives `ChildComponent`, <em>splits</em> string on Array of characters, <em>reverses</em> the order, <em>joins</em> into new string, returns result back into Component's `innerText` 

