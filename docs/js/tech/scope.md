# scope

## Scope in Js

## Blocks and Scopes

A block is the code found inside a set of curly braces {} Blocks help us group one or more statements together and serve as an important structural marker for our code.

Example of a block in a function

```text
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
```

## Global Scopes

Scope is the context in which our variables are declared. Scopes are in relation to blocks because variables can exist either outside of or inside of a block.

In global scope, variables are declared outside of a block. These variables are called global variables. As global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Example of a global scope

```text
const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // prints blue
```

In the example above, the color variable which is a constant, is a global variable and can be acessed inside the code block.

## Block Scope

When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. Variables which are declared in a block scope are known as local variables.

## Scope Pollution

Having too many global variables can cause problems. When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace,or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.

