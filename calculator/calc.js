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

function clear(array) {
  // Resets array
  return (array.length = 0);
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

function isMultiDigit(array, sign, index) {
  array.splice(index, 1, array[index] + sign);
}

function isOperator(array, operator) {
  // Only updates array with sign if sign is in operator
  array.push(operator);
}

function target() {
  // Simplified target
  return event.target.innerHTML;
}

function equal(array, newArray) {
  // Setting up calculation by returning index of operators
  let operator;
  let lOperand;
  let rOperand;
  let calculation;
  let index;

  index = array.findIndex(
    (element) =>
      element === "+" || element === "-" || element === "*" || element === "/"
  );
  operator = array.find((element) => operators.includes(element));
  lOperand = index - 1;
  rOperand = index + 1;
  calculation = calc(lOperand, operator, rOperand);
  newArray.push(calculation);
  return newArray;
}

// function equal could be done with map? or filter?

// Array to save inputs
const arr = [];
const arrEqual = [];

const display = document.querySelector("#display");

let i = 0;
let j = 0;

function inputRecieved() {
  document.querySelectorAll("#button").forEach((elem) =>
    elem.addEventListener("click", (event) => {
      if (j < 1) {
        if (digits.includes(target(event))) {
          if (arr.length === 0) {
            isDigit(arr, target());
            digitToDisplay(arr, display);
            } else {
            console.log("Empty array? " + arr);
            isMultiDigit(arr, target(event), i);
            digitToDisplay(arr, display);
          }
        } else if (target(event) === "clear") {
          clear(arr);
        } else if (target(event) === "=") {
          equal(arr, arrEqual);
          toDisplayEqual(arrEqual, display, 0);
          clear(arrEqual);
          clear(arr);
        } else {
          isOperator(arr, target(event));
          operatorToDisplay(arr, display);
          i += 2;
          j += 2;
        }
      } else if (j >= 1) {
        if (digits.includes(target(event))) {
          if (arr.length > 0) {
            console.log("Array after j: " + arr);
            isDigit(arr, target(event));
            digitToDisplay(arr, display);
          } else {
            isMultiDigit(arr, target(event), i);
            digitToDisplay(arr, display);
          }
        } else if (target(event) === "clear") {
          clear(arr);
          i = 0;
          j = 0;
        } else if (target(event) === "=") {
          equal(arr, arrEqual);
          toDisplayEqual(arrEqual, display, 0);
          clear(arrEqual);
          clear(arr);
        } else {
          isOperator(arr, target(event));
          operatorToDisplay(arr, display);
          i += 2;
          j += 2;
        }
      }
    })
  );
}

inputRecieved();
