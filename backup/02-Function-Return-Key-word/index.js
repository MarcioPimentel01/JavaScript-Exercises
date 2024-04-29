// function = a section of reusable code.
            // Declare a code once, use it whenever you want.
            // Call the function to execute that code.

// function return key word

function add01(x, y, z) {
    let result = x + y + z;
    return result;
};
// if we need to use the result of the function for any reason we need to attribute a variable to the result
let answer = add01(92, 81, 33);
console.log(answer);

function add02(x, y, z) { //set the parameter inside the brakets and the code inside de curly braces
    return x + y + z
};
//if we don't need to store the result, you can just console log the function
console.log(add02(12, 25, 33));


// here I'll going to try to make the results of the subtract01 function be added using the add01 function
function subtract01(a, b, c){
    let result = a - b - c;
    return result
};
let sub1answer01 = subtract01(890, 550, 25);
let sub1answer02 = subtract01(900,42, 68);
let sub1answer03 = subtract01(810,12, 350);
console.log(sub1answer01, sub1answer02, sub1answer03);

let totalOfSubtract01Function = add01(sub1answer01, sub1answer02, sub1answer03);
console.log(totalOfSubtract01Function); // I know that is a horroble name for a function but it is only to be easier to identify


//Here I'm going to try to do 3 basic multiplication, use the subtract01 function to subtract the three results, then Add with the answers of the function add01 subtract01 and multiply01

function multiply01(m, n) {
    let result = m * n; // I'm always using let = result because it is inside of the function therefore does not afect global scope.
    return result;
};
let multiplyAnswer01 = multiply01(10, 5);
let multiplyAnswer02 = multiply01(15, 80);
let multiplyAnswer03 = multiply01(23, 42);
console.log(multiplyAnswer01);
console.log(multiplyAnswer02);
console.log(multiplyAnswer03);
console.log(multiplyAnswer01 - multiplyAnswer02 - multiplyAnswer03);
subtract01(multiplyAnswer01, multiplyAnswer02, multiplyAnswer03);
console.log(subtract01(multiplyAnswer01, multiplyAnswer02, multiplyAnswer03));

add01(answer, totalOfSubtract01Function, subtract01(multiplyAnswer01, multiplyAnswer02, multiplyAnswer03));
console.log(add01(answer, totalOfSubtract01Function, subtract01(multiplyAnswer01, multiplyAnswer02, multiplyAnswer03))
)

//equation function

function equation(a, b, c, d, e, f, g, h) {
    let result = a + b * (c / d + e) * (f / g) ** h;
    return result;
}

let result = equation(10, 10, 100, 10, 30, 25, 5, 5);
console.log(result);



// Same thing optmized
// Function to add three numbers
// function add(x, y, z) {
//     return x + y + z;
// }

// // Function to subtract three numbers
// function subtract(a, b, c) {
//     return a - b - c;
// }

// // Function to multiply two numbers
// function multiply(m, n) {
//     return m * n;
// }

// // Example usage of functions
// let addResult = add(92, 81, 33);
// console.log("Addition Result:", addResult);

// let subtractResult = subtract(890, 550, 25);
// console.log("Subtraction Result:", subtractResult);

// let multiplyResult = multiply(10, 5);
// console.log("Multiplication Result:", multiplyResult);

// // Combine results using previously defined functions
// let total = add(addResult, subtractResult, multiplyResult);
// console.log("Total:", total);
