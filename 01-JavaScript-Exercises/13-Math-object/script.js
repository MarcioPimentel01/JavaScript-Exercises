const _btnConsole = document.querySelector(`.comic-button`)
const _displayMessage = document.getElementById(`variableDisplay`)

_btnConsole.addEventListener(`click`, () => {
    _displayMessage.innerText = `Please Press F12 to open console`
})

//Math = a build-in object that provides a collection of properties and methods
let PI = Math.PI

console.log(PI) //Logs 3.141592653589793

// You can also console.log any Math object, like:

console.log(Math.E) //Eulers Number, returs 2.718281828459045

//Math.abs(): Returns the absolute value of a number.

console.log(Math.abs(-10)) // Displays 10

//Math.round(): Rounds a number to the nearest integer.

console.log(Math.round(4.7)) //Displays 5
console.log(Math.round(4.3)) //Displays 4

//Math.floor(): Rounds a number down to the nearest integer.

console.log(Math.floor(9.9)) //Displays 9
console.log(Math.floor(9.1)) //Displays 9

//Math.ceil(): Rounds a number up to the nearest integer.

console.log(Math.ceil(9.9)) //displays 10
console.log(Math.ceil(9.1)) // Displays 10

//Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random())// displays a float number in between ) and 1. It is normally used together with Math.Floor
console.log(Math.floor(Math.random() * 1000))

//Math.max(): Returns the largest of zero or more numbers.

console.log(Math.max(10, 20, 30)); // Outputs: 30

//Math.min(): Returns the smallest of zero or more numbers.

console.log(Math.min(10, 20, 30)); // Outputs: 10

//Math.pow(): Returns the base to the exponent power, that is, base^exponent.

console.log(Math.pow(2, 3)); // Outputs: 8 (2 raised to the power of 3)

// Math.sqrt(): Returns the square root of a number.

console.log(Math.sqrt(16)); // Outputs: 4

// Math.sin(), Math.cos(), Math.tan(): Returns the sine, cosine, and tangent of an angle (given in radians).

console.log(Math.sin(Math.PI/2)); // Outputs: 1 (sine of 90 degrees)
console.log(Math.cos(0)); // Outputs: 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI/4)); // Outputs: 0.9999999999999999 (tangent of 45 degrees)





