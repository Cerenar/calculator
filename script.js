const readout = document.querySelector("#readout");
const buttons = document.querySelectorAll("button");

let operandOne = null;
let operandTwo = null;
let operator = null;
let previousOperator = null;
let isFirstOperator = true;
let isFirstButtonPress = false;

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
        return readout.innerText = "try again";
        
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
        if (readout.textContent === '???') clearDisplay();
        if (readout.textContent === 'try again') clearDisplay();
        if (isFirstOperator && button.id.match(/[0-9]/))
            readout.innerText += button.id;
        else if(isFirstButtonPress && button.id.match(/[0-9]/)) {
            clearDisplay();
            readout.innerText += button.id;
            isFirstButtonPress = false;
        }
        else if(button.id.match(/[0-9]/)) {
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
                isFirstButtonPress = true;
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
                isFirstButtonPress = true;
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
                isFirstButtonPress = true;
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
                isFirstButtonPress = true;
                break;
            case 'equals':
                operandTwo = parseFloat(readout.innerText);    
                if (isFirstOperator || operandTwo === null || isNaN(operandTwo)) {
                    readout.innerText = "???";
                    isFirstOperator = true;
                    operandOne = null;
                    break;
                }
                clearDisplay();
                readout.innerText = operate(operator, operandOne, operandTwo);
                isFirstOperator = true;
                previousOperator = null;
                isFirstButtonPress = true;
                operandOne = readout.innerText;
                break;
            case 'clear':
                clearDisplay();
                operandOne = null;
                operandTwo = null;
                operator = null;
                previousOperator = null;
                isFirstOperator = true;
                isFirstButtonPress = false;
                break;
        }
    });
});

function clearDisplay () {
    readout.textContent = null;
}