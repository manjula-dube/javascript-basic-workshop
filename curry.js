//This is not a pattern in javascript but Currying refers to the process of
// transforming a function with multiple arity into the same function with less arity.

//Currying means taking a function that takes multiple arguments and turning it into a chain of functions each taking one argument and returning the next function,
// until the last returns the result.

var animalDesp = function(classification, animal_name) {
  console.log(classification + ", " + animal_name);
};
animalDesp("Mammal", "Rat"); //"Mammal, Rat"

//But we could rewrite this function using simple nested currying, so that the basic function only requires a 
//classification, and it returns another function that takes the name of the animal.

var animalDesp = function(classification) {
  return function(animal_name) {
    console.log(classification + ", " + animal_name);
  };
};

var animalDesp1= animalDesp("Mammal");
animalDesp1("Rat"); 
animalDesp1("Whale"); 
animalDesp("Mammal")("Rat"); 

//We can also call the original curried function directly, 
//just by passing each of the parameters in a separate set of parentheses, one right after the other:
