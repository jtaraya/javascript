//ARITHMETIC OPERATORS

//It will take two operands ie. w and z
let w = 10;
let z = 3;

// (w + z) this is an expression in javascript
// an expression produces a value.

// console.log(w + z); 
// console.log(w - z); 
// console.log(w * z);
// console.log(w / z);
// console.log(w % z); // % reminder of division
// console.log(w ** z); // The exponentiation ( ** ) operator returns the result of raising the first operand to the power of the second operand

//Increment (++)
//console.log(w++);
// console.log(w);

//Decrement (++)
//console.log(--w);

// -ASSIGNMENT OPERATORS

// let q = 10;

// q = q + 5;
// q += 5;

// q = q * 5;
// q *= 5;

// COMPARISON OPERATORS

let e = 1;

//Relational Operators

console.log(e > 0); // you get true ( a boolean)
console.log(e >= 1); // you get true
console.log(e < 1); // you get false
console.log(e <= 1); // you get true

//Equality Operators

console.log(e === 1); // (Strict Equality Operator)===equals to .you get true
console.log(e == 1); // (Lose Equality Operator) ==equals to .you get true
console.log(e !== 1); // !==Not equals to . you get false

//Strict Equality Operator (Type  + Value)
console.log(1 === 1); // Compares Type  + Value. you get true
console.log('1' === 1); // Compares Type  + Value.type is a string so you get false

// Lose Equality Operator (It will convert the right side to left side then Checks if Values are equal)
console.log(1 == 1); //you get true
console.log('1' == 1); //you get true
console.log(true == 1); //you get true

//TERNARY OR CONDITIONAL OPERATORS

//If a customer has more than 100 points.
//They are a 'gold' customer. Otherwise they are a 'silver 'customer.

let points = 101;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//LOGICAL OPERATORS

//Logical  AND (&&)

//Returns TRUE if both operands are TRUE
console.log(true && true);  //you get true
console.log(false && true);  //you get false
console.log(false && false);  //you get false

//Real Life Example
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible' , eligibleForLoan); //you get true

//Logical  OR (||)

//Returns TRUE if one of the operands is TRUE
let highCash = false;
let goodScore = true;
let eligibleLoan = highIncome || goodCreditScore;

console.log(eligibleLoan); //you get true

//NOT (!)

//Returns TRUE if one of the operands is TRUE

let applicationRefused = !eligibleForLoan;

console.log('Application Refused' , applicationRefused); //you get false

//LOGICAL OPERATORS WITH NON-BOOLEANS

// false || true (we get true)
// false || 'Taraya' (we get Taraya)
// false || 1 (we get 1)

// If the operand is not a boolean true or false.
//It will be interpreted as truthy or falsy

//Falsy (false) has the values (undefined, null, 0,false,'',NaN)
// Anything that is not Falsy -> its Truthy

// false || 1 || 2 (we get 1) 
// After it gets Truthy in 1. It doesn't continue. (short-circuiting)

//Example if a client picks a colour


let userColor = 'red' ;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); // you get red. if instead of red its undefined you get blue.


//BITWISE OERATORS
//(Google decimal to binary converter)
// 1 Bite = 00000001 Bit
// 2 Bite = 00000010 Bit
// 3 bite = 00000011 bit

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Example if someone has permission to Read , Write, Execute
// 00000100 (Read premission)
// 00000110 (Write premission)
// 00000111 (All premission)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// to get more permissions
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no'; //TERNARY OR CONDITIONAL OPERATORS
console.log(message);

//OPERATORS PRECEDENCE

let x = 2 + 3 * 4;

console.log(x); //you get 14

let r = (2 + 3) * 4;

console.log(r); //you get 20

//Quiz
let t = 10
let u = (t>10) ? 1 : 0;
console.log(u); // you get  0


//Exercise
//Swap the variables
let i = 'red';
let o = 'blue';

//create a new variable

let p = i;
i = o; // both variables at this point are blue
o = p; // now they are swapped.

console.log(i);
console.log(o);










