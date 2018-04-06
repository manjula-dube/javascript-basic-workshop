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