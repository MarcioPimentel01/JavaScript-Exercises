const _btn = document.querySelector(`.comic-button`)

_btn.addEventListener(`click`, () => {
    alert(`Please press F12 to open the Console`)

});

const a = "50";
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;


const expression1 = (b === e);

const expression2 = (e < d);

console.log(a == b);

// b and e both hold number 50 and are strictly equal
console.log(b === e);

// c is greater than b returns true
console.log(c > b);

// d is less than 1 returns true
console.log(d < 1);

// Use logical operators so all expressions below log to the console as true
// Use || to return true
console.log(expression1 || expression2);

// Use ! and && to return true
console.log(expression1 && !expression2);


// Remove (!) from expression1 so one is true 
console.log(expression1 || expression2)