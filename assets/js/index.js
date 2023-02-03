//Toggle menu
const mobileMenu = document.getElementById("mobile-menu");
const accountMenu = document.getElementById("account-menu");
const mainSection = document.getElementsByTagName("main")[0];
function openMenuToggle() {
	document.addEventListener("click", (event) => {
		console.log(event.target.id);
		if (event.target.id == "burgermenu") {
			mobileMenu.classList.add("scale-y-100");
			accountMenu.classList.remove("scale-y-100");
			document.body.classList.add("overflow-hidden");
		} else if (event.target.id == "user-icon") {
			accountMenu.classList.add("scale-y-100");
			mobileMenu.classList.remove("scale-y-100");
			document.body.classList.add("overflow-hidden");
		}

		if (
			event.target.id !== "burgermenu" &&
			event.target.id !== "user-icon" &&
			event.target.parentNode.id !== "account-menu" &&
			event.target.parentNode.id !== "mobile-menu"
		) {
			document.body.classList.remove("overflow-hidden");
			document.body.classList.remove("blur-sm");
			mobileMenu.classList.remove("scale-y-100");
			accountMenu.classList.remove("scale-y-100");
		}
		// if (event.target.id !== "user-icon") {
		// 	document.body.classList.remove("overflow-hidden");
		// 	accountMenu.classList.remove("scale-y-100");
		// }
	});
}

openMenuToggle();
