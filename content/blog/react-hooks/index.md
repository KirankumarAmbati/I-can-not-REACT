---
title: React Hooks
date: "2019-08-30"
author: ajeasmith
---


Before I dive into react hooks and functional components, let's do a quick review on how state is managed within class based components...

```
import React, { Component } from 'react'

class App extends Component {
    constructor(props){
     super(props)
     
     this.state = {
         count: 0
        } 
    }
    
    counting = () =>{
        let {count} = this.state
        this.setState(count: count++)
    }
    render(){
        return (
            <div>
                count is: {this.state.count}
                <buton onClick={this.counting}>add</button>
            </div>
        )
    }
}
```
In this class based component we defined what our state of this App component will look like. -> ```{count: 0}``` within our ```this.state``` object.

We then create a method called "counting" and changed our state using ```this.setState``` with our updated value. In our case, the ```{count: count++}``` property is incrementing when button is clicked --> ```<button onClick={this.counting}>add</button>```

This is how it is done with class components, let's talk about functional components now...

### Functional Components
Things to note when converting to functional components (NO HOOKS)

- The ’this’ keyword is no longer available
- They do not have state or lifecycle methods
- They’re just pure functions that return something
- They were known as dummy components because they return the UI, NOT state or logic.

----
When hooks were created, it changed how functional components operate.

### Functional Components with... React hooks

#### React Hooks - 
Functions that allow you to use state and lifecycle methods within functional components.

Functional components (AFTER) react hooks
- They can have state 
- They can have lifecycle methods

Side note —> however, they still don’t have access to ’this’.

##### Types of hooks: 
- useState - let's you add and update state within your functional components.
- useRef - make a reference to an element.
- useEffect - method similar to componentDidMount/componentDidUpdate, gets called when component renders/updates.

let's change that class based component into a functional component with hooks...

```
import React, { useState } from 'react'

const App (){
    const [count, setCount] = useState(0)
    
    counting = () =>{
        setCount(count++)
    }
    return(
        <div>
            count is: {count}
            <button onClick={counting}>add</button>
        </div>
    )
}
```

Let's break down what's happening here...

1. We are importing the ```useState``` method from react
2. We are creating a functional component named ```App```
3. The ```count``` and ```setCount``` are values we destructer out of the useState. the ```count``` is the state and ```setCount``` is the function that updates it.
4. Inside our useState we pass in our initial state, which is 0.
5. We create a counting method that updates the count using the ```setCount``` method.
6. Lastly, the button calls the counting method and updates the count. we can see the count value by adding it in our return
7. ```count is : {count}```.

OR...

We can pass in an object for our initial state with multiple properties. Like this --> 
```const [state, setState] = useState({count: 0, isLoading: false})```
then we can access our properties in our return using ```state.count``` or ```state.isLoading```.

### RECAP
- Don't have access to 'this' keyword
- React hooks can only be used in functional components
- There are many types of hooks you can use like useState, useRef, and useEffect.
- A string, object, number or null can be passed in as the initial state when using ```useState```.
