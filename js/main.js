//DOM manipulation
let btn = document.querySelector("button");
// console.log(btn);

let email = document.querySelector("#mail");
let password = document.querySelector("#pass");
let succes = document.querySelector(".succes");

console.log(succes);
let failed = document.createElement("p");
console.log("failed", failed);

failed.innerText = "You Entered Wrong Email or Password!";

// failed.style.color = "red";

// failed.style.color = "red";
btn.addEventListener("click", function () {
  if (email.value === "yonesmaafi@gmail.com" && password.value === "123456") {
    succes.style.zIndex = "1";
    // console.log("succes");
  } else {
    document.querySelector("form").appendChild(failed);
    setTimeout(() => {
      document.querySelector("form").removeChild(failed);
    }, 4000);
  }
});

failed.style.textAlign = "center";
failed.style.color = "red";
