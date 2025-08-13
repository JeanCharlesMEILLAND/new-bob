/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        primary: "#EDF3FF",
        accent: "#25416E",
        brand: {
          50: "#f3f7ff",
          100: "#e8efff",
          200: "#cfe0ff",
          300: "#a6c2ff",
          400: "#7ba1ff",
          500: "#4b7bff",
          600: "#2f5df3",
          700: "#2549c6",
          800: "#1f3ca0",
          900: "#0F55C5",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(255, 255, 255, 0.08), 0 10px 40px rgba(75, 123, 255, 0.25)",
      },
      keyframes: {
        "bob-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        bob: "bob-float 6s ease-in-out infinite",
        "bob-slow": "bob-float 7.5s ease-in-out infinite",
        "bob-slower": "bob-float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
