// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { divider,decimal} = Object.fromEntries(entries);
  result.innerText = divider,decimal;
});

