import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

// SVGs
const emblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#f3b616"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f3b616" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#f3b616" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <g transform="translate(0, -10)">
    <!-- Outer Pointed Mihrab Arch Frame -->
    <path d="M 256 60 C 370 120 410 190 410 320 L 410 420 L 102 420 L 102 320 C 102 190 142 120 256 60 Z" 
          fill="none" stroke="url(#goldGrad)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Inner Arch Frame Accent -->
    <path d="M 256 95 C 345 145 380 205 380 320 L 380 400 L 132 400 L 132 320 C 132 205 167 145 256 95 Z" 
          fill="none" stroke="url(#goldGrad)" stroke-width="6" opacity="0.7"/>

    <!-- Crescent / Star Top Peak -->
    <path d="M 256 30 L 260 45 L 275 45 L 263 54 L 267 69 L 256 60 L 245 69 L 249 54 L 237 45 L 252 45 Z" fill="url(#goldGrad)"/>

    <!-- Open Quran Book on Rehal Stand -->
    <g transform="translate(256, 260)">
      <!-- Left & Right Book Pages -->
      <path d="M 0 -35 C -40 -50, -85 -35, -110 -25 L -110 35 C -85 25, -40 10, 0 25 Z" fill="url(#goldGrad)"/>
      <path d="M 0 -35 C 40 -50, 85 -35, 110 -25 L 110 35 C 85 25, 40 10, 0 25 Z" fill="url(#goldGrad)"/>
      
      <!-- Inner Page Line Details -->
      <path d="M -5 -30 L -5 20 M 5 -30 L 5 20" stroke="#090d16" stroke-width="4" stroke-linecap="round"/>

      <!-- Rehal Base X Stand -->
      <path d="M -70 25 L 70 85 M 70 25 L -70 85" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round"/>
    </g>

    <!-- Location Pin Ring at Base -->
    <ellipse cx="256" cy="440" rx="140" ry="16" fill="none" stroke="url(#goldGrad)" stroke-width="10"/>
  </g>
</svg>`;

const appIconFullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#f3b616"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="50%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#020408"/>
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f3b616" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f3b616" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="512" height="512" rx="128" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="112" fill="none" stroke="url(#goldGrad)" stroke-width="4" opacity="0.4"/>
  <circle cx="256" cy="256" r="200" fill="url(#goldGlow)"/>

  <g transform="translate(256, 256) scale(0.78) translate(-256, -256)">
    <g transform="translate(0, -10)">
      <path d="M 256 60 C 370 120 410 190 410 320 L 410 420 L 102 420 L 102 320 C 102 190 142 120 256 60 Z" 
            fill="none" stroke="url(#goldGrad)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      
      <path d="M 256 95 C 345 145 380 205 380 320 L 380 400 L 132 400 L 132 320 C 132 205 167 145 256 95 Z" 
            fill="none" stroke="url(#goldGrad)" stroke-width="6" opacity="0.7"/>

      <path d="M 256 30 L 260 45 L 275 45 L 263 54 L 267 69 L 256 60 L 245 69 L 249 54 L 237 45 L 252 45 Z" fill="url(#goldGrad)"/>

      <g transform="translate(256, 260)">
        <path d="M 0 -35 C -40 -50, -85 -35, -110 -25 L -110 35 C -85 25, -40 10, 0 25 Z" fill="url(#goldGrad)"/>
        <path d="M 0 -35 C 40 -50, 85 -35, 110 -25 L 110 35 C 85 25, 40 10, 0 25 Z" fill="url(#goldGrad)"/>
        <path d="M -5 -30 L -5 20 M 5 -30 L 5 20" stroke="#090d16" stroke-width="4" stroke-linecap="round"/>
        <path d="M -70 25 L 70 85 M 70 25 L -70 85" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round"/>
      </g>

      <ellipse cx="256" cy="440" rx="140" ry="16" fill="none" stroke="url(#goldGrad)" stroke-width="10"/>
    </g>
  </g>
</svg>`;

const appIconForegroundSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#f3b616"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>

  <!-- Scaled to 62% zone for safe adaptive padding on Android -->
  <g transform="translate(256, 256) scale(0.62) translate(-256, -256)">
    <g transform="translate(0, -10)">
      <path d="M 256 60 C 370 120 410 190 410 320 L 410 420 L 102 420 L 102 320 C 102 190 142 120 256 60 Z" 
            fill="none" stroke="url(#goldGrad)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      
      <path d="M 256 95 C 345 145 380 205 380 320 L 380 400 L 132 400 L 132 320 C 132 205 167 145 256 95 Z" 
            fill="none" stroke="url(#goldGrad)" stroke-width="6" opacity="0.7"/>

      <path d="M 256 30 L 260 45 L 275 45 L 263 54 L 267 69 L 256 60 L 245 69 L 249 54 L 237 45 L 252 45 Z" fill="url(#goldGrad)"/>

      <g transform="translate(256, 260)">
        <path d="M 0 -35 C -40 -50, -85 -35, -110 -25 L -110 35 C -85 25, -40 10, 0 25 Z" fill="url(#goldGrad)"/>
        <path d="M 0 -35 C 40 -50, 85 -35, 110 -25 L 110 35 C 85 25, 40 10, 0 25 Z" fill="url(#goldGrad)"/>
        <path d="M -5 -30 L -5 20 M 5 -30 L 5 20" stroke="#090d16" stroke-width="4" stroke-linecap="round"/>
        <path d="M -70 25 L 70 85 M 70 25 L -70 85" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round"/>
      </g>

      <ellipse cx="256" cy="440" rx="140" ry="16" fill="none" stroke="url(#goldGrad)" stroke-width="10"/>
    </g>
  </g>
</svg>`;

function renderSvgToPng(svgString, width, height) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: width },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

// 1. Write SVGs to public
fs.writeFileSync(path.join(process.cwd(), 'public', 'icon.svg'), appIconFullSvg);
fs.writeFileSync(path.join(process.cwd(), 'public', 'visit-quran-emblem.svg'), emblemSvg);

// Render web public/icon.png (512x512)
const webIconPng = renderSvgToPng(appIconFullSvg, 512, 512);
fs.writeFileSync(path.join(process.cwd(), 'public', 'icon.png'), webIconPng);

// Densities map for Android
const mipmapDensities = [
  { dir: 'mipmap-mdpi', iconSize: 48, fgSize: 108 },
  { dir: 'mipmap-hdpi', iconSize: 72, fgSize: 162 },
  { dir: 'mipmap-xhdpi', iconSize: 96, fgSize: 216 },
  { dir: 'mipmap-xxhdpi', iconSize: 144, fgSize: 324 },
  { dir: 'mipmap-xxxhdpi', iconSize: 192, fgSize: 432 },
];

const resDir = path.join(process.cwd(), 'android', 'app', 'src', 'main', 'res');

// Ensure android res directories exist
mipmapDensities.forEach(({ dir, iconSize, fgSize }) => {
  const fullDir = path.join(resDir, dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }

  // 1. ic_launcher.png (Full icon with dark gold background)
  const iconPng = renderSvgToPng(appIconFullSvg, iconSize, iconSize);
  fs.writeFileSync(path.join(fullDir, 'ic_launcher.png'), iconPng);
  fs.writeFileSync(path.join(fullDir, 'ic_launcher_round.png'), iconPng);

  // 2. ic_launcher_foreground.png (Transparent adaptive foreground)
  const fgPng = renderSvgToPng(appIconForegroundSvg, fgSize, fgSize);
  fs.writeFileSync(path.join(fullDir, 'ic_launcher_foreground.png'), fgPng);

  console.log(`✅ Generated ${dir} icons (${iconSize}x${iconSize}, fg ${fgSize}x${fgSize})`);
});

// Write ic_launcher_background.xml
const valuesDir = path.join(resDir, 'values');
if (!fs.existsSync(valuesDir)) {
  fs.mkdirSync(valuesDir, { recursive: true });
}
const bgXmlContent = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#090d16</color>
</resources>`;
fs.writeFileSync(path.join(valuesDir, 'ic_launcher_background.xml'), bgXmlContent);

// Write adaptive icon XMLs in mipmap-anydpi-v26
const anyDpiDir = path.join(resDir, 'mipmap-anydpi-v26');
if (!fs.existsSync(anyDpiDir)) {
  fs.mkdirSync(anyDpiDir, { recursive: true });
}
const adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>`;
fs.writeFileSync(path.join(anyDpiDir, 'ic_launcher.xml'), adaptiveXml);
fs.writeFileSync(path.join(anyDpiDir, 'ic_launcher_round.xml'), adaptiveXml);

console.log('🎉 All Android launcher icons and resources generated successfully!');
