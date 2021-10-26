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
	else {
		return divide(a, b);
	}
}

console.log(add(3,4));
console.log(subtract(4,3));
console.log(multiply(3,4));
console.log(divide(4,0));