const num1 = 42; // Number created using number literal - primitive
const num2 = Number(42); // Number created using constructor - primitive
const num3 = new Number(42); // Number created using constructor with new - Object
console.log(typeof num1, typeof num2, typeof num3);
console.log(num1 === num2); // true
console.log(num1 === num3); // false
console.log(num2 === num3); // false

const n1 = new Number(10);
const n2 = new Number(10);
console.log(typeof n1, typeof n2);
console.log(n1 === n2); // false
console.log(n1.valueOf() === n2.valueOf()); // true
// n1 and n2 are two separate instances of the Number object,
// they refer to different objects in memory.
