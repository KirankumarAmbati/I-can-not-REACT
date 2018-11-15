## React Component Life Cycle

We already know that it uses the render() method for this purpose. 
However having only the render() method may not always suffice our requirements. 
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
Mounting is the process that occurs when a component is being inserted into the DOM. This phase has two methods that we can hook up with: componentWillMount() and componentDidMount().

The componentWillMount() method is the first called in this phase. It’s invoked once and immediately before the initial rendering occurs, hence before React inserts the component into the DOM.

The componentDidMount() is the second invoked in this phase, just once and immediately after React inserts the component into the DOM. Good time for initializing other Javascript libraries that need access to the DOM and for data fetching operations

Note: Calling this.setState() within `componentWillMount()` will not trigger a re-render.
