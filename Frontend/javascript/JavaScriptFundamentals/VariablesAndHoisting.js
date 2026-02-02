// 1. let mordern,

let name = "rajesh";
let age = 23;
let isActive = true;

// let : variables can be reassigned

name = "vamshi";
age = 20;
isActive = false;

console.log(name);

// const (modren, for constants)

const PI = 3.14159;
const siteName = 'RajeshHUB';
const maxUser = 1000;

// this would cause an error 
// PI = 3.14 // typeError : Assignment to constant variable


// example
const user = {
    userName : "RajeshYadav",
    age: 23
};

user.age = 22;
user.city = "Kurnool";
console.log(user);
user.userName = "Srinu"; // it can change 
// this would cause an error (reassigning the variable);
// user = {UserName : "vamshi"}; // typeError


// 3. var (Avoid) is the old way to declare varibale
  var oldVariable = "Don't use this";
  var count = 0;

  // problems with var : data not secure
if (true) {
    var message = "Hello";
}
console.log(message); // "Hello" - accessible outside block!

// Better with let
if (true) {
    let betterMessage = "Hello";
}
// console.log(betterMessage); // ReferenceError - properly scoped

  //===============   Variable Scope     ====================
 // =========>  BlockScope <===============

 {
    let blockVariable = "I'm in a block";
    const blockConstant = "Me too!";
    console.log(blockVariable); // works only inside block
 }

 // console.log(blockConstant) // referenceError : not defined

 // For rxample 

 let score = 85;

 if(score >= 80){
  let grade = "A";
  const message = "Excellent work";
  console.log(grade, message); // works here
 }

 // console.log(grade); // referenceError: grade is not defined

 // ===========>> function Scope <<=======================

 function calculation(){
    let subtotal = 200;
    let tax = 0.10;

    if(subtotal > 50){
        let discount = 10; // block Scoped
        subtotal -= discount;
    }

    // subtotal and tax accessible here
    let total = subtotal * (1 + tax);
    return total;
    // discount is Not accessible here bzc (block scoped);
 }


 //=============>> global variable <<============

 let websiteName = "RajeshHub";
 const version = "1.0.0";

 function displayInfo(){
    // can access globle variable
    console.log(`Welcome to ${websiteName} v${version}`);
 }
 displayInfo();

 // Hoisting Issues

 console.log(hoistedVar); // undefined (not an error)

 var hoistedVar = "I'm hoisted";

 // clearer behavior with let
 // console.log(notHoisted); // ReferenceError
 let notHoisted = "I'm not hoisted";


 // Redeclaration Allowed
// var allows redeclaration
 var count = 1;
 var count = 2; // No error , but confusion

 // Better: let prevents redeclaration
 let betterCount = 1;

 // let betterCount = 2; // SyntaxError: Identifier already declared


 // Variable type checking

 let value = "Hello";

 console.log(typeof value); // string
 console.log(typeof 22); // number
 console.log(typeof true); // boolean
 console.log(typeof undefined); // undefined
 console.log(typeof null); // object (javaScript quirk)
 console.log(typeof []); // object
 console.log(typeof{}); // object
 console.log(typeof[{}]); // object