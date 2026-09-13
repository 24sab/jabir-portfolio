/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F2F8F5',
          100: '#E1EFE8',
          200: '#C2DFD1',
          300: '#94C6B1',
          400: '#5EA78B',
          500: '#3A8A6D',
          600: '#2A6F56',
          700: '#225845',
          800: '#1C4638',
          900: '#0F382A',
          950: '#082219',
        },
        surface: {
          50: '#FAFBFB',
          100: '#F4F5F6',
          200: '#E9EBEF',
          300: '#D7DBE2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'portrait': '0 25px 50px -12px rgba(15, 56, 42, 0.15)',
      }
    },
  },
  plugins: [],
}
