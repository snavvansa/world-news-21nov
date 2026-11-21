# world-news-21nov

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/snavvansa/world-news-21nov/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/snavvansa/world-news-21nov/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

The world's news of Saturday 21 November 2026 on one 1024 × 1024 front page: three illustrated lead stories (COP31 in overtime in Antalya, three Houthi missiles downed over Riyadh, BepiColombo's capture burn at Mercury), eight more stories pinned on a world map, nine briefs, a numbers strip and a date check listing the earlier news it leaves out.

The page is `page/index.html` + `page/art.js` (every drawing is SVG made in code), rendered once with `tools/render.mjs`; `main.ts` copies the resulting `entry.png` to the output folder, so every run writes the same bytes with no network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=7pb8t6nt&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
