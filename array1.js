//methods of array
var arrayItem = [1,2,3,4,5]
arrayItem.push
console.log(arrayItem)

//pop
var arrayItem = [1,2,3,4,5]
console.log(arrayItem.pop)
console.log(arrayItem)

//concat //it does not affect the orginal array insteads gives the new one
var arrayItem1 = [1,2,3,4,5]
var arrayItem2 = [3,4]
console.log(arrayItem1.concat(arrayItem2))
console.log(arrayItem1)


console.log(arrayItem1.join("@")) //orginal array remains the same
console.log(arrayItem1.reverse()) //It changes the original array

console.log(arrayItem1.shift()) //removes the first element, changes the original array console.log(arrayItem1)

console.log(arrayItem1.unshift("p")) //add element at the beginning of the array changing the original array

console.log(arrayItem1.slice(1,2)) //its doesnt change the original array

console.log(arrayItem1.sort()) //changes the original array

console.log(arrayItem1.splice(2,2,"I am added")) //2 items will be removed starting at 2 and adds the element

console.log(arrayItem1) //mofifies the original array
