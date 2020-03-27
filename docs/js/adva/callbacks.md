# Call Backs in Javascript and why you need them  

# What is a callback

A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

# Why do we need them

For one very important reason — JavaScript is an event driven language. \
This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events. 

```
function first(){
  console.log(1);
}
function second(){
  console.log(2);
}
first();
second();
```

As you would expect, \
the function first is executed first, and the function second is executed second — logging the following to the console:
```
// 1
// 2
```

 Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.
 
 # Creating a callback
 
 ```
 function doHomework(subject) {
  alert(`Starting my ${subject} homework.`);
}
 ```
 
 Above, we’ve created the function doHomework . Our function takes one variable, \
 the subject that we are working on. Call your function by typing the following into your console:
 ```
 doHomework('math');
// Alerts: Starting my math homework.
 ```
 
 Now lets add in our callback — as our last parameter in the doHomework() function we can pass in callback. \
 The callback function is then defined in the second argument of our call to doHomework().
 
 ```
 function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});
```

As you’ll see, if you type the above code into your console you will get two alerts back to back: Your ‘starting homework’ alert, followed by your ‘finished homework’ alert.

But callback functions don’t always have to be defined in our function call. They can be defined elsewhere in our code like this:

```
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```
 
 This result of this example is exactly the same as the previous example, but the setup is a little different. \
 As you can see, we’ve passed the alertFinished function definition as an argument during our doHomework() function call!
 
 
 
 
 
 
 
 
 
