---
title: High-Order Components
date: "2019-06-03"
author: fosteman
---

# High-Order Components

An old saying "Don't Repeat Yourself" or DRY in React knowledge base and codebase is a worthwhile challenge.
High-Order Components are functions wrapping React Components solving this incongruence.
For example [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```javascript
Array.prototype.map(callbackfn)
```
This pattern chunks logic into simpler and smaller functions that can be reused
```javascript
const multiply = (x) => (y) => x * y
multiply(1)(2) //2
```
High-Order Component (HOC) in React takes components as an argument, and returns modified component
```javascript
const reverse = childComponent =>
  ({ children, ...props }) =>
    <childComponent {...props}>
      {children.split("").reverse().join("")}
    </childComponent>
const Palindrom = props => <span>{props.children}</span>
const reversedPalindrom = reverse(name)

assert_equals(Palindrom, reversedPalindrom)
```
