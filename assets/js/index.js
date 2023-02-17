const menuButton = document.getElementById("burgermenu");
const accountButton = document.getElementById("user-icon");

const menuBox = document.getElementById("mobile-menu");
const accountBox = document.getElementById("account-menu");

const btnModal = document.getElementById("btn-modal-open");
const parentModal = document.getElementById("modal-parent");
const boxModal = document.getElementById("modal-box");
const closeModalbtn = document.getElementById("close-modal");

const dropdownButton = document.getElementById("dropdown");
const dropdownBox = document.getElementById("dropdown-menu");

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
const toggleMenu = () => {
	if (accountBox.classList.contains("scale-y-100")) {
		menuButton.classList.add("opened");

		accountBox.classList.remove("scale-y-100");
		menuBox.classList.toggle("scale-y-100");
	} else {
		menuButton.classList.toggle("opened");
		menuBox.classList.toggle("scale-y-100");
	}
};

const toggleAccount = () => {
	if (
		menuBox.classList.contains("scale-y-100") ||
		dropdownBox.classList.contains("scale-y-100")
	) {
		menuButton.classList.remove("opened");

		menuBox.classList.remove("scale-y-100");
		dropdownBox.classList.remove("scale-y-100");
		accountBox.classList.toggle("scale-y-100");
	} else {
		accountBox.classList.toggle("scale-y-100");
	}
};

const toggleDropdown = () => {
	if (accountBox.classList.contains("scale-y-100")) {
		accountBox.classList.remove("scale-y-100");
		dropdownBox.classList.toggle("scale-y-100");
	} else {
		dropdownBox.classList.toggle("scale-y-100");
	}
};

if (menuButton) {
	menuButton.addEventListener("click", function (e) {
		e.stopPropagation();
		toggleMenu();
	});
}
if (accountButton) {
	accountButton.addEventListener("click", function (e) {
		e.stopPropagation();
		toggleAccount();
	});
}
if (dropdownButton) {
	dropdownButton.addEventListener("click", function (e) {
		e.stopPropagation();
		toggleDropdown();
	});
}

document.documentElement.addEventListener("click", function (e) {
	if (accountBox && accountBox.classList.contains("scale-y-100")) {
		toggleAccount();
	}
	if (menuBox && menuBox.classList.contains("scale-y-100")) {
		toggleMenu();
	}
	if (dropdownBox && dropdownBox.classList.contains("scale-y-100")) {
		toggleDropdown();
	}
	if (boxModal && boxModal.classList.contains("scale-y-100")) {
		closeModal();
	}
});
if (btnModal) {
	btnModal.addEventListener("click", (e) => {
		e.stopPropagation();
		openModal();
	});
}
if (closeModalbtn) {
	closeModalbtn.addEventListener("click", (e) => {
		e.stopPropagation();
		closeModal();
	});
}
