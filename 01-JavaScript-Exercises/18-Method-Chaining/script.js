//Method chaining = Calling one method after anoter in a continuos line of code.

//----------------- NO METHOD CHANING --------------------------
// An application that removes white spaces from the beginning and the end of the string, and also capitalizes the first letter of every separated word in the string.
// Since I'm not that smart, I ended up using chaining methods where I did not expect to.

const _btnSubmit = document.getElementById(`btnSubmit`)
const _inputValue = document.getElementById(`inputValue`)
const _btnSubmit2 = document.getElementById(`btnSubmit2`)
const _inputValue2 = document.getElementById(`inputValue2`)

_btnSubmit.addEventListener(`click`, () => {
    console.log(`ok`)
    let userName = _inputValue.value
    console.log(userName)
    let trimUserName = userName.trim()
    console.log(trimUserName)
    let toLowerCaseUserName = trimUserName.toLowerCase()
    console.log(toLowerCaseUserName)
    let splitUsername = toLowerCaseUserName.split(" ")
    console.log(splitUsername)
    let capitalizedUsername = splitUsername.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    console.log(capitalizedUsername);
    let joinUserName = capitalizedUsername.join(' ');
    console.log(joinUserName);
})


//----------------- METHOD CHANING --------------------------

_btnSubmit2.addEventListener(`click`, () => {
    let userName = _inputValue2.value.trim().toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log(userName);
})

