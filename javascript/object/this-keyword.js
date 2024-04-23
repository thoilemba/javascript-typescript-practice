let Person = {
    name: 'Alice',
    age: 25,
    address: {
        street: 'Fairy street',
        city: 'Wonderland',
        pin: 12345,
    },
    getDetail: function () {
        // using direct property access
        console.log(Person.name, Person.age, Person.address.street, Person.address.city, Person.address.pin);
        // using "this" keyword
        console.log(this.name, this.age, this.address.street, this.address.city, this.address.pin);
    }
};

Person.getDetail();
