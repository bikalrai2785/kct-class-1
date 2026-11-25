const decrementBtn = document.querySelector("#counter .decrement");
const incrementBtn = document.querySelector("#counter .increment");
const counterInput = document.querySelector("#counter input");

counterInput.value = 0;

function increaseCount() {
  let value = counterInput.value;

  console.log(typeof value);

  if (typeof value === "string") {
    value = parseInt(value);
  }

  incrementBtn.classList.add("click-shadow");

  setTimeout(() => {
    incrementBtn.classList.remove("click-shadow");
  }, 100);

  if (value === 100) {
    return;
  }

  counterInput.value = value + 1;
}

const decreaseCount = () => {
  let value = counterInput.value;

  if (typeof value === "string") {
    value = parseInt(value);
  }

  decrementBtn.classList.add("click-shadow");

  setTimeout(() => {
    decrementBtn.classList.remove("click-shadow");
  }, 100);

  if (value === 0) {
    return;
  }

  counterInput.value = value - 1;
};

incrementBtn.addEventListener("click", increaseCount);
decrementBtn.addEventListener("click", decreaseCount);
