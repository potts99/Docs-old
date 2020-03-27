# functions

## Javascript Functions

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

## Declaring a function

There are many ways to create a function in javascript. You can simply do it by using the function declaration. Such as: \

```text
function getReminder() {
  console.log('Water the plants');
}
```

You should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

```text
console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}
```

The above example shows the the function has been called before its been created. But hoisting isnt considered good practice so don't use it. The more you know.

## Calling a function

Simply call the function by using the indentifer in the function. This will call whatever is in the body of the function, so whatever is in the curley braces of the function.

```text
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

// this will print the sayThanks function three times.
```

## Parameters and Arguments

Parameters allow functions to accept input\(s\) and perform a task using the input\(s\). We use parameters as placeholders for information that will be passed to the function when it is called.

```text
const width = 10;
const height = 4;

function calculateArea(width, height) {
    console.log(width * height);
}

calculateArea(); // This will print 40, the area which has been calculated
```

In the example above the code block calculates the two inputs which are wdith and heght. When calling the function it will do the math for us. The variables values are passed through as arguements in the function. In order for the argument to be passed an assigned it has to declared first.

## Default Parameters;

Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. See the example before to see a default parameter in use.

```text
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

## Return

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

```text
function rectangleArea(width, height) {
  let area = width * height 
}
console.log(rectangleArea(5, 7)) // Prints undefined
```

To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.

Example of working code \

```text
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors); 

function monitorCount(rows, columns) {
  return rows * columns;
} // Prints 20
```

## Helper Functions

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

```text
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5, 4);
console.log(totalCost); // Prints 4000, the total cost of the number of monitors
```

## Function Expressions

To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Declare a variable to make the variable’s name be the name, or identifier, of your function. It is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

```text
const calculateArea = function(width, height) {
    const area = width * height;
    return area;
};
```

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

## Arrow Functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” \(\) =&gt; notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the \( \) and then add an arrow =&gt; that points to the function body surrounded in { }

```text
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

## Example

```text
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday'); 
console.log(plantNeedsWater('Tuesday')); // Prints false as it does not equal to wednesday
```

