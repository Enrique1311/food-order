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
				red_color: "#D83F31",
				orange_color: "#FFCC70",
				gray_color: "#61677A",
				light_gray_color: "#DDE6ED",
			},
		},
	},
	plugins: [],
};
