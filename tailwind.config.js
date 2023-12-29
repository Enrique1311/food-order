/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				green_color: "#219C90",
				orange_color: "#FFCC70",
				red_color: "#D83F31",
				gray_color: "#61677A",
			},
		},
	},
	plugins: [],
};
