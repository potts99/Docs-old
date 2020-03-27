# loops

## Loops in Js

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached.

## Manually repeating tasks

This means manually repeating multiple lines of code in order to achieve the end result.

```text
const vacationSpots = ['spain', 'america', 'france'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
// prints spain, america, france in a list
```

## The for Loop & looping in reverse

The for loop allows us to repeat a block of code either x number of times or until a condition is met.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration.

```text
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```

The above code counts up. if you want to loop backwards \(count backwards\) use the `>=` operator in your stopping condition and use the `--` in the iteration statement.

## Looping through Arrays

For loops can work over data structures. Arrays hold lists of data, like customer names or product information.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1.

```text
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i= 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
}
```

## Nested Loops

Nested loops are loops running inside another loop. One use of a nested loop is to compare elements in two arrays.

```text
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
}; // 19
```

For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray\[i\], to each element in the inner array, yourArray\[j\]. When it finds a match, it prints a string to the console. In the example above both arrays have the number 19, this will be logged.

## While Loop

Converting a for loop into a while loop

```text
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3W
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```

In the example above: counterTwo is the declared variable before the loop. As it is a global variable it can be accessed in the loop.

The loop starts with the while keyword followed by the stopping condition. Everytime the loop goes round this is checked to see if the condition has been met. If the condition is true the code will run, if false the loop will stop.

```text
// Check if the current card is spade
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard; //variable with no value 
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]; // randoms the card in the hand
  console.log(currentCard); // prints current card
}
```

## DO While Statements

Sometimes you want a piece of code to run at least once, then loop depending on a specific condition after its first run.  A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

```text
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
```

The looping stops when the condition evaluates to false. Unlike a normal while statement, a do while statement will always run at least once, regardless of the condition.

Example of checking if adding something even if we can't

```text
do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);
```

## Break Keyword

When we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.

```text
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
```

With breaks, test conditions can be added besides the stopping condition, and exit the loop when they're met.

```text
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
```

