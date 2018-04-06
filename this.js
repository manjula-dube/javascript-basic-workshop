console.log(this.document == document )

console.log(this === window)

this.a = 37

console.log(window.a)


function testThisKeyword() {
    console.log(this) // [object Window]
}
testThisKeyword()


function testThisKeyword() { 
    console.log(this.name) // Alex
}
var name = 'Alex'
testThisKeyword()

///more examples

const person = {
  name: 'Alex',
  greet() {
    console.log('Hey my name is ' + this)
  }
}
person.greet() // Hey my name is Alex

//Explicit Binding

function greet() {
    console.log( this.name );
}

var person = {
    name: 'Alex'
};

greet.call( person,name); // Alex

//

function greet() {
    console.log( this.name );
}

var person = {
    name: 'Alex'
};

greet.apply( person, [name]); // Alex


//The bind function is a little bit different than the first two.
// It creates a new function that will call the original one with this bound to whatever was passed in.

function greet() {
    console.log( this.name );
}

var person = {
    name: 'Alex'
};

var greetPerson = greet.bind( person );
greetPerson(); // Alex