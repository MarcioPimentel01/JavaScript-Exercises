const _buttonSubmit = document.getElementById(`submit`)
const p = document.getElementById(`result`)
const _inputCToF = document.getElementById(`flexRadioDefault1`)
const _inputFToC = document.getElementById(`flexRadioDefault2`)

_buttonSubmit.addEventListener(`click`, () => {
    console.log(`ok`)
    
    let _inputTemperature = document.querySelector(`.form-control`).value
    console.log(_inputTemperature)

    let value = _inputTemperature
   
    if (isNaN(value) === true) {
        console.log(`not a number`)

        p.innerHTML = ''

        const notANumber = document.createElement(`p`)
        notANumber.innerHTML = `The Value "${value}", is not a valid temperature`

        p.appendChild(notANumber)

    } else if (isNaN(value) !== true){
        console.log(value)
        displayTemp()
    }
    
    
})

function displayTemp (){
    
    let _inputTemperature = document.querySelector(`.form-control`).value
    let value = _inputTemperature

    if (_inputCToF.checked) {
        value = value * 9 / 5 + 32
            console.log(value)
    
                p.innerHTML = ''
                
                const displayFah = document.createElement(`p`)
                displayFah.innerHTML = `The temperature in Fahrenheit is ${value}°`
    
                p.appendChild(displayFah)
    
    } else if (_inputFToC.checked) {
        value = (value - 32) * (5 / 9)
            console.log(value)
    
            p.innerHTML = ''
    
            const displayCel = document.createElement(`p`)
            displayCel.innerHTML = `The temperature in Celsius is ${Math.round(value)}°` 
    
            p.appendChild(displayCel)
    
    } else {
        
    }
    
}



