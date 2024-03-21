const readout = document.querySelector("#readout");
const buttons = document.querySelectorAll("button");

let operandOne = 0;
let operandTwo = 0;
let operator = '';

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

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        if (button.id.match(/[0-9]/))
            readout.innerText += button.id;
        switch (button.id) {
            case 'add':
                operandOne = parseInt(readout.innerText);
                operator = 'add';
                clearDisplay();
                break;
            case 'subtract':
                operandOne = parseInt(readout.innerText);
                operator = 'subtract';
                clearDisplay();
                break;
            case 'multiply':
                operandOne = parseInt(readout.innerText);
                operator = 'multiply';
                clearDisplay();
                break;
            case 'divide':
                operandOne = parseInt(readout.innerText);
                operator = 'divide';
                clearDisplay();
                break;
            case 'equals':
                operandTwo = parseInt(readout.innerText);
                clearDisplay();
                readout.innerText = operate(operator, operandOne, operandTwo);
        }
    });
});

function populateDisplay (text) {
    clearDisplay();
    readout.innerText = text;
}

function clearDisplay () {
    readout.textContent = '';
}