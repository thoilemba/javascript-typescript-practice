// Using object literals
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Using constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
let person1 = new Person('Alice', 25, 'London');

// Using Object.create()
let person2 = Object.create(null);
person2.name = 'Bob';
person2.age = '35';
person2.city = 'Paris';

console.log(person);
console.log(person1);
console.log(person2);