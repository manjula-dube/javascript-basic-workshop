//difference between == v/s ===

// == abstarct equality
// === strict equality

console.log(4 == '4') //the string is converted to number before the comparision
console.log(4 === '4') //no type conversion happens here


console.log(true == "1")
console.log(true === "1")

console.log("this is a string" == new String("this is a string")) //here the string object is converted to string literal
console.log("this is a string" === new String("this is a string")) //here its not
