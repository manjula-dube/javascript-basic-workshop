//arrays can store number,objects,boolean basically any array.
//you can also store array inside an array

var name = ["tom","pom","rom"]
console.log(name[0])

var details = [["Manjula","25"],["Anjali","24"]]
console.log(details[0][1])

//if you wanr to change 
name[0] = "manjula"

console.log(name) //this will mutate the array

//one of the method that each array has is forEach

name.forEach(function(element){
  console.log(element)
})