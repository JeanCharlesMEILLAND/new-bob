// tailwind.config.ts
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"], // adapte si besoin
  theme: {
    extend: {
      colors: {
        brand:  { DEFAULT: "#4f46e5", dark: "#3730a3" }, // Indigo
        accent: { DEFAULT: "#9333ea" },                  // Violet
        darkSurface: "#0d0f14",                          // pour le dark header/footer
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,.08)",
        "xl-soft": "0 10px 40px rgba(0,0,0,.15)",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
