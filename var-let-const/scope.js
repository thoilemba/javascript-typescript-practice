// Scope of var, let and const
function example() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(x, y, z); // 10 20 30
    }
    console.log(x);  // 10
    console.log(y); // throws an error, y is not defined
    console.log(z); // throws an error, z is not defined
}

example();
