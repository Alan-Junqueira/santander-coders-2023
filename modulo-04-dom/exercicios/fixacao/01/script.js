let IS_OPERATING = false;

const clearOperator = document.querySelector("#clear-operator");
const backSpaceOperator = document.querySelector("#backspace-operator");
const percentageOperator = document.querySelector("#percentage-operator");
const divisorOperator = document.querySelector("#divisor-operator");
const multiplyOperator = document.querySelector("#multiply-operator");
const minusOperator = document.querySelector("#minus-operator");
const plusOperator = document.querySelector("#plus-operator");
const equalOperator = document.querySelector("#equal-operator");

const operationFirstNumber = document.getElementById("operation-first-number");
const operationOperator = document.getElementById("operation-operator");
const operationSecondNumber = document.getElementById(
  "operation-second-number"
);

const resultPreview = document.getElementById("result-preview");

const inputFirstInteraction = document.getElementById(
  "input-first-interaction"
);
const inputSecondInteraction = document.getElementById(
  "input-second-interaction"
);

const possibleOperators = {
  "+": "plus",
  "-": "minus",
  "*": "multiply",
  "/": "divide",
};

window.addEventListener("keyup", (e) => {
  firstValue = operationFirstNumber.innerText;
  secondValue = operationSecondNumber.innerText;

  if (!+firstValue) return;
  switch (e.key) {
    case "+":
      resultPreview.innerText = +firstValue + +secondValue ?? 0;
      operationOperator.innerText = "+"
      break;
    case "-":
      resultPreview.innerText = firstValue - secondValue ?? 0;
      operationOperator.innerText = "-"
      break;
    case "/":
      resultPreview.innerText = firstValue / secondValue ?? 0;
      operationOperator.innerText = "/"
      break;
    case "*":
      resultPreview.innerText = firstValue * secondValue ?? 0;
      operationOperator.innerText = "*"
      break;
  }
});

inputFirstInteraction.addEventListener("input", function (e) {
  if (typeof +e.target.value !== "number") {
    inputFirstInteraction.value = 0;
    return;
  }
  const inputValue = +e.target.value;
  inputFirstInteraction.value = Math.max(inputValue, 0);

  operationFirstNumber.innerText = inputValue ?? 0;
});

inputSecondInteraction.addEventListener("input", function (e) {
  if (typeof +e.target.value !== "number") {
    inputSecondInteraction.value = 0;
    return;
  }
  const inputValue = +e.target.value;
  inputSecondInteraction.value = Math.max(inputValue, 0);

  operationSecondNumber.innerText = inputValue ?? 0;
});

const updateResultPreview = (text) => {
  resultPreview.innerText = text;
};

resultPreview.addEventListener("click", () => {
  console.log("clicou");
});
