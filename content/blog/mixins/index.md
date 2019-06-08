---
title: Mixins
date: "2019-06-03"
author: fosteman
---

# Mixins

“How do I share the code between several components?” is one of the first questions that people ask when they learn React. Our answer has always been to use component composition for code reuse. You can define a component and use it in several other components." - [Dan Abramov, July 13, 2016](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

Nevertheless, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) has not always been a natural way of solving a certain pattern in React.

React Developers introduced 'Mixin' system as an intermediate stage of adoption of new patterns.

Since then, [Vue.js](https://vuejs.org/), [Angular](https://angular.io/) and other component model-driven frameworks fulfilled the niche. Declarative UI using [Composition over Inheritance](https://i-can-not-react.netlify.com/component-composition/) is no longer novelty.

## Mixins are Broken!
Read original [blog post](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) for further context.
With expansive growth of codebase, thanks to beloved React features, <em>it</em>, the codebase, tends to reminisce sphagetti dish. One may sneer at component re-usability in some [serious cases](https://facebook.com), 
whence components are too easy to break, tight coupling appeared and initial parents (developers who wrote them in the first place) had lost their <em>touch</em> to them.

## Common problems caused by <em>Mixins</em>

Mixin pattern are successfully employed in object-oriented, functional paradigms, however, in React they render to be unnecessarily problematic, here's why

#### - Implicit Dependencies

Thanks to dynamically typed JS, dependencies arisen from methods defined in mixins are not enforced to be documented.

Thus, coupling is a huge problem. 
In case of some other component referencing this hypothetically defined method, one cannot be sure that it is not defined elsewhere. 
Unlike components, mixins are flattened into same namespace.

Sometimes, mixins may depend on other mixins, whence dependency graph becomes unreadable.

Mixins disallow refactoring a state key or a method by searching for its occurrences in the component file.
 
##### Newbies in team may find codebase exhaustive to contribute to

#### - Name clashes
`handleChange()` is a typical method name for a functional component. Mixins, by their nature, invoke methods in the same namespace, hence collisions are not uncommon.

If a name conflict with a mixin come from a third party package, one solution is to refactor to often unreadable names to avoid clashes.

Features brought by new methods are suffering from the same issue. Authors often do not know the whole namespace to be absolutely sure in proper naming to avoid clashes

#### - Snowballing Complexity

Whenever a simple mixin is created, oftentimes it'll become heavily furnished to serve component's needs.

Every new requirement and feature imposed upon a mixin makes it harder to understand. 

There is not a way to extract only needed piece of code from a mixin.

#####Code redundancy, indirection and more dependencies occur.

### Alternative Patterns utilized in Facebook

The following patterns migrate use away from Mixins

#### Performance Optimization

To prevent [unnecessary reconciliation](https://reactjs.org/docs/advanced-performance.html#shouldcomponentupdate-in-action), `PureRenderMixin` would be used
```jsx harmony
const PureRenderMixin = require(mixins)

const Display = React.createClass({
  mixins: [PureRenderMixin]
})
```
<strong>Solution</strong> is to use `shallowCompare` function directly in [lifecycle method](https://i-can-not-react.netlify.com/component-life-cycle/) `shouldComponentUpdate` 
```jsx harmony
const shallowCompare = require('react-addons-shallow-compare')

const Display = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
});
```
<strong>[Another solution](https://github.com/facebook/react/pull/7195)</strong> is to inherit from `React.PureComponent`

#### Rendering Logic 
```jsx harmony
const HeaderMixin = {
  // Called by components from render()
  renderHeader: function() {
    return (
          <div>
            {this.getHeaderText() /* Implemented by derived components */}
          </div>
          )
  }
}
const HeaderAwake = React.createClass({
  mixins: [HeaderMixin],
  
  // Invoked in HeaderMixin.renderHeader()
  getHeaderText: function() {
    return this.props
  },
  
  render: function() {
    return (
      <div>
        {this.renderHeader() /* Implemented by HeaderMixin */}
      </div>
    )
  }
})
```
<strong>Solution</strong> is to extract the component with defining new, `<Header>`
component, `getHeaderText()` is passed in as a property.
```jsx harmony
const Header = props => (
    <div className='row-header'>
      {props.data}
    </div>
);

const UserRow = props => (
    <div>
      <Header text={props.data} />
    </div>
);
```

