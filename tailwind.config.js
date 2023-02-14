/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				darklight: "#1D2033",
				darked: "#171A29",
				pinked: "#FF477B",
			},
			fontFamily: {
				sans: ["The Sims Sans"],
			},
		},
	},
	plugins: [],
};
