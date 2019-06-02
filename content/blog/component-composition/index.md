---
title: Component Composition
date: "2019-05-30"
author: fosteman
---

# Component Composition

Whenever a UI component is intended to render children nested within, `props.children` are expanded using JSX

For Example:
```
const Bar = props => (
    <div className={'ui items ' + props.color}>
        {props.children}
    </div>
);
``` 
This lets parent components pass children between tags:
```
const NavigationBar = () => (
    <Bar color="gray">
        <div className="item">
            Primary
        </div>
        <div className="item">
            Secondary
        </div>
    </Bar>
);
```
Text contents of `<Bar>` JSX tag are interpolated into `Bar` component via `children` prop.

######Note, that React elements like `<Bar />` and `<NavigationBar />` are not dissimilar to that of `<div />`, since JSX makes React work with elements as with objects.

##Why Not Component Inheritance?
Creation of component inheritance hierarchies may find it's use in reusable non-UI components, however, a functional component is better off extracted into JavaScript module.
