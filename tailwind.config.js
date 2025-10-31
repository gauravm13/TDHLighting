/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', // Scan all HTML/JS files in root and subfolders
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}