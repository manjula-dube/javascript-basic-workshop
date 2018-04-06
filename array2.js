//cupy arrays deep and shallow cloning
 var orginalArray = [1,2,3,4,5]

 var copy1 = orginalArray.slice(0)

 console.log(orginalArray)
console.log(copy1)


//spread operator
  var copy2 = [...orginalArray]
  console.log(copy2) //this does not always work if you have array or an object within an array

//shallo copy 
var deepArray = [["first workshop"]] //array inside array
var shalloCopy  = deepArray.slice(0) //when we doing copy for array within array or object withing array we just copying pointer to an array
shalloCopy[0].push("is great")

console.log(deepArray[0],shalloCopy[0])
//in this case always do deep cloning //since both of them is a pointer to the same array. push will affect both deep array and shallow array

//deep copy
var deepCopy = JSON.parse(JSON.stringify(deepArray))
deepCopy[0].push("is great")

console.log(deepArray[0],deepCopy[0])
