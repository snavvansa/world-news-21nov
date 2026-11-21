// Renders page/index.html to entry.png at exactly 1024 x 1024 (build step only; the entry itself just copies the PNG).
// usage: NODE_PATH=<dir with playwright> node tools/render.mjs [out.png]
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const require = createRequire(join(process.env.PW_DIR ?? process.cwd(), 'package.json'));
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] ?? join(root, 'entry.png'));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
await page.goto(pathToFileURL(join(root, 'page', 'index.html')).href);
await page.waitForTimeout(300);
// Report any block whose text spills out of its box, so the layout can be tightened.
const spills = await page.evaluate(() => [...document.querySelectorAll('.lead, .card, .num, .more, .check, .deck, .date, .kick')]
  .filter(el => el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1)
  .map(el => `${el.className}: ${(el.innerText || '').slice(0, 40).replace(/\n/g, ' ')} (${el.scrollWidth}x${el.scrollHeight} in ${el.clientWidth}x${el.clientHeight})`));
await page.screenshot({ path: out, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });
await browser.close();
console.log('wrote', out);
if (errors.length) console.log('page errors:', errors.join('\n'));
if (spills.length) console.log('overflow:\n' + spills.join('\n'));
