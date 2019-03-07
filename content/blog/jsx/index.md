---
title: React And JSX
date: "2019-02-26T11:31:52.169Z"
author: andrewkoung
---

## React and JSX

Javascript eXtension or better known as JSX is an extension of React that gives us the ability to mimic HTML. 

Let's take a look at a code example to see JSX looks like:

```
class HelloWorld extends React.Component { 
	render() {
		return (
		<p>Hello World</p>
		);
	}
}
```

or 

```
const helloElement = <p> Hello </>;
```

The first code example looks pretty much like HTML, but as you take a look at the second code example. You're probably asking yourself, "What the hell? Is that a string or HTML?". 
The answer to the question is neither and obviously JSX. JSX allows us to use the power of JavaScript and adds XML syntax to JavaScript.

### Is JSX mandatory? 

As mentioned before, JSX is an extension of React and is not mandatory, but is preferred in most cases; however, if it isn't mandatory, then what other method is there? 

Here's another option: 

```
class HelloWorld extends React.Component {
	render() {
		return(
			React.createElement(
				'p',
				'Hello World'
			)
		);
	}
}
```

Now imagine an HTML document containing a bunch of tags, but then replaced with multiple `React.createElement` declarations. Yeah... you probably have a gained a sense of how painful it would 
be to declare `React.createElement` for everytime a simple tag could have been used. Note that this is what JSX translates to after runtime too. If you didn't know, React introduces the idea 
of components where an interface can be broken down to multiple components containing react nodes either by `React.createElement` or JSX that working together. To simply put, JSX introduces 
elegance or is visually attractive when dealing with UI in JavaScript code.
