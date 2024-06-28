/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070f3',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#8BC34A',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#d93025',
          foreground: '#ffffff',
        },
      }
    },
  },
  plugins: [],
}

