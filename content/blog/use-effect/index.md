---
title: The Effect Hook
date: "2019-10-01"
author: connorlindsey
---

Hooks are a new addition as of React 16.8. View our introductory post on them [here](https://i-can-not-react.netlify.com/react-hooks/).

Here we'll be diving deeper into the Effect Hook which allows you to perform side effects in function components. This is similar to the componentDidMount and componentDidUpdate methods in a class component. The basic syntax looks like this:

```javascript
import React, { useEffect } from "react"

function Example() {
  useEffect(() => {
    // Run your code here
  })

  return <div>Some JSX here</div>
}
```

Use effect is perfect for fetching data, setting up descriptions, and manually changing the DOM. There are two types of side effects (or just effects).

## Effects Without Cleanup

When you want to run some code after the DOM updates, you can do that in an effect. Examples include network requests, manual DOM mutations, and logging. In a recent application, I use the useEffect hook to prevent the main window from scrolling.

In a class component, we would use `componentDidMount` or `componentDidUpdate` in this case. We could update the document title for example. In many cases, we would want the effect to take place after the component mounted **and** after it updated, so we'd have to write the same code in both functions.

Using hooks, we only have to do this once and the code will run after every render. Because useEffect is inside the component, we have access to the component's variables.

## Effects with Cleanup

Some effects require cleanup like setting up a subscription. In a class component, we'd have to subscribe in `componentDidMount` and unsubscribe in `componentWillUnmount`.

Using hooks, we have some extra syntax to perform clean up when the component is being unmounted.

The docs give the following example:

```javascript
import React, { useState, useEffect } from "react"

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return "Loading..."
  }
  return isOnline ? "Online" : "Offline"
}
```

The key thing to note is that we return a function when we want to clean up an effect. The cleanup is run when the component unmounts and also before every render. This helps avoid bugs. 

It is recommended to create multiple useEffects for different effects. In class components, all of your logic would be in the same lifecycle methods, causing then to quickly become bloated. Separate your code into multiple useEffects. This really helps with code maintainability. 

Use Effect is a very useful hook. Practice it and use it to compose more advanced hooks. Check out our other hooks tutorials here on I can not react. 

Thanks for reading!
