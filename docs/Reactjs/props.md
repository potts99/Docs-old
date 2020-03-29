---
id: props
title: Props in react
---

## Access a Component's props

Every component has something called props.

A component’s props is an object. It holds information about that component.

To see a component’s props object, you use the expression this.props.

```
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
```

## Render a Component's props

You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

- Find the component class that is going to receive that information.
- Include this.props.name-of-information in that component class’s render method’s return statement.

```
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Jack' />, 
  document.getElementById('app')
);
```

## Pass props From Component To Component

The most common use of props is to pass information to a component, from a different component. You haven’t done that yet, but it’s very similar to what you’ve seen already.

A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information.

## Render Different UI Based on props

You can do more with props than just display them. You can also use props to make decisions.

A good example is to see if a user is signed in or not

```
export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}
```

When using this, you would give the instance an attribute of true or Flase
```
<Greeting name="Alison" signedIn={true}/>
// This would produce Hi there, Alison
```

## Event Handler in a Component Class

You can, and often will, pass functions as props. It is especially common to pass event handler functions.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
```

## this.props.children


```
Every component’s props object has a property named children.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.
```

