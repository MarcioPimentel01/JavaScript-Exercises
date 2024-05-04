// ternary operator = a shortcut to if{} and else{} stetements
//                     helps to assign a variable based on a condition
//                      condition ? conditioIFtrue : conditionIFfalse


const _age = document.getElementById(`age`)
const _msgResult = document.getElementById(`message-result`)
const _btnSubmit  = document.querySelector(`.comic-button`)


_btnSubmit.addEventListener(`click`, () => {
    console.log(`ok`)
    const _age = document.getElementById(`age`).value
    _age <= 18 ? _msgResult.innerHTML = `You are a minor` : _msgResult.innerHTML = `You are NOT a minor`
})


