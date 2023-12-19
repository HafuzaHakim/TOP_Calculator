const NUMBERS = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const OPERATORS = document.querySelectorAll(".operator");

let prevDispVal = document.querySelector(".prev-num");
let curDispVal = document.querySelector(".curr-num");

let currentNumber = "";
let previosNumber = "";
let operator = "";

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operand, number1, number2) {
  return operand(number1, number2);
}

NUMBERS.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      currentNumber += e.target.textContent;
      curDispVal.textContent = currentNumber;
    }
  });
});

OPERATORS.forEach((opr) => {
  opr.addEventListener("click", (e) => {
    if (!operator) {
      operator = e.target.textContent;
      previosNumber = currentNumber;
      currentNumber = "";
      curDispVal.textContent = "";
      prevDispVal.textContent = `${previosNumber} ${operator}`;
    }
  });
});

equal.addEventListener("click", () => {
  let operand;
  if (operator === "+") {
    operand = add;
  } else if (operator === "-") {
    operand = minus;
  } else if (operator === "*") {
    operand = multiply;
  } else if (operator === "/") {
    operand = divide;
  }

  let result = operate(operand, Number(previosNumber), Number(currentNumber));
  curDispVal.textContent = result;
  prevDispVal.textContent = `${previosNumber} ${operator} ${currentNumber}`;
  previosNumber = currentNumber;
  currentNumber = result;
  operator = "";
});

clear.addEventListener("click", () => {
  currentNumber = "";
  curDispVal.textContent = "";
  previosNumber = "";
  prevDispVal.textContent = "";
  operator = "";
});
