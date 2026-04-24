import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFile = join(__dirname, 'src/assets/liquor-concepts-logo.jpg');
const outputDir = join(__dirname, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('Generating favicons from:', inputFile);

  for (const { name, size } of sizes) {
    const outputPath = join(outputDir, name);
    await sharp(inputFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate ICO file (using 32x32 PNG)
  await sharp(inputFile)
    .resize(32, 32)
    .toFile(join(outputDir, 'favicon.ico'));
  console.log('✓ Generated favicon.ico');

  console.log('\n✅ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
