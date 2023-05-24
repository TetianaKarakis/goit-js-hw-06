let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanCounterValue = document.querySelector("#value");

buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  spanCounterValue.textContent = counterValue;
})

buttonIncrement.addEventListener('click', () => {
  counterValue += 1;
  spanCounterValue.textContent = counterValue;
})