// Create a button element
var button = document.createElement("button");
button.innerHTML = "Click me!";

// Append the button to the body of the page
document.body.prepend(button);

// Add a click event listener to the button
button.addEventListener("click", function() {
  alert("Button clicked!");
});