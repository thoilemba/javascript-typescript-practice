let Person = {
    name: 'Alice',
    age: 25,
    address: {
        street: 'Fairy street',
        city: 'Wonderland',
        pin: 12345,
    }
};

console.log(Person);
// checking if the city exits, if exits print its length if not, it gives undefined
console.log(Person.address.city?.length); // 10