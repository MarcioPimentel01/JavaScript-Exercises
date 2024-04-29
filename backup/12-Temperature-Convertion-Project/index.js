// Fahrenheit = (Celsius * 9/5) + 32


// const c = celsius
// const f = Fahrenheit

function FahrenheitToCelsius (temperature){
    let result = (`${temperature}` * 9 / 5) + 32;
    return result
}
console.log(FahrenheitToCelsius(32));


function celsiusToFahrenheit (temperature){
    let result = ((`${temperature}` - 32) * 5 / 9);
    return result
}
console.log(celsiusToFahrenheit(89.6));

