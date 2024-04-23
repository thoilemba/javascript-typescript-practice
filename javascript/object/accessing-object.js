let Person = {
    name: 'John',
    age: 25,
    'work exp': 3,
};
console.log(typeof Person,":", Person);

// ways of accessing object values: using dot notation and bracket
console.log(Person.name, Person.age);  // we cannot use the dot operator on the 3rd item as there is space
console.log(Person['name'], Person['age'], Person['work exp']);

// updating values
Person.name = 'Tom';    // using dot notaion
Person['age'] = 23;     // using bracket

console.log(Person.name, Person.age);
console.log(Person['name'], Person['age'], Person['work exp']);