// List of inputs != "clear" && != "="
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/"];

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/* function digits(num) {
  if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  } else if (num === 3) {
    return 3;
  } else if (num === 4) {
    return 4;
  } else if (num === 5) {
    return 5;
  } else if (num === 6) {
    return 6;
  } else if (num === 7) {
    return 7;
  } else if (num === 8) {
    return 8;
  } else if (num === 9) {
    return 9;
  } else if (num === 0) {
    return 0;
  } else {
    return "ERROR";
  }
} */
//let lOperand = parseInt(prompt("First number: "));
//let rOperand = parseInt(prompt("Second number: "));
//let operator = prompt("Operator: ");

function calc(lOperand, operator, rOperand) {
  if (operator === "+") {
    return add(lOperand, rOperand);
  } else if (operator === "-") {
    return subtract(lOperand, rOperand);
  } else if (operator === "*") {
    return multiply(lOperand, rOperand);
  } else if (operator === "/") {
    return divide(lOperand, rOperand);
  }
}

function clear(left, right, operator) {
  // Resets array
  left = '';
  right = '';
  operator = '';
  return left, right, operator;
}

/* function toDisplay(array, display) {
  // Show the array in the display div
  if (digits.includes(display)) {
    digitToDisplay(array, display);
  } else {
    operatorToDisplay(array, display);
  }
  return array;
} */

function digitToDisplay(array, display) {
  // Readibility of multiple digits by leaving no space between them
  display.innerHTML = array.join("");
}

function operatorToDisplay(array, display) {
  // Readibility of operations by leaving a space between operands and operation
  display.innerHTML = array.join(" ");
}

function toDisplayEqual(newArray, display, index) {
  // Show the result of calculation in the display div
  display.innerHTML = newArray[index];
}

function isDigit(array, digit) {
  // Only updates array with sign if sign is in digit
  array.push(digit);
}

/* function isMultiDigit(array, sign, index) {
  array.splice(index, 1, array[index] + sign);
} */

function isOperator(array, operator) {
  // Only updates array with sign if sign is in operator
  array.push(operator);
}

function target() {
  // Simplified target
  return event.target.innerHTML;
}

function equal(left, operator, right) {
  // Setting up calculation by returning index of operators
  left = parseInt(left);
  right = parseInt(right);
  
  if (operator === "+") {
    return add(left, right);
  } else if (operator === "-") {
    return subtract(left, right);
  } else if (operator === "*") {
    return multiply(left, right);
  } else {
    return divide(left, right);
  }
}

// function equal could be done with map? or filter?

// Array to save inputs
const arr = [];
const arrEqual = [];

const display = document.querySelector("#display");

let i = 0;
let left = "";
let right = "";
let operator = "";
let result;

function inputRecieved() {
  document.querySelectorAll("#button").forEach((elem) =>
    elem.addEventListener("click", (event) => {
      if (operator.length === 0) {
        if (digits.includes(target()) && left.length === 0) {
          left = target();
          console.log("if Left: " + left);
        } else if (digits.includes(target())) {
          left = left.concat(target());
          console.log("else Left: " + left);
          console.log(parseInt(left) + 4);
        } else if (operators.includes(target())) {
          operator = target();
          console.log("Left: " + left + " operator: " + operator);
        }
      } else if (operator.length != 0) {
        if (digits.includes(target() && right.length === 0)) {
          right = target();
          console.log("if Right: " + right);
        } else if (digits.includes(target())) {
          right = right.concat(target());
          console.log("else Right: " + right);
        } else if (target() === "=") {
          result = equal(left, operator, right);
          console.log("Result: " + result);
        } else if (target() === "clear") {
          left = '';
          right = '';
          operator = '';
          console.log("Clear Left: " + left + " Clear Right: " + right + " Clear Operator: " + operator);
        }
      }
    })
  );
}

inputRecieved();
