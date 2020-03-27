# modules

## Modules in Javascript

We can get started with modules by defining a module in one file and making the module available for use in another file.

## Export

```text
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

## require\(\)

To make use of the exported module and the behavior we define within it, we import the module. A common way to do this is with the require\(\) function.

`const Menu = require('./menu.js');`

We can also wrap any collection of data and functions in an object, and export the object using module.exports

```text
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};
```

## Logging / calling an import

```text
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());
```

## Export default

As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

```text
let Menu = {}; 

export default Menu;
```

## Import

ES6 module syntax also introduces the import keyword for importing objects.

`import Menu from './menu';`

