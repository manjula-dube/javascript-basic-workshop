//AND OR OR && OR ||
//SHORT CIRCUIT EVALUATION


var number1 = 14

if(number1 > 10){
  if(number1 < 15){
    console.log("hello you are in")
  }
}

if(number1 > 10 && number1 < 15){
  console.log("hello you are in")
}

//SHORT CIRCUIT evalutaion always checks for the fist evalution to be true and then the second one 

if(4 > 5 && 5 > 6){
  console.log(true)
} else {
  console.log(false)
}

///example
var flag = true
var callTrue = function(){
  console.log("true")
}

var callFalse = function(){
  console.log("false")
}

if(flag){
  callTrue()
}

//can also be written as 

flag && callTrue()

