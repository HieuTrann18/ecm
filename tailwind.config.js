/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'], // đường dẫn tới file React của bạn],
	theme: {
		extend: {
			colors: {
				cblue: '#1E90FF', // text-cblue
				cred: '#FF6347', // text-cred
				cgreen: '#28a745',
				cyellow: '#ffc107',
				cdark: '#343a40',
			},
		},
	},
	plugins: [],
};
