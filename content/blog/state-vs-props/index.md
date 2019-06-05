---
title: State VS Props
date: "2019-02-26T11:31:52.169Z"
author: HenriqueFadoni
---

# State VS Props

# What is State?

State is an **object** that determines how certain variable renders/behaves. Nontheless, state is responsible to create **dynamic and interactive** components throughout our React Application.

Additionally, you must understand that state is **USED** on **Class** components and containers in React. Therefore, you shall **NOT** use it in **Function** components.

For Example:

```
class ExampleOfState extends Component {
    state = {
        value: 0;
    }

    render() {
        let text = '';

        if (this.state.value === 0) {
            text = 'The value is 0!';
        }
        else {
            text = 'The value is not 0!';
        }

        return (
            <div>
                {text}
            </div>
        );
    }
}
```

In this example the value will be always 0, so the output will always be the **'The value is 0!'**. Nevertheles, to make use of the **state** in our application, we must always refer to that as **this.state.** nameOfYourState.

State is so awesome that we can even change it! We can change the state by using **setState**:

```
this.setState({value: 1});
```

However, there is a problem, to keep up with the development best practices we must make a deep copy our state when it is **nested**. And, then make the necessary adjustments. Moreover, it is also a good practice to only change the state inside **Class** components.

# Why use props?

Props are the "state" version in Function components. However, we need to be careful!! **We cannot manipulate props, or change it inside a FUNCTION COMPONENT**. It would make our applications really messy, therefore, we just pass props as references. In summary, props are like a brigde that link the dynamic content in a class component to a function component.

```
-- CLASS COMPONENT --

class ExampleOfState extends Component {
    state = {
        value: 0;
    }

    onValueChange = () => {
        let newValue = this.state.value;

        newValue += newValue;

        this.setState({value: newValue})
    }

    render() {
        return (
            <div>
                <SomeComponent clicked={this.onValueChange}/>
            </div>
        );
    }
}

-- FUNCTION COMPONENT --

const SomeComponent = props => {
    return (
        <div>
            <button onClick={props.clicked}><button/>
        </div>
    );
}
```

In the example above we see a simple use of Props combine with State. While in the Class Component we can manipulate and change the value of the state, in Function Component we cannot. On the other hand, in **stateless** components we must only pass them as props, and refer to them inside the file.
