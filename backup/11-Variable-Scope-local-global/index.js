// Variable Scope = where a variable is recognized
//                  and accessible (local vs global)


let y = 2

function function01 () {
    let x = 1;
    return x;
}

//variables located inside of the function can only be accessed inside of the function
function function02 () {
    let x = 1;
    return x
}

console.log(function01());
console.log(function02()); //both console.log should display 1, because even though we are using x twice they are inside of a function therefore in local scope.

// now lets declare a global variable


function function03() {
    return y;
}
console.log(y); //Displays 2, because it can see the value of y outside on the global scope

// console.log(x); // display as an error, because x is inside of a function, to see the value of x I should console.log the either function 1 or 2


console.log(function01()); // Display 1

function function04() {
    return y;
}

console.log(function04()); // This will display 2
