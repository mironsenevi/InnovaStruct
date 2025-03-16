/** @type {import('tailwindcss').Config} */
export default {
  important: true, // Add this line to prioritize custom CSS over Tailwind's utility classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ["Poppins", "sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'countdown-pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fadeIn': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      },
      colors: {
        primary: {
          DEFAULT: "#f59e0b",
        },
        innovastruct: {
          "50": "#e6edf7",
          "100": "#ccdbef",
          "200": "#99b7de",
          "300": "#6692ce",
          "400": "#f59e0b",
          "500": "#004aad",
          "600": "#003b8a",
          "700": "#002c68",
          "800": "#001e45",
          "900": "#000f23"
        }
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}