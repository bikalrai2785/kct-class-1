const ulElement = document.createElement("ul");
console.log(ulElement);

document.body.appendChild(ulElement);

const liElement = document.createElement("li");

liElement.textContent = "List item 1";

ulElement.appendChild(liElement);

ulElement.remove();

const formElement = document.createElement("form");

document.body.appendChild(formElement);

const inputElement = document.createElement("input");

inputElement.setAttribute("type", "password");

inputElement.setAttribute("placeholder", "Enter password here");

inputElement.setAttribute("id", "inputEl");

formElement.appendChild(inputElement);

const buttonElement = document.createElement("button");

buttonElement.textContent = "Click Me";

buttonElement.setAttribute("type", "button");

formElement.appendChild(buttonElement);

buttonElement.addEventListener("click", function () {
  const inputValue = document.getElementById("inputEl").value;
  alert(inputValue);
});

const paragraphsElement = document.getElementById("paragraphs");

const addBtn = document.getElementById("addBtn");

let count = 2;
function addParagraph() {
  const pEl = document.createElement("p");

  pEl.textContent = `New paragraph ${count}`;

  count++;

  paragraphsElement.appendChild(pEl);
}

addBtn.addEventListener("click", addParagraph);

// functions
// syntax function functionName() {
// }

function sayHello() {
  console.log("Hello");
}

sayHello();

let a = 5;

a = 10;

const sayHello2 = function () {
  console.log("hello from function 2");

  sayHello();
};

sayHello2();

// arrow function
const arrowFunc = () => {
  console.log("hello from arrow func");
};

arrowFunc();

const doc = {
  eventListener: function () {
    console.log("event from doc");
  },
};

doc.eventListener();

// document.getElementById("test").addEventListener("click", test2);

// function test() {
//   console.log("test");
// }

// const test2 = () => {
//   console.log("test 2");
// };

// function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 10);

// function with return statement
function multiply(num1, num2 = 5) {
  return num1 * num2;
}

const result = multiply(5);
const result2 = multiply(3, 7);

console.log(result);
console.log(result2);
console.log(multiply(7, 7));
