import sharp from "sharp";

const images = [
  {
    input: "public/central.png",
    output: "public/central.webp",
    width: 300,
    height: 309,
    quality: 75,
  },
  {
    input: "public/circle.webp",
    output: "public/circle-small.webp",
    width: 206,
    height: 190,
    quality: 75,
  },
  {
    input: "public/Group 1000001285 (1).png",
    output: "public/group-app-preview.webp",
    width: 280,
    height: 170,
    quality: 75,
  },
];

for (const { input, output, width, height, quality } of images) {
  try {
    await sharp(input)
      .resize(width, height)
      .webp({ quality })
      .toFile(output);
    console.log(`✅ Conversion terminée : ${output}`);
  } catch (err) {
    console.error(`❌ Erreur pour ${input}`, err);
  }
}
