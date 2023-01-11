// Variables
// They cannot be a reserved keyword
// They should be meaningfuland descriptive names.
// the variables cannot start with a Number.
//They cannot contain a space or hyphen.
//They are case censitive.
// Use camel notation eg. let firstName;
let name = 'Jacob'; // String Literal
console.log(name);
let firstName = 'Jacob' ;
let lastName = 'Taraya';
let nickName = 'Capra';
console.log(firstName , lastName)

//constant cannot change but let can
const interestRate = 0.3;
console.log(interestRate)

//typeOf is areserved word.

//Primitive types
let word = 'say'; // 1. String literal
let age = 39; // 2. Number Literal
let isApproved = true; // 3. boolean Literal (true and false are reserved)
let secondName = undefined; // 4. undefined
let selectedColor = null; // 5. if user has no selected colour use null.
let symbol = 'dollar';

//Reference Types
// Object , Array , Function
// the {} is what we call an Object literal

let person = { 
    name: 'Capra' ,
    age : 39
}
console.log(person);

//to change or access a property eg. a person. 2 ways
// 1. Dot Notaion
person.name ='Jason';
console.log(person.name);

//2. Bracket Notation
person['name'] = 'Jabali';
console.log(person['name']);

let selection = 'name';
person[selection] = 'Belinda';
console.log(person.name);

//ARRAYS
//An array is a data structure that we use to represent a list of items

let selectedColors = ['red' , 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length); 
//console.log(selectedColors[0]); 
//each element has an index which determines the position in the array e. 0 = red and 1 = blue


//FUNCTIONS = fundamental building blocks is javascript
// Functions a set of statements that performs a task or calculate a value

//PERFORMING A TASK

function greet (name, lastName) { // name is a parameter of the greet function
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Leshan', 'Taraya'); // Leshan is an argument to the greet function
greet('Senteu', 'Taraya');


//CALCULATING A VALUE
function square(number) {
    return number * number ;
}

console.log(square(2)); //we have two function calls i.e console.log & square(2)









