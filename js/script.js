function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length > 3) {
        return pin;
    } else {
        console.log('3 digit', pin);
        return getPin();
    }
}
function generatePin() {
    document.getElementById('pin-generate-field').value = getPin();

}

document.getElementById('cal-keys').addEventListener('click', function () {
    // console.log(event.target.innerText);
    const calcInput = document.getElementById('calc-input');
    const key = event.target.innerText;
    if (isNaN(key)) {
        // console.log('nan');
        if (key == 'C') {
            calcInput.value = '';
        }
    } else {
        const previous = calcInput.value;
        const currentValue = key;
        const newValue = previous + currentValue;
        calcInput.value = newValue;
    }
})

// Pin verification 
const fail = document.getElementById('fail-msg');
const success = document.getElementById('success-msg');
function pinVerification() {
    const generatedPin = document.getElementById('pin-generate-field').value;
    const enteredPin = document.getElementById('calc-input').value;
    if (generatedPin == enteredPin) {
        success.style.display = 'block';
        fail.style.display = 'none';
    } else {
        success.style.display = 'none';
        fail.style.display = 'block';
    }
}