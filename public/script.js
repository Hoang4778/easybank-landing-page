const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close-icon");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", function () {
	dropdown.classList.remove("transition");
	this.style = "display: none";
	close.style = "display: block";
});

close.addEventListener("click", function () {
	dropdown.classList.add("transition");
	this.style = "display: none";
	hamburger.style = "display: block";
});

window.addEventListener("resize", function () {
	if (window.innerWidth > 600) {
		hamburger.removeAttribute("style");
		close.removeAttribute("style");
	} else {
		if (!dropdown.classList.contains("transition")) {
			dropdown.classList.add("transition");
			close.style = "display: none";
			hamburger.style = "display: block";
		} else {
			hamburger.style = "display: block";
			close.style = "display: none";
		}
	}
});
