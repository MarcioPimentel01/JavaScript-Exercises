const _btnDecrease = document.getElementById(`btn-decrease`)
const _btnReset = document.getElementById(`btn-reset`)
const _btnIncrease = document.getElementById(`btn-increase`)
const _labelcount = document.getElementById(`count-label`)

let count = 0

//Event Listeners

_btnDecrease.addEventListener(`click`, () => {
    console.log(`ok Decrease`)
    decrease()
})

_btnReset.addEventListener(`click`, () => {
    console.log(`ok reset`)
    reset()
})

_btnIncrease.addEventListener(`click`, () => {
    console.log(`ok increase`)
    increase()
})

//Functions

function increase () {
    count += 1
    _labelcount.textContent = count;
}

function reset () {
    count = 0
    _labelcount.textContent = count;
}

function decrease () {
    count -= 1
    _labelcount.textContent = count;
}







