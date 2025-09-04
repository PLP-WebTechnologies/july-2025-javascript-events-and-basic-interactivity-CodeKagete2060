document.getElementById("myUsername");
document.getElementById("myButton");
document.getElementById("myEmail");
document.getElementById("myPassword");
document.getElementById("myForm");
document.getElementById("myToggle");


// adding the toggle theme function to change bckground\
// When i click this button it will change the background color
let myBtn = document.getElementById("mybtn");

myBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark")
});


// Adding the increase and decrease function to add and subtract 1 from the number
let myIncrease = document.getElementById("myincrease");
let myDecrease = document.getElementById("mydecrease");
let myNumber = document.getElementById("myNumber");

let count = 0

myIncrease.addEventListener("click", function(){
    count += 1;
    myNumber.innerText = count;
});

myDecrease.addEventListener("click", function(){
    count -= 1;
    myNumber.innerText = count;
});


// Adding the submit button function to the form
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault()

let message = ""

if  (myUsername.value === ""){
    message += "Username is required \n"
}

if  (myEmail.value === ""){
    message += "Email is required \n"
}

if  (myPassword.value === ""){
    message += "Password is required \n"
}

 if (message) {
    document.getElementById("formMessage").innerHTML = message;
    document.getElementById("formMessage").style.color = "red";
  } else {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    document.getElementById("formMessage").style.color = "green";
  };

  console.log("Form Submitted"); });