//your JS code here. If required.
// Get the element with id="level"
const targetElement = document.getElementById("level");

// Initialize level counter
let level = 0;
let current = targetElement;

// Traverse upwards through parent elements
while (current) {
  level++;
  current = current.parentElement; // move to parent
}

// Show the result
alert(`The level of the element is: ${level}`);
