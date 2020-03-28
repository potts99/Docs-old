---
id: js_cond
title: Conditionals in JS
---

How to use if, else if, else, switch, and ternary syntax to control the flow of a program in JavaScript.  Explore how programs make decisions by evaluating conditions and introduce logic into code.

## if Keyword

An if statement is when a task is performed depending on a condition. \

```text
if (true) {
  console.log('This message will print!'); 
} 
// Prints "This message will print!"
```

## else statements

Else statements follow an if statement. An else statement runs when the if statement isnt met.

```text
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"
```

An else statement must be paired with an if statement and cannot work on its own. If and Else statements paired together allow us to automate solutions.

## Comparison Operators

When writing conditional statements, sometimes we need to use different types of operators to compare values.

Here is a list of some handy comparison operators and their syntax:

Less than: &lt;  Greater than: &gt;  Less than or equal to: &lt;=  Greater than or equal to: &gt;=  Is equal to: ===  Is NOT equal to: !==

```text
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};
```

## Logical Operators

Conditionals work alongside booleans. Which are true or false values. There are operators in javascript that allow us to work with these values, they are known as Logical Operators.

We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator \(&&\)  the or operator \(\|\|\)  the not operator, otherwise known as the bang operator \(!\)

We use the and operator to check if two things are true, when using the and operator both conditions must be met in order for the code to be ran. If this is false and the conditions are not met then the else statement will run.

```text
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
```

If we only care about either condition being true, we can use the \|\| operator. When using the or operator, only one of the conditions has to be met for the overall statement to be true.

```text
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
```

The ! not operator reverses, the value of a boolean. Basically the ! operator takes a true value and flips it to false and vica versa.

Logical operators are often used in conditional statements to add another layer of logic to code.

## Truthy and Falsy

Non boolean types, such as strings or numbers are evaluated when checked inside a condition. Sometimes, we'll need to check if a variable exists, but not equal a specific value.

```text
let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
} 
// prints 'I Exist!'
```

In the example above, the if statement will run because the variable has a truthy value, meaning that the string holds a value. If the string was undifined then the else statement will run due to it being falsy. Other falsy values are null, undefined or NaN \(not a number\).

## The switch keyword

Writing lots of if..else statements can be painful, switch statements ease that pain. A switch statement is an alternative to an if...else statement. It is easier to read and write.

```text
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'
```

The switch keyword initiates the statement, it is then followed by a variable which contains a value.  Inside the code block {...} there are multiple case statements. The case keyword checks if the expression matches the asked for value. If the variables value was tomato then it would print "Tomatoes are $0.49" It would only print this in the console.

The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.  Note: Without the break keyword at the end of each case, the program would execute the code for all matching cases and the default code as well.

At the bottom of a switch statement there is a default statement. This is the else equivilant in the siwtch. If none of the above cases are then the default statement will run.

