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
