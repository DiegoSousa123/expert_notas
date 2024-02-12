/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			keyframes:{
				showDialog: {
					'0%' : { opacity: '0', scale: '0.5 0.5' },
					'100%' : {opacity: '1', scale: '1 1'}
				}
			},
			animation: {
				'showCardDialog' : 'showDialog 200ms linear forwards',
			}
    },
  },
  plugins: [],
}

