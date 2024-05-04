// 01 Temperature Converter:
// Create a program that prompts the user to enter a temperature in Celsius. 
// Then, use a conditional statement to determine if the temperature is above or 
// below freezing (0 degrees Celsius). Output a message to the user indicating 
// whether the temperature is freezing or not.

const _celsius = document.querySelector(`.convert-to-celsius`)
const _message = document.getElementById(`display-message`)
const _messageGrade = document.getElementById(`display-grade`)


const freezing = 0
const cold = 6
const ambient = 17
const warm = 22
const hot = 40
const veryHot = 60
const boiling = 100

const exFreezing = (freezing <= freezing)
const exCold = (cold > freezing)
const exAmbient = (ambient > cold)
const exWarm = (warm > ambient)
const exHot = (hot > warm)
const exVeryHot = (veryHot > hot)
const exBoiling = (boiling >= boiling)



_celsius.addEventListener(`click`, () => {
    hotCold()
})

function hotCold () {
    value = document.getElementById(`celsius-input`).value;
    if (value === freezing || value <= freezing) {
        _message.innerHTML = `Frezzing water, please not that water freezes at 0 degrees celsius`
    } else if (value === cold || value < ambient) {
        _message.innerHTML = `Cold water, good for soft drinks`
        console.log(`cold water`)
    } else if (value === ambient || value < warm) {
        _message.innerHTML = `Room ambient Water`
        console.log(`water in room ambient`)
    } else if (value === warm || value < hot) {
        _message.innerHTML = `Warm Water, good for pools`
        console.log(`Warm Water`);
    }else if (value === hot || value < veryHot) {
        _message.innerHTML = `Hot Water, good for showers`
        console.log(`hot Water, good for shower`)
    } else if (value === veryHot || value < boiling) {
        _message.innerHTML = `Very hot Water, may cause burns`
        console.log(`hot water, may cause burns`)
    } else if (value == boiling) {
        _message.innerHTML = `Boiling water `
        console.log(`boiling water`)
    } else 
    _message.innerHTML = `Please not that above 100 degrees celsius the water is evaporating`
    console.log(`The ebulition point for water in celsius is 100 degree`)
}

document.getElementById(`celsius-input`).onkeyup = function () {
    let input = parseInt(this.value) // my html input is already only for numbers, this is just a reminder that is possible 
    if (input < 0 || input > 100)
    _messageGrade.innerText = `Value should be between 0 - 100`
    console.log("Value should be between 0 - 100");
    return;
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 02 Grade Calculator:
// Write a program that prompts the user to enter a numerical grade (0-100). 
// Use conditional statements to convert the numerical grade to a letter grade 
// (A, B, C, D, or F) based on the following criteria:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Output the letter grade to the user.

const _displayGrade = document.getElementById(`display-grade`)
const _btnGeades = document.querySelector(`.your-grade`)

_btnGeades.addEventListener(`click`, () => {
    grades()
})


function grades () {
    let value = document.getElementById(`grade-input`).value
    if (value === 0 || value <= 59) {
        _displayGrade.innerText = `your grade is "F"`
        console.log(`Your grade is "F"`)        
    } else if (value === 60 || value <= 69) {
        _displayGrade.innerText = `your grade is "D"`
        console.log(`Your grade is "D"`)
    } else if (value === 70 || value <= 79) {
        _displayGrade.innerText = `your grade is "C"`
        console.log(`Your grade is "C"`)
    }  else if (value === 80 || value <= 89) {
        _displayGrade.innerText = `your grade is "B"`
        console.log(`your grade is "B"`)
    }  else if (value === 90 || value <= 100) {
        _displayGrade.innerText = `your grade is "A"`
        console.log(`Your grade is "A"`)
    }
}

document.getElementById(`grade-input`).onkeyup = function () {
    let input = parseInt(this.value)
    if (input < 0 || input > 100)
    _messageGrade.innerText = `Values must to be between "0" and "100"!`
    console.log(`Values must to be between "0" and "100"!`)
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 03 Leap Year Checker:
// Create a program that prompts the user to enter a year. Use a conditional statement to 
// determine if the year is a leap year or not. A year is a leap year if it is divisible 
// by 4, but not divisible by 100 unless it is also divisible by 400. Output a message 
// indicating whether the year is a leap year or not.

const _btnYear = document.querySelector(`.leap-year`)
const _msgYear = document.getElementById(`display-year`)


_btnYear.addEventListener(`click`, () => {
    console.log(`ok`)
    leapYear()
})

function leapYear() {
    let value = document.getElementById(`year-input`).value
    if (value % 4 === 0 && value % 400 === 0) {
        _msgYear.innerText = `${value}, is a leap year`
        console.log(`${value}, is a leap year`)
    } else 
    _msgYear.innerText = `${value}, is not leap year`
    console.log(`${value}, is not a leap year`)
}

document.getElementById(`year-input`).onkeyup = function () {
    let input = parseInt(this.value);
    if (input <= 0 || input > 30000)
    _msgYear.innerText = `Please insert values between 1 and 30000`
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 04 Number Comparison:
// Write a program that prompts the user to enter two numbers. Use conditional statements to 
// determine which number is larger, or if they are equal. Output a message indicating the 
// comparison result to the user.

const _msgBiggerNumber = document.getElementById(`display-bigger-number`);
const _submitNumbers = document.querySelector(`.submit-number`)




_submitNumbers.addEventListener(`click`, () => {
    compareNumbers()
    
})


function compareNumbers() {
    let value01 = document.getElementById(`number01-input`).value
    let value02 = document.getElementById(`number02-input`).value
    
    limitator(value01, value02)
    
    if (value01 > value02) {
        _msgBiggerNumber.innerText = `the number on box 1 "${value01}" is bigger than "${value02}" on box 2`
    } else if (value01 < value02) {
        _msgBiggerNumber.innerText = `the number on box 1 "${value01}" is minor than "${value02}" on box 2`
    } else if (value01 === value02) {
        _msgBiggerNumber.innerText = `There is no bigger number "${value01}", are equals`
    } 
}

function limitator (value01, value02) {

    if (value01 <= 0 || value01 > 1000000 || value02 <= 0 || value02 > 1000000) {
    _msgBiggerNumber.innerText = 'Please insert values between 1 and 1000000';    }

}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Password Strength Checker:
// Create a program that prompts the user to enter a password. Use conditional statements to check the strength of the password based on the following criteria:
// Weak: Less than 8 characters
// Medium: 8-12 characters
// Strong: More than 12 characters
// Output a message indicating the strength of the password to the user.


const _msgPassword = document.getElementById(`display-message-password`)

document.addEventListener(`click`, () => {
    passwordChecker()
})


function passwordChecker() {
    let size = document.getElementById('password').value;
    
    let length = size.length; // Get the length of the password string

    if (length <= 7) {
        _msgPassword.innerText = 'Strength Level: Weak'
        console.log('Strength Level: Weak');
    } else if (length <= 12) {
        _msgPassword.innerText = 'Strength Level: Medium'
        console.log('Strength Level: Medium');
    } else {
        _msgPassword.innerText = 'Strength Level: Strong'
        console.log('Strength Level: Strong');
    }
}