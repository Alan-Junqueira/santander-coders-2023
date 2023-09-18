console.log(document.getElementById("num").innerText);
console.log(document.querySelector("#num").innerText);

const elements = document.querySelectorAll("#num");
console.log(elements);
console.log(elements[0].innerText);
console.log(num.innerText);

sumButton.addEventListener("click", () => {
  // let currNum = parseInt(num.innerText);
  let currNum = parseInt(num.value);
  currNum++;
  console.log(currNum);

  // num.innerText = currNum;
  num.value =  Math.max(currNum, 0);
});

subButton.addEventListener("click", () => {
  // let currNum = parseInt(num.innerText);
  let currNum = parseInt(num.value);
  currNum--;
  console.log(currNum);

  // num.innerText = currNum;
  num.value = Math.max(currNum, 0);
});