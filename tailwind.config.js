/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				darklight: "#1D2033",
				darked: "#171A29",
				blacked: "#0C0C13",
				pinked: "#FF477B",
				grey: "#8E8E8E",
			},
			fontFamily: {
				sans: ["The Sims Sans"],
			},
		},
	},
	plugins: [],
};
