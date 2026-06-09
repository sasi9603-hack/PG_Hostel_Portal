/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Bright Blue
          600: '#2563eb', // Vibrant Electric Blue
          700: '#1d4ed8', // Deep Electric Blue
          800: '#1e40af', // Navy Blue
          900: '#1e3a8a', // Deep Navy Blue
          950: '#172554', // Very Deep Navy
        },
        accent: {
          gold: '#facc15', // Vibrant Yellow/Gold (from image)
          amber: '#eab308', // Amber Gold
          orange: '#f97316', // Bright Orange
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
