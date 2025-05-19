// tailwind.config.ts or tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // optional if you also use /pages
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#2C2A26',
        cardBeige: '#E7DDC6',
        textDark: '#3F3D3B',
        textAccent: '#6F6A65',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // For elegant serif feel
        sans: ['"Inter"', 'sans-serif'], // For body
      },
    },
  },
  plugins: [],
};
