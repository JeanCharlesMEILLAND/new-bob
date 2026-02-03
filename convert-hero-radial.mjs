import sharp from "sharp";

const input = "public/decorations/hero-radial.png";
const output = "public/decorations/hero-radial.avif";

try {
  await sharp(input)
    .avif({ quality: 60 })
    .toFile(output);
  console.log(`✅ Conversion terminée : ${output}`);
} catch (err) {
  console.error("❌ Erreur de conversion :", err);
}
