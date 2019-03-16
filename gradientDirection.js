// Neat touch: randomize the gradient's direction
function randomizeGradient() {
	const dir = Math.floor(Math.random() * 360);
	document.body.style.setProperty("--gradient-dir", dir + "deg");
}
randomizeGradient();