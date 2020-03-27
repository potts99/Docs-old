# iterators

## Iterators in Js

## Functions as Data

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

We can get really long functions such as

```text
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
```

And re asign that function to a shorter varibale

```text
const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
```

## .forEach Method

This method will execute the same code for each element of an array.

```text
groceries.forEach(groceryItem => console.log(groceryItem));
```

```text
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(paf => console.log('I want to eat a '+ paf));
```

The code above will log a nicely formatted list of the fruits to the console.

## .map\(\) method

When .map\(\) is called on an array, it takes an argument of a callback function and returns a new array

```text
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});
```

In the above example: numbers is an array. bigNumbers will store the return of .map on numbers. numbers.map will iterate through the numbers array. It will save each value from the numbers array, times by 10, into a new array.  Eample:

```text
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```

## .filter Method

This method also returns a new array. However, returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter\(\) method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

```text
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});
```

