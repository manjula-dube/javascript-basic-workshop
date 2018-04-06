//array iteration methods 

//forEach

[1,2,3].forEach(function(item,index){
  console.log(item,index)
})

//map
var numbers =[1,2,3,4]
const result = numbers.map(function(item){
  return item * 2
})
console.log(result)

//filter
var numbers =[1,2,3,4]
const result = numbers.filter(function(item){
  return item % 2 == 0
})
console.log(result)

//reduce
const sum = numbers.reduce(function(result,item){
  return result + item
})
console.log(sum)

//there are more array methods