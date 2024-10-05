const apiUrl = "https://api.adviceslip.com/advice";

const btn = document.querySelector(".btn");
const advice = document.querySelector("#advice");
const number = document.querySelector("#number");

async function getAdvice() {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
  number.innerText = data.slip.id;
  advice.innerText = `"${data.slip.advice}"`;
}

window.onload = getAdvice();
btn.addEventListener("click", getAdvice);
