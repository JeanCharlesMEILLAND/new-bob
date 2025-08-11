/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan toutes les pages et composants dans /src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#4f46e5', // Indigo-600
          light: '#6366f1',   // Indigo-500
          dark: '#3730a3',    // Indigo-800
        },
        accent: {
          DEFAULT: '#9333ea', // Violet-600
          light: '#a855f7',   // Violet-500
          dark: '#7e22ce',    // Violet-800
        },
      },
      boxShadow: {
        'soft': '0 4px 14px rgba(0, 0, 0, 0.08)',
        'xl-soft': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
