const readout = document.querySelector("#readout");
const buttons = document.querySelectorAll("button");

let operandOne
let operandTwo
let operator

function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}

function operate (operator, operandOne, operandTwo) {
    switch (operator) {
        case 'add':
            return add(operandOne, operandTwo);
        case 'subtract':
            return subtract(operandOne, operandTwo);
        case 'multiply':
            return multiply(operandOne, operandTwo);
        case 'divide':
            return divide(operandOne, operandTwo);
        default:
            return console.log('Huh?');
    }
}

buttons.forEach ((calcButton) => {
    calcButton.addEventListener('click', () => {
        readout.innerText += calcButton.innerText;
    });
});

function populateDisplay (text) {
    screen += text;
}

function showResult () {
    clearResult();
    
}

function clearDisplay () {
    readout.textContent = '';
}