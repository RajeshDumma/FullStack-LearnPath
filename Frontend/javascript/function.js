function fcn(){
    console.log('function calling');
}
fcn();

function fn(name){
    console.log("function calling with parameter passing");
console.log(name);
}
fn("rajesh");


// type castying

let age = 20;

console.log(typeof(age));

let a = String(age);
console.log(typeof(a));

let x = "100";
let y = 20;

console.log(typeof(x) +" "+typeof(y));
console.log(y + x);

let z = Number(x);
console.log(z + y);

console.log("5" + 3 - 2);
