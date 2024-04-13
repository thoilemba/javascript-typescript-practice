// Creating a new symbol
const mySymbol = Symbol();

// Using symbols as property keys
const obj = {
    [mySymbol]: 'hello'
};

// Accessing the property using the symbol key
console.log(obj[mySymbol]); // Output: value

// Symbols are unique
const anotherSymbol = Symbol();
console.log(mySymbol === anotherSymbol); // Output: false
