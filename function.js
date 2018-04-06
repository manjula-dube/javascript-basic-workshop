
//declarations
function Addition(number1,number2){
  return number1 + number2 //body for the function
}

console.log(Addition(1,4)) //Call

var myName = "Manjula"
function myFunc(){
  var myName = "Change Name"
  console.log(myName)
}

myFunc()
console.log(myName)

///Nested function

function add(num1,num2){
  function square(num3){
    return num3 * num3
  }
  return square(num1) + square(num2)
}

a = add(2,3)