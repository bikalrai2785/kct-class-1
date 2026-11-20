// selection methods:
// .getElementById()
// .querySelector()
// .querySelectorAll()
// .getElementsByTagName()
// .getElementsByClassName()

// select element by id
const myHeader1 = document.getElementById("header1");

console.log(myHeader1);

// select element using querySelector
const myHeader = document.querySelector("#header1");

console.log(myHeader);

const myList = document.querySelector(".my-list");

console.log(myList);

const listItem = document.querySelector(".my-list .list-item");

console.log(listItem);

// using querySelectorAll
const myListItems = document.querySelectorAll(".my-list .list-item");

console.log(myListItems);
console.log(myListItems[0]);
console.log(myListItems[1]);

//task:
// 1) select list two by id
const listTwo = document.getElementById("list-two");
console.log(listTwo);

// 2) select list two using query selector
const listTwo2 = document.querySelector("#list-two");
console.log(listTwo2);

// 3) select list item using query selector and query selector for all
const listTwoItem1 = document.querySelector("#list-two li");

console.log(listTwoItem1);

const listTwoItems = document.querySelectorAll("#list-two li");

console.log(listTwoItems);

// 4) select list item with text "three" using query selector
const listTwoItemThree = document.querySelector("#list-two li ul li");

console.log(listTwoItemThree);

const listItemThree = document.querySelector(".list-item-three");
console.log(listItemThree);

// manipulating the dom elements
myHeader1.style.backgroundColor = "red";
myHeader1.style.fontSize = "60px";

// changing text: .innerText, .innerHtml, .textContent
myHeader1.innerText = "Changed header 1";

const anchorTag = document.querySelector("a");

anchorTag.textContent = "My link updated";

anchorTag.innerHTML = "<h1>Using innerHtml</h1>";

// setting and removing attributes
// removing href from anchor tag
anchorTag.removeAttribute("href");

console.log(anchorTag, "removed");

// set href in the anchor tag again
anchorTag.setAttribute("href", "");

console.log(anchorTag);

listItemThree.setAttribute("class", "some-class");
console.log("List item three", listItemThree);

// getting attribute
console.log(listTwo.getAttribute("id"));

console.log(document.querySelector("input").getAttribute("type"));

document
  .querySelector("input")
  .setAttribute("placeholder", "This is just input tag");

// classList
console.log(listItemThree);

// adding a class
listItemThree.classList.add("my-class");
console.log(listItemThree);

// removing a class
listItemThree.classList.remove("my-class");
console.log(listItemThree);

// toggling a class
document.getElementById("btn").addEventListener("click", function () {
  listItemThree.classList.toggle("my-class");
});
