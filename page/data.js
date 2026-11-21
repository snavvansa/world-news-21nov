// The day's stories. Every one happened, or was first reported, on Saturday 21 November 2026.
// region: EU Europe · ME Middle East · AF Africa · AS Asia · AM Americas · OC Oceania · GL Global
// src is who said it; status tells the reader how firm it is (official / reported / claim).

const EDITION = {
  kicker: 'THE WORLD IN ONE DAY',
  date: 'Saturday 21 November 2026',
  deck: 'COP31 talks run into Saturday · Three missiles downed over Riyadh · Russia strikes Kyiv again',
};

const NUMS = [
  ['13', 'days COP31 has run in Antalya, a day past its close'],
  ['3', 'Houthi ballistic missiles downed over Riyadh'],
  ['6.7', 'magnitude of the deep quake in Junín, Peru'],
  ['146', 'people safe after a jet\'s engine-fire landing'],
  ['6', 'killed by Israeli strikes in Gaza, a cameraman among them'],
  ['2028', 'deadline set for UN rules on "killer robots"'],
];

const LEADS = [
  { region: 'GL', place: 'ANTALYA, TÜRKIYE · CLIMATE', art: 'cop', at: [30.7, 36.9, -6, 0], tag: 'COP31: OVERTIME', status: 'Talks ongoing · AFP',
    h: 'COP31 runs into Saturday with no deal',
    p: 'Nearly 200 nations race to agree a third draft; the last one dropped every mention of fossil fuels. (AFP, CNA)' },
  { region: 'ME', place: 'RIYADH, SAUDI ARABIA · WAR', art: 'riyadh', at: [46.7, 24.7, -4, 8], tag: 'RIYADH: 3 DOWNED', status: 'Coalition says · Reuters',
    h: 'Three Houthi missiles shot down over Riyadh',
    p: 'Second attack on the Saudi capital in days, after its tallest tower was hit on Thursday. No casualties reported. (Reuters)' },
  { region: 'EU', place: 'KYIV & KRYVYI RIH, UKRAINE · WAR', art: 'kyiv', at: [30.5, 50.5, 6, -6], tag: 'UKRAINE: STRIKES', status: 'Officials · Kyiv Post',
    h: 'Russia hits Kyiv again as Kryvyi Rih counts its dead',
    p: 'Dawn missile sets homes ablaze in Kyiv\'s Podil; a double-tap strike in Kryvyi Rih killed a boy of 7 and a medic. (Kyiv Post, KI)' },
];

const CARDS = [
  { region: 'AM', place: 'JUNÍN, PERU', art: 'quake', at: [-75.8, -11.0], h: 'M6.7 quake shakes central Peru', p: '108 km deep, felt in Lima; no deaths. (USGS)', status: 'official' },
  { region: 'AS', place: 'DAVAO, PHILIPPINES', art: 'plane', at: [125.6, 7.1], h: 'Jet lands after engine-fire alert', p: 'Air Niugini 767: all 146 aboard safe. (AP)', status: 'official' },
  { region: 'ME', place: 'GAZA', art: 'gaza', at: [34.4, 31.5, -16, 6], h: 'Israeli strikes kill six in Gaza', p: 'Two children and a cameraman among them. (AP)', status: 'reported' },
  { region: 'AF', place: 'BARA, SUDAN', art: 'sudan', at: [30.4, 13.6], h: 'Army says it retook the city of Bara', p: 'Key supply road with it, the army says. (Ilke)', status: 'claim' },
  { region: 'AM', place: 'LAS VEGAS, USA', art: 'f1', at: [-115.1, 36.2], h: 'Verstappen inherits Vegas pole', p: 'Antonelli fastest but takes a grid penalty. (FIA)', status: 'official' },
  { region: 'OC', place: 'WELLINGTON, NZ', art: 'cricket', at: [174.8, -41.3, -4, 0], h: 'Rahul century puts India on top', p: '486-4 at stumps, lead of 118 on day 3. (Wisden)', status: 'official' },
  { region: 'ME', place: 'STRAIT OF HORMUZ', art: 'drone', at: [56.3, 26.6, 14, -8], h: 'Iran says it downed a 58th US drone', p: 'IRGC claims an MQ-9; no US word. (Al Jazeera)', status: 'claim' },
  { region: 'GL', place: 'GENEVA · UN', art: 'robot', at: [6.1, 46.2, 6, 10], h: '"Killer robot" talks end with 2028 aim', p: 'Russia blocked faster, binding rules. (Reuters)', status: 'official' },
  { region: 'AS', place: 'SEJONG, S. KOREA', art: 'train', at: [127.3, 36.5, 6, 2], h: 'Freight train derails, main line cut', p: 'Five cars off the track; no one hurt. (Yonhap)', status: 'official' },
  { region: 'EU', place: 'PARIS, FRANCE', art: 'protest', at: [2.35, 48.86, -14, -10], h: 'Young people march on cost of living', p: 'Sixth day of protests across France. (France 24)', status: 'reported' },
];

const MORE = [
  { region: 'EU', place: 'Warsaw', t: 'NATO\'s Rutte visits after missile incursion' },
  { region: 'EU', place: 'Kyiv', t: 'Zelensky: Crimean Bridge "will not stay"' },
  { region: 'ME', place: 'Tehran', t: 'Araqchi: ready to talk on reopening Hormuz' },
  { region: 'AS', place: 'Pyongyang', t: 'Kim tours factories, ignores Trump offer' },
  { region: 'AS', place: 'Taipei', t: '2,700 China-linked accounts flagged to Meta' },
  { region: 'AS', place: 'Hong Kong', t: 'Tai Po fire: 200 survivors get trauma care' },
  { region: 'OC', place: 'Canberra', t: 'Australia and China agree AI talks' },
  { region: 'AF', place: 'Bayelsa', t: 'Search goes on after funeral barge sank' },
  { region: 'AF', place: 'Nairobi', t: 'Ruto: board-hired teachers go on state payroll' },
  { region: 'AF', place: 'South Africa', t: 'Hail and storm warnings in 7 provinces' },
  { region: 'AM', place: 'Haiti', t: 'El Salvador to build three prisons' },
  { region: 'AM', place: 'Mexico', t: 'US-bound migrant caravan arrives' },
  { region: 'AM', place: 'Ottawa', t: 'Memo warns AI data centres raise power bills' },
  { region: 'EU', place: 'Turin', t: 'ATP semis: Alcaraz–Shelton, Zverev–Medvedev' },
  { region: 'EU', place: 'Vatican', t: 'Pope Leo meets 6,000 young people' },
  { region: 'EU', place: 'Manchester', t: 'Premier League: Man City host Fulham' },
  { region: 'GL', place: 'Crypto', t: 'Bitcoin near two-year low, under $59,000' },
];

const LEFT_OUT = 'Trump–Putin–Xi summit in Shenzhen and ICJ\'s Myanmar genocide ruling (Thu 19) · Russian missiles landing in Poland, UK–EU reset deal, Wall Street correction, Cyclone Akvan landfall (Fri 20).';

const SOURCES = 'Reuters · AP · AFP · Al Jazeera · Kyiv Post · USGS · FIA · Yonhap · France 24';
