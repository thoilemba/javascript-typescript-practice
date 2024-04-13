var a = 1;
let b = 2;
const c = 3;

var a = 10;
// let b = 20; // Cannot redeclare block - scoped variable 'b'
// const c = 30; // Cannot redeclare block - scoped variable 'c'

console.log(a); // 10
console.log(b); // 2
console.log(c); // 3