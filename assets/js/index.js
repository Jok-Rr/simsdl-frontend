const menuButton = document.getElementById("burgermenu");
const accountButton = document.getElementById("user-icon");

const menuBox = document.getElementById("mobile-menu");
const accountBox = document.getElementById("account-menu");

const btnModal = document.getElementById("btn-modal-open");
const parentModal = document.getElementById("modal-parent");
const boxModal = document.getElementById("modal-box");
const closeModalbtn = document.getElementById("close-modal");

const toggleMenu = function () {
	if (accountBox.classList.contains("scale-y-100")) {
		menuButton.classList.add("opened");

		accountBox.classList.remove("scale-y-100");
		menuBox.classList.toggle("scale-y-100");
	} else {
		menuButton.classList.toggle("opened");
		menuBox.classList.toggle("scale-y-100");
		document.documentElement.classList.toggle("overflow-hidden");
	}
};

const toggleAccount = function () {
	if (menuBox.classList.contains("scale-y-100")) {
		menuButton.classList.remove("opened");

		menuBox.classList.remove("scale-y-100");
		accountBox.classList.toggle("scale-y-100");
	} else {
		accountBox.classList.toggle("scale-y-100");
		document.documentElement.classList.toggle("overflow-hidden");
	}
};

menuButton.addEventListener("click", function (e) {
	e.stopPropagation();
	toggleMenu();
});

accountButton.addEventListener("click", function (e) {
	e.stopPropagation();
	toggleAccount();
});

document.documentElement.addEventListener("click", function (e) {
	if (accountBox.classList.contains("scale-y-100")) {
		toggleAccount();
	}
	if (menuBox.classList.contains("scale-y-100")) {
		toggleMenu();
	}
});

const openModal = () => {
	parentModal.classList.remove("hidden");
	setTimeout(() => {
		boxModal.classList.add("scale-y-100");
	}, 100);
	document.documentElement.classList.add("overflow-hidden");
};

const closeModal = () => {
	boxModal.classList.remove("scale-y-100");
	setTimeout(() => {
		parentModal.classList.add("hidden");
	}, 100);

	document.documentElement.classList.remove("overflow-hidden");
};

btnModal.addEventListener("click", (e) => {
	e.stopPropagation();
	openModal();
});

closeModalbtn.addEventListener("click", (e) => {
	e.stopPropagation();
	closeModal();
});
