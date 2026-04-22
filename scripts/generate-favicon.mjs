// One-off script: generate square app icons from the Sub-Zero logo.
// The site logo is a wide 221x48 banner ("SUB*ZERO"), so a full-logo favicon
// becomes illegible at 16x16. Instead, we detect the blue snowflake mark
// between SUB and ZERO and use just that square as the icon.
//
// Outputs:
//   src/app/favicon.ico      — 16/32/48 multi-size ICO for legacy fallbacks
//   src/app/icon.png         — 64x64 PNG for modern browsers (auto <link>)
//   src/app/apple-icon.png   — 180x180 PNG for iOS home-screen
//
// Re-run with: node scripts/generate-favicon.mjs

import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const logoPath = path.join(root, "public", "images", "logo.webp");
const appDir = path.join(root, "src", "app");

const logoBuf = await readFile(logoPath);
const logoMeta = await sharp(logoBuf).metadata();
console.log("logo dimensions:", logoMeta.width, "x", logoMeta.height);

// Detect the snowflake: it's the only strongly-blue region in the logo.
// Scan the raw pixels, score each column by "blueness", and take the centroid.
const { data, info } = await sharp(logoBuf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const W = info.width;
const H = info.height;
// Find pixels that are clearly blue-tinted (b > r AND b > g by a margin).
// The Sub-Zero snowflake is a pale cyan ~#A8D0E8 while the wordmark is
// near-neutral gray, so even a small blueness margin separates them.
const BLUENESS_MIN = 10;
const colHas = new Uint32Array(W);
const rowHas = new Uint32Array(H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a < 128) continue;
    if (b - r >= BLUENESS_MIN && b - g >= BLUENESS_MIN && b > 100) {
      colHas[x]++;
      rowHas[y]++;
    }
  }
}

// Only columns with at least N hits count — suppresses stray blue-tinted
// anti-alias pixels in the wordmark.
const MIN_COL_HITS = 3;
const MIN_ROW_HITS = 3;

// Bounding box of strong-blue pixels, requiring minimum hit counts so that
// sparse anti-alias noise in the wordmark doesn't stretch the box.
let blueLeft = -1, blueRight = -1, blueTop = -1, blueBottom = -1;
for (let x = 0; x < W; x++) if (colHas[x] >= MIN_COL_HITS) { if (blueLeft === -1) blueLeft = x; blueRight = x; }
for (let y = 0; y < H; y++) if (rowHas[y] >= MIN_ROW_HITS) { if (blueTop === -1) blueTop = y; blueBottom = y; }

if (blueLeft === -1) {
  throw new Error("No strong-blue snowflake detected in logo.");
}

const blueCx = Math.round((blueLeft + blueRight) / 2);
const blueCy = Math.round((blueTop + blueBottom) / 2);
const blueW = blueRight - blueLeft + 1;
const blueH = blueBottom - blueTop + 1;

// Square crop around the snowflake: side = max(bounding width, height) * 1.15.
// Kept tight so the adjacent B and Z letters stay out of frame.
const cropSide = Math.min(
  H,
  Math.max(12, Math.round(Math.max(blueW, blueH) * 1.15)),
);
let cropLeft = Math.round(blueCx - cropSide / 2);
let cropTop = Math.round(blueCy - cropSide / 2);
cropLeft = Math.max(0, Math.min(W - cropSide, cropLeft));
cropTop = Math.max(0, Math.min(H - cropSide, cropTop));

console.log(
  `snowflake bbox x=${blueLeft}-${blueRight} y=${blueTop}-${blueBottom}; cropping ${cropSide}x${cropSide} @ (${cropLeft},${cropTop})`,
);

const snowflakeBuf = await sharp(logoBuf)
  .extract({ left: cropLeft, top: cropTop, width: cropSide, height: cropSide })
  .png()
  .toBuffer();

// Render the square snowflake into any target size, with a small transparent
// margin so the mark doesn't jam against browser tab edges.
async function renderIcon(size, outPath) {
  const margin = Math.round(size * 0.05);
  const inner = size - margin * 2;
  const resized = await sharp(snowflakeBuf)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(outPath);
  console.log("wrote", outPath);
}

async function buildPngBuffer(size) {
  const margin = Math.round(size * 0.05);
  const inner = size - margin * 2;
  const resized = await sharp(snowflakeBuf)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();
}

function buildIco(pngBuffers) {
  const n = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(n, 4);

  let offset = 6 + 16 * n;
  const entries = [];
  const images = [];
  for (const { size, buf } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    images.push(buf);
    offset += buf.length;
  }
  return Buffer.concat([header, ...entries, ...images]);
}

await renderIcon(64, path.join(appDir, "icon.png"));
await renderIcon(180, path.join(appDir, "apple-icon.png"));

const png16 = await buildPngBuffer(16);
const png32 = await buildPngBuffer(32);
const png48 = await buildPngBuffer(48);
const ico = buildIco([
  { size: 16, buf: png16 },
  { size: 32, buf: png32 },
  { size: 48, buf: png48 },
]);
const icoPath = path.join(appDir, "favicon.ico");
await writeFile(icoPath, ico);
console.log("wrote", icoPath, "bytes:", ico.length);
