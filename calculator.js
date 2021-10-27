/*
Function: add
Goals:		Add two operands.
*/
function add (a, b) {
	return a + b;
}

/*
Function: subtract
Goals:		Subtract two operands.
*/
function subtract (a, b) {
	return a - b;
}

/*
Function: multiply
Goals:		Multiply two operands.
*/
function multiply (a, b) {
	return a * b;
}

/*
Function: divide
Goals:		Divide two operands.
*/
function divide (a, b) {
	if (b === 0) {
		return "...why?";
	}
	return a / b;
}

/*
Function: operate
Goals: 		Work as an event handler for operators and operands.
*/

function operate (operator, a, b) {
	if (operator === "+") {
		return add(a, b);
	}
	else if (operator === "-") {
		return subtract(a, b);
	}
	else if (operator === "*") {
		return multiply(a, b);
	}
	else if (operator === "/") {
		return divide(a, b);
	}
	else {
		return currentData;
	}
}

/*
Function: displayStuff
Goals		: Displays input on calculator's display.
*/

function displayStuff () {
	if (display.textContent === "0" && this.classList.contains("operand")) {
		display.textContent = this.textContent;
		previousButton = this;
		console.log(previousButton);
	}
	else if (display.textContent.length < 9 && this.classList.contains("operand") && !previousButton.classList.contains("operator")) {
		display.textContent += this.textContent;
		previousButton = this;
		console.log(previousButton);
	}
	else if (previousButton.classList.contains("operator") && this.classList.contains("operand")) {
		display.textContent = this.textContent;
		previousButton = this;
		console.log(previousButton);
	}
}

function storeData () {
	previousData = parseFloat(display.textContent);
	previousOperand = this.textContent;
	console.log(previousData);
	console.log(previousOperand);
	return;
}

function clearDisplay () {
	display.textContent = "0";
	previousOperator = "";
	previousData = 0;
	currentData = 0;
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearDisplay);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", displayStuff));

/*const operands = document.querySelectorAll(".operand");
operands.forEach(operand => operand.addEventListener("click", displayStuff));*/

const display = document.querySelector("#display");
display.textContent = "0";

const operators = document.querySelectorAll(".operator");

let previousOperator = "";
let previousData = 0;
let previousButton;
let currentData = 0;
operators.forEach(operator => operator.addEventListener("click", () => {
	currentData = parseFloat(display.textContent);
	let result = operate(previousOperator, previousData, currentData);
	previousButton = operator;
	previousData = result;
	previousOperator = operator.textContent;
	display.textContent = result;
}))

//const backspace = document.querySelector("#backspace");
/*operators.forEach(operator => operator.addEventListener ("click", () => {
	let previousData = parseInt(display.textContent);
	let currentData = 0;
	let result = operate(operator.textContent, previousData, currentData);
	console.log(result);
}));*/
// backspace.addEventListener("click", deleteStuff);

/*
When a button is clicked, do two things: update the display and store it as data.
Update the display: Just take the button that was pressed and display its text. Some exceptions exist, worry about them later.
Store the data:
Receive button input.
Push number data into an array of max length 9.
If an operator is pressed, join the array.
Parse the joined array to a number.

*/