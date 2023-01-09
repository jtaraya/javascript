// the {} is what we call an Object literal

// let person = { 
//     name: 'Capra' ,
//     age : 39
// }
// console.log(person);

// //to change or access a property eg. a person. 2 ways
// // 1. Dot Notaion
// person.name ='Jason';
// console.log(person.name);

// //2. Bracket Notation
// person['name'] = 'Jabali';
// console.log(person['name']);

// let selection = 'name';
// person[selection] = 'Belinda';
// console.log(person.name);


// 1 BASICS*************

// Lets make an app for shapes like circles
// let radius = 1;
// let x = 1;
// let y = 1;


// Object-Oriented Programming - OOP - 
// Objects talk to each other to perform some functionality

const circle = {
    radius : 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {  
        console.log('draw')
    }
};

circle.draw();  // we call the draw method of the circle object

// 2 FACTORY FUNCTIONS ( This Produce Objects)

function createCircle(radius) {  // CamelNotation oneTwoThree
    return {
        radius : radius,

        draw() {
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


// 3. CONSTRUCTOR FUNCTIONS 

// function Circle(radius) {   //Pascal Notation OneTwoThree
//     this.radius = radius;
//     this.draw = function() {
//         console.log( 'draw');
//     }
// }

// const circle = new Circle(1);
// const x = {};

// 4. DYNAMIC NATURE OF OBJECTS

circle.color = 'yellow' // add another property yellow
circle.draw = function() {} // add a method


// you can delete a property or method
delete circle.color;
delete circle.draw;

console.log(circle);

// CONSTRUCTOR PROPERTY

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1);

// //Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);



// 6 FUNCTIONS ARE OBJECTS


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1) // call method
Circle.apply ({}, [1,2,3]); // apply method to pass in an array.

const another = new Circle();


//7. PRIMITIVE VALUE VS REFERENCE TYPES

// Primitive type - a and b are two independet variables.
// let a = 10;
// let b = a;

// a= 20;

// results is a = 20 and b = 10

// Reference types
let a = {value: 10};
let b = a;

a.value = 20;

// results is a = 20 and b = 20

// Another example

let digit = 10;

function increase(digit) {
    digit++;
}

increase(digit);
console.log(digit);

// results is 10

let object = { value: 10};

function increase(object) {
    object.value++;
}

increase(object);
console.log(object);

// results is 11

//So primitives are copied by their value & objects are copied by their reference

// 8. ENUMERATING PROPERTIES OF AN OBJECT ** to redo to understand **


// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw') ;
//     }
// };

// for (let key in circle)
// console.log(key, circle[key]);

// for (let key of Object.keys(circle))
// console.log(key);

// for (let entry of Object.entries(circle))
// console.log(entry);

// if ('radius' in circle)
// console.log('yes');


// 9 - CLONING AN OBJECT

// let box = {
//     radius: 1,
//     draw() {
//         console.log('draw') ;
//     }
// };

// const other = {};

// for (let key in circle)
//     other[key] =circle [key];

// console.log(other);

//Another way. example 1

// let box = {
//     radius: 1,
//     draw() {
//         console.log('draw') ;
//     }
// };

// const other = Object.assign({
//     color: 'yellow'
// }, box);

// console.log(other);

//Another way. example 2 using the spead operator ....- three dots is the spead operator

let box = {
    radius: 1,
    draw() {
        console.log('draw') ;
    }
};

const other = { ...box}

console.log(other);


// 10 GARGABE COLLECTION

//memory allocation and deallocation happens behind the scene

// let circle = { };
// console.log(circle);


// 11.   MATH *** BUILT IN OBJECT
// Google javasript Math for more 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// 12. STRING *** BUILT IN OBJECT

// Google javasript String for more 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// In js there are two types of String
// String primitive
//const message = 'This is my first message';
//

//String object
//Using a constructor function

const anotherOne = new String('hi');

//  13 . TEMPLETE LITERAL

const ourName = 'John';


// Object {}
// Boolean true, false
// String '', ""
// Template literals ``

const anotherTwo = 
`Hi ${ourName} ${2 + 3} ,

Thank you for joining my mailing list.

Regards,
Jacob`;


// 14. DATE

// Google javasript date for more 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const now = new Date();
const date1 = new Date('January 6 2023 13:14');
const date2 = new Date(2023, 0, 6, 13 ); // month starts from 0 for Jan and 11 for Dec.

now.setFullYear(2022);

// ****EXERCISE 1 Create an Address Object with three properties.
// street
// city
// zipCode
// create a function called showAddress that takes an address object and displays all
// the properties of this object along with their value

let address = { // using the object literal syntax to initialize the object
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

function showAddress(address) {
    for ( let key in address)  /// for in loop
        console.log(key, address[key])

}

showAddress(address); //call the function showAddress and pass address object.

// result we get street a , city b and zipCode c

// **** EXERCISE 2 - INITIALIZE AN ADDRESS OBJECT WITH A FACTORY THEN CONSTRUCTOR FUNCTION

//Factory Function

let place = createPlace('a', 'b', 'c');

console.log(place);

function createPlace( street, city , zipCode) { // camelNotation
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function 

let dwelling = new Dwelling('a', 'b', 'c');

console.log(Dwelling);

function Dwelling(street, city, zipCode) {  //Pascal Notation
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// result we get street a , city b and zipCode c

//  **** EXERCICE 3 - OBJECT EQUALITY

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function Address(street, city, zipCode) {  //Pascal Notation
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
            address1.city === address2.city &&
            address1.zipCode === address2.zipCode;

}

function areSame(address1, address2) {
    return address1 === address2; // if they are referencing the same object.will return true. otherwise false

}

console.log(areEqual(address1, address2)); // we get true
console.log(areSame(address1, address2));  // we get false
console.log(areSame(address1, address3));  // we get true

//  **** EXERCICE 4 -Create a Blog Post object with below properties
//title
//body
//author
//views
//comments -and the comments to have (author, body)
//isLive


//using Object literal syntax

let post = {
    title: 'a',
    body : 'b',
    author: 'c',
    views: 10,
    comments :[
        {author:'a', body: 'b'},
        {author:'ac', body: 'd'},
    ],
    isLive: true
};

console.log(post);

// ***** EXERCICE 5 - CONSTRUCTOR FUNCTION
// new blog that has not been posted yet.

let blog = new Blog('a', 'b', 'c');


function Blog(title, body, author,) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(blog);

// **** EXERCISE 6 - PRICE RANGE OBJECT
// Create an array of object. Each array is called price range object

let priceRange =[
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5 }
]









