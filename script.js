// Selecting all the inputs on the page
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
	console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// Triggers the changes
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
