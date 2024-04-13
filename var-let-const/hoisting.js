// Hoisting of var, let and const
console.log(a);
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;