const readout = document.querySelector("#readout");
const buttons = document.querySelectorAll("button");

let operandOne = null;
let operandTwo = null;
let operator = null;
let previousOperator = null;
let isFirstOperator = true;

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
    if (b === 0) {
        readout.innerText = "try again";
    }
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
        if (isFirstOperator && button.id.match(/[0-9]/))
            readout.innerText += button.id;
        else if(button.id.match(/[0-9]/)) {
            clearDisplay();
            readout.innerText += button.id;
        }
        switch (button.id) {
            case 'add':
                operator = button.id;
                if (isFirstOperator) {
                    operandOne = parseFloat(readout.innerText);
                    clearDisplay();
                    isFirstOperator = false;
                }
                else {
                    operandTwo = parseFloat(readout.innerText);
                    clearDisplay();
                    readout.innerText = operate(previousOperator, operandOne, operandTwo);
                    operandOne = parseFloat(readout.innerText);
                }
                previousOperator = button.id;
                break;
            case 'subtract':
                operator = button.id;
                if (isFirstOperator) {
                    operandOne = parseFloat(readout.innerText);
                    clearDisplay();
                    isFirstOperator = false;
                }
                else {
                    operandTwo = parseFloat(readout.innerText);
                    clearDisplay();
                    readout.innerText = operate(previousOperator, operandOne, operandTwo);
                    operandOne = parseFloat(readout.innerText);
                }
                previousOperator = button.id;
                break;
            case 'multiply':
                operator = button.id;
                if (isFirstOperator) {
                    operandOne = parseFloat(readout.innerText);
                    clearDisplay();
                    isFirstOperator = false;
                }
                else {
                    operandTwo = parseFloat(readout.innerText);
                    clearDisplay();
                    readout.innerText = operate(previousOperator, operandOne, operandTwo);
                    operandOne = parseFloat(readout.innerText);
                }
                previousOperator = button.id;
                break;
            case 'divide':
                operator = button.id;
                if (isFirstOperator) {
                    operandOne = parseFloat(readout.innerText);
                    clearDisplay();
                    isFirstOperator = false;
                }
                else {
                    operandTwo = parseFloat(readout.innerText);
                    clearDisplay();
                    readout.innerText = operate(previousOperator, operandOne, operandTwo);
                    operandOne = parseFloat(readout.innerText);
                }
                previousOperator = button.id;
                break;
            case 'equals':
                operandTwo = parseInt(readout.innerText);
                clearDisplay();
                readout.innerText = operate(operator, operandOne, operandTwo);
                isFirstOperator = true;
                previousOperator = null;
                operandOne = readout.innerText;
        }
    });
});

function populateDisplay (text) {
    clearDisplay();
    readout.innerText = text;
}

function clearDisplay () {
    readout.textContent = null;
}