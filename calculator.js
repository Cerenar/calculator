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
		//console.log(previousButton);
	}
	else if (display.textContent.length < 9 && this.classList.contains("operand") && !previousButton.classList.contains("operator")) {
		display.textContent += this.textContent;
		previousButton = this;
		//console.log(previousButton);
	}
	else if (previousButton.classList.contains("operator") && this.classList.contains("operand")) {
		display.textContent = this.textContent;
		previousButton = this;
		//console.log(previousButton);
	}
	/*else if (previousButton.id("decimal") && this.classList.contains("operand")) {
		display.textContent += this.textContent;
		previousButton = this;
	}
	else if (previousButton.id.contains("enter") && this.classList.contains("operand")) {
		previousOperator = "";
		previousData = 0;
		display.textContent = this.textContent;
		//console.log(previousButton);
	}*/
}

function displayDecimalPoint () {
	if (!display.textContent.includes(".") && !previousButton.classList.contains("operator")) {
		display.textContent += ".";
		previousButton = this;
	}
	else if (previousButton.classList.contains("operator")) {
		display.textContent = "0.";
		previousButton = this;
	}
}

function deleteStuff () {
	let text = display.textContent;
	let editedText = text.slice(0, -1)
	display.textContent = editedText;
}

function changeSign () {
	let currentSign = parseFloat(display.textContent);
	if (currentSign > 0 && display.textContent.length < 9) {
		display.textContent = "-" + display.textContent;
	}
	else if (currentSign < 0) {
		let text = display.textContent;
		let editedText = text.substring(1);
		display.textContent = editedText;
	}
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

const decimalPoint = document.querySelector("#decimal");
decimalPoint.addEventListener("click", displayDecimalPoint);

/*const operands = document.querySelectorAll(".operand");
operands.forEach(operand => operand.addEventListener("click", displayStuff));*/

const display = document.querySelector("#display");
display.textContent = "0";

const operators = document.querySelectorAll(".operator");
const percentCalc = document.querySelector("#percent");
const inverter = document.querySelector("#invert");
inverter.addEventListener("click", changeSign);

let previousOperator = "";
let previousData = 0;
let previousButton;
let currentData = 0;

percentCalc.addEventListener("click", () => {
	let regex = /[^\w\s\-]/;
	let result = parseFloat(display.textContent)/100;
	let resultString = result.toString();
	if (resultString.search(regex) > 0 && resultString.search(regex) < 8) {
		result = result.toFixed(8-resultString.search(regex));
		display.textContent = +result;
	}
	else if (result < 0 && resultString.search(regex) > 0 && resultString.search(regex) < 8) {
		result = result.toFixed(8-resultString.search(regex));
		display.textContent = +result;
	}
	if (result > -999999 && result < 9999999) {
		display.textContent = +result;
	}
	else {
		display.textContent = result.toExponential(2);
	}
})

// When an operator button is pressed
operators.forEach(operator => operator.addEventListener("click", () => {
	// The currrent number in the display is stored as 
	currentData = parseFloat(display.textContent);
	let regex = /[^\w\s\-]/;
	let result = operate(previousOperator, previousData, currentData);
	let resultString = result.toString();
	previousButton = operator;
	previousData = result;
	previousOperator = operator.textContent;
	console.log(resultString.search(regex));
	if (result > 0 && resultString.search(regex) > 0 && resultString.search(regex) < 8) {
		result = result.toFixed(8-resultString.search(regex));
		display.textContent = +result;
	}
	else if (result < 0 && resultString.search(regex) > 0 && resultString.search(regex) < 8) {
		result = result.toFixed(8-resultString.search(regex));
		display.textContent = +result;
	}
	if (result > -999999 && result < 9999999) {
		display.textContent = +result;
	}
	else if (result > 1e100 || result < -1e100) {
		display.textContent = "OVERFLOW";
	}
	else if (result === "...why?") {
		display.textContent = "...why?";
		previousOperator = "";
		previousData = 0;
		currentData = 0;
	}
	else {
		display.textContent = result.toExponential(2);
	}
}))

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", deleteStuff);

/*
When a button is clicked, do two things: update the display and store it as data.
Update the display: Just take the button that was pressed and display its text. Some exceptions exist, worry about them later.
Store the data:
Receive button input.
Push number data into an array of max length 9.
If an operator is pressed, join the array.
Parse the joined array to a number.

*/