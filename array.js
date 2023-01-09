// ** 1 - ARRAYS;
// **  #2 -  ADDING ELEMENTS
// Arrays are objects.

const number   = [3, 4];

// Using dot notation we are going to add new elements at the
// End
// Beginning
// middle 
// of the array

// PUSH METHOD.
// End

numbers.push(5, 6);


// result - added 5 and 6 to the END of the array (3, 4, 5, 6)

// UNSHIFT METHOD
// Beginning
numbers.unshift(1, 2);


// result - added 1 and 2 to the BEGINNING of the array(1, 2, 3, 4, 5, 6)

// SPLICE METHOD
// middle

numbers.splice(2, 0, 'a', 'b') // 0 is not to delete anything

console.log(numbers);

// result - 'a' and 'b'added after 2 to the middle of the array(1, 2, 'a', 'b', 3, 4, 5, 6)


// ** 3 -  FINDING ELEMENTS  
// (PRIMITIVES)

const numerical = [ 1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));



// If the element exists in the array. 
// the method will return the index of that element in the array.
// If it doesn't exists it will return -1

// results is 0 (the index of the element in the array)

console.log(numbers.lastIndexOf(1));

// results is 3 (the last index of the element in the array)

// to see if an element exists in an array

console.log(numbers.indexOf(1) !== -1);

//result - we get true.

// Another new way in javascript  to see if an element exists

console.log(numbers.includes(1));

//result - we get true.

console.log(numbers.lastIndexOf(1, 3)); // to start from a different element


// results we get 3

// ** 4 -  FINDING ELEMENTS (reference types)
// (OBJECTS)

// you can always Google javascript array find
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// expected output: 12

const courses = [
    { id: 1, grade: 'a'},
    { id: 2, grade: 'b'},
];


const course = courses.find(function(course) {
    return course.grade === 'a';
});

console.log(course);

// result { id: 1, grade: 'a'}

// ** 5 - ARROW FUNCTIONS

const lessons = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const lesson = lessons.find(lesson => lesson.name === 'a');

console.log(lesson);

// result { id: 1, name: 'a'}


// ** 6 - REMOVING ELEMENTS FROM AN ARRAY.

const number1 = [1, 2, 3, 4];

//End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// result (3) [1, 2, 3]

//Beginning
const first = numbers.shift()
console.log(first);

// when you log in numbers in console

// result (1) [2, 3]

// Middle
numbers.splice(2, 1)
console.log(numbers);

// result (3) [1, 2, 4] so 3 is removed

// if you want to remove more elements

// numbers.splice(2, 2)
// console.log(numbers);
// result (2) [1, 2] so 3 and 4 are removed


// ** 7 - EMPTYING AN ARRAY.

let number2 = [1, 2, 3, 4];

// Solution1
numbers = [];

console.log(numbers);

// result is []

// if you have another refernce to the original array eg

let number3 = [1, 2, 3, 4];
let another = numbers;

// Solution1
numbers = [];

console.log(another);

// result is (4) [1, 2, 3, 4]
// if you log in numbers its []
// it won't work

// If you have multiple references

// Solution 2
// set the length property to 0

numbers.length = 0;
console.log(numbers);
console.log(another);

// result for numbers []
// result for another []

// Solution 3
// splice method

numbers.splice(0, numbers.length);

console.log(numbers);
console.log(another);

// result for numbers []
// result for another []

// Solution 4 
// pop method

// and put it in a loop

while (numbers.length > 0)
numbers.pop();

// result for numbers []
// result for another []

// Solution 4 can take time and memory depending on the calling
// Solution 2 and 1 are best.


// *** 8 COMBINING AND SLICING ARRAYS

const second = [1, 2, 3];
const third = [4, 5, 6];

const combined = second.concat (third);
console.log(combined);

// result  (6) [1, 2, 3, 4, 5, 6]

// another method is slice. to slice the array into two parts.

const slice = combined.slice(2, 4)

console.log(slice)

 // result  (2) [ 3, 4]


// const slice = combined.slice(2) //exclude the end index 4.

// console.log(slice)

 // result  (2) [ 3, 4, 5, 6]


// const slice = combined.slice() //exclude the starting index

// console.log(slice)

 // result  (6) [1, 2, 3, 4, 5, 6]


 //  *** 9 THE SPREAD OPERATOR

    const forth = [1, 2, 3];
    const fifth = [4, 5, 6];

    const combined = [... forth, ... second]; // this is exactly like [1, 2, 3, 4, 5, 6]
    const combined = [... forth,'a', ... second, 'b'];  // you can add something 

    //const copy = combined.slice();
    const copy = [...combined]

//  *** 10 THE SPREAD OPERATOR

const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

    //numbers.forEach(function(number){
    //   console.log(number);
    //});

    // A better way (simple) of writing this is

    numbers.forEach((number, index) =>console.log(index, number));


//  *** 11 JOINING ARRAYS

    const numbers = [1, 2, 3];
    const joined = numbers.join(',');
    console.log(joined);

    const message = 'This is my first message';
    const parts = message.split(' ');
    console.log(parts);

    const combined = parts.join('-');
    console.log(combined);  // used in url slug coz a url cannot have spaces

//  *** 12 SORTING ARRAYS

const numbers [2, 3, 1];
numbers.sort();
console.log(numbers);

//result (3) [1, 2, 3]

// Another method is the reverse

numbers.reverse();
console.log(numbers);

//result (3) [3, 2, 1]

// When you have objects

const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'},
];

courses.sort(function(a, b) {
    // if a < b => -1
    // if a > b => 1
    // if a === b => 0

    // google ascii table
    // https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html


    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if  (nameA < nameB) return -1;
    if  (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

// google ascii table
// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html


//  *** 13 TESTING THE ELEMENTS OF AN ARRAY


const numbers [1, -1, 2, 3];

// to test if all numbers in the array are positive

const atLeastOnePositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// result is true



//  *** 14 FILTERING AN ARRAY

const numbers [1, -1, 2, 3];

// If we want to return only the positive numbers.

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);

// result [1, 2, 3]


//  *** 15 MAPPING AN ARRAY

// Mapping to strings

const numbers [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n=> '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);


// Mapping to objects

const numbers [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)   
    .map(n=> ({ value n }) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

    // this is called chaining

console.log(items);


//  *** 16 REDUCING AN ARRAY
// when you want to calculate the sum in the array
// similar to calculating the total cost in ashhopping cart.


const numbers = [1, -1, 2, 3]

let sum = 0;

for (let n of numbers)
// sum = sum + n; or another way
sum += n;

console.log(sum);

// results = 5

// Another way is using the reduce method

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(sum);

// results = 5

//How above works

// a= 0, c = 1 => a = 1
// a= 1, c = -1 => a = 0
// a= 0, c = 2 => a = 2
// a= 2, c = 3 => a = 5


// A Cleaner way

// const sum = numbers.reduce(
    //  (accumulator, currentValue) => accumulator + currentValue );


// EXERCEISE 1 - WRITE A FUNCTION CALLED arrayFromRange

const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
}

// result (4) [1, 2, 3, 4]

//if the max is smaller than the min array ie (1, -4);

//result  []


// EXERCEISE 2 -  use Include method

// to see if a given number exists in an array

//return true or false

const numbers = [1, 2, 3, 4]

console.log(numbers.include(1));

// Write a function include(array, searchElement){ } to return true or false

function include(array, searchElement){
    for (let element of array)
        if (element == searchElement)
            return true;
    return false;
}

// results is true

//   EXERCEISE 3 -  EXCEPT

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded){ 
    const output = [];
    for (let element of array)
    if(!excluded.includes(element))
        output.push(element);
}

// result (2) [3, 4]


//   EXERCEISE 4 -  MOVING AN ELEMENT

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0 , 1);

console.log(output);

function move(array, index, offset) {

    // to do some validation
    const position = index + offset;
    if (position >= array.length || position  < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array]; //use the spead operator to copy the original array ie [1, 2, 3, 4];
    const element = output.splice(index, 1)[0];  // to remove an element in an array we use the splice method
    output.splice(position, 0, element)   // to add it back in a specific place we use the splice menthod
    return output;
}

// result (4) [2, 1, 3, 4]

//  const output = move(numbers, 0 , 2); (if you move it 2 positions)

// result (4) [2, 3, 1, 4]

//  const output = move(numbers, 0 , 4); (if you move it 4 positions)

// result Invalid offset.

//   EXERCEISE 5 -  COUNT OCCURRENCES

const numbers = [1, 2, 3, 4, 1];

const count= countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
//     let count = 0;
//     for (let element of array)
//         if (element === searchElement)
//             count++;
//         return count;
// }

// result  2

// Another way

return array.reduce( (accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 :0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;

}, 0):
}

// result  2


// EXERCISE 6 - GET MAX
// create function getMax, give it an array and it returns the largest number in the array

const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
    if (array.length === 0)
        return undefined;  // if you pass an empty array result = undefined

    let max = array[0];

    for (let i = 1 < array.length; i++)
     if (array[i] > max)
        max = array[i];

    return max;
}


// result is 3


// Now lets use the reduce method

const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
    if (array.length === 0)
        return undefined;  // if you pass an empty array result = undefined

return array.reduce((a, b) =>(a > b) ? a : b);
}

// result is 3


// EXERCISE  7 - MOVIES


const movies = [
    { title: 'a', year: 2023, rating: 4.5 },
    { title: 'b', year: 2023, rating: 4.7 },
    { title: 'c', year: 2023, rating: 3 },
    { title: 'd', year: 2027, rating: 4.5 },
];


// Write code to get all the movies in 2018 with rating >4
// Sort them by their rating
// In Descending order
// Pick their title
// result should be 'b' and 'a'

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating) // a = 4.5 - b = 4.7 = 0.2
    .reverse()
    .map(m => m.title)

    console.log(titles)

    // result (2) ["b", "a"]
