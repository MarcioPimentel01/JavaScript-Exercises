const _btn = document.querySelector(`.comic-button`);
_btn.addEventListener(`click`, () => {
    alert(`Press F12 to open Console`)
})


// Aritimetic Operators = operands (values, variables, etc...)
//                      operators ( + - / *);
//                      eg. 11 = x + 5;


let students = 50


students = students + 10 //display 60
students = students - 10 // display 50
students = students * 2 // display 100
students = students / 2 // display 50
students = students ** 2 // display 2500
// for square root we need to use a JavaScript Method called Math.sqrt()
students = Math.sqrt(2500); // display 50
// Modulos, That is a very importan one, please pay attention to it
students = students % 3 // display 2, because 50/3 = 16 and the rest is 2.
students = students % 1 // displays 0 because 50/1 is = 50, there is no reminder
students = students + 50
 


// there are other forms to do the same calculation

students += 50 // displays 100
students -= 50 // displays 50
students *= 2 // displays 100
students /= 2 // displays 50
students **= 2 // displays 2500
// for square root, the Math.sqrt still aply
students = Math.sqrt(2500); // display 50
students %= 3 // displays 2

// we also have the increment and decrement operator that increase or decrease by 1
// since my last value is 2 from the reminder above, the next line will increment by 1 and display 3

students++

// the decrement will display 2

students--

console.log(students);

// Now lets talk about operator precedents
// 1 Parenthesis ()
// 2 explenents
// 3 multiplication, division and Modulo
// 4 addition and subtraction

let result = 1 + 2 * 3 + 4 ** 2; // displays 23
let result2 = 12 % 5 + 8 / 2; // displays 6
let result3 = 6 / 2 ** (2 + 5); // displays 0.046875






console.log(result)
console.log(result2)
console.log(result3)