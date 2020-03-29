---
id: components
title: Components in React.JS()
---

React applications are made out of components.

What’s a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

## Always make sure you import react

```
import React from 'react';
```

This is a must for any component. It won't compile if you don't.

## In your main page always import reactDom 

```
import ReactDOM from 'react-dom';
```

This allows you to write to the html page that you will have.

## Creating a component class

You’ve learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.

Here’s another fact about components: every component must come from a component class.

A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.

To make a component class, you use a base class from the React library: React.Component.

What is React.Component, and how do you use it to make a component class?

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

```
class x extends React.Component {}
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

## Create a Component Instance
In order to render your component you just need to create a JSX element.

```
<MyComponentClass />
```

## Interacting Components

A React application can contain dozens, or even hundreds, of components.

Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.

In other words, React apps are made out of components, but what makes React special isn’t components themselves. What makes React special is the ways in which components interact.

```
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the above example, Crazy‘s render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

## Importing & Exporting a file

### import

When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. 

If you want to use a variable that’s declared in a different file, such as NavBar, then you have to import the variable that you want. To import a variable, you can use an import statement:
```
import { NavBar } from './NavBar.js';
```

This is importing the component NavBar from the external js file

### export

Alright! You’ve learned how to use import to grab a variable from a file other than the file that is currently executing.

When you import a variable from a file that is not the current file, then an import statement isn’t quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

```
export comes from ES6’s module system, just like import does. export and import are meant to be used together, and you rarely see one without the other.
```

All you have to do is place the word export above the class

```
export 
class NavBar extends React.Component {
    render() {

    };
}
```

