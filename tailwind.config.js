/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: { primary: "#d97706", accent: "#92400e" },
  }},
  plugins: [],
};
