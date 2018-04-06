var myDetails = new Object()
myDetails.name = "Manjula"
myDetails.age = 25
myDetails.profession

//we also have bracket notation
myDetails['address'] = 'kandivali'



function showDetails(obj,objName){
  var results = ''
  for(var i in obj){
    if(obj.hasOwnProperty(i)){
      results += objName + "." + i + " = " + obj[i] + "\n"
    }
  }
  return results

}

console.log(showDetails(myDetails,"myDetails"))

// object initializer 
var myDetails = {name: "Manjula",age: 25,profession:"software developer"}

//constructor function
function myDetails(name,age,profession){
  this.name = name
  this.age = age
  this.profession = profession
}

var mydetail = new myDetails("Mnajula",26,"Software Engineer")
var myanotherdetail = new myDetails("Sample",26,"Software Engineer")
console.log(myanotherdetail)
myanotherdetail.test = "i am test"

//Object.create
var myDetails = {
  name: "Manjula",age: 25, profession: "Software developer","displayName":function(){
    console.log(this.name)
  }
}

var detail =  Object.create(myDetails)
console.log(detail.name)

