let data = (param, param_two) => {
    console.log("Parameters:", param, param_two)
    console.log("Sum:", param + param_two)
}

data(5, 10)

// arrow function in one line;

let multiply = (a, b) => console.log("Multiplication:", a * b)

multiply(4, 6)

// arrow function without return keyword

let square = () => 7 * 7

console.log("Square:", square())
