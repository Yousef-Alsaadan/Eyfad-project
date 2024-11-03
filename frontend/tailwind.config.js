/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 0%, rgba(106, 163, 255, 0.10) 48%, rgba(106, 163, 255, 0.05) 100%)',
    },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
