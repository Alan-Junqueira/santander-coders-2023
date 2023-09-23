const clearOperator = document.querySelector("#clear-operator");
const backSpaceOperator = document.querySelector("#backspace-operator");
const percentageOperator = document.querySelector("#percentage-operator");
const divisorOperator = document.querySelector("#divisor-operator");
const multiplyOperator = document.querySelector("#multiply-operator");
const minusOperator = document.querySelector("#minus-operator");
const plusOperator = document.querySelector("#plus-operator");
const equalOperator = document.querySelector("#equal-operator");

const n0 = document.querySelector("#n-0");
const n1 = document.querySelector("#n-1");
const n2 = document.querySelector("#n-2");
const n3 = document.querySelector("#n-3");
const n4 = document.querySelector("#n-4");
const n5 = document.querySelector("#n-5");
const n6 = document.querySelector("#n-6");
const n7 = document.querySelector("#n-7");
const n8 = document.querySelector("#n-8");
const n9 = document.querySelector("#n-9");

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

const updateResultPreviewDom = (value) => {
  if (value > 20) {
    resultPreview.classList.add("text-green-500");
    resultPreview.classList.remove("text-red-500");
  } else {
    resultPreview.classList.add("text-red-500");
    resultPreview.classList.remove("text-green-500");
  }
  resultPreview.innerText = value;
};

const switchWithIterator = ({
  iterator,
  firstValue,
  secondValue
}) => {
  let value
  switch (iterator) {
    case "+":
      value = +firstValue + +secondValue ?? 0;

      updateResultPreviewDom(value)
      operationOperator.innerText = "+";
      break;
    case "-":
      value = firstValue - secondValue ?? 0;

      updateResultPreviewDom(value)
      operationOperator.innerText = "-";
      break;
    case "/":
      value = firstValue / secondValue ?? 0;

      updateResultPreviewDom(value)
      operationOperator.innerText = "/";
      break;
    case "*":
      value = firstValue * secondValue ?? 0;

      updateResultPreviewDom(value)
      operationOperator.innerText = "*";
      break;
  }
}

window.addEventListener("keyup", (e) => {
  firstValue = operationFirstNumber.innerText;
  secondValue = operationSecondNumber.innerText;

  if (e.key === "/" && secondValue <= 0) {
    alert("Não é possível dividir por 0");
    return;
  }

  if (!+firstValue) return;
  switchWithIterator({
    iterator: e.key,
    firstValue,
    secondValue
  })
});

inputFirstInteraction.addEventListener("input", (e) => {
  if (typeof +e.target.value !== "number") {
    inputFirstInteraction.value = 0;
    operationFirstNumber.innerText = 0;
    return;
  }

  const inputValue = +e.target.value;

  inputFirstInteraction.value = Math.max(inputValue, 0);

  operationFirstNumber.innerText = inputValue ?? 0;

  operationFirstNumber.dispatchEvent(new Event("input"));
});

inputSecondInteraction.addEventListener("input", (e) => {
  if (typeof +e.target.value !== "number") {
    inputSecondInteraction.value = 0;
    return;
  }
  const inputValue = +e.target.value;
  inputSecondInteraction.value = Math.max(inputValue, 0);

  operationSecondNumber.innerText = inputValue ?? 0;

  operationSecondNumber.dispatchEvent(new Event("input"));
});

clearOperator.addEventListener("click", () => {
  operationFirstNumber.innerText = 0;
  operationSecondNumber.innerText = 0;
  resultPreview.innerText = 0;

  inputFirstInteraction.value = 0;
  inputSecondInteraction.value = 0;

  operationOperator.innerText = "+";
  operationFirstNumber.className = "underline-offset-8 underline";
  operationSecondNumber.className = "";
});

backSpaceOperator.addEventListener("click", () => {
  const isFirstNumberActive = Array.from(
    operationFirstNumber.classList
  ).includes("underline");
  const currentFirstText = operationFirstNumber.innerText;
  const currentSecondText = operationSecondNumber.innerText;
  if (isFirstNumberActive) {
    operationFirstNumber.innerText =
      currentFirstText.length === 1 ? "0" : currentFirstText.slice(0, -1);
  } else {
    operationSecondNumber.innerText =
      currentSecondText.length === 1 ? "0" : currentSecondText.slice(0, -1);
  }
});

operationFirstNumber.addEventListener("input", () => {
  firstValue = operationFirstNumber.innerText;
  secondValue = operationSecondNumber.innerText;

  if (secondValue <= 0 && operationOperator.innerText === "/") {
    alert("Não é possível dividir por 0");
    return;
  }

  switchWithIterator({
    iterator: operationOperator.innerText,
    firstValue,
    secondValue
  })
});
operationSecondNumber.addEventListener("input", () => {
  firstValue = operationFirstNumber.innerText;
  secondValue = operationSecondNumber.innerText;

  if (secondValue <= 0 && operationOperator.innerText === "/") {
    alert("Não é possível dividir por 0");
    return;
  }

  switchWithIterator({
    iterator: operationOperator.innerText,
    firstValue,
    secondValue
  })
});

operationFirstNumber.addEventListener("click", () => {
  operationFirstNumber.className = "underline-offset-8 underline";
  operationSecondNumber.className = "";
});

operationSecondNumber.addEventListener("click", () => {
  operationFirstNumber.className = "";
  operationSecondNumber.className = "underline-offset-8 underline";
});

divisorOperator.addEventListener("click", () => {
  operationOperator.innerText = "/";
  operationFirstNumber.className = "";
  operationSecondNumber.className = "underline-offset-8 underline";
});

multiplyOperator.addEventListener("click", () => {
  operationOperator.innerText = "*";
  operationFirstNumber.className = "";
  operationSecondNumber.className = "underline-offset-8 underline";
});

minusOperator.addEventListener("click", () => {
  operationOperator.innerText = "-";
  operationFirstNumber.className = "";
  operationSecondNumber.className = "underline-offset-8 underline";
});

plusOperator.addEventListener("click", () => {
  operationOperator.innerText = "+";
  operationFirstNumber.className = "";
  operationSecondNumber.className = "underline-offset-8 underline";
});

equalOperator.addEventListener("click", () => {
  if (operationOperator === "/" && +inputSecondInteraction.value <= 0) {
    alert("Não é possível dividir por 0");
    return;
  }

  firstValue = operationFirstNumber.innerText;
  secondValue = operationSecondNumber.innerText;

  switchWithIterator({
    iterator: operationOperator.innerText,
    firstValue,
    secondValue
  })
});

[n0, n1, n2, n3, n4, n5, n6, n7, n8, n9].forEach(item => {
  item.addEventListener("click", _ => {
    const isFirstNumberActive = Array.from(
      operationFirstNumber.classList
    ).includes("underline");

    const number = item.id.split("-")[1]

    const firstNumberIsZero = operationFirstNumber.innerText === "0";
    const secondNumberIsZero = operationSecondNumber.innerText === "0";
    if (isFirstNumberActive) {
      operationFirstNumber.innerText = firstNumberIsZero
        ? number
        : (operationFirstNumber.innerText += number);
    } else {
      operationSecondNumber.innerText = secondNumberIsZero
        ? number
        : (operationSecondNumber.innerText += number);
    }
  })
})

const updateResultPreview = (text) => {
  resultPreview.innerText = text;
};
