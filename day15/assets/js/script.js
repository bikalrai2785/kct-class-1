console.log(document.forms.myForm);
console.log(document.forms["myForm"]);

const myObj = {
  name: "Object name",
  age: 28,
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj["age"]);

const myForm = document.forms.myForm;

console.log(myForm.email);
console.log(myForm.password);

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  console.log("clicked form");

  const passwordLength = 8;
  const validEmail = "admin@system.com";
  const validPassword = "Admin@123";

  const emailValue = myForm.email.value.toLowerCase().trim();

  const passwordValue = myForm.password.toLowerCase().trim();

  // console.log(emailValue);

  if (
    !emailValue.includes("@") ||
    !emailValue.includes(".") ||
    !emailValue.includes(".com")
  ) {
    console.log("Invalid email format");
    document.querySelector(".emailError").classList.remove("hide");
  }

  if (emailValue !== validEmail) {
    console.log("Invalid email");
  }

  if (passwordValue.length < passwordLength) {
    console.log("Password must be at least of 8 characters long");
  }

  if (passwordValue !== validPassword) {
    console.log("Password does not match");
  }

  console.log("Authenticated successfully");
});

// window.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });
