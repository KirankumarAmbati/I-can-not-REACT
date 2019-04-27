---
title: Deciding between a Function or Class Component
date: "2019-04-27T11:31:52.169Z"
author: fgarcia-student
---

<img src="https://kentcdodds.com/static/a6969050117bd0dc3205e4d5f1079a5c/86757/banner.png" alt="React.js" height="450px" width="100%"/>

> <h1>tldr;</h1> Start with a Function component, leveraging the new React Hooks API introduced in 16.8 . As of November 2nd 2018 Dan Abramov, one of the maintainers of React, advised that <a aria-label="Link to Dan Abramov's article on Hooks" href="https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib">this is the way to write React components from here on.</a> If you need any currently <a aria-label="Link to use cases for hooks over classes" href="https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes">unimplemented features, or a library you use does not support hooks</a> then stay with a Class component.

## React has gone through a Component API change before

Before Class Components were introduced, there was a <i>(now deprecated)</i> `createClass` method that was the standard. Here is an example of what a call to this method looks like:

```javascript
const MyComponent = React.createClass({
  render() {
    return <h1>Francisco's First React Component!</h1>
  },
})
```

Then, ES6 came and delivered many features. One of which was the introduction of Classes. The ability to have an OO styled project in Javascript's prototypal inheritance world was big. It helped curate the Class Component:

```javascript
class MyComponent extends React.Component {
  render() {
    return <h1>Francisco's Second React Component!</h1>
  }
}
```

If you wanted to maintain `state` in your component, those we're the only ways to do it. If your component did not need state however, you could opt for a function component:

```javascript
const MyComponent = () => <h1>Francisco's Third React Component!</h1>
```

There has recently been a new API introduced to find a more 'atomic' version of state. This would allow for more organic growth when writing React components, and also opened up the floor for a powerful new way to share logic across components.

<img alt="Gif of Hook from the movie Hook" style="display: block; margin: 0 auto;" src="https://media.giphy.com/media/dUT2ybRu5Ytxu/giphy.gif" />

<h4 style="color: #AFAFAF; display: flex; justify-content: center">Hooks to Classes after Dan names them the new standard</h4>

## React Hooks take the stage

Hooks allow you to opt-in to state as you need it. For example, if our components implemented a button with a counter to track the number of clicks, we could implement it as follows:

### Class

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleClick = () => this.setState({ count: this.state.count + 1 })

  render() {
    return (
      <>
        <h1>Francisco's Second React Component!</h1>
        <button onClick={this.handleClick}>
          I've been clicked {this.state.count} time(s).
        </button>
      </>
    )
  }
}
```

### Function

```javascript
const MyComponent = props => {
  const [count, setCount] = React.useState(0)

  const handleClick = React.useCallback(() => {
    setCount(count => count + 1)
  }, [])

  return (
    <>
      <h1>Francisco's Third React Component!</h1>
      <button onClick={handleClick}>
        I've been clicked {this.state.count} time(s).
      </button>
    </>
  )
}
```

We accomplished the same as the class component using a few new methods in less lines of code. Because we can now opt-in to having state as we need, we can always start with a Function component. This is great news! Even Dan Abramov said in his <a aria-label="Link to Dan Abramov's article on Hooks" href="https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib">article</a> on hooks

---

> It turns out that these built-in Hooks aren’t only useful for creating custom Hooks. They are also sufficient for defining components in general, as they provide us with all the necessary features like state. This is why we’d like Hooks to become the primary way to define React components in the future.

---

## Whats next ?

Who knows? It's up to those of us in the community to find out what works and what can be improved upon. That's how all great things are curated. Innovation and curiosity.

## So, what should I use? Function or Class Components in April 2019?

Function components if you do not need `getSnapshotBeforeUpdate`
or `componentDidCatch`, or if you have a partifular library that is not compatabile with Hooks. All other use cases are covered by Hooks.

## Final Thoughts

I posted some resources to learn more about Hooks below. Thanks to everyone who made it this far. If you like what I wrote, check out my <a aria-label="Francisco's Blog" href="https://www.franciscogarcia.me/">blog</a> for more of my content, and continue to check in here for more React related posts!

> <div style="margin-bottom: 5px;"><a aria-label="Official React Docs" href="https://reactjs.org/docs/hooks-intro.html">Official React Docs</a></div><div style="margin-bottom: 5px;"><a aria-label="Dan Abramov talking about why they introduced the Hooks API" href="https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib">Dan Abramov talking about why they introduced the Hooks API</a></div><div><a aria-label="Library of hooks you can use in your projects" href="https://nikgraf.github.io/react-hooks/">Library of hooks you can use in your projects</a></div>

Happy Coding!

#### Francisco Garcia

<a style="margin-right: 5px; color: #8F8F8F;" class="github-button" href="https://github.com/fgarcia-student" aria-label="Follow @fgarcia-student on GitHub">Github: @fgarcia-student</a>
<a style="color: #4AB3F4;" aria-label="Follow @francisc0x5E on Twitter" href="https://twitter.com/francisc0x5E" class="twitter-follow-button">Twitter: @francisc0x5E</a>
