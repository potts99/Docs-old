Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

# The async Keyword

The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.

```
async function myFunc() {
  // Function body here
};

myFunc();
```

We’ll be using async function declarations throughout this lesson, but we can also create async function expressions

```
const myFunc = async () => {
  // Function body here
};

myFunc();
```

```
async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
```

