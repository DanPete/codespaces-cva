/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      },
      spacing: {
        xxs: '0.25rem', // 4px
        xs: '0.5rem', // 8px
        sm: '0.75rem', // 12px
        'sm+': '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem', // 48px
        '4xl': '3.5rem', // 56px
        '5xl': '4rem', // 64px
        '6xl': '5rem', // 80px
        '6xl+': '5.5rem', // 88px
        '7xl': '6rem', // 96px
        '7xl+': '7.5rem', // 120px
        '8xl': '12rem', // 188px
      },
    },
  },
  plugins: [],
}
