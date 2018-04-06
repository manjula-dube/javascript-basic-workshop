//Hoisting

conole.log(notDeclared)

// hositing
console.log(declared)
var declared
declared = "this is our first workshop"
console.log(declared)

//simultaneously declared and defined
console.log(declared)
var declared = "this is our first workshop"
console.log(declared)

//function declaration are also hosted at the top
doSomething()
function doSomething(){
  console.log('i am doing something')
}

// another example. The delcaration will go up but the assignment to the function is done afterwards so we will get uncaught error
callMe()
var callMe = function (){
  console.log("hello")
}