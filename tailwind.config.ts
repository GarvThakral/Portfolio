// tailwind.config.ts or tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // optional if you also use /pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
