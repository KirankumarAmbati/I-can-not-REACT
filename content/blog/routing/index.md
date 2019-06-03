---
title: React Router 4
date: "2019-06-02"
author: fosteman
---

# React Router v4

Client-side routing introduced in React applications plays essential role in modern frontend development practice. 
Some of the advantageous sides are:

- Search Engine Optimization is empowered with content-related splitting of application on pages
- Metrics, Response latency, [TTI](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive) are improved with JS backing
- Browser history handling enables flawless (without refresh) re-direction to different parts of an application

#### Dynamic Routing

Typically, routing libraries of other frameworks like Angular, Ember, are concerned with static routing. <strong>Static Routing</strong> means that routing table is configured upfront. 

[React Router](https://reacttraining.com/react-router/) introduces <strong>Dynamic Routing</strong>, which processes routing table on-the-fly. 

New React workflows and Use Cases are made possible with dynamically changing links and routes.

#### Browser specific routing component

With React Router v4, routing is not centralized anymore, instead it is merged with UI.

#### Nested components

No more use of `{props.children}`


### Using React Router - DOM

Router is divided into three packages:
- [react-router](https://www.npmjs.com/package/react-router): core components between dom and native versions
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM version designed for browsers and web-apps
- [react-router-native](https://www.npmjs.com/package/react-router-native): mobile apps oriented
 
To build web application, react-router-dom is to be installed with:
`npm install --save react-router-dom`

Then import into 
```
import { BrowserRouter, HashRouter, Route, Link, NavLink } from "react-router-dom";
```

#### Components

- `<BrowserRouter />` - concrete implementation of router interface that utilizes [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to sync UI with browser `window.location` 
- `<HashRouter />` - similar to `BrowserRouter`, uses the hash part of the URL to navigate i.e. `window.location.hash`
- `<Route />` - renders the underlying element, if location matches specified
- `<Link />` - replaces <a> tags to create navigation elements. Takes `to` property as a direction path
- `<NavLink />` - subclass of <Link> which adds styling information to the rendered element
#### `<Route />`
Typically takes in 3 properties as a setting: `match`, `location`, `history`

To render `<Home/>`:
```jsx harmony
import {Home} from 'src/components/home.js'
...
<Route exact path="/home" component={Home} />
```
Inline render:
```jsx harmony
<Route path="/home" render={() => <div>Home</div>} />
```
Wrapping <em>children</em> components:
```jsx harmony
const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)
```
#### `<Link />`
```jsx harmony
const HomeLink = () => (
    <Link to="/">Home</Link>
)
``` 
#### `<NavLink />`
```jsx harmony
<NavLink
  to="/me"
  activeStyle=
   activeClassName="selected">My Profile</NavLink>
```

### Example implementation

First, import the necessary routing components:
```jsx harmony
import { BrowserRouter, Link, Route } from 'react-router-dom'
```
Create a `<Header>` component, holding links:
```jsx harmony
const Header = () => 
<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/me">About</Link></li>
  </ul>    
</nav>
```
Next, render available pages in `<Container>`:

<em>Note</em>: React will render all `<Route>`s, however, only matching `<Route>` will return it's component, while others will return `null` by design.
```jsx harmony
const Container = () =>     
<div className="container">
  <Route path="/" exact component={HomePage} />
  <Route path="/me" exact component={About} />
</div>
```
Copy-paste our mock pages:
```jsx harmony
const Home = () => <div>This is Home Page</div>
const About = () => <div>This is About Page</div>
const NotFound = () => <div>404</div>
```
Finally, boot the app:
```jsx harmony
const App = () => (
  <BrowserRouter>
    <Header />
    <Container />
  </BrowserRouter>
)
render(<App />, document.getElementById('root'))
```

### Inclusive routing in depth
React Router v4 uses inclusive routing instead of exclusive routing used in v3, thus without `exact` property
in `<Container>` element, all `<Route>`s will be rendered, because, apparently, `"/"` and `"/me"` have the slash in common. 

#### Reversal. Exclusive routing 
Default exclusive routing used in React Router v3 and earlier versions.
Without use of <em>`exact`</em>, the first matching component is rendered.

#### Workaround `<Switch>`

Exclusive routing is achieved in v4 with use of `<Switch>`:
```jsx harmony
import { Switch, Route } from 'react-router'    

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/me" component={About}/>
  <Route component={NotFound}/>
</Switch>
```

### Browser History API

[react-router](https://www.npmjs.com/package/react-router) provides a `history` object that exposes API to with with 
hash history in the browser.

This can be used to navigate inside React application <strong>dynamically</strong>:
```jsx harmony
history.push("/me")
history.replace("/me")
```
Equals to:
```jsx harmony
<Link to="/me"/>
<Redirect to="/me"/>
```

