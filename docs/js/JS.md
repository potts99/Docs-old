# FreeCodeCamp.org 
https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLTFW0aa-32LYNEOEMsrycVfEBn8FQPrBW&index=15&t=0s

These are notes taken from the video. Only various subjected have noted.

# Comments 
Single line comments are done as ``` // This is a comment ``` This can be done anywhere

Multi Line comments are done as ``` /* text */ ```

# Data Types

Undefined - something that hasnt been defined

null - not assigned to anything

boolean - True or False

String - Text

symbol - unique value

number - is a number 

object - can store values

# Variables

Something to fill your data in. 

Three types of variable.

var / let / const

```var myname = "jack"``` and the same with let. let and var can be changed

```const pi = 3.14``` This stands for constant, it can never be altered. 

# Storing Values with an operator

``var a;`` delcaring a variable called a. Can be assigned later if needed.

```var b = 2;``` delcaring a variable called b and assigning it a value of 2

```a = 7;```

```b = a;``` This assigns the content of a to the variable b (b would = 7)

# Variable tips

Text assigned to a variable is a string. This needs to be in speechmarks "". ```let myName = "jack";```

A number is different. ```let myAge = 19;``` No speech marks needed

# Console.log

```console.log()``` - This allows you to log data into the dev console.

such as ```console.log(b)``` // Would print 7

# Math in Js

Addition /
```
let sum = 10 + 10;
console.log(sum); // will print 20
```

Subraction 

```let sum = 10 - 1; // print 9```

Multiplication

```let sum = 10 * 10;``` // 100

Divide 

Is done using / 

Incrementing a number

``` var sum = 100; sum++;``` equals 101

decementing a number

This is done the same but with --

# Appending Varibales to Strings

```
var anAdjective = "awesome";
var ourStr = "code is ";
ourStr += anAdjective; // Prints code is awesome
```

# Finding the length of a string

```
let firstname = "jack";

firstnamelegnth = firstname.length; // is 4
console.log(firstnamelength) // prints 4
```

# Finding the first character of a string

```
let name = "jack";

firstletter = firstName[0]; // equal to J as js starts with 1 as 0


```

# Storing multiple values with Arrays

```
var ourArray = ["jack", 23]; Elements are seperated with a comma;
```

# Nested Arrays

```
var OurArray = [["astley", 40], ["yo", 17]];
```

# Acess array data with index brackets

```
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // Equal to 50;
```

# Modify arrays with index brackets

```
var ourArray = [50, 60, 70];
ourArray[1] = 45; This replaces 60 with 45 in the array; 
```

# Manipulating Arrays with .push()
Appending data to the end of an Array

```
var ourArray = [1, 2, 3];
ourArray.push([4]); // Pushes 4 to the end of the array
```

# Manipulating Arrays with .pop()
Removes an element from our Array

```
let array = [1, 2, 3];
let removeArray = array.pop(); // This removes the last element from the array and assigns it to the variable removeArray;
```

# Manipulating Arrays with .shift()
This removes the first element in an Array instead of the last like .pop()

```
let array = [1, 2];
let removeArray = array.shift(); array now equals 2 but removeArray variable equals to 1;

```

# Manipulating Arrays with .unshift
Similiar to push. This adds to the start of an array instead of the end

```
let array = [1, 2, 3];
array.unshift(0); // adds 0 to the start of the array
```

# Javascript objects

Similar to arrays yet they use properties instead of indexes. \
As with variables a string is in brackets and a number isnt. Also each property is seperated with a comma.

```
let dog = {
    "name": "jack",
    "legs": 4,
    "tails": 1
};
```

# Acessing an object property in different ways;

```
let clothes = {
    "hat": "red",
    "shirt": "slack",
    "shoes": "sliders"
};

let hatColor = clothes.hat; // hatcolor = red
let shoeType = clothes.shoe; // shoeType = sliders

console.log(hatColor); // Prints red
console.log(shoeType); // Prints sliders
```

This can also be done by using bracket notation instead of .notation

A bracket notation has to be used if the property has a space.

``` var hatColor = clothes["hat"];```

# Acessing an object with a variable

```
let nameId = {
    1: "jack",
    2: "bec"
};

let nameNumber = 1; equals nameNumber to 1 
let name = nameId[nameNumber]; equals name to nameNumber
```

# Updating objective Properties

``` 
let name {
    "name": "jack",
    "job": "sales"
}

name.job = "coder"; //updates job to coder;
```

# Delete a object property

``` delete name.job; // This deletes the job property from the name object ```

