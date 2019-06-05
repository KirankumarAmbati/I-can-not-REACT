---
title: Unidirectional Data Flow
date: "2019-06-02"
author: fosteman
---

# Unidirectional Data Flow  

React components communicate via props and have child­parent relationships. Parent components can pass data to children, but children can’t modify parents. They can pass data back to parents via callbacks, but don’t have direct access to parents internal state.

### Background
Wherever a component is used, it probably helps form a certain type of relationship: parent and child. 
If a component contains another component, it’s said to be the parent. A component within another component is said to be a child.
```jsx harmony
<Parent>
    <Child />
    <Child />
</Parent>
```
Components that exist at the same level don’t share any sort of direct relationship, even though they might be right next to each other. They only “care” about their parents and children.

### Here's how uni-directional data-flows are established:
- ##### Props (downward movement)
Simplest form of passing data into `children` is via `props`
```jsx harmony
render() {
  return <Link to={'https://github.com/fosteman/I-can-not-REACT'}>Fork</Link>;
}
```
`<Link>` gets his location descriptor (url) via property `to`
- ##### Functions (upward movement)
Functions can be passed as arguments to other functions, for <em>everything</em> in JS is an object. 
```jsx harmony
const IncrementField = (props) =>
  <div>
    {props.currentCount}
    <input onChange={props.onChange} />
  </div>;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    // Because components created with classes don’t auto bind component methods,
    // you need to bind them to this in the constructor.
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  handleIncrement(amount = 1) {
    // note that state isn't directly modified, instead .setState is used.
    this.setState({ counter: this.state.counter + amount });
  }
  render() {
    return <IncrementField currentCount={this.state.counter} onChange={this.handleIncrement} />
  }
}

```
Method `handleIncrement` defined on `Parent` component is handed `onClick={this.handleIncrement}` via properties to the child component `<IncrementField/>`.

That way, the child component can send data back up to its parent without having to know how the parent will handle the data. 

### Flux

It is a logical continuation of React `state`. Should one require to centralize his data in the application, Flux comes in handy. 

It is a pattern for managing data flow in your application. The most important concept is that data flows in one direction. 
[Read our article](https://i-can-not-react.netlify.com/flux/) on this topic too! 

[Flux Official Documentation](https://github.com/facebook/flux/tree/master/examples/flux-concepts)
