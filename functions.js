// 1. FUNCTIONS DECLARATIONS VS EXPRESSIONS

 // Two Ways to define a function - 1.function declaration 2. Anonymous Function

// This is a function declaration
function walk() {
    console.log('walk'); 
}

//  We can use a function Expression

    // A Named Function Expression (the word walk is the named function)
// let run = function walk () {
//     console.log('run');
// };

    // An Anonymous Function Expression
let run = function () {
    console.log('run');
};

run();  // calling the function using run(); reference.

// result is run on the console

// To declare another variable (let move = run;)

let run = function () {
    console.log('run');
};
let move = run;
move();  // calling the function using move(); reference.

// result is run on the console as well coz its referncing the same anonymous function

// 2. HOISTING
// Hoisting is the process of moving function declarations to the top of the file.
//Example

walk();

function walk() {
    console.log('walk'); 
}

//result is walk

// The javascript engine executing the code moves the function up

// function walk() {
//     console.log('walk'); 
// }

// walk();


// 3. ARGUMENTS

let x = 1;
x = 'a';

function sum(a, b) {
    return a + b;
}

console.log (sum(1, 2));

//result is 3.

// If undefined

//console.log (sum());

//result is NaN

// If we pass 5 arguments

//console.log (sum(1, 2, 3, 4, 5));

//result is 3. // Why coz only the first 2 arguments are used (1, 2).


function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log (sum(1, 2, 3, 4, 5));


// we want to change this function to return the sum of all arguments
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
        return total;

    console.log(arguments);
    return a + b;
}

console.log (sum(1, 2, 3, 4, 5));

// results is 15

// 4 THE REST OPERATOR  (...args)

function sum(...args) {
    console.log(args);
}

console.log (sum(1, 2, 3, 4, 5, 10));

// result (6) [1, 2, 3, 4, 5, 10]


// if we remove ...( three dots)
function sum(args) {
    console.log(args);
}

console.log (sum(1, 2, 3, 4, 5, 10));

// result 1

// Now to return the sum of all arguments using (...args)

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log (sum(1, 2, 3, 4, 5, 10));

// result 25

// IMAGINE we are going to calculate the total costs of items in a shopping cart.
// And we want a discount factor.

function sum(discount, ...prices) { // prices is the last paramenter in a rest function
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log (sum(0.1, 20, 30)); // 0.1 is 10% for the discount and we have items prices 20 and 30.

// result 45

// 5. DEFAULT PARAMETERS
// WE WANT TO WRITE A FUNCTION FOR CALCULATING THE TOTAL INTEREST

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}
console.log(interest ( 2400000, 12, 6));

// result 1728000

// what if you want to have default values for rates and no. of years

function interest(principal, rate, years) {
    rate = rate || 12;
    years = years || 6;

    return principal * rate / 100 * years;
}
console.log(interest ( 2400000));

// result 1728000

 // with the new javascript we can set the deault values

 function interest(principal, rate = 12, years = 6) {
    return principal * rate / 100 * years;
}
console.log(interest ( 2400000));

// result 1728000

// 6. GETTERS AND SETTERS methods in objects

const person ={
    firstName: 'Jacob',
    lastName: 'Taraya'
};

console.log(person.firstName + ' ' + person.lastName);

//results is Jacob Taraya

// we can use a templete literal ``

const person ={
    firstName: 'Jacob',
    lastName: 'Taraya'
};

console.log(`${person.firstName} ${person.lastName}`);

// If there are multiple places in our application where we want to display full name
// and don't want to repeat this template.

// We will have to define a method to call that name

const person = {
    firstName: 'Jacob',
    lastName: 'Taraya',
    fullName () {
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullName());

// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: 'Jacob',
    lastName: 'Taraya',
    get fullName () {  // getter
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jason Senteu'

console.log(person);

//result 
//{firstName: 'Jason', lastName: 'Senteu'}
// firstName: "Jason"
// fullName: "Jason Senteu"
// lastName: "Senteu"
// get fullName: ƒ fullName()
// set fullName: ƒ fullName(value)
// [[Prototype]]: Object


// 7. TRY AND CATCH

// if we want to report an error in our application
// so we throw an exception that should not have happened

const person = {
    firstName: 'Jacob',
    lastName: 'Taraya',
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.'); // throw an exception

        const parts = value.split(' ');
            if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {  // add a try block
    person.fullName = null; // Error alert 'Value is not a string.'
    //person.fullName = ''; // Error alert 'Enter a first and last name.'
}
catch (e) {
    alert(e);
}

console.log(person);


// 8 SCOPE

// LOCAL VS GLOBAL SCOPE

const color = 'red';  // global scope

function start() {
    const message = 'Hi';
    const color = 'blue';
    console.log(color);
  }

  function stop() {
    const message = 'bye';
}

start();

// result is blue

// note - Avoid  defining global variables. Its bad practice it can cause bugs and issue.



// 9 . LET AND VAR

// var has issues

// var => function -scoped
// ES6 (Es2015): let, const => block-scoped

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            let color = 'red' //let, const => block-scoped
        }
    }
    console.log(color);
}

start();

// result Uncaught ReferenceError. color is not defined

// if we exchange let and var

// var issue 1. is accessible anywhere in the function

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red' //function -scoped
        }
    }
    console.log(color);
}

start();

// result red


// var issue 2. is with global variables

var color = 'red';
let age = 30;

// In the window object
// if you type window.color in the console
// Result "red"
// if you type window.age in the console
// Result undefined

// var this bad practice

// 10 THE THIS KEYWORD

// IF THE FUNCTION IS ART OF AN OBJECTWE CALL THATFUNCTION AN OBJECT
// method -> obj
// function -> global (window in browsers and global in node)

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};

video.stop = function() {
    console.log(this);
};

video.stop();

//Result
// {title: 'a', play: ƒ, stop: ƒ}
// play: ƒ play()
// stop: ƒ ()
// title: "a"
// [[Prototype]]: Object

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};

function Video(title) {  // constructor function
    this.title = title;
    console.log(this);

}

const v = new Video('b'); // {}

//

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {  
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

// result
// a a
// a b
// a c


// 11. CHANGING THIS

// a way is the call || apply || bind method
function playVideo() {
    console.log(this);
}

playVideo.call({name: 'Jacob'}, 1, 2);
playVideo.apply({name: 'Jacob'}, [1, 2]);
playVideo.bind({name: 'Jacob'})();

//result for call: {name: "Jacob"}
//result for apply: {name: "Jacob"}
//result for bind: {name: "Jacob"}

// Another way is using the arrow function =>

const video = {
    title: 'up',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();

// result
// up a
// up b
// up c



// Another way is using the bind approach =>

const video = {
    title: 'up',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this))
    }
};

video.showTags();

// result
// up a
// up b
// up c

// Another way is using the self approach =>

const video = {
    title: 'up',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this))
    }
};

video.showTags();

// result
// up a
// up b
// up c


// *** EXERCISE 1 - SUM OF ARGUMENTS

// a) Create a function that takes a varring number of arguments and returns their sum


function sum(...items) {
   return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// result is 10


// b) Add an array and get the same sum Array.isArray()

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a,b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// result is 10


// *** EXERCISE 2 - AREA OF CIRCLE

// Use Object literal syntax
// It should have a radius property that we can read or write toString.
// ie. circle.radius = 2
// We shold not be able to setthe area from outside but able to read it.
// ie. circle.log(circle.area)

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius
    }
}; 

console.log(circle.area);


// *** EXERCISE 3 - ERROR HANDLING

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.')

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(numbers, 1);
    console.log(count);  
}
catch (e) {
    console.log(e.message);
}

// result is 1

// if we pass null

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.')

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);  
}
catch (e) {
    console.log(e.message);
}

// result is Invalid array







