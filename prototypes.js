// Initialize a constructor function for a new Hero

//The this keyword will refer to the new instance that is created, 
//so setting this.name to the name parameter ensures the new object
// will have a name property set.
function Workshop(name, level) {
  this.name = name;
  this.level = level;
}

let workshop1 = new Workshop('Bjorn', 1);
console.log(workshop1)

//get prototype of workshop1
Object.getPrototypeOf(workshop1);

//You may notice that we've only defined properties and not methods in the constructor. 
//It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.

//We can add a method to Hero using prototype. We'll create a welcome() method.

Hero.prototype.welcome = function () {
  return `${this.name} says hello.`;
}

workshop1.welcome();