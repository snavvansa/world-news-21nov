// Small hand-made SVG drawings for each story, plus the locator map. No images are loaded: every
// picture is drawn here from shapes, so the page renders the same way offline every time.

const svg = (w, h, vb, body) =>
  `<svg width="${w}" height="${h}" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

const ART = {
  // COP31: a conference table under a clock past its deadline, a globe on the lectern.
  cop: (w, h) => svg(w, h, '0 0 300 128', `
    <rect width="300" height="128" fill="#e3efe6"/>
    <rect x="0" y="96" width="300" height="32" fill="#9fc3ab"/>
    <circle cx="232" cy="46" r="30" fill="#fff" stroke="#23704a" stroke-width="5"/>
    <line x1="232" y1="46" x2="232" y2="24" stroke="#16181d" stroke-width="4" stroke-linecap="round"/>
    <line x1="232" y1="46" x2="250" y2="54" stroke="#c8352b" stroke-width="4" stroke-linecap="round"/>
    <text x="232" y="92" font-size="11" text-anchor="middle" font-weight="700" fill="#23704a" font-family="Liberation Sans">PAST 6PM CLOSE</text>
    <rect x="34" y="70" width="150" height="14" rx="3" fill="#6b4b2e"/>
    ${[118, 178].map(x => `<circle cx="${x}" cy="58" r="9" fill="#2b3a4f"/><rect x="${x - 10}" y="66" width="20" height="10" rx="4" fill="#2b3a4f"/>`).join('')}
    <rect x="24" y="40" width="80" height="24" fill="#fff" stroke="#c8352b" stroke-width="2"/>
    <text x="64" y="50" font-size="8.5" text-anchor="middle" font-weight="700" fill="#16181d" font-family="Liberation Sans">DRAFT DEAL</text>
    <text x="64" y="60" font-size="8.5" text-anchor="middle" font-weight="700" fill="#c8352b" font-family="Liberation Sans" text-decoration="line-through">FOSSIL FUELS</text>
    <circle cx="150" cy="46" r="13" fill="#3b82c4"/><path d="M140 42 q6 -5 10 1 q5 6 9 1 M142 52 q6 -3 12 1" stroke="#55a35f" stroke-width="4" fill="none"/>`),

  // Riyadh: night skyline, three missile trails ending in interceptor bursts.
  riyadh: (w, h) => svg(w, h, '0 0 300 128', `
    <rect width="300" height="128" fill="#16213d"/>
    ${[[20, 4], [70, 12], [140, 6], [210, 18], [270, 9], [110, 30], [250, 40]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2" fill="#fff"/>`).join('')}
    ${[[30, 70, 230, 34], [60, 80, 160, 28], [10, 60, 95, 24]].map(([x1, y1, x2, y2]) =>
      `<path d="M${x1} ${y1 + 40} Q ${(x1 + x2) / 2} ${y2 - 10} ${x2} ${y2}" stroke="#c9cfdb" stroke-width="2.5" fill="none" stroke-dasharray="5 4" opacity=".8"/>
       <circle cx="${x2}" cy="${y2}" r="11" fill="#f3c64d"/><circle cx="${x2}" cy="${y2}" r="6" fill="#fff6c9"/>
       ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${x2}" y1="${y2}" x2="${x2 + 17 * Math.cos(a * Math.PI / 180)}" y2="${y2 + 17 * Math.sin(a * Math.PI / 180)}" stroke="#f39c32" stroke-width="2"/>`).join('')}`).join('')}
    <path d="M0 128 V104 h20 v-10 h14 v10 h18 v-22 h12 v22 h26 v-14 h16 v14 h30 L150 52 L156 52 L162 96 h22 v-18 h14 v18 h20 v-28 h10 v28 h28 v-12 h16 v12 h30 V128 Z" fill="#0b1020"/>
    ${[[155, 70], [158, 80], [154, 88], [26, 100], [196, 86], [232, 90]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="3" fill="#f3c64d"/>`).join('')}
    <text x="290" y="120" font-size="11" text-anchor="end" font-weight="700" fill="#f3c64d" font-family="Liberation Sans">3 INTERCEPTED</text>`),

  // BepiColombo: the craft with its solar wings in front of a big grey Mercury.
  mercury: (w, h) => svg(w, h, '0 0 300 128', `
    <rect width="300" height="128" fill="#07090f"/>
    ${[[14, 14], [40, 100], [90, 20], [130, 112], [180, 10], [280, 118], [270, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2" fill="#fff"/>`).join('')}
    <circle cx="230" cy="86" r="74" fill="#8d8a86"/>
    ${[[200, 50, 9], [250, 70, 13], [215, 110, 7], [268, 112, 10], [190, 86, 5], [240, 40, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#74716d"/>`).join('')}
    <path d="M156 86 a74 74 0 0 0 148 0" fill="#000" opacity=".25"/>
    <ellipse cx="230" cy="86" rx="112" ry="26" fill="none" stroke="#f3c64d" stroke-width="2" stroke-dasharray="6 5" transform="rotate(-12 230 86)"/>
    <g transform="translate(86 52) rotate(-12)">
      <rect x="-56" y="-6" width="42" height="12" fill="#2f4f9a" stroke="#9ab3ea" stroke-width="1"/>
      <rect x="14" y="-6" width="42" height="12" fill="#2f4f9a" stroke="#9ab3ea" stroke-width="1"/>
      <rect x="-14" y="-12" width="28" height="24" fill="#d8b04a" stroke="#fff" stroke-width="1"/>
      <path d="M14 0 L30 -9 L30 9 Z" fill="#ff8a3d" transform="translate(-44 0) scale(-1 1) translate(-30 0)"/>
    </g>
    <text x="10" y="118" font-size="11" font-weight="700" fill="#f3c64d" font-family="Liberation Sans">CAPTURE BURN · 21 NOV</text>`),

  quake: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#f4e3d0"/>
    <path d="M0 52 L14 30 L24 42 L34 22 L48 44 L62 34 V76 H0 Z" fill="#a27b55"/>
    <path d="M2 64 h8 l3 -10 l4 18 l4 -24 l4 26 l4 -14 l3 4 h28" stroke="#c8352b" stroke-width="2.2" fill="none"/>
    <text x="31" y="16" font-size="13" text-anchor="middle" font-weight="700" fill="#c8352b" font-family="Liberation Sans">6.7</text>`),

  kyiv: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#2a2633"/>
    <path d="M10 76 V44 l12 -10 l12 10 V76 Z" fill="#4a4250"/>
    <path d="M36 76 V50 l10 -8 l10 8 V76 Z" fill="#4a4250"/>
    <path d="M14 46 q6 -18 10 -6 q4 -16 8 0 q4 -10 4 6 Z" fill="#f39c32"/><path d="M18 46 q4 -10 7 -2 q3 -8 5 2 Z" fill="#f3c64d"/>
    <circle cx="22" cy="20" r="10" fill="#555" opacity=".7"/><circle cx="34" cy="14" r="8" fill="#555" opacity=".6"/>
    <rect x="16" y="56" width="5" height="6" fill="#f3c64d"/><rect x="42" y="58" width="5" height="6" fill="#f3c64d"/>`),

  robot: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#e3e6ee"/>
    <rect x="17" y="14" width="28" height="22" rx="4" fill="#5b6475"/>
    <circle cx="25" cy="25" r="3.5" fill="#c8352b"/><circle cx="37" cy="25" r="3.5" fill="#c8352b"/>
    <line x1="31" y1="14" x2="31" y2="6" stroke="#5b6475" stroke-width="2"/><circle cx="31" cy="5" r="2.5" fill="#c8352b"/>
    <rect x="14" y="40" width="34" height="26" rx="3" fill="#5b6475"/>
    <rect x="4" y="44" width="54" height="10" fill="#fff" stroke="#1d4f91" stroke-width="1.5" transform="rotate(-10 31 49)"/>
    <text x="31" y="52" font-size="7.5" text-anchor="middle" font-weight="700" fill="#1d4f91" font-family="Liberation Sans" transform="rotate(-10 31 49)">UN · 2028</text>`),

  plane: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#dfe9f4"/>
    <rect x="0" y="56" width="62" height="20" fill="#7d8691"/>
    <line x1="4" y1="66" x2="58" y2="66" stroke="#fff" stroke-width="2" stroke-dasharray="6 5"/>
    <path d="M6 48 L48 42 Q58 42 56 47 L10 54 Z" fill="#fff" stroke="#333" stroke-width="1"/>
    <path d="M24 46 L40 36 L44 37 L34 46 Z" fill="#c8352b"/>
    <path d="M8 48 L4 38 L10 38 L16 47 Z" fill="#c8352b"/>
    <path d="M38 47 L44 58 L41 59 L33 48 Z" fill="#f3c64d"/>
    <text x="31" y="20" font-size="11" text-anchor="middle" font-weight="700" fill="#23704a" font-family="Liberation Sans">146 OK</text>`),

  cricket: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#cfe8c4"/>
    <rect x="22" y="0" width="18" height="76" fill="#d9c79a"/>
    <rect x="25" y="52" width="3" height="18" fill="#fff"/><rect x="30" y="52" width="3" height="18" fill="#fff"/><rect x="35" y="52" width="3" height="18" fill="#fff"/>
    <rect x="12" y="10" width="7" height="34" rx="2" fill="#c49a5a" transform="rotate(25 15 27)"/>
    <circle cx="44" cy="22" r="5" fill="#b3201a"/>
    <text x="31" y="49" font-size="12" text-anchor="middle" font-weight="700" fill="#10213a" font-family="Liberation Sans">100</text>`),

  factory: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#ece5d6"/>
    <path d="M4 70 V44 l14 -8 v8 l14 -8 v8 l14 -8 V70 Z" fill="#7a6a5a"/>
    <rect x="48" y="22" width="8" height="48" fill="#5c5046"/>
    <circle cx="52" cy="16" r="5" fill="#bbb"/><circle cx="46" cy="8" r="4" fill="#ccc"/>
    <rect x="10" y="52" width="6" height="6" fill="#f3c64d"/><rect x="24" y="52" width="6" height="6" fill="#f3c64d"/><rect x="38" y="52" width="6" height="6" fill="#f3c64d"/>
    <text x="20" y="22" font-size="9" text-anchor="middle" font-weight="700" fill="#c8352b" font-family="Liberation Sans">DPRK</text>`),

  drone: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#cfe0ea"/>
    <rect x="0" y="54" width="62" height="22" fill="#3d7ea6"/>
    <path d="M8 30 L54 26 L54 30 L8 34 Z" fill="#6c7380"/>
    <path d="M22 24 L44 22 L46 36 L24 38 Z" fill="#8a909b"/>
    <path d="M44 30 L52 46 L48 48 L40 32 Z" fill="#6c7380"/>
    <circle cx="40" cy="30" r="7" fill="#f39c32" opacity=".85"/><circle cx="40" cy="30" r="3" fill="#fff6c9"/>
    <path d="M40 38 q4 10 -2 18" stroke="#555" stroke-width="3" fill="none" opacity=".6"/>`),

  phone: (w, h) => svg(w, h, '0 0 62 76', `
    <rect width="62" height="76" fill="#e8e1f0"/>
    <rect x="16" y="10" width="30" height="56" rx="5" fill="#2b2b34"/>
    <rect x="19" y="16" width="24" height="42" fill="#fff"/>
    ${[20, 28, 36, 44].map(y => `<circle cx="24" cy="${y + 2}" r="3" fill="#888"/><rect x="29" y="${y}" width="11" height="3" fill="#bbb"/>`).join('')}
    <circle cx="44" cy="54" r="10" fill="none" stroke="#c8352b" stroke-width="3"/><line x1="37" y1="61" x2="51" y2="47" stroke="#c8352b" stroke-width="3"/>`),
};

// ---------- locator map: rough continents drawn from (lon, lat) outlines, equirectangular ----------
const LAND = [
  // North America
  [[-168, 66], [-140, 70], [-95, 72], [-80, 64], [-62, 58], [-55, 48], [-67, 45], [-76, 35], [-81, 26], [-90, 29], [-97, 26], [-97, 18], [-88, 15], [-80, 8], [-86, 12], [-105, 20], [-112, 30], [-124, 40], [-124, 48], [-135, 57], [-152, 59], [-165, 60]],
  // Greenland
  [[-52, 60], [-42, 60], [-20, 70], [-20, 80], [-60, 82], [-72, 77], [-56, 70]],
  // South America
  [[-80, 8], [-60, 10], [-50, 0], [-35, -6], [-38, -14], [-48, -26], [-58, -36], [-66, -46], [-70, -54], [-74, -48], [-72, -30], [-71, -18], [-81, -6]],
  // Europe
  [[-10, 36], [-9, 43], [-2, 44], [-4, 48], [5, 52], [9, 57], [5, 62], [14, 68], [28, 71], [42, 68], [40, 60], [30, 56], [40, 48], [28, 41], [22, 37], [16, 38], [12, 44], [8, 44], [3, 42], [0, 38]],
  // Africa
  [[-17, 21], [-12, 29], [-6, 35], [10, 37], [20, 32], [32, 31], [35, 24], [43, 12], [51, 11], [42, -2], [40, -14], [35, -24], [27, -34], [18, -34], [12, -16], [13, -2], [8, 4], [-8, 4], [-16, 12]],
  // Asia
  [[28, 41], [36, 36], [35, 30], [42, 16], [52, 16], [57, 22], [56, 26], [62, 25], [68, 23], [72, 20], [77, 8], [80, 15], [88, 22], [92, 22], [98, 16], [100, 4], [104, 2], [106, 10], [109, 20], [118, 24], [122, 30], [121, 40], [128, 38], [130, 43], [140, 48], [143, 54], [135, 56], [158, 62], [180, 66], [180, 72], [140, 74], [110, 77], [80, 74], [60, 70], [42, 68], [40, 60], [30, 56], [40, 48], [44, 42]],
  // Arabian gulf cut-in is implied; Japan
  [[130, 31], [134, 34], [140, 36], [142, 40], [141, 44], [138, 38], [132, 34]],
  // UK
  [[-5, 50], [1, 51], [0, 54], [-3, 58], [-6, 57], [-4, 53]],
  // Indonesia / Philippines / PNG
  [[95, 5], [104, -6], [114, -8], [120, -9], [106, -2], [100, 2]],
  [[110, 2], [118, 6], [119, 0], [116, -4], [110, -2]],
  [[121, 18], [126, 12], [126, 7], [122, 7], [120, 14]],
  [[131, -1], [141, -3], [150, -10], [143, -9], [136, -4]],
  // Australia / NZ
  [[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [140, -38], [131, -31], [116, -35], [114, -28]],
  [[172, -34], [178, -38], [174, -42], [167, -46], [172, -40]],
];

// Story pins on the map: [number, lon, lat, label]
const PINS = [
  [1, 30.7, 36.9, 'Antalya'], [2, 46.7, 24.7, 'Riyadh'], [4, -75.8, -11.0, 'Junín'], [5, 30.5, 50.5, 'Kyiv'],
  [6, 6.1, 46.2, 'Geneva'], [7, 125.6, 7.1, 'Davao'], [8, 174.8, -41.3, 'Wellington'], [9, 125.7, 39.0, 'Pyongyang'],
  [10, 56.3, 26.6, 'Hormuz'], [11, 121.5, 25.0, 'Taipei'],
];

function drawMap() {
  const W = 420, H = 352, x = lon => (lon + 170) / 352 * W, y = lat => (74 - lat) / 124 * (H - 24) + 22;
  let s = '';
  for (let g = -150; g <= 150; g += 30) s += `<line x1="${x(g)}" y1="18" x2="${x(g)}" y2="${H}" stroke="#c4d6e2" stroke-width="1"/>`;
  for (let t = -60; t <= 60; t += 30) s += `<line x1="0" y1="${y(t)}" x2="${W}" y2="${y(t)}" stroke="#c4d6e2" stroke-width="1"/>`;
  s += LAND.map(p => `<polygon points="${p.map(([lo, la]) => `${x(lo).toFixed(1)},${y(la).toFixed(1)}`).join(' ')}" fill="#f2ead8" stroke="#a99a7c" stroke-width="1"/>`).join('');
  // BepiColombo (3) has no place on Earth: a corner badge says so.
  s += `<g><circle cx="${W - 72}" cy="14" r="9" fill="#5b3a8c"/><text x="${W - 72}" y="18" font-size="11" text-anchor="middle" font-weight="700" fill="#fff" font-family="Liberation Sans">3</text>
        <text x="${W - 60}" y="18" font-size="10.5" font-weight="700" fill="#5b3a8c" font-family="Liberation Sans">Mercury</text></g>`;
  for (const [n, lo, la, name] of PINS) {
    const px = x(lo), py = y(la), lead = n <= 3, r = lead ? 9.5 : 8;
    const left = lo > 150 || n === 7 || n === 2;
    const dy = n === 10 ? 12 : n === 2 ? 3 : n === 1 ? -2 : 0;
    s += `<circle cx="${px}" cy="${py}" r="${r}" fill="${lead ? '#c8352b' : '#10213a'}" stroke="#fff" stroke-width="1.5"/>
      <text x="${px}" y="${py + 3.8}" font-size="${n > 9 ? 9.5 : 11}" text-anchor="middle" font-weight="700" fill="#fff" font-family="Liberation Sans">${n}</text>
      <text x="${left ? px - r - 2 : px + r + 2}" y="${py + 3.5 + dy}" font-size="10" text-anchor="${left ? 'end' : 'start'}" font-weight="700" fill="#10213a" font-family="Liberation Sans" stroke="#dce8f0" stroke-width="3" paint-order="stroke">${name}</text>`;
  }
  document.getElementById('map').innerHTML = s;
}
