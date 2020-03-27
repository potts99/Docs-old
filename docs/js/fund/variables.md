# Variables

## Fundamentals of Variables:

In programming, a variable is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

## Creating a Variable

There are three ways to create a variable \(var, let and const\). Example of a basic variable: `var myName = 'Arya';`

General Rules are variables cannot start with numbers, they are case sensitive and cannot be the same as keywords.  Keyword Documentation: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical\_grammar\#Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

Let and const are now the prefered keywords in variables. Const is also a variable thats value cannot be altered. On the other hand the let variable can be altered.

If you try to reassign a const variable, you’ll get a TypeError.  Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.

## Mathematical Assignment Operators

Math and variables can be used together. \

```text
let w = 4;
w = w + 1;

console.log(w); // Output: 5
```

## The Increment and Decrement Operator

increment operator \(++\) and decrement operator \(--\)

The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1.

Examples

```text
let a = 10;
a++;
console.log(a); // Output: 11
```

```text
let b = 20;
b--;
console.log(b); // Output: 19
```

## String Interpolation

```text
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```

One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.

## Typeof Operator

It can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeofoperator checks the value to its right and returns, or passes back, a string of the data type.

```text
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```

