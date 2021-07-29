// Selecting all the inputs on the page
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
	// '' sets it to empty otherwise would return undefined with the colors
	const suffix = this.dataset.sizing || "";
	// Accessing the HTML(document), going into the root of the document (main HTML) with documentElement, style (which selects its CSS)
	// Then grabbing the property by it's name (blur, spacing, base), and putting together it's value and data-sizing values.
	// This appends pixels to the values so that they change when the function is called.
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix,
	);
}

// Triggers the changes
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
