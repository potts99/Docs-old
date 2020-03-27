# class

## Introduction to classes

JavaScript is an object-oriented programming \(OOP\) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.

## Constructors

JavaScript calls the constructor\(\) method every time it creates a new instance of a class.

```text
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

Dog is the name off the class.

Javascript invokes the constructor\(\) method everytime we create a new instance of our dog class.

This constructor\(\) method accepts one argument, name.

We use the this keyword. In the context of a class, this refers to an instance of that class.

Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.

## Instance

An instance is an object that contains the property names and methods of a class, but it has unique values.

```text
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

We use the new keyword to create an instance of our Dog class.

```text
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```

## Methods

At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

```text
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```

We add getter methods for name and behavior. Notice, we also prepended our property names with underscores \(\_name and \_behavior\), which indicate these properties should not be accessed directly.

Under the getters, we add a method named .incrementBehavior\(\). When you call .incrementBehavior\(\) on a Dog instance, it adds 1 to the \_behavior property. Between each of our methods, we did not include commas.

Example with method and getters

```text
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff; // Subtracts days off from remaining days left
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```

## Method Calls

Let’s use our new methods to access and manipulate data.

```text
console.log(surgeonCurry.name); // Calls the name (Curry)
console.log(surgeonCurry.takeVacationDays(3)); // takes off 3 days
console.log(surgeonCurry.remainingVacationDays); // shows the remaing days (17 days)
```

This all prints to the console

## Inheritance

When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class \(also known as a superclass\) with properties and methods that multiple child classes \(also known as subclasses\) share. The child classes inherit the properties and methods from their parent class.

How to create a subclass

```text
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

The extends keyword makes the methods of the animal class available inside the cat class.

The super keyword calls the constructor of the parent class.

Below is an example of a parentclass and a child class. With the child class having an instance with an Array.

```text
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
```

You can also call sub class values

```text
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays); // prints 15
```

Here is how to push a method into an Array

```text
addCertification(newCertification) {
    this._certifications.push(newCertification)
  }
```

## Static Methods

Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now\(\) which returns the current date, directly from the class. The .now\(\) method is static, so you can call it directly from the class, but not from an instance of the class.

```text
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}
```

In the example above, we create a static method called .generateName\(\) that returns a random name when it’s called. Because of the static keyword, we can only access .generateName\(\) by appending it to the Animal class.

We call the .generateName\(\) method with the following syntax:

```text
console.log(Animal.generateName()); // returns a name
```

Example with generated password

```text
 static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
```

