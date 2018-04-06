//Object looksup

var beta = {
  1:"A",
  2:"B",
  3:"C",
  4:"D",
  5:"E"
}
console.log(beta[3])

//removing object properties
var animal = {
  "tiger": 3,
  "buffaloe": 4,
  "zebra": 5,
  "horse": 10 
}
delete animal.tiger
console.log(animal)

///testing object for properties
console.log(animal.hasOwnProperty('zebra'))

//accessing and modifying nested objects
var animal = {
  "tiger": 3,
  "buffaloe": 4,
  "zebra": 5,
  "horse": 10,
  details: {
    age: 60
  }
}

console.log(animal.details.age)
animal.details.age = 13

///Generate an Array of All Object Keys

console.log(Object.keys(animal))