const _btn = document.querySelector(`.comic-button`)

_btn.addEventListener(`click`, () => {
    alert(`Please Press F12 to open the console.`)
})

// alert(`Please Open DevTools to see the console`);
// alert(`To do so, you need to right click on the page and then click on inspect`);

console.log(`Hello`);
console.log(`I like food`)
console.log(`You also have other window() methods, like consfirm!`);
console.log(`please invoke the function invokeConfirmMethod, by typing on the console "invokeConfirmMwthod()", without the quotes`)


function invokeConfirmMwthod() {
    const confirmed = confirm(`Do you like Pizza?`)
    
    if (confirmed) {
        alert(`Ohhh Yeahhhh!`)
    } else {
        alert(`get out of here!`)
    }
}

console.log(`please invoke the function createH1text, by typing on the console "createH1Text()", without the quotes `)

function createH1Text () {
    document.querySelector(`.MyH1`).textContent = `This title was created dinamically using JavaScript targeting the class with a querySelector`;
}

console.log(`please invoke the function createPText, by typing on the console "createPText()", without the quotes `)

function createPText () {
    document.getElementById(`MyP`).textContent = `This paragraph was created dinamically using JavaScript targeting the ID with a getElementById`;
}
