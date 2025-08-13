import sharp from "sharp";

await sharp("public/Group 1000001285 (1).png")
  .webp({ quality: 80 })
  .toFile("public/group-app-preview.webp");

console.log("✅ Conversion terminée : group-app-preview.webp");
