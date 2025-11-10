/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {  
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      keyframes: {
        dropFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'drop-from-top': 'dropFromTop 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

