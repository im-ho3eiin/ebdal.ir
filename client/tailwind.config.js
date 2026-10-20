/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ebdal: {
          blue: '#0F4C81',
          accent: '#FF6B00',
          dark: '#1E293B',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
