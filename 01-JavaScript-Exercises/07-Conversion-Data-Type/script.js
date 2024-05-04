

//Type conversion = change the datatype of a value to another.
//                  (string, numbers, booleans)


const msgwithNumberage = document.getElementById(`display-message01`)
const convertToNumber = document.querySelector(`.convert-to-number`)
const noConversionNumber = document.querySelector(`.no-convert-to-number`)
const msgNoCOnversion = document.getElementById(`display-message02`)
// const noNumberage = document.getElementById(`no-Conversion`)


convertToNumber.addEventListener(`click`, () => {
    numberConversion()
    
})

noConversionNumber.addEventListener(`click`, () => {
    noNumberConversion()
})


function numberConversion () {
    let withNumberage = document.getElementById(`Number-Conversion`).value
    console.log(withNumberage)
    withNumberage = Number(withNumberage)
    withNumberage += 1
    console.log(withNumberage)
    msgwithNumberage.innerText = `In this example, it shows your input plus 1 as "${withNumberage}" because "Number()" transformed your input into a number instead of a string.`
    
}

function noNumberConversion () {
    let withNoNumberConversion = document.getElementById(`no-Conversion`).value
    console.log(withNoNumberConversion)
    withNoNumberConversion += 1
    console.log(withNoNumberConversion)
    msgNoCOnversion.innerText = 
    msgwithNumberage.innerText = `This example shows your input "${withNoNumberConversion}" as a string and adds/concatenates "1" to it.`


}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const _msg03 = document.getElementById(`display-message03`)
const _btnmsg03 = document.querySelector(`.comic-button`)


let x = `Pizza`
let y = `Pizza`
let z = `Pizza`

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

_btnmsg03.addEventListener(`click`, () => {
    console.log(`ok`)
    _msg03.innerHTML = `<p> <b>${x},</b> Displays as Not a number, but the "typrof" still displays as a <b>"number"</b>
    <p> <b>${y},</b> Still displays as a string, because <b>"Pizza"</b> is a string,
    <p> <b>${z},</b> displays as a <b>"True/Boolean"</b>,    `
})

