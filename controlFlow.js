// CONTROL FLOWS
//1 if else

// Hour
// If hour is between 6am and 12pm : Good morning!
// If it is between 12pm and 6pm : good afternoon!
// Otherwise: Good evening!

// let hour = 10;

// If (condition) {
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else if (yetanotherCondition){
//     statement
// }
// else
//     statement


const hour = 1600;

if ( hour >= 600 && hour < 1159)
    console.log('Good morning');
else if (hour >=1200 && hour < 1800 ) 
    console.log('Good afternoon');
else 
    console.log('Good everning');



const height = 19;

if (height >= 18){
    console.log('You are good to go');
} 

else if (height < 15){
    console.log('Go to Sleep')
}

else {
    console.log('you are not old enough');
}

const dice1 = 6;
const dice2 = 3;


if (dice1 === 6 && dice2 === 6) {
    console.log('You rolled a double')
}
else {
    console.log("You didn't");
}

//SWITCH AND CASE

let role;
//let role = 'guest'; //( it will pick Guest User)

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown user')
    
}

//lets do the above with if else statement.

if (role === 'guest')
    console.log('Guest User');
else if (role === 'moderator')
    console.log('Moderator User');
else
    console.log('Unknown User')

// FOR LOOP

// sometime we want to repeat an action a no. of times

//Shift + Alt + Down arrow key to repeat
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')

// WE USE LOOPS ******    ******
//1. For  2.While  3.Do While  4.For in  5.For of

// FOR LOOP **( the loop variable is part of the loop itself ie. let i = 0;)

//for(initialExpression; condition; incrementExpression)
//  for (let i = 0; i < 5; i++)  // i is short for index
//     console.log('Hello World' , i);

    // for (let i = 0; i <= 5; i++) //check the odd numbers btw 1 to 5
    //     if(i % 2 !== 0 ) //check the reminder of i by 2
    // console.log(i);

// for(let i = 5; i >= 1; i--)  // decrement
//     console.log(i);

// WHILE LOOP ( we declare the variable externally)

// let i = 0;  // loop variable inialiased to 0.
// while (i <= 5) { // add a while statement  & in paranthesis (condition)
//     if(i % 2 !== 0) console.log(i); //statement to repeat
//     i++;
//}


//DO WHILE LOOPS

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//INFINITE LOOPS - Be aware infinite loops can crash your browser or CPU.

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//while (true) {
//}

// let x = 0;
// do {
//     x++
// } while (x < 5);

//for (let i = 0; i < 10; )

//FOR IN LOOPS ****
// When we want to display all the properties of this individual object
// const individual = {
//     name: 'Capra',
//     age: 39
// };

// for(let key in individual)
// console.log(key, individual[key]); // Use Bracket notation to display the value of each property

// const drink = ['water', 'wine', 'juice'];

// for (let index in drink)
// console.log(index, drink[index]);

// //FOR OF LOOP

// const laptop = ['hp', 'toshiba', 'lenovo'];
// for ( let index of laptop)
// console.log(laptop);

// BREAK AND CONTINUE

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;  // you get 0 to 10
// }

// // BREAK
// let i = 0;
// while (i <= 10) {
//     if (i === 5) break; // that way you jump out of the loop and get 0 to 4

//     console.log(i);
//     i++; 
// }

// // CONTINUE
// let i = 0;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         i++;
//         continue;  // you get the odd numbers 1,3,5,7,9
//     }

//     console.log(i);
//     i++; 
// }


// EXERCISE******    **********    *************

// 1. Write a function that takes two numbers and return the maximum of the two.



function max (a, b){
    // if (a > b) return a; // using if else statement
    // return b;
    
    return (a > b) ? a : b; //using conditional operator
}

let numbers = max(5, 10);
console.log(numbers);


 // 2. LANDSCAPE OR PORTRAIT
 //Retuns TRUE if image is landscape ie. width is greater than height.
 //OR FALSE if height is greater.



 function isLandscape(width, height) {
    if (width > height) return true; // using if else statement
    return false;

    return (width > height) ? true : false; //using conditional operator
 }
 console.log(isLandscape(800, 600));  // you get true.


 //FIZZBUZZ ALGORITHM Interview question

 // if divisible by 3 => Fizz
 // if divisible by 5 => Buzz
 // if divisible by both 3 and 5 => FizzBuzz
 // Not divisble by 3 or 5 => input
 // Not a number => 'Not a Number'

 //  A function fizzBuzz. We give it an input and it returns a string

 const output = fizzBuzz(15);
 console.log(output);

 function fizzBuzz(input) {
    if (typeof input !== 'number')
    return 'NaN';

    if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';

    return input;
 }


 // EXCERCISE 4 - DEMERIT POINTS


 // speedLimit = 70kmph
 // 5kmph above speedLimit => 1 Point
 //Math.floor(1.3)
 // 12points -> suspended

 checkSpeed(129);

 function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint)
        console.log('Ok');
    else {
       const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if ( points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
 }


 // EXERCISE 5 - EVEN AND ODD NUMBERS

 showNumber(10);

 function showNumber(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, "EVEN")
        else
            console.log(i, "ODD");

    // Another way. using conditional operator.
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    console.log(i, message);
    } 
 }

//EXERCISE 6 - COUNT TRUTHY

//Falsy Values list are
// undefined
// null
// ''
// false
// 0
// NaN

const isActive = true;
if (isActive)
 console.log('HeyHello')

 // or

 const car = 'Nissan'; // Truthy 
 if (car) console.log ('HelloHey')

//Question. 

const array = [0, null, undefined, '',1 , 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)  //for of loop
        if (value)
        count++
    return count;
}

//EXCERCISE 7 - STRING PROPERTIES
//use for in loop 
const movie = {
    title: 'Matrix',
    releaseYear: 1999,
    rating: 9.5,
    director: 'Neo'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)  // for in loop
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
 
}

// EXERCISE 8 - SUM OF MULTIPLES OF 3  & 5

console.log(sum(10));

// multiplesOf 3: 3, 6, 9;
// multiplesOf 5: 5, 10;
// sums up to 33

function sum(limit) {
    let sum = 0;  // initialization

    for (let i = 0; i <= limit; i++)  // for loop
        if (i % 3 === 0 || i % 5 ===0) // if i is a multiple of 3 or 5.
            sum += i;

    return sum;
}

// EXERCISE 9 - CALCULATE THE GRADE OF A STUDENT

const marks = [80, 80, 50]; //first calculate the average grade = 70

// 0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) { //first to calculate the average sum
    let sum = 0;   // initialize a variable
    for (let mark of marks)  // for of loop
        sum += mark;    // this is the total
    let average = sum / marks.length; // the average

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'

}

//Another way to the Question = is single responsibility principle.*****


function calculateGrade(marks){
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}

function calculateAverage(array) { //first to calculate the average sum
    let sum = 0; // initialize a variable
    for (let value of array)// for of loop
        sum += value;  // this is the total
    return sum / array.length; // the average
}

//EXERCISE 10M- STARS

showStars(5);

function showStars(rows) {
    for(let row = 1; row <= rows; row++) {//start with a For Loop
        let pattern = '';
        for (let i = 0; i < row; i++) // A nested loop(a loop inside another loop)
            pattern += '*';
        console.log(pattern);
    }
}


// EXERCISE 20 - show PRIME NUMBERS up to limit 20

// In mathermatics Numbers can be Prime or Composite
// PRIME (a PRIME NO. whose its factors are only 1 and itself- 
// It cannot be divided evenly into another number.)

// 12(Composite Number)  = factors of 12 are 1, 2, 3, 4, 6, 12
// So 12 can be divided evenly by its factors.

// 11( A Prime Number) = factors are 1, 11.
// 13( A Prime Number) = factors are 1, 13.




showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
           if (number % factor === 0) {
            isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(number);
    }
}


//Another way to the Question = is single responsibility principle.*****
showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
        return false;

    return true;
}

