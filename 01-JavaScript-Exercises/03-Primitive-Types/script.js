const _btn = document.querySelector('.comic-button');
const _btnDisplay = document.getElementById(`display`)
const displayVar = document.getElementById(`variableDisplay`)

function openConsole() {
    _btn.addEventListener(`click`, () => {
       alert(`Press F12 to Open Console`)

    })
}
openConsole(); 

_btnDisplay.addEventListener('click', () => {
    displayCode()
});

function displayCode() {
    displayVar.innerHTML = '';

    const variables = [
        { name: '"one"', value: 64, typeOf: '"number"' },
        { name: '"two"', value: `"656302"`, typeOf: '"string"' },
        { name: '"three"', value: `"false"`, typeOf: '"boolean"' },
        { name: '"four"', value: `"null"`, typeOf: '"null"' },
        { name: '"five"', value: `64.55`, typeOf: '"number - float"' },
        { name: '"six"', value: `"Howdy!"`, typeOf: '"string"' },
        { name: '"seven"', value: `"undefined"`, typeOf: '"undefined"' }
    ];

    variables.forEach(variable => {
        const variableDiv = document.createElement('div');
        variableDiv.innerText = `If the variable ${variable.name}, has the value ${variable.value}, when we use "typeof" the return should it be ${variable.typeOf}`;
        variableDisplay.appendChild(variableDiv);
    });
}

// Primitive data types include undefined, string, number, boolean and null
// Undefined variables haven't been assigned values yet.

let myUndefined;

//A string is a series of characters and is surrounded by quotes
const myStringWelcome = 'Hello World, again!'
const myStringPassword = 'P@ssw0rd!@'

// A number can be either an integer od a decimal
const myNumberInt = 100
const myNumberDecimal = 100.100

// Booleans have only two values: true or false.
const isMyBooleanTrue = true
const isMyBooleanFalse = false;

// Null is both a value and type.  It represents the concept of nothing. This differs from undefined, which is an unknown value. Null is known to be nothing.
const myNull = null;

// TO check the type of data, use typeof followed by the name of the variable
// logs undefined
console.log(typeof myUndefined);

// logs number
console.log(typeof myNumberDecimal);

// logs boolean
console.log(typeof isMyBooleanFalse);

// logs string
console.log(typeof myStringPassword);

// logs null
console.log(typeof myNull);

// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!
// Logs number
let myVariable = 33;
console.log(typeof myVariable);

// myVariable is reassigned; Logs boolean
myVariable = false;
console.log(typeof myVariable);


// Exercises.

const one = 64;
console.log(`The variable one is` + ' ' + typeof one)
const two = "656302";
console.log(`The variable two is` + ' ' + typeof two)
const three = false;
console.log(`The variable three is` + ' ' + typeof three)
const four = null;
console.log(`The variable four is` + ' ' + typeof four)
let five = 64.55; 
console.log(`The variable five is` + ' ' + typeof five)
let six = "Howdy!";
console.log(`The variable six is` + ' ' + typeof six)
let seven;
console.log(`The variable seven is` + ' ' + typeof seven)

// Insert comments to explain what each console log below will log to the console
console.log(typeof one);
console.log(typeof two); 
console.log(typeof three); 
console.log(typeof four); 
console.log(typeof five); 
console.log(typeof six);
console.log(typeof seven);

five = "Hello!";
console.log(`The variable five is` + ' ' + typeof five)
six = false;
console.log(`The variable six is` + ' ' + typeof six)
seven = 23;
console.log(`The variable seven is` + ' ' + typeof seven)

// Insert comments to explain what each console log below will log to the console
console.log(typeof five);
console.log(typeof six);
console.log(typeof seven);
