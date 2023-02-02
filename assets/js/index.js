//Toggle menu
const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;
let target;

document.addEventListener("click", (e) => {
	target = e.target.id;
});

console.log(target);

function openMenuToggle() {
	document.addEventListener("click", (event) => {
		if (event.target.id == "burgermenu") {
			document.body.classList.toggle("overflow-hidden");
			mobileMenu.classList.toggle("scale-y-100");
		}
		if (event.target.id !== "burgermenu") {
			mobileMenu.classList.remove("scale-y-100");
			document.body.classList.remove("overflow-hidden");
		}
	});
}

// function closeMenuOutArea() {
// 	body.addEventListener("click", () => {
// 		mobileMenu.classList.add("hidden");
// 	});
// }

openMenuToggle();
// closeMenuOutArea();
