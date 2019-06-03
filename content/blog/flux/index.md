---
title: Redux
date: "2019-05-31"
author: fosteman
---

#Redux: Flux application architecture
Modern applications, vivid in interface and rich in functionality demand extra attention organizing codebase. Previously, it has been easy to mimick a plate of Spaghetti with your code that slowed down developers and constricted business - utterly inappropriate. Thence MVC paradigm (Model-View-Controller) was born to bring about peace and order into development lifecycles.

###Redux is...
A predictable state container for JavaScript apps

An effort in the same vein with MVC that helps deal with complex codebase.

A particular flavor of Flux that has gained the most use and mindshare. Other Flux libraries include Flummox, Fluxxor, Reflux, Fluxible, Lux, McFly, and MartyJS (though in practice you’ll see little use of these compared to Redux).
###Redux represents...
<em>Actions</em> (fetching user data, logging users in, and so on) dispatched to reducers modifying the store by the way of encountering middleware</em>.

- Store contains the application <strong>state</strong> and logic, similar to MVC.
- Actions are <strong>created</strong> to modify the <strong>store</strong>, hence app state.
- Dispatcher is a central coordinator of actions and updates to store.
###In Redux...
<strong>Data flows unidirectionally.</strong> This usually means that there's no single place where data upstreams, nevertheless even deeply nested components have full-blown handle to App's central <em>store</em>.

<strong>Actions</strong> are created from <em>Views</em> (click, submit), from there, the dispatcher handles incoming actions. 
Notice that this flow differs from that of MVC-style framework, where the <em>View</em> and <em>Model</em> would be bi-directionally bound (updating each other, begotting inconsistencies).
Actions are decoupled from the store, hence action-creators (think thunks) don't dispatch anything to the store; instead, they return action objects like
```
{
    type: 'action1',
    payload: {}
}
```
that a central dispatcher then processes. State, undergone changes, notifies the <em>View</em> that new state should be applied (necessary parts re-rendered).
 
<strong>Central Store</strong> is used to keep everything in one place, au contraire - Flux promotes multiple stores.

<strong>Reducers</strong>, stemming from uni-directional data flow, enable Middleware pattern to be used to inject custom behaviour (logging, analytics, async 3rd party APIs)

###Redux looks like...
###... in a Counter app.
####Overview
Our state will be a number. The number will start off as 0. Our actions will either be to increment or decrement the state.

When the store receives an action from the views, the store uses a reducer function to process the action. The store provides the reducer function with the current state and the action. The reducer function returns the new state `state = reducer(state, action);`

We’ll start building our Redux counter by constructing its reducer. We’ll then work our way up to see what a Redux store looks like. Our store will be the maintainer of state, accepting actions and using the reducer to determine the next version of the state.

Reducer function for our counter will accept two arguments, state and action. We know state for our counter will be an integer. But how are actions represented in Redux?
- Actions in Redux are objects. Actions always have a type property. Our increment actions will look like this:
```
{
  type: 'INCREMENT',
}
```
And decrement actions like this:
```
{
  type: 'DECREMENT',
}
```

- Reducer function accepts two arguments, state and action, and returns the next version of the state. When the reducer receives an INCREMENT action, it should return state + 1
```
function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
} }
```

#####Try it out in `app.js`!
```
const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

console.log(reducer(0, incrementAction)); // -> 1 
console.log(reducer(1, incrementAction)); // -> 2 
console.log(reducer(5, incrementAction)); // -> 6
const unknownAction = { type: 'UNKNOWN' }; 
console.log(reducer(5, unknownAction)); // -> 5
console.log(reducer(8, unknownAction)); // -> 8
console.log(reducer(10, decrementAction)); // -> 9 
console.log(reducer(9, decrementAction)); // -> 8 
console.log(reducer(5, decrementAction)); // -> 4
```
So far reducer invoked manually proved the concept of action creation.
- Store is responsible for both maintaining the state and accepting actions from the view. Only the store has access to the reducer. The Redux library provides a function for creating stores, createStore(). This function returns a store object that keeps an internal variable, state. In addition, it provides a few methods for interacting with the store.
```
const store = createStore(reducer);

const incrementAction = { type: 'INCREMENT', amount: 3};
store.dispatch(incrementAction); 
console.log(store.getState()); // -> 3 store.dispatch(incrementAction); 
console.log(store.getState()); // -> 6

const decrementAction = { type: 'DECREMENT', amount: 4};
store.dispatch(decrementAction); 
console.log(store.getState()); // -> 2
```

###Summary
- All of your application’s data is in a single data structure called the state which is held in the store.
- Your app gets the state from this store.
- The views emit actions that describe what happened. We use dispatch() to send these actions to the store.



 
 
 

