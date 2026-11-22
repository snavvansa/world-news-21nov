// Hand-made SVG drawings for each story, plus the locator map. No images are loaded: every
// picture is drawn here from shapes, so the page renders the same way offline every time.
// Lead pictures use a 300 x 118 canvas; card banners use 190 x 44.

const svg = (w, h, vb, body) =>
  `<svg width="${w}" height="${h}" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
const T = (x, y, s, fill, text, anchor = 'start') =>
  `<text x="${x}" y="${y}" font-size="${s}" font-weight="700" fill="${fill}" text-anchor="${anchor}" font-family="Liberation Sans">${text}</text>`;
const stars = pts => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1" fill="#fff"/>`).join('');
const burst = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#f3c64d"/><circle cx="${x}" cy="${y}" r="${r * .55}" fill="#fff6c9"/>` +
  [0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${x}" y1="${y}" x2="${(x + r * 1.6 * Math.cos(a * Math.PI / 180)).toFixed(1)}" y2="${(y + r * 1.6 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="#f39c32" stroke-width="2"/>`).join('');

const ART = {
  // ---------- leads (300 x 118) ----------
  // COP31: delegates at a table, a draft with "fossil fuels" struck out, a clock past the deadline.
  cop: (w, h) => svg(w, h, '0 0 300 118', `
    <rect width="300" height="118" fill="#e1eee4"/>
    <rect x="0" y="92" width="300" height="26" fill="#a7c9b1"/>
    <rect x="40" y="74" width="170" height="12" rx="3" fill="#6b4b2e"/>
    ${[66, 102, 138, 174].map(x => `<circle cx="${x}" cy="60" r="8" fill="#2b3a4f"/><rect x="${x - 10}" y="67" width="20" height="9" rx="4" fill="#2b3a4f"/>`).join('')}
    <g transform="translate(14 30) rotate(-4 110 46)"><rect x="70" y="36" width="82" height="26" fill="#fff" stroke="#b3261e" stroke-width="2"/>
      ${T(111, 47, 8.5, '#15171c', 'DRAFT TEXT 3', 'middle')}
      <text x="111" y="58" font-size="8.5" font-weight="700" fill="#b3261e" text-anchor="middle" font-family="Liberation Sans" text-decoration="line-through">FOSSIL FUELS</text></g>
    <circle cx="250" cy="52" r="28" fill="#fff" stroke="#23704a" stroke-width="5"/>
    <line x1="250" y1="52" x2="250" y2="32" stroke="#15171c" stroke-width="4" stroke-linecap="round"/>
    <line x1="250" y1="52" x2="266" y2="60" stroke="#b3261e" stroke-width="4" stroke-linecap="round"/>
    ${T(250, 98, 10, '#1e5a3a', 'DAY 13 OF 12', 'middle')}`),

  // Riyadh: night skyline, three missile trails ending in interceptor bursts.
  riyadh: (w, h) => svg(w, h, '0 0 300 118', `
    <rect width="300" height="118" fill="#16213d"/>
    ${stars([[20, 60], [70, 12], [140, 6], [210, 18], [270, 9], [110, 30], [250, 40]])}
    ${[[30, 90, 232, 34], [70, 96, 170, 26], [10, 84, 110, 40]].map(([x1, y1, x2, y2]) =>
      `<path d="M${x1} ${y1} Q ${(x1 + x2) / 2} ${y2 - 18} ${x2} ${y2}" stroke="#c9cfdb" stroke-width="2.5" fill="none" stroke-dasharray="5 4" opacity=".8"/>${burst(x2, y2, 9)}`).join('')}
    <path d="M0 118 V98 h20 v-10 h14 v10 h18 v-20 h12 v20 h26 v-12 h16 v12 h30 L150 50 L156 50 L162 90 h22 v-16 h14 v16 h20 v-26 h10 v26 h28 v-10 h16 v10 h30 V118 Z" fill="#0b1020"/>
    ${[[155, 66], [158, 76], [154, 84], [26, 96], [196, 82], [232, 86]].map(([x, y]) => `<rect x="${x}" y="${y}" width="3" height="3" fill="#f3c64d"/>`).join('')}
    ${T(292, 112, 11, '#f3c64d', '3 INTERCEPTED', 'end')}`),

  // Kyiv / Kryvyi Rih: dawn city, a burning house, a ballistic trail and an ambulance.
  kyiv: (w, h) => svg(w, h, '0 0 300 118', `
    <rect width="300" height="118" fill="#2c2a3a"/>
    <rect y="70" width="300" height="48" fill="#3d3a4c"/>
    <circle cx="40" cy="30" r="14" fill="#e9a05a" opacity=".55"/>
    <path d="M300 4 Q 230 10 196 54" stroke="#c9cfdb" stroke-width="2.5" stroke-dasharray="5 4" fill="none"/>
    <path d="M150 118 V68 l26 -20 l26 20 V118 Z" fill="#59506a"/>
    <path d="M156 70 q8 -30 16 -8 q6 -26 12 -2 q6 -16 8 8 Z" fill="#f39c32"/><path d="M162 70 q6 -16 10 -4 q5 -14 9 2 Z" fill="#f3c64d"/>
    <circle cx="170" cy="30" r="13" fill="#6b6b6b" opacity=".75"/><circle cx="188" cy="20" r="10" fill="#777" opacity=".65"/>
    <path d="M60 118 V56 h40 V118 Z" fill="#4a4558"/><path d="M214 118 V60 h50 V118 Z" fill="#4a4558"/>
    ${[[68, 66], [84, 66], [68, 82], [84, 82], [222, 70], [240, 70], [222, 86], [248, 86]].map(([x, y]) => `<rect x="${x}" y="${y}" width="8" height="8" fill="#f3c64d" opacity=".85"/>`).join('')}
    <rect x="20" y="92" width="42" height="18" rx="3" fill="#fff"/><rect x="50" y="86" width="12" height="10" fill="#fff"/>
    <rect x="34" y="96" width="4" height="10" fill="#b3261e"/><rect x="31" y="99" width="10" height="4" fill="#b3261e"/>
    <circle cx="30" cy="111" r="4" fill="#222"/><circle cx="54" cy="111" r="4" fill="#222"/>
    <rect x="270" y="80" width="22" height="14" fill="#0057b7"/><rect x="270" y="87" width="22" height="7" fill="#ffd700"/>`),

  // BepiColombo: the stacked craft on a dashed capture orbit around a big cratered Mercury.
  mercury: (w, h) => svg(w, h, '0 0 300 118', `
    <rect width="300" height="118" fill="#07090f"/>
    ${stars([[14, 14], [40, 100], [90, 20], [130, 108], [60, 60], [24, 44], [110, 6]])}
    <circle cx="234" cy="70" r="66" fill="#8d8a86"/>
    ${[[206, 38, 9], [252, 56, 12], [218, 100, 7], [270, 98, 9], [196, 72, 5], [244, 30, 6], [232, 78, 4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#74716d"/>`).join('')}
    <path d="M168 70 a66 66 0 0 0 132 0" fill="#000" opacity=".25"/>
    <ellipse cx="234" cy="70" rx="104" ry="30" fill="none" stroke="#f3c64d" stroke-width="2" stroke-dasharray="6 5" transform="rotate(-14 234 70)"/>
    <g transform="translate(96 74) rotate(-14)">
      <rect x="-60" y="-6" width="44" height="12" fill="#2f4f9a" stroke="#9ab3ea" stroke-width="1"/>
      <rect x="16" y="-6" width="44" height="12" fill="#2f4f9a" stroke="#9ab3ea" stroke-width="1"/>
      <rect x="-16" y="-13" width="32" height="26" fill="#d8b04a" stroke="#fff" stroke-width="1"/>
      <circle cx="0" cy="0" r="5" fill="#fff6c9"/>
    </g>
    ${T(292, 112, 11, '#f3c64d', 'ORBIT ENTRY · SAT 21 NOV', 'end')}`),

  // ---------- card banners (190 x 44) ----------
  copc: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#e1eee4"/>
    <rect y="34" width="190" height="10" fill="#a7c9b1"/>
    <rect x="112" y="22" width="72" height="18" fill="#fff" stroke="#b3261e" stroke-width="2" transform="rotate(-4 148 31)"/>
    <text x="148" y="35" font-size="9" font-weight="700" fill="#b3261e" text-anchor="middle" font-family="Liberation Sans" text-decoration="line-through" transform="rotate(-4 148 31)">FOSSIL FUELS</text>
    <circle cx="170" cy="36" r="0" fill="none"/>
    ${[40, 62].map(x => `<circle cx="${x}" cy="28" r="6" fill="#2b3a4f"/><rect x="${x - 8}" y="33" width="16" height="11" rx="3" fill="#2b3a4f"/>`).join('')}`),

  cartel: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#f1e3c8"/>
    <rect y="34" width="190" height="10" fill="#b99a6a"/>
    <path d="M30 34 h40 l-4 -10 h-30 Z" fill="#3a3a3a"/><circle cx="38" cy="35" r="4" fill="#111"/><circle cx="62" cy="35" r="4" fill="#111"/>
    <path d="M40 24 q6 -18 12 -4 q4 -12 8 2" fill="#f39c32"/><circle cx="56" cy="10" r="7" fill="#777" opacity=".7"/>
    <path d="M120 10 h40 l8 6 h-56 Z" fill="#4a5a3a"/><line x1="108" y1="8" x2="176" y2="8" stroke="#333" stroke-width="2"/>
    <rect x="132" y="16" width="20" height="8" fill="#4a5a3a"/>`),

  nato: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#dfe6f2"/>
    <rect x="24" y="24" width="40" height="10" fill="#fff" stroke="#999"/><rect x="24" y="34" width="40" height="10" fill="#dc143c"/>
    <circle cx="168" cy="30" r="13" fill="#1d3a73"/>
    <path d="M168 19 L170.5 30 L168 41 L165.5 30 Z M157 30 L168 27.5 L179 30 L168 32.5 Z" fill="#fff"/>`),

  tennis: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#2b5c9e"/>
    <rect x="10" y="6" width="170" height="34" fill="none" stroke="#fff" stroke-width="1.5"/>
    <line x1="95" y1="6" x2="95" y2="40" stroke="#fff" stroke-width="2"/>
    <line x1="10" y1="23" x2="180" y2="23" stroke="#fff" stroke-width="1"/>
    <circle cx="140" cy="16" r="5" fill="#d6f23a"/>
    <ellipse cx="50" cy="18" rx="9" ry="11" fill="none" stroke="#f3c64d" stroke-width="2.5" transform="rotate(30 50 18)"/><line x1="56" y1="27" x2="64" y2="38" stroke="#f3c64d" stroke-width="3"/>`),

  quake: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#f4e3d0"/>
    <path d="M0 44 L30 14 L52 30 L78 8 L104 30 L126 18 L150 34 L190 20 V44 Z" fill="#a27b55"/>
    <path d="M0 34 h40 l4 -12 l5 22 l5 -30 l5 32 l5 -18 l4 6 h122" stroke="#b3261e" stroke-width="2.2" fill="none"/>
    `),

  plane: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#dfe9f4"/>
    <rect y="32" width="190" height="12" fill="#7d8691"/>
    <line x1="0" y1="38" x2="190" y2="38" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>
    <path d="M30 26 L120 22 Q134 22 132 27 L36 31 Z" fill="#fff" stroke="#333" stroke-width="1"/>
    <path d="M70 25 L92 14 L98 15 L86 25 Z" fill="#b3261e"/><path d="M32 26 L26 14 L34 14 L42 25 Z" fill="#b3261e"/>
    <path d="M90 27 L76 34 L72 36 L66 31 Z" fill="#f39c32" opacity=".9"/>
    <path d="M108 30 L120 40" stroke="#f3c64d" stroke-width="3"/>
    `),

  gaza: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#e9e0d2"/>
    <path d="M0 44 V26 h22 v-8 h18 v8 h16 v-14 h22 v14 h20 l6 -6 l6 6 h20 v-10 h20 v10 h40 V44 Z" fill="#9a8c78"/>
    <circle cx="70" cy="12" r="9" fill="#888" opacity=".7"/><circle cx="84" cy="7" r="6" fill="#999" opacity=".6"/>
    <path d="M120 44 v-12 l10 -8 l10 8 v12 Z" fill="#c9bfae"/><path d="M136 44 h30 l-6 -10 h-18 Z" fill="#eee"/>
    `),

  sudan: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#f1dfb8"/>
    <rect y="30" width="190" height="14" fill="#d8b77c"/>
    <path d="M0 32 Q 60 26 100 32 T 190 30" stroke="#8a6a3a" stroke-width="3" fill="none" stroke-dasharray="7 5"/>
    <rect x="40" y="18" width="38" height="12" rx="2" fill="#6b6b4a"/><rect x="70" y="14" width="18" height="8" fill="#6b6b4a"/><circle cx="48" cy="31" r="4" fill="#333"/><circle cx="70" cy="31" r="4" fill="#333"/>
    <rect x="130" y="6" width="22" height="14" fill="#d21034"/><rect x="130" y="11" width="22" height="5" fill="#fff"/><rect x="130" y="16" width="22" height="4" fill="#000"/><path d="M130 6 L138 13 L130 20 Z" fill="#007229"/>
    <line x1="130" y1="6" x2="130" y2="30" stroke="#333" stroke-width="2"/>
    `),

  f1: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#141428"/>
    ${stars([[12, 6], [60, 10], [120, 5], [170, 12]])}
    <rect y="30" width="190" height="14" fill="#333"/>
    ${[0, 16, 32, 48, 64, 80].map(x => `<rect x="${x}" y="30" width="8" height="4" fill="#fff"/><rect x="${x + 8}" y="30" width="8" height="4" fill="#b3261e"/>`).join('')}
    <path d="M40 30 l6 -8 h46 l14 4 h14 v4 Z" fill="#1e3a8a"/><rect x="88" y="17" width="6" height="6" fill="#f3c64d"/>
    <circle cx="52" cy="31" r="5" fill="#111"/><circle cx="110" cy="31" r="5" fill="#111"/>
    ${T(182, 24, 13, '#f3c64d', 'WIN', 'end')}`),

  cricket: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#cfe8c4"/>
    <rect x="70" y="0" width="56" height="44" fill="#d9c79a"/>
    ${[84, 90, 96].map(x => `<rect x="${x}" y="22" width="3" height="18" fill="#fff"/>`).join('')}
    <rect x="40" y="6" width="7" height="32" rx="2" fill="#c49a5a" transform="rotate(30 43 22)"/>
    <circle cx="140" cy="16" r="5" fill="#b3201a"/>
    ${T(184, 38, 13, '#15171c', '486-4', 'end')}`),

  drone: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#cfe0ea"/>
    <rect y="32" width="190" height="12" fill="#3d7ea6"/>
    <path d="M40 18 L130 14 L130 18 L40 22 Z" fill="#6c7380"/><path d="M70 12 L104 11 L106 24 L72 25 Z" fill="#8a909b"/>
    <path d="M126 16 L134 28 L130 30 L122 18 Z" fill="#6c7380"/>
    ${burst(100, 17, 6)}
    <path d="M100 24 q6 8 0 14" stroke="#555" stroke-width="3" fill="none" opacity=".6"/>
    `),

  robot: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#e3e6ee"/>
    <rect x="150" y="0" width="26" height="18" rx="4" fill="#5b6475"/><circle cx="158" cy="9" r="3" fill="#b3261e"/><circle cx="168" cy="9" r="3" fill="#b3261e"/>
    <rect x="40" y="28" width="34" height="16" rx="3" fill="#5b6475"/>
    <rect x="104" y="22" width="80" height="18" fill="#fff" stroke="#2f5d9a" stroke-width="2"/>
    ${T(144, 35, 10, '#2f5d9a', 'RULES BY 2028', 'middle')}`),

  train: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#e6e3dc"/>
    <line x1="0" y1="36" x2="190" y2="36" stroke="#555" stroke-width="2"/><line x1="0" y1="40" x2="190" y2="40" stroke="#555" stroke-width="2"/>
    <line x1="0" y1="8" x2="190" y2="8" stroke="#333" stroke-width="1"/>
    <rect x="6" y="22" width="40" height="12" fill="#2f5d9a"/><rect x="50" y="22" width="40" height="12" fill="#2f5d9a"/>
    <rect x="96" y="20" width="40" height="12" fill="#a0522d" transform="rotate(14 116 26)"/>
    <rect x="140" y="24" width="40" height="12" fill="#a0522d" transform="rotate(-18 160 30)"/>
    `),

  protest: (w, h) => svg(w, h, '0 0 190 44', `
    <rect width="190" height="44" fill="#e8e4f2"/>
    ${[14, 36, 58, 80, 102, 124, 146, 168].map((x, i) => `<circle cx="${x}" cy="30" r="5" fill="${['#2f5d9a', '#b3261e', '#2e7d4f', '#6b3fa0'][i % 4]}"/><rect x="${x - 5}" y="35" width="10" height="9" fill="${['#2f5d9a', '#b3261e', '#2e7d4f', '#6b3fa0'][i % 4]}"/>`).join('')}
    <rect x="140" y="4" width="46" height="16" fill="#fff" stroke="#333"/><line x1="163" y1="20" x2="163" y2="26" stroke="#333" stroke-width="2"/>
    ${T(163, 15, 8, '#b3261e', 'VIE CHÈRE', 'middle')}`),
};

// ---------- locator map: rough continents drawn from (lon, lat) outlines, equirectangular ----------
const LAND = [
  [[-168, 66], [-140, 70], [-95, 72], [-80, 64], [-62, 58], [-55, 48], [-67, 45], [-76, 35], [-81, 26], [-90, 29], [-97, 26], [-97, 18], [-88, 15], [-80, 8], [-86, 12], [-105, 20], [-112, 30], [-124, 40], [-124, 48], [-135, 57], [-152, 59], [-165, 60]],
  [[-52, 60], [-42, 60], [-20, 70], [-20, 80], [-60, 82], [-72, 77], [-56, 70]],
  [[-80, 8], [-60, 10], [-50, 0], [-35, -6], [-38, -14], [-48, -26], [-58, -36], [-66, -46], [-70, -54], [-74, -48], [-72, -30], [-71, -18], [-81, -6]],
  [[-10, 36], [-9, 43], [-2, 44], [-4, 48], [5, 52], [9, 57], [5, 62], [14, 68], [28, 71], [42, 68], [40, 60], [30, 56], [40, 48], [28, 41], [22, 37], [16, 38], [12, 44], [8, 44], [3, 42], [0, 38]],
  [[-17, 21], [-12, 29], [-6, 35], [10, 37], [20, 32], [32, 31], [35, 24], [43, 12], [51, 11], [42, -2], [40, -14], [35, -24], [27, -34], [18, -34], [12, -16], [13, -2], [8, 4], [-8, 4], [-16, 12]],
  [[28, 41], [36, 36], [35, 30], [42, 16], [52, 16], [57, 22], [56, 26], [62, 25], [68, 23], [72, 20], [77, 8], [80, 15], [88, 22], [92, 22], [98, 16], [100, 4], [104, 2], [106, 10], [109, 20], [118, 24], [122, 30], [121, 40], [128, 38], [130, 43], [140, 48], [143, 54], [135, 56], [158, 62], [180, 66], [180, 72], [140, 74], [110, 77], [80, 74], [60, 70], [42, 68], [40, 60], [30, 56], [40, 48], [44, 42]],
  [[130, 31], [134, 34], [140, 36], [142, 40], [141, 44], [138, 38], [132, 34]],
  [[-5, 50], [1, 51], [0, 54], [-3, 58], [-6, 57], [-4, 53]],
  [[95, 5], [104, -6], [114, -8], [120, -9], [106, -2], [100, 2]],
  [[110, 2], [118, 6], [119, 0], [116, -4], [110, -2]],
  [[121, 18], [126, 12], [126, 7], [122, 7], [120, 14]],
  [[131, -1], [141, -3], [150, -10], [143, -9], [136, -4]],
  [[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [140, -38], [131, -31], [116, -35], [114, -28]],
  [[172, -34], [178, -38], [174, -42], [167, -46], [172, -40]],
];

// Pins come from each story's `at` [lon, lat, side]; side 'l' puts the number's offset to the left
// where neighbours crowd. Numbers only (the list beside the map names each one).
function drawMap(stories, REG) {
  const W = 340, H = 196, x = lon => (lon + 170) / 352 * W, y = lat => (72 - lat) / 122 * (H - 22) + 20;
  let s = '';
  for (let g = -150; g <= 150; g += 30) s += `<line x1="${x(g).toFixed(1)}" y1="18" x2="${x(g).toFixed(1)}" y2="${H}" stroke="#2c4a70" stroke-width="1"/>`;
  for (let t = -60; t <= 60; t += 30) s += `<line x1="0" y1="${y(t).toFixed(1)}" x2="${W}" y2="${y(t).toFixed(1)}" stroke="#2c4a70" stroke-width="1"/>`;
  s += LAND.map(p => `<polygon points="${p.map(([lo, la]) => `${x(lo).toFixed(1)},${y(la).toFixed(1)}`).join(' ')}" fill="#e9e2cf" stroke="#9fb3c8" stroke-width=".8"/>`).join('');
  for (const st of stories) {
    if (!st.at) continue;
    const [lo, la, dx = 0, dy = 0] = st.at, px = x(lo), py = y(la), bx = px + dx, by = py + dy, r = st.n <= 3 ? 9 : 7.5;
    if (dx || dy) s += `<line x1="${px.toFixed(1)}" y1="${py.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="#fff" stroke-width="1"/><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="1.8" fill="#fff"/>`;
    s += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="${r}" fill="${REG[st.region][1]}" stroke="#fff" stroke-width="1.5"/>` +
      `<text x="${bx.toFixed(1)}" y="${(by + 3.4).toFixed(1)}" font-size="${st.n > 9 ? 8.5 : 10}" text-anchor="middle" font-weight="700" fill="#fff" font-family="Liberation Sans">${st.n}</text>`;
  }
  document.getElementById('map').innerHTML = s;
}
