// FUNCTIONS DECLARATIONS VS EXPRESSIONS
        //2 Ways to define a function - 1.function declaration 2. Anonymous Function

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

