// Challenge: Create a variable named 'firstName' and assign it your name.
var firstName = "Mike";
let secondName = " Zhao"
var button = document.getElementById("myButton");
var messageContainer = document.getElementById("messageContainer");

button.addEventListener("click", function() {
  messageContainer.textContent = "Welcome, " + firstName + secondName +"!";
});


