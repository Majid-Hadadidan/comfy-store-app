/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [import("@tailwindcss/typography"), import("daisyui")],
  // plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
