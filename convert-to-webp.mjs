import sharp from "sharp";

const images = [
  { input: "public/7 2.png", output: "public/events-preview.webp" },
  { input: "public/Mask group.png", output: "public/mask-group.webp" },
];

for (const { input, output } of images) {
  try {
    await sharp(input)
      .webp({ quality: 80 })
      .toFile(output);
    console.log(`✅ Conversion terminée : ${output}`);
  } catch (err) {
    console.error(`❌ Erreur de conversion pour ${input}:`, err);
  }
}
