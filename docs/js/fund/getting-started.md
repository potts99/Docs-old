---
id: js_start
title: Getting started with JS
---

## The console

The console displays important messages, such as errors, for devs.

`console.log();` Inside the brackets we write what we want to display in the console. We can print objects, data and actions into the console to check for errors.

## Comments

In javascript code needs to be commented to ensure that we you come back to it days later you can jump back into it quicker. It also helps people who are reviewing or looking at your code, understand it easier.

In javascript a single line comment is stated with // and a multi line comment is / __\

## Data Types

Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42. When using a number you do not need to use qoutes `console.log(2011)`

String: Any grouping of characters on your keyboard \(letters, numbers, spaces, symbols, etc.\) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.

Boolean: This data type only has two possible values— either true or false \(without quotes\). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

Null: This data type represents the intentional absence of a value, and is represented by the keyword null \(without quotes\).

Undefined: This data type is denoted by the keyword undefined \(without quotes\). It also represents the absence of a value though it has a different use than null.

Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

Object: Collections of related data.

## Arithmetic Operators

This can help with math in javascript. JS has several built in operaters that allow you to perform basic math such as: Add + / subtract - / multiply \* / Divide \(/\) / remainder % /.

Note that divide doesnt need to be in brackets, it is just for the purpose of seperation.

```text
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

## Methods

Methods are actions we can perform. We use these methods by appending an instance with a period . \(the dot operator\), and then using opening and closing brackets `.methodname()`

Examples of methods are .toUppercase\(\) This tranforms the whole world or phrase into capitals. .trim\(\) Removes whitespace from a string

Here are more methods: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String/prototype\#](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#)

## Built in objects

## Examples of built in objects

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

JavaScript has the built-in Math object. These can be used with methods using the dot operator.

`Math.random()` This will return a random number between 0 and 1

`Math.random() * 50;` This will return a random number between 0 and 50.

Math.floor\(\) takes a decimal number, and rounds down to the nearest whole number.

`Math.floor(Math.random() * 100)` This will generate a random number between 0 and 100 and then round it to the nearest whole number.

