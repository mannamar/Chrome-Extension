// Create a button element
var button = document.createElement("button");
button.innerHTML = "Click me!";

// Declate container
const skillsCont = document.getElementById("ember75");

// Append the button to the container
if (skillsCont != null) {
  skillsCont.prepend(button);
}

// Add a click event listener to the button
button.addEventListener("click", function() {
  alert("Button clicked!");
});
