// 7 datatypes in javascript

//Boolean
var flag = true
if(flag){
  console.log("hurrah its true")
} else {
  console.log("hurrah its false")
}

//null
var myNumber = null
console.log(myNumber + 5)

//null is always treated as zero

//undefined
var myNumber;
console.log(myNumber + 5) //NAN



//Number
 var number1 = 12
 var number2 = 13

console.log(number1 + number2)

//String

var message = "Hello welcome to the first workshop"
console.log(message)

//Symbol
//es6 date type instances are unique and immutable

var symbol1 = Symbol('manjula')
var symbol2 = Symbol('manjula')
console.log(symbol1 === symbol2)
/**convert it to <string></string> */
console.log(String(symbol1) === String(symbol2))


//Object
var myObject = new Object();
myObject.name = "Manjula"
console.log(myObject.name)



