---
title: Component Life Cycle
date: "2019-02-26T11:31:52.169Z"
author: viragjainVJ
---

## Component Life Cycle

We already know that it uses the `render()` method for rendering the page on UI.
However having only the `render()` method may not always suffice our requirements. 
What if we want to do something before or after the component has rendered or mounted ? What if we want to avoid a re-render?

Looks like we need more control over the stages that a component goes through. 
The process where all these stages are involved is called the component’s lifecycle and every React component goes through it.

- **Initialization**
- **Mounting**
- **Updating**
- **UnMounting**
 
### Initialization
We use `constructor()` for this purpose. To initialise any variable state with props or without props. 

``` 
constructor() {
  super();
  this.state = {
    name: 'React',
    dependency: 'Redux'
    };
}
  
  OR
  
constructor(props) {
  super(props);
  this.state = {
    name: this.props.name,
    dependency: this.props.category
    };
}
```
### Mounting
Mounting is the process that occurs when a component is being inserted into the DOM. This phase has two methods that we can hook up with: `componentWillMount()` and `componentDidMount()`.  

- The `componentWillMount()` method is the first called in this phase. It’s invoked once and immediately before the initial rendering occurs, hence before React inserts the component into the DOM.

- `render()` mounts the component onto the browser. This is a pure method, which means it gives the same output every time the same input is provided.

- The `componentDidMount()` is the second invoked in this phase, just once and immediately after React inserts the component into the DOM. Good time for initializing other Javascript libraries that need access to the DOM and for data fetching operations

Note: Calling `this.setState()` within `componentWillMount()` will not trigger a re-render.

## Where should you make the API calls?
The API calls should be made in componentDidMount method always.

### Updating
The component can be updated by two ways, sending new props or updating the state.

- `componentWillReceiveProps()` gets executed when the props have changed and is not first render. Sometimes state depends on the props, hence whenever props changes the state should also be synced. 

- `shouldComponentUpdate()` tells the React that when the component receives new props or state is being updated, should React re-render or it can skip rendering? Hence this method should return true or false, and accordingly the component would be re-rendered or skipped. 
```
shouldComponentUpdate(nextProps, nextState) {
  let shouldUpdate = this.props.status !== nextProps.status;
  return shouldUpdate;
}
```

- `componentWillUpdate()` is executed only after the `shouldComponentUpdate()` returns true. This method is only used to do the preparation for the upcoming render, similar to `componentWillMount or constructor`.

- `render()` And then the component gets rendered.

- `componentDidUpdate()` is executed when the new updated component has been updated in the DOM. This method is used to re trigger the third party libraries used to make sure these libraries also update and reload themselves.

### Unmounting
- `componentWillUnmount()` This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM. We do all the cleanups related to the component here.
