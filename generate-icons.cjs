// Generate Chrome Extension icons with colored background
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SIZES = [16, 32, 48, 128];
const ICON_DIR = path.join(__dirname, 'icons');
const SOURCE_LOGO = path.join(__dirname, '..', 'password-generator', 'public', 'logo.png');

// Color scheme - blue background like the site
const BACKGROUND_COLOR = { r: 74, g: 158, b: 255, alpha: 1 }; // #4a9eff
const PADDING = 0.15; // 15% padding

async function generateIcon(size) {
  const paddingPx = Math.floor(size * PADDING);
  const logoSize = size - (paddingPx * 2);

  try {
    // Create colored background
    const background = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: BACKGROUND_COLOR
      }
    })
    .png()
    .toBuffer();

    // Resize logo
    const logo = await sharp(SOURCE_LOGO)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Composite logo on background
    await sharp(background)
      .composite([{
        input: logo,
        top: paddingPx,
        left: paddingPx
      }])
      .png()
      .toFile(path.join(ICON_DIR, `icon-${size}.png`));

    console.log(`✓ Generated icon-${size}.png`);
  } catch (error) {
    console.error(`✗ Failed to generate icon-${size}.png:`, error.message);
  }
}

async function main() {
  console.log('🎨 Generating Chrome Extension icons...\n');

  // Check if source logo exists
  if (!fs.existsSync(SOURCE_LOGO)) {
    console.error('✗ Source logo not found:', SOURCE_LOGO);
    process.exit(1);
  }

  // Create icons directory if it doesn't exist
  if (!fs.existsSync(ICON_DIR)) {
    fs.mkdirSync(ICON_DIR, { recursive: true });
  }

  // Generate all sizes
  for (const size of SIZES) {
    await generateIcon(size);
  }

  console.log('\n✅ All icons generated successfully!');
  console.log('\nNext steps:');
  console.log('1. Check chrome-extension/icons/ folder');
  console.log('2. Reload extension in chrome://extensions/');
  console.log('3. Icons should now be visible in toolbar');
}

main().catch(console.error);
