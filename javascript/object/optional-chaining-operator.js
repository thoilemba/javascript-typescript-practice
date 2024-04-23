let Person = {
    name: "John"
}

console.log(Person?.name); // John
console.log(Person?.age);  // undefined (there is no age in the Person object)
console.log(Person.someNonExistentMethod?.()); // undefined (there is no method in the Person object)