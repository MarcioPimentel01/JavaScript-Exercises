//.checkbox = property that determines the checked state of and HTML checkbox or radio button element

const _checkBoxSub = document.getElementById(`my-check-box`);
const _radioVisa = document.getElementById(`radio-visa`)
const _radioMaster = document.getElementById(`radio-master`)
const _radioAmex = document.getElementById(`radio-amex`)
const _radioDiscover = document.getElementById(`radio-discover`)
const _radioPaypal = document.getElementById(`radio-paypal`)
const _msgSubscribeStatus = document.getElementById(`subscribe-status`)
const _msgPaymentStatus = document.getElementById(`payment-status`)
const _btnSubmit = document.querySelector(`.comic-button`)

// event listeners

_btnSubmit.addEventListener(`click`, () => {
    console.log(`ok`)
    subscribeCheck()
})

function subscribeCheck() {
    if (_checkBoxSub.checked) { // in this case I can also use === true, I'm just using .check, as a reminder that is also an option
        console.log(`You selected the Subscription option. Please choose a payment type`)
        _msgSubscribeStatus.innerHTML = `You selected the Subscription option. Please choose a payment type`
    } else _msgSubscribeStatus.innerHTML = `You did Not selected the Subscription option.`

    //Now an if else statement inside the same function

    if (_radioVisa.checked) {
        console.log(`The payment type selected is Visa`)
        _msgPaymentStatus.innerHTML = `The payment type selected is Visa`
    } else if (_radioMaster.checked) {
        console.log(`The payment type selected is MasterCard`)
        _msgPaymentStatus.innerHTML = `The payment type selected is MasterCard`
        
    } else if (_radioAmex.checked) {
        console.log(`The payment type selected is American Express`)
        _msgPaymentStatus.innerHTML = `The payment type selected is American Express`
        
    } else if (_radioDiscover.checked) {
        console.log(`The payment type selected is Discover`)
        _msgPaymentStatus.innerHTML = `The payment type selected is Discover`
        
    }else if (_radioPaypal) {
        console.log(`The payment type selected is PayPal`)
        _msgPaymentStatus.innerHTML = `The payment type selected is Paypal`
    }
             
}
