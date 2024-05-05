

const _btnCharAt = document.getElementById(`btncharAt`)
const _btnIndexOf = document.getElementById(`btnIndexOf`)
const _btnConcat = document.getElementById(`btnConcat`)
const _btnSlice = document.getElementById(`btnSlice`)
const _btnSplit = document.getElementById(`btnSplit`)
const _btnToLowerCase = document.getElementById(`btnToLowerCase`)
const _btnToUpperCase = document.getElementById(`btnToUpperCase`)
const _btnReplace = document.getElementById(`btnReplace`)
const _btnStartsWith = document.getElementById(`btnStartswith`)
const _btnTrim = document.getElementById(`btnTrim`)
const _btnMap = document.getElementById(`btnMap`)
const _charAt = document.getElementById(`charAt`)
const _indexOf = document.getElementById(`indexOf`)
const _trim = document.getElementById(`trim`)
const _concat = document.getElementById(`concat`);
const _slice = document.getElementById(`slice`);
const _split = document.getElementById(`split`);
const _toLowerCase = document.getElementById(`toLowerCase`);
const _toUpperCase = document.getElementById(`toUpperCase`);
const _replace = document.getElementById(`replace`);
const _startsWith = document.getElementById(`startsWith`);
const _map = document.getElementById(`map`)

//charAt(index): Returns the character at the specified index.
_btnCharAt.addEventListener(`click`, () => {
    let firstName = 'marcio'
    firstName.charAt(0)
    console.log(`It logs the first letter "${firstName.charAt(0) }" from the variable firstName`) //Logs the first letter 'm'
    _charAt.innerText = `It logs the first letter "${firstName.charAt(0) }" from the variable firstName`
})

//concat(str1, str2, ...): Combines two or more strings and returns a new string.
_btnConcat.addEventListener(`click`, () => {
    let name1 = `Marcio`
    let name2 = `Pimentel`
    console.log(name1.concat("", name2)) // Logs MarcioPimente
    _concat.innerHTML = `The combination of ${name1} and ${name2}, returns the value "${name1.concat("", name2)}"`
})

//indexOf(searchValue[, startIndex]): Returns the index of the first occurrence of a specified value within a string, or -1 if not found.
_btnIndexOf.addEventListener(`click`, () => {
    let lastName = "Pimentel"
    console.log(lastName.indexOf("m")) //Logs MarcioPimentel
    _indexOf.innerHTML = `If lastName is equal ${lastName}, the indexOf "m" is ${lastName.indexOf("m")}
    it returns the first occurance of a "m" inside of the string` 
})


//slice(startIndex[, endIndex]): Extracts a section of a string and returns it as a new string.
_btnSlice.addEventListener(`click`, () => {
    console.log(`ok`)
    let sliceMethod = `MarcioRodriguesPimentel`
    console.log(sliceMethod.slice(6, 15)) //Logs Rodrigues
    _slice.innerHTML = `When we use a section (6, 15) on the String "MarcioRodriguesPimentel", we are able to slice the word "${sliceMethod.slice(6, 15)}" from the string`
    
})

//split(separator[, limit]): Splits a string into an array of substrings based on a specified separator.
_btnSplit.addEventListener(`click`, () => {
    console.log(`ok`)
    let splitMethod = `Marcio Rodrigues Pimentel`
    console.log(splitMethod.split(" ")) //Logs (3) ['Marcio', 'Rodrigues', 'Pimentel']
    _split.innerHTML = `When we use the <b>split() Method</b> on the string "${splitMethod}", using whitespaces as specified separator (" "), we create an array with substrings "${splitMethod.split(" ")}" `
})

//toLowerCase(): Converts all characters in a string to lowercase.
_btnToLowerCase.addEventListener(`click`, () => {
    console.log(`ok`)
    let schoolName = `NELSON PIMENTEL QUEIROZ`
    console.log(schoolName.toLowerCase()) // Logs nelson pimentel queiroz
    _toLowerCase.innerHTML = `When we use <b>toLowerCase() Method</b> on the string "${schoolName}", we display the same string as lower case, "${schoolName.toLowerCase()}"`
})


//toUpperCase(): Converts all characters in a string to uppercase.
_btnToUpperCase.addEventListener(`click`, () => {
    console.log(`ok`)
    let grandFatherName = `joaquim rodrigues pimentel`
    console.log(grandFatherName.toUpperCase()) // Logs JOAQUIM RODRIGUES PIMENTEL
    _toUpperCase.innerHTML = `When we use <b>toUpperCase() Method</b> on the string "${grandFatherName}", we display the same string as lower case, "${grandFatherName.toUpperCase()}"`
})


//trim(): Removes whitespace from both ends of a string.
_btnTrim.addEventListener(`click`, () => {
    let trimMethod = "         We are all together!           "
    console.log(trimMethod.trim())
    _trim.innerHTML = `As you can see, it removes all whitespaces, but only from the beginning and the end of the string`
})

//replace(searchValue, replaceValue): Replaces occurrences of a specified value in a string with another value.
_btnReplace.addEventListener(`click`, () => {
    console.log(`ok`)
    let girlFrindName = `cristiane`
    console.log(girlFrindName.replace(girlFrindName, `camila`)) // logs camila
    _replace.innerHTML = `When we use the <b>replace() method</b> on the specified value "${girlFrindName}", we replace the same string with another value chosen "${girlFrindName.replace(girlFrindName, 'camila')}"`;
})

//startsWith(searchString[, position]): Determines whether a string starts with the specified characters.
_btnStartsWith.addEventListener(`click`, () => {
    console.log(`ok`)
    let grandMotherName = `Olivia`
    console.log(grandMotherName.startsWith(`Olivia`)) // Logs True
    console.log(grandMotherName.startsWith(`Elisa`)) // Logs false
    _startsWith.innerHTML = ` Log whether grandMotherName starts with '${grandMotherName}' if positive, returns "True"<br>`
    _startsWith.innerHTML += `Log whether grandMotherName starts with 'Elisa' since is negative, returns "False"<br>`
})

_btnMap.addEventListener(`click`, () => {
    console.log(`ok`)
    let fatherName = 'DIRCEU RODRIGUES PIMENTEL';
    let lowerCaseName = fatherName.toLowerCase()
    console.log(lowerCaseName)

    // Split `lowerCaseName` into an array of words, capitalize the first letter of each word, 
    // and then join them back into a single string, separated by spaces.
    // This results in each word having its first letter capitalized while keeping the rest of the word lowercase.
    let capitalizedFullName = lowerCaseName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // word is the parameter used in the 
                                                                                                                            //function to have as matching arguments on 
                                                                                                                            //"word.charAt(0).toUpperCase() + word.slice(1)" 
    console.log(capitalizedFullName);
    _map.innerHTML = `The <b>map() method</b> is used to iterate over each word in the array. 
    For each word: <b>word.charAt(0).toUpperCase()</b> extracts the first character of the word and converts it to uppercase.<br>` 
    _map.innerHTML += `<b>word.slice(1)</b> extracts the rest of the word starting from the second character.<br>`
    _map.innerHTML += `<b>The join(' ') method</b> is used to join the capitalized words back into a single string, separated by spaces.`
})
