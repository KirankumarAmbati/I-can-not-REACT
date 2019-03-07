---
title: Context API
date: "2019-02-26T11:31:52.169Z"
author: AdithyaBhat17
---

# A beginner’s guide to understanding React’s context API

Have you ever experienced the pain of trying to get state from the top of your react tree to the bottom?   
This pain you’re feeling is called **“prop threading”** and it’s super annoying. You wind up having to pass props through components that don’t care about the data just so you can send it down to components that do care. And as you move components around, this pain is magnified.  

### Let us go through the pain for one last time!

So our App is structured in such a way that the App component renders Parent, which renders Child, which renders Grandchild. However, what’s important to notice here is that the **Grandchild component wants to render name — but the data for name lives inside the App component.**

Because Grandchild is so deeply nested, we have to pass the name prop one-by-one from App through all the components until it reaches Grandchild. What’s more: we must do this even if any of the components along the way (Parent and Child) aren’t even concerned with the name data!  

 
```js
    //src/App.js

    import React, { Component } from 'react';      
    class App extends Component{  
        render(){  
            const name = "Adithya";  
            return (  
                <div className = "App">  
                    <h1>Parent: </h1>  
                    <Parent name = {name} />  
                </div>  
            );  
        }  
    }  
```

```js
    const Parent = ({name}) => {
        return (
            <div>
                <h2>Child: </h2>
                <Child name={name} />
            </div>
        );
    }
```

```js
    const Child = ({name}) => {
        return (
            <div>
                <h2>Grandchild: </h2>
                <Grandchild name={name} />
            </div>
        );
    }
```

```js
    const Grandchild = ({name}) => {
        return (
            <div>
                Name: {name}
            </div>
        );
    }
```  

**All this trouble to display a name 😲**  

**Lets see how our app looks like…**    

`npm start`  

<img src="https://cdn-images-1.medium.com/max/800/1*EIIVPV3WnE60H4lh19bTMA.png" alt="output">  

Our application now renders the name which passed down from App to Grandchild via Parent and Child  

### Here comes the context API to save the day!

Now let’s take a look at how context api helps us to pass data only to the component which requires the specific data.  

To begin, we’ll use React’s **createContext()** function to return an object with a *Provider* as well as a *Consumer*.  

```js
    const Context = React.createContext();
```  

The Provider component is used in the upper level of the component tree; that is, the component from which the data to be passed is held. In our case, this was the App component. We passed the name data as the value of Provider’s value prop:  

```js
    class App extends Component {
        render() {
            const name = "Adithya";
            return (
            <div className="App">
                <h1>Parent :</h1>
                <Context.Provider value={name}>
                    <Parent name={name}/>
                </Context.Provider>
            </div>
            );
        }
    }
```  

On the receiving end (i.e., a component “under” the Provider in the component hierarchy), we use the Consumer component. In our example, we passed Consumer a function as a child. This function accepts a value and returns some JSX:  

```js
    const Grandchild = ({name}) => {
        return (
            <Context.Consumer>
                {(name) => 
                    <div>
                    Name : {name}
                    </div>
                }
            </Context.Consumer>    
        );
    }
```  

Wrapping the Grandchild component within the context’s consumer which invokes a function with a specified value to render the JSX.  


**Let’s take a look at our app now…**  

<img src="https://cdn-images-1.medium.com/max/800/1*EIIVPV3WnE60H4lh19bTMA.png" alt="output">    

And we don’t have to pass the data as props down the parent and child components anymore!!  

```js
    const Parent = () => {
        return (
            <div>
                <h2>Child :</h2>
                <Child/>
            </div>
        );
    }

    const Child = () => {
        return (
            <div>
                <h3>Grandchild :</h3>
                <Grandchild/>
            </div>
        );
    } 
```

You can find the source code [here](https://github.com/AdithyaBhat17/learning-context-api)  



