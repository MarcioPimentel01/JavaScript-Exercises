const _btn = document.querySelector('.comic-button');

function openConsole() {
    _btn.addEventListener(`click`, () => {
       alert(`Press F12 to Open Console`)

    })
}
openConsole(); 

// Variable = A container that store a value.
//             Behaves as if the value it contains

//1. declaration    let x;
//2. assignment     x = 100;

const h2Text = document.querySelector(`.myH2`);

let age = 25;
let price = 10.99;
let gpa = 3.5;

console.log(`Your age is ${age}`);
console.log(`This price is $${price}`);
console.log(`My GPA score is ${gpa}`);

console.log(`please invoke the function displayH2, by typing on the console "displayH2()", without the quotes `)

function displayH2 () {
    // using .innerHTML I'm able to display in a column using the <br> element 
    document.querySelector(`.myH2`).innerHTML = `Your age is ${age}<br>`
    document.querySelector(`.myH2`).innerHTML += `This price is $${price}<br>`
    document.querySelector(`.myH2`).innerHTML += `My GPA score is ${gpa}<br>`
}