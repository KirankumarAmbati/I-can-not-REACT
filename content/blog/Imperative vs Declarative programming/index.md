---
title: Imperative VS Declarative programming
date: "2019-03-09T11:31:52.169Z"
author: Shrutihegde13
---

# What is Imperative?

Imperative is basically **'telling exactly what to do and how to do it'**. Think of it as if we're giving JavaScript commands on exactly what steps it should take.

For Example:

```
const people = ['Shruti', 'Anupama']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
  excitedPeople[i] = people[i] + '!'
}
```

This is imperative code, though. We're commanding JavaScript what to do at every single step. We have to give it commands to:

* Set an initial value for the iterator - (let i = 0)
* Tell the for loop when it needs to stop - (i < people.length)
* Get the person at the current position and add an exclamation mark - (people[i] + '!')
* Store the data in the ith position in the other array - (excitedPeople[i])
* Increment the i variable by one - (i++)

# What is declarative?
With declarative code, we don't code up all of the steps to get us to the end result. Instead, **'we declare what we want to be done'**, and JavaScript will take care of doing it. This explanation is a bit abstract, so let's look at an example. Let's take the imperative for loop code we were just looking at and refactor it to be more declarative.

With the imperative code we were performing all of the steps to get to the end result. What is the end result that we actually want, though? Well, our starting point was just an array of names:

```
const people = ['Shruti', 'Anupama']

```
The end goal that we want is an array of the same names but where each name ends with an exclamation mark:
```
["Shruti!", "Anupama!"]
```
To get us from the starting point to the end, we'll just use JavaScript's .map() function to declare what we want done.
```
const excitedPeople = people.map(name => name + '!')
```

That's it! Notice that with this code, we haven't:

- created an iterator object told the code when it should stop running. 
- used the iterator to access a specific item in the people array stored each new string in the excitedPeople array. 

Those are taken care of by JavaScript's .map() Array method.
