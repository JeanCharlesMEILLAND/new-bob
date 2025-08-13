// convert-to-webp.js
const sharp = require("sharp");
const fs = require("fs");

const input = "public/circle.png";
const output = "public/circle.webp";

sharp(input)
  .webp({ quality: 80 })
  .toFile(output)
  .then(() => {
    console.log(`✅ Conversion terminée : ${output}`);
  })
  .catch((err) => {
    console.error("❌ Erreur de conversion :", err);
  });
