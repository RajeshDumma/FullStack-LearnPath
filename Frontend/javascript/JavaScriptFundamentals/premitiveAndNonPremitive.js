// premitive dataTypes

// 7 types
 // number , string, boolean, undefined, null , symbol(ES6+), BigInt(ES2020+)

 // non primitives dataTypes
// object, Array, Function

// Integers

let age = 22;  // Integer
let price = 99.90; // float-point
let bigNumber = 1.5e6; // Scientific notation , 1,500,000
let smallNumber = 2.5e-4; // 0.00025
let infinity = Infinity; // Special numeric values
let negativeInfinity = -Infinity;
let NotANumber = NaN; // Not a Number

console.log(typeof age); // number
console.log(typeof price); // number
console.log(typeof infinity); // number
console.log(typeof NaN); // number  all are Numbers

// working with Numbers

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);  // 1000 (exponentiation)

// number methods

let num = 123.456;
console.log(num.toFixed(2)) // 123.46  // If the next digit ≥ 5, round up
console.log(num.toPrecision(4));  123.5
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

// checking for valid Number
console.log(isNaN("hello"));  // "hello" cannot become a valid number → results in NaN, true
console.log(isFinite(100));  // Is it a number (after conversion)
console.log(isFinite(Infinity));  // Not a number




