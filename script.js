var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("button");

//sets color values to background using color picker
function setGradient() {
	//changes gradient background color
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	// displays linear gradient value
	css.textContent = body.style.background;
}

//creates random rgb values
function randomRGB() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

	return rgb;
}

//sets random rgb values to background
function setRandom() {
	var rgb1 = randomRGB();
	var rgb2 = randomRGB();

	body.style.background = "linear-gradient(to right, " + rgb1 + ", " + rgb2 + ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandom);
