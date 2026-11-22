// The day's stories — final edition, written after Saturday 21 November 2026 had ended everywhere.
// Every one happened, or was first reported, on that day in at least one time zone.
// region: EU Europe · ME Middle East · AF Africa · AS Asia · AM Americas · OC Oceania · GL Global
// status tells the reader how firm it is (official / reported / claim).

const EDITION = {
  kicker: 'THE WORLD IN ONE DAY · FINAL EDITION',
  date: 'Saturday 21 November 2026',
  deck: 'BepiColombo enters Mercury orbit · Three missiles downed over Riyadh · Mexico captures "El Chapo Isidro"',
};

const NUMS = [
  ['8 yrs', 'GL', 'BepiColombo\'s voyage before Saturday\'s Mercury orbit entry'],
  ['3', 'ME', 'Houthi ballistic missiles downed over Riyadh'],
  ['11', 'AM', 'killed as Mexico seized cartel boss "El Chapo Isidro"'],
  ['58', 'EU', 'hurt in the Kryvyi Rih strike, two killed'],
  ['6.7', 'AM', 'magnitude of the deep quake in Junín, Peru'],
  ['146', 'AS', 'people safe after a jet\'s engine-fire landing'],
];

const LEADS = [
  { region: 'GL', place: 'MERCURY · ESA / JAXA · SPACE', art: 'mercury', tag: 'MERCURY: IN ORBIT', status: 'Confirmed · AP, Nature',
    h: 'BepiColombo slips into orbit around Mercury',
    p: 'After an eight-year cruise the European–Japanese twin probes are captured by the planet: only the second mission ever to orbit it. (AP)' },
  { region: 'ME', place: 'RIYADH, SAUDI ARABIA · WAR', art: 'riyadh', at: [46.7, 24.7, -4, 8], tag: 'RIYADH: 3 DOWNED', status: 'Coalition says · Reuters',
    h: 'Three Houthi missiles shot down over Riyadh',
    p: 'Houthis fire at the Saudi capital after coalition strikes on Hodeidah; second attack in days, after its tallest tower was hit Thursday. (Reuters)' },
  { region: 'EU', place: 'KYIV & KRYVYI RIH, UKRAINE · WAR', art: 'kyiv', at: [30.5, 50.5, 8, -2], tag: 'UKRAINE: STRIKES', status: 'Officials · Kyiv Post',
    h: 'Russia hits Kyiv again; Kryvyi Rih toll rises',
    p: 'Dawn missile sets homes ablaze in Kyiv\'s Podil; injured in Kryvyi Rih\'s double-tap strike reach 58, a boy of 7 and a medic dead. (Kyiv Post, Pravda)' },
];

const CARDS = [
  { region: 'GL', place: 'ANTALYA, TÜRKIYE', art: 'copc', tag: 'COP31: NO DEAL', at: [30.7, 36.9, -8, 4], h: 'COP31 ends Saturday without a deal', p: 'Talks run a day over; fossil fuels cut from draft. (AFP)', status: 'official' },
  { region: 'AM', place: 'SINALOA, MEXICO', art: 'cartel', tag: 'MEXICO: CAPTURED', at: [-107.4, 24.8], h: '"El Chapo Isidro" caught; 11 dead', p: 'FBI top-10 fugitive seized in a firefight. (AP)', status: 'official' },
  { region: 'EU', place: 'WARSAW, POLAND', art: 'nato', tag: 'NATO: "EVERY INCH"', at: [21.0, 52.2, 8, -10], h: 'Rutte: NATO will defend all of Poland', p: 'Visit after a Russian missile came down. (Reuters)', status: 'official' },
  { region: 'ME', place: 'GAZA', art: 'gaza', tag: 'GAZA: 6 KILLED', at: [34.4, 31.5, -16, 6], h: 'Israeli strikes kill six in Gaza', p: 'Al Jazeera cameraman among the dead. (AP, BBC)', status: 'reported' },
  { region: 'AF', place: 'BARA, SUDAN', art: 'sudan', tag: 'SUDAN: BARA', at: [30.4, 13.6], h: 'Army says it retook the city of Bara', p: 'Key supply road with it, the army says. (Ilke)', status: 'claim' },
  { region: 'AM', place: 'JUNÍN, PERU', art: 'quake', tag: 'PERU: M6.7', at: [-75.8, -11.0], h: 'M6.7 quake shakes central Peru', p: '108 km deep, felt in Lima; no deaths. (USGS)', status: 'official' },
  { region: 'AS', place: 'DAVAO, PHILIPPINES', art: 'plane', tag: 'DAVAO: 146 SAFE', at: [125.6, 7.1], h: 'Jet lands after engine-fire alert', p: 'Air Niugini 767: all 146 aboard safe. (AP)', status: 'official' },
  { region: 'AM', place: 'LAS VEGAS, USA', art: 'f1', tag: 'VEGAS: VERSTAPPEN', at: [-115.1, 36.2], h: 'Verstappen wins Las Vegas night race', p: 'His third win on the Strip in four years. (AP)', status: 'official' },
  { region: 'EU', place: 'TURIN, ITALY', art: 'tennis', tag: 'ATP: FINAL SET', at: [7.7, 45.1, -6, 12], h: 'Alcaraz and Zverev reach ATP final', p: 'Beat Shelton 3-6 6-3 7-6 and Medvedev 7-6 6-4. (ATP)', status: 'official' },
  { region: 'OC', place: 'WELLINGTON, NZ', art: 'cricket', tag: 'RAHUL: 136', at: [174.8, -41.3, -4, 0], h: 'Rahul century puts India on top', p: '486-4 at stumps, lead of 118 on day 3. (AFP)', status: 'official' },
];

const MORE = [
  { region: 'ME', place: 'Hormuz', t: 'Iran claims a 58th US drone downed' },
  { region: 'ME', place: 'Tehran', t: 'Araqchi: ready to talk on reopening Hormuz' },
  { region: 'GL', place: 'Geneva', t: 'UN "killer robot" talks set a 2028 aim' },
  { region: 'EU', place: 'Kyiv', t: 'Zelensky: Crimean Bridge "will not stay"' },
  { region: 'EU', place: 'Paris', t: 'Youth march on cost of living, sixth day' },
  { region: 'EU', place: 'London', t: 'Leeds rout Chelsea 4-1; Arsenal draw 2-2' },
  { region: 'AS', place: 'Sejong', t: 'Freight train derails, main rail line cut' },
  { region: 'AS', place: 'Pyongyang', t: 'Kim tours factories, ignores Trump offer' },
  { region: 'AS', place: 'Taipei', t: '2,700 China-linked accounts flagged to Meta' },
  { region: 'OC', place: 'Canberra', t: 'Australia and China agree AI talks' },
  { region: 'AF', place: 'Bayelsa', t: 'Search goes on after funeral barge sank' },
  { region: 'AF', place: 'Nairobi', t: 'Ruto: board-hired teachers go on payroll' },
  { region: 'AF', place: 'South Africa', t: 'Hail and storm warnings in 7 provinces' },
  { region: 'AM', place: 'Haiti', t: 'El Salvador to build three prisons' },
  { region: 'AM', place: 'Mexico', t: 'US-bound migrant caravan arrives' },
  { region: 'AM', place: 'Ottawa', t: 'Memo warns AI data centres raise power bills' },
  { region: 'GL', place: 'Crypto', t: 'Bitcoin near two-year low, under $59,000' },
];

const LEFT_OUT = 'Trump–Putin–Xi summit and ICJ Myanmar ruling (Thu 19) · Russian missiles landing in Poland, UK–EU reset deal, Wall Street correction (Fri 20) · COP31\'s final package (Sun 22).';

const SOURCES = 'AP · Reuters · AFP · BBC · Kyiv Post · Nature · USGS · ATP · Al Jazeera';
