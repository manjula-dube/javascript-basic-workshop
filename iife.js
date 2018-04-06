//javascript function that runs as soon as it is defined

(
  function(){
    console.log("this is my first workshop")
  }
)();

//no name and not stored in a variable
//the first 2 paremnthesis makes the function an expression
//the last 2 parentheis tells it to call immediately

(favNumber = function(num =3){
  console.log("MY Favorite number is"+ num)
})();

favNumber(4)