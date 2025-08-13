// optimize-circle.mjs
import sharp from "sharp";

await sharp("public/circle.png")
  .resize(800, 800)
  .webp({ quality: 75 })
  .toFile("public/circle-bg.webp");

console.log("✅ Conversion terminée : circle-bg.webp");
