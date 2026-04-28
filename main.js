/**
 * ECG POWER - Main JavaScript
 * 1:1 Replica of letonpower.com
 */

// ============================================
// PRODUCT DATA (matching letonpower.com)
// ============================================
const PRODUCT_DATA = {
  cummins: {
    name: 'Cummins', title: 'Cummins Industrial Diesel Generators',
    range: '20kVA – 3363kVA',
    desc: 'Cummins industrial generator sets deliver unmatched reliability and durability for critical operations. Designed for diverse applications—from construction sites and data centers to home backup power—these Cummins generator diesel units provide efficient electricity with low fuel consumption and minimal maintenance.',
    specs50: [
      { model: 'ECG-25P', power: '20KW/25KVA', engine: '4B3.9-G1', cyl: '4L/NA' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: '4BT3.9-G2', cyl: '4L/TC' },
      { model: 'ECG-65P', power: '52KW/65KVA', engine: '4BTA3.9-G2', cyl: '4L/TW' },
      { model: 'ECG-80P', power: '64KW/80KVA', engine: '4BTA3.9-G11', cyl: '4L/TW' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: '6BT5.9-G2', cyl: '6L/TC' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: '6BTAA5.9-G12', cyl: '6L/TCA' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: '6CTAA8.3-G2', cyl: '6L/TCA' },
      { model: 'ECG-275P', power: '220KW/275KVA', engine: '6LTAA9.5-G3', cyl: '6L/TCA' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: 'NTA855-G4', cyl: '6L/TW' },
      { model: 'ECG-375P', power: '300KW/375KVA', engine: 'NTAA855-G7', cyl: '6L/TCA' },
      { model: 'ECG-475P', power: '380KW/475KVA', engine: 'QSZ13-G3', cyl: '6L/TCA' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'QSZ13-G10', cyl: '6L/TCA' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: 'KTAA19-G6A', cyl: '6L/TCA' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: 'KTA38-G2', cyl: '12V/TW' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: 'KTA38-G5', cyl: '12V/TW' },
      { model: 'ECG-1250P', power: '1000KW/1250KVA', engine: 'KTA50-G3', cyl: '16V/TW' },
      { model: 'ECG-1875P', power: '1500KW/1875KVA', engine: 'QSK50-G16', cyl: '16V/TW' },
      { model: 'ECG-2500P', power: '2000KW/2500KVA', engine: 'QSK60-G23', cyl: '16V/TW' },
      { model: 'ECG-2750P', power: '2200KW/2750KVA', engine: 'QSK78-G9', cyl: '18V/TW' },
      { model: 'ECG-3363P', power: '2690KW/3363KVA', engine: 'QSK95-G4', cyl: '16V/TW' },
    ],
    specs60: [
      { model: 'ECG-30P', power: '24KW/30KVA', engine: '4B3.9-G2', cyl: '4L/NA' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: '4BT3.9-G2', cyl: '4L/TC' },
      { model: 'ECG-75P', power: '60KW/75KVA', engine: '4BTA3.9-G2', cyl: '4L/TW' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: '6BT5.9-G2', cyl: '6L/TC' },
      { model: 'ECG-135P', power: '108KW/135KVA', engine: '6BTAA5.9-G12', cyl: '6L/TCA' },
      { model: 'ECG-175P', power: '140KW/175KVA', engine: '6CTAA8.3-G2', cyl: '6L/TCA' },
      { model: 'ECG-230P', power: '184KW/230KVA', engine: '6LTAA9.5-G3', cyl: '6L/TCA' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: 'NTA855-G1B', cyl: '6L/TW' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'NTA855-G4', cyl: '6L/TW' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'QSZ13-G3', cyl: '6L/TCA' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: 'KTAA19-G6A', cyl: '6L/TCA' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: 'KTA38-G2', cyl: '12V/TW' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: 'KTA38-G5', cyl: '12V/TW' },
      { model: 'ECG-1250P', power: '1000KW/1250KVA', engine: 'KTA50-G3', cyl: '16V/TW' },
    ]
  },
  perkins: {
    name: 'Perkins', title: 'Perkins Industrial Diesel Generators',
    range: '8kVA – 2500kVA',
    desc: 'Perkins diesel generators combine British engineering excellence with proven reliability. Featuring Perkins engines from the UK, these gensets deliver superior power density, compact design, and exceptional cold-start performance.',
    specs50: [
      { model: 'ECG-10P', power: '8KW/10KVA', engine: '403A-11G1', cyl: '3L' },
      { model: 'ECG-16P', power: '13KW/16KVA', engine: '403A-15G2', cyl: '3L' },
      { model: 'ECG-20P', power: '16KW/20KVA', engine: '404A-22G1', cyl: '4L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: '1103A-33G', cyl: '3L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: '1103A-33TG1', cyl: '3L' },
      { model: 'ECG-75P', power: '60KW/75KVA', engine: '1104A-44TG2', cyl: '4L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: '1106A-70TG1', cyl: '6L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: '1506A-E88TAG4', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: '1506A-E88TAG5', cyl: '6L' },
      { model: 'ECG-280P', power: '224KW/280KVA', engine: '2206C-E13TAG2', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: '2206C-E13TAG3', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: '2506C-E15TAG1', cyl: '6L' },
      { model: 'ECG-650P', power: '520KW/650KVA', engine: '2806C-E18TAG1A', cyl: '6L' },
      { model: 'ECG-800P', power: '640KW/800KVA', engine: '4006-23TAG3A', cyl: '6L' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: '4008TAG1A', cyl: '8V' },
      { model: 'ECG-1250P', power: '1000KW/1250KVA', engine: '4008TAG2A', cyl: '8V' },
      { model: 'ECG-1500P', power: '1200KW/1500KVA', engine: '4012-46TWG2A', cyl: '12V' },
      { model: 'ECG-2000P', power: '1600KW/2000KVA', engine: '4016TAG1A', cyl: '16V' },
      { model: 'ECG-2500P', power: '2000KW/2500KVA', engine: '4016-61TRG3', cyl: '16V' },
    ],
    specs60: [
      { model: 'ECG-12P', power: '10KW/12KVA', engine: '403A-15G2', cyl: '3L' },
      { model: 'ECG-20P', power: '16KW/20KVA', engine: '404A-22G1', cyl: '4L' },
      { model: 'ECG-35P', power: '28KW/35KVA', engine: '1103A-33TG1', cyl: '3L' },
      { model: 'ECG-60P', power: '48KW/60KVA', engine: '1104A-44TG2', cyl: '4L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: '1106A-70TG1', cyl: '6L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: '1506A-E88TAG4', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: '1506A-E88TAG5', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: '2206C-E13TAG2', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: '2206C-E13TAG3', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: '2506C-E15TAG1', cyl: '6L' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: '2806C-E18TAG1A', cyl: '6L' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: '4008TAG1A', cyl: '8V' },
    ]
  },
  weichai: {
    name: 'Weichai', title: 'Weichai Industrial Diesel Generators',
    range: '15kVA – 1000kVA',
    desc: 'Weichai diesel generators offer outstanding value with reliable Chinese engineering. Weichai engines are widely used globally, known for their durability, fuel efficiency, and excellent cost-performance ratio.',
    specs50: [
      { model: 'ECG-20P', power: '16KW/20KVA', engine: 'WP2.1D18E2', cyl: '4L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: 'WP2.1D18E2', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: 'WP4.1D66E200', cyl: '4L' },
      { model: 'ECG-75P', power: '60KW/75KVA', engine: 'WP4.1D66E200', cyl: '4L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: 'WP4.1D100E200', cyl: '4L' },
      { model: 'ECG-120P', power: '96KW/120KVA', engine: 'WP4.6N5D120E201', cyl: '4L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: 'WP6D152E200', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'WP6D167E200', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: 'WP10D264E200', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: 'WP10D320E200', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'WP13D385E200', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'WP13D490E310', cyl: '6L' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: '6M33D605E200', cyl: '6L' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: '6M33D725E310', cyl: '6L' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: '12M33D1108E200', cyl: '12V' },
    ],
    specs60: [
      { model: 'ECG-20P', power: '16KW/20KVA', engine: 'WP2.1D18E2', cyl: '4L' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: 'WP2.1D25E2', cyl: '4L' },
      { model: 'ECG-60P', power: '48KW/60KVA', engine: 'WP4.1D50E200', cyl: '4L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: 'WP4.1D100E200', cyl: '4L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: 'WP6D152E200', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'WP6D167E200', cyl: '6L' },
      { model: 'ECG-275P', power: '220KW/275KVA', engine: 'WP10D264E200', cyl: '6L' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: 'WP10D320E200', cyl: '6L' },
      { model: 'ECG-450P', power: '360KW/450KVA', engine: 'WP13D405E200', cyl: '6L' },
      { model: 'ECG-550P', power: '440KW/550KVA', engine: 'WP13D490E310', cyl: '6L' },
      { model: 'ECG-700P', power: '560KW/700KVA', engine: '6M33D633E200', cyl: '6L' },
    ]
  },
  isuzu: {
    name: 'Isuzu', title: 'Isuzu Industrial Diesel Generators',
    range: '10kVA – 50kVA',
    desc: 'Isuzu diesel generators are the gold standard for small-to-medium power applications. Featuring Japanese Isuzu engines, these gensets are ultra-quiet, fuel-efficient, and incredibly reliable.',
    specs50: [
      { model: 'ECG-10P', power: '8KW/10KVA', engine: '3CE1X21.3G1', cyl: '3L' },
      { model: 'ECG-16P', power: '13KW/16KVA', engine: '3CE1X21.3G1', cyl: '3L' },
      { model: 'ECG-20P', power: '16KW/20KVA', engine: '4JB1X24.3G1', cyl: '4L' },
      { model: 'ECG-25P', power: '20KW/25KVA', engine: '4JB1X24.3G1', cyl: '4L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: '4JB1T28.3G1', cyl: '4L' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: '4BG1T48.3G1', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: '4BG1T48.3G1', cyl: '4L' },
    ],
    specs60: [
      { model: 'ECG-12P', power: '10KW/12KVA', engine: '3CE1X21.3G1', cyl: '3L' },
      { model: 'ECG-18P', power: '14KW/18KVA', engine: '4JB1X24.3G1', cyl: '4L' },
      { model: 'ECG-25P', power: '20KW/25KVA', engine: '4JB1X24.3G1', cyl: '4L' },
      { model: 'ECG-35P', power: '28KW/35KVA', engine: '4JB1T28.3G1', cyl: '4L' },
      { model: 'ECG-45P', power: '36KW/45KVA', engine: '4BG1T48.3G1', cyl: '4L' },
    ]
  },
  doosan: {
    name: 'Doosan', title: 'Doosan Industrial Diesel Generators',
    range: '60kVA – 750kVA',
    desc: 'Doosan diesel generators combine Korean manufacturing precision with robust engine technology. Offering excellent value for medium-to-large power applications.',
    specs50: [
      { model: 'ECG-60P', power: '48KW/60KVA', engine: 'DB58', cyl: '6L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: 'D1146', cyl: '6L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: 'P086TI', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'P126TI', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: 'P126TI-II', cyl: '6L' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: 'P158LE', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'P158LE-1', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'P222LE', cyl: '6L' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: 'P222LE-S', cyl: '6L' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: 'P222LE-II', cyl: '6L' },
    ],
    specs60: [
      { model: 'ECG-75P', power: '60KW/75KVA', engine: 'D1146', cyl: '6L' },
      { model: 'ECG-125P', power: '100KW/125KVA', engine: 'P086TI', cyl: '6L' },
      { model: 'ECG-175P', power: '140KW/175KVA', engine: 'P126TI', cyl: '6L' },
      { model: 'ECG-220P', power: '176KW/220KVA', engine: 'P126TI-II', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: 'P158LE', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'P158LE-1', cyl: '6L' },
      { model: 'ECG-550P', power: '440KW/550KVA', engine: 'P222LE', cyl: '6L' },
    ]
  },
  volvo: {
    name: 'Volvo', title: 'Volvo Industrial Diesel Generators',
    range: '85kVA – 700kVA',
    desc: 'Volvo diesel generators deliver premium Scandinavian engineering with best-in-class fuel efficiency, low emissions, and exceptional reliability.',
    specs50: [
      { model: 'ECG-85P', power: '68KW/85KVA', engine: 'TAD530GE', cyl: '4L' },
      { model: 'ECG-115P', power: '92KW/115KVA', engine: 'TAD532GE', cyl: '4L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: 'TAD731GE', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'TAD732GE', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: 'TAD1341GE', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: 'TAD1342GE', cyl: '6L' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: 'TAD1343GE', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'TAD1344GE', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'TAD1641GE', cyl: '6L' },
      { model: 'ECG-550P', power: '440KW/550KVA', engine: 'TAD1642GE', cyl: '6L' },
      { model: 'ECG-700P', power: '560KW/700KVA', engine: 'TAD1643GE', cyl: '6L' },
    ],
    specs60: [
      { model: 'ECG-100P', power: '80KW/100KVA', engine: 'TAD530GE', cyl: '4L' },
      { model: 'ECG-140P', power: '112KW/140KVA', engine: 'TAD731GE', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'TAD732GE', cyl: '6L' },
      { model: 'ECG-280P', power: '224KW/280KVA', engine: 'TAD1341GE', cyl: '6L' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: 'TAD1343GE', cyl: '6L' },
      { model: 'ECG-450P', power: '360KW/450KVA', engine: 'TAD1641GE', cyl: '6L' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: 'TAD1642GE', cyl: '6L' },
    ]
  },
  kubota: {
    name: 'Kubota', title: 'Kubota Industrial Diesel Generators',
    range: '8kVA – 50kVA',
    desc: 'Kubota diesel generators are compact, ultra-quiet power solutions from Japan. Perfect for residential, small commercial, and portable power needs.',
    specs50: [
      { model: 'ECG-8P', power: '6.4KW/8KVA', engine: 'D1105-BG', cyl: '3L' },
      { model: 'ECG-10P', power: '8KW/10KVA', engine: 'D1105-BG', cyl: '3L' },
      { model: 'ECG-12P', power: '10KW/12KVA', engine: 'V1505-BG', cyl: '4L' },
      { model: 'ECG-15P', power: '12KW/15KVA', engine: 'V1505-BG', cyl: '4L' },
      { model: 'ECG-20P', power: '16KW/20KVA', engine: 'V2003-BG', cyl: '4L' },
      { model: 'ECG-25P', power: '20KW/25KVA', engine: 'V2403-BG', cyl: '4L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: 'V3300-BG', cyl: '4L' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: 'V3800-BG', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: 'V3800DI-BG', cyl: '4L' },
    ],
    specs60: [
      { model: 'ECG-10P', power: '8KW/10KVA', engine: 'D1105-BG', cyl: '3L' },
      { model: 'ECG-13P', power: '10KW/13KVA', engine: 'V1505-BG', cyl: '4L' },
      { model: 'ECG-18P', power: '14KW/18KVA', engine: 'V2003-BG', cyl: '4L' },
      { model: 'ECG-25P', power: '20KW/25KVA', engine: 'V2403-BG', cyl: '4L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: 'V3300-BG', cyl: '4L' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: 'V3800-BG', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: 'V3800DI-BG', cyl: '4L' },
    ]
  },
  deutz: {
    name: 'Deutz', title: 'Deutz Industrial Diesel Generators',
    range: '15kVA – 500kVA',
    desc: 'Deutz diesel generators feature German engineering with air-cooled and water-cooled options. Known for their simplicity, reliability, and ease of maintenance.',
    specs50: [
      { model: 'ECG-15P', power: '12KW/15KVA', engine: 'F2L912', cyl: '2L' },
      { model: 'ECG-20P', power: '16KW/20KVA', engine: 'F3L912', cyl: '3L' },
      { model: 'ECG-30P', power: '24KW/30KVA', engine: 'F4L912', cyl: '4L' },
      { model: 'ECG-40P', power: '32KW/40KVA', engine: 'F4L912T', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: 'F6L912', cyl: '6L' },
      { model: 'ECG-75P', power: '60KW/75KVA', engine: 'BF4M1013FC', cyl: '4L' },
      { model: 'ECG-100P', power: '80KW/100KVA', engine: 'BF4M1013EC', cyl: '4L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: 'BF6M1013FCG3', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: 'BF6M1015C', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: 'BF6M1015CP', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: 'BF6M1015CP', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: 'TCD2015V06', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: 'TCD2015V08', cyl: '8V' },
    ],
    specs60: [
      { model: 'ECG-18P', power: '14KW/18KVA', engine: 'F3L912', cyl: '3L' },
      { model: 'ECG-25P', power: '20KW/25KVA', engine: 'F4L912', cyl: '4L' },
      { model: 'ECG-35P', power: '28KW/35KVA', engine: 'F4L912T', cyl: '4L' },
      { model: 'ECG-50P', power: '40KW/50KVA', engine: 'BF4M1013FC', cyl: '4L' },
      { model: 'ECG-75P', power: '60KW/75KVA', engine: 'BF4M1013EC', cyl: '4L' },
      { model: 'ECG-125P', power: '100KW/125KVA', engine: 'BF6M1013FCG3', cyl: '6L' },
      { model: 'ECG-175P', power: '140KW/175KVA', engine: 'BF6M1015C', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: 'BF6M1015CP', cyl: '6L' },
    ]
  },
  baudouin: {
    name: 'Baudouin', title: 'Baudouin Industrial Diesel Generators',
    range: '100kVA – 3363kVA',
    desc: 'Baudouin diesel generators are designed for heavy-duty marine and industrial applications. French engineering ensures superior performance in demanding environments.',
    specs50: [
      { model: 'ECG-100P', power: '80KW/100KVA', engine: '4M06G55/5', cyl: '4L' },
      { model: 'ECG-150P', power: '120KW/150KVA', engine: '6M11G176/5', cyl: '6L' },
      { model: 'ECG-200P', power: '160KW/200KVA', engine: '6M11G220/5', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: '6M16G220/5', cyl: '6L' },
      { model: 'ECG-300P', power: '240KW/300KVA', engine: '6M16G280/5', cyl: '6L' },
      { model: 'ECG-350P', power: '280KW/350KVA', engine: '6M26G350/5', cyl: '6L' },
      { model: 'ECG-400P', power: '320KW/400KVA', engine: '6M26G440/5', cyl: '6L' },
      { model: 'ECG-500P', power: '400KW/500KVA', engine: '6M33G500/5', cyl: '6L' },
      { model: 'ECG-600P', power: '480KW/600KVA', engine: '6M33G600/5', cyl: '6L' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: '12M26G900/5', cyl: '12V' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: '12M33G1100/5', cyl: '12V' },
      { model: 'ECG-1250P', power: '1000KW/1250KVA', engine: '12M33G1400/5', cyl: '12V' },
      { model: 'ECG-1500P', power: '1200KW/1500KVA', engine: '16M33G1600/5', cyl: '16V' },
      { model: 'ECG-2000P', power: '1600KW/2000KVA', engine: '16M33G2000/5', cyl: '16V' },
      { model: 'ECG-2500P', power: '2000KW/2500KVA', engine: '16M55G2500/5', cyl: '16V' },
      { model: 'ECG-3363P', power: '2690KW/3363KVA', engine: '20M55G3600/5', cyl: '20V' },
    ],
    specs60: [
      { model: 'ECG-115P', power: '92KW/115KVA', engine: '4M06G55/5', cyl: '4L' },
      { model: 'ECG-180P', power: '144KW/180KVA', engine: '6M11G176/5', cyl: '6L' },
      { model: 'ECG-250P', power: '200KW/250KVA', engine: '6M16G220/5', cyl: '6L' },
      { model: 'ECG-325P', power: '260KW/325KVA', engine: '6M26G350/5', cyl: '6L' },
      { model: 'ECG-450P', power: '360KW/450KVA', engine: '6M26G440/5', cyl: '6L' },
      { model: 'ECG-550P', power: '440KW/550KVA', engine: '6M33G500/5', cyl: '6L' },
      { model: 'ECG-750P', power: '600KW/750KVA', engine: '12M26G900/5', cyl: '12V' },
      { model: 'ECG-1000P', power: '800KW/1000KVA', engine: '12M33G1100/5', cyl: '12V' },
      { model: 'ECG-1250P', power: '1000KW/1250KVA', engine: '12M33G1400/5', cyl: '12V' },
    ]
  }
};

const BRAND_LIST = [
  { id: 'cummins', name: 'Cummins', range: '20kVA – 3363kVA' },
  { id: 'perkins', name: 'Perkins', range: '8kVA – 2500kVA' },
  { id: 'weichai', name: 'Weichai', range: '15kVA – 1000kVA' },
  { id: 'isuzu', name: 'Isuzu', range: '10kVA – 50kVA' },
  { id: 'doosan', name: 'Doosan', range: '60kVA – 750kVA' },
  { id: 'volvo', name: 'Volvo', range: '85kVA – 700kVA' },
  { id: 'kubota', name: 'Kubota', range: '8kVA – 50kVA' },
  { id: 'deutz', name: 'Deutz', range: '15kVA – 500kVA' },
  { id: 'baudouin', name: 'Baudouin', range: '100kVA – 3363kVA' },
];

// ============================================
// HEADER SCROLL EFFECT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (mobileToggle && mobileNav && mobileOverlay) {
    mobileToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileOverlay.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Scroll reveal
  initScrollReveal();

  // FAQ accordion
  initFAQ();

  // Product detail page
  initProductDetail();

  // Admin page
  initAdmin();
});

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(i => {
          i.classList.remove('open');
          const ans = i.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = '0';
        });
        // Open clicked if was closed
        if (!isOpen) {
          item.classList.add('open');
          const answer = item.querySelector('.faq-answer');
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });
}

// ============================================
// PRODUCT DETAIL PAGE
// ============================================
function initProductDetail() {
  const productHero = document.getElementById('product-hero-title');
  if (!productHero) return;

  // Get brand from URL
  const params = new URLSearchParams(window.location.search);
  const brandId = params.get('brand') || 'cummins';
  const brand = PRODUCT_DATA[brandId];
  if (!brand) return;

  // Populate page
  document.getElementById('product-hero-title').textContent = brand.name + ' Industrial Diesel Generators';
  document.getElementById('product-desc').textContent = brand.desc;
  document.getElementById('product-logo').textContent = brand.name;

  // Render table
  renderSpecTable(brand, '50');

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderSpecTable(brand, this.dataset.hz);
    });
  });

  // Render other brands sidebar
  const otherBrandsEl = document.getElementById('other-brands');
  if (otherBrandsEl) {
    otherBrandsEl.innerHTML = BRAND_LIST.filter(b => b.id !== brandId).slice(0, 8).map(b => `
      <a href="product-detail.html?brand=${b.id}" class="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors group">
        <span class="text-xs font-medium text-navy group-hover:text-orange">${b.name}</span>
        <span class="text-[10px] text-gray">${b.range}</span>
      </a>
    `).join('');
  }

  // Sidebar form
  const sidebarForm = document.getElementById('sidebar-form');
  if (sidebarForm) {
    sidebarForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = {
        name: this.querySelector('[name="name"]').value,
        email: this.querySelector('[name="email"]').value,
        message: this.querySelector('[name="message"]').value,
        brand: brand.name,
        source: 'Product Detail Sidebar',
        date: new Date().toISOString(),
        id: Date.now()
      };
      saveInquiry(formData);
      this.innerHTML = '<div class="text-center py-4"><div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><p class="text-xs text-gray">Message sent!</p></div>';
    });
  }
}

function renderSpecTable(brand, hz) {
  const tbody = document.getElementById('spec-tbody');
  if (!tbody) return;
  const specs = hz === '50' ? brand.specs50 : brand.specs60;
  tbody.innerHTML = specs.map((row, i) => `
    <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-light transition-colors">
      <td class="px-4 py-3 text-sm font-bold text-navy whitespace-nowrap">${row.model}</td>
      <td class="px-4 py-3 text-sm text-gray whitespace-nowrap">${row.power}</td>
      <td class="px-4 py-3 text-sm text-gray whitespace-nowrap">${row.engine}</td>
      <td class="px-4 py-3 text-sm text-gray">${row.cyl}</td>
    </tr>
  `).join('');
}

// ============================================
// FORM HANDLING (localStorage)
// ============================================
function saveInquiry(data) {
  const inquiries = JSON.parse(localStorage.getItem('ecg_inquiries') || '[]');
  inquiries.push(data);
  localStorage.setItem('ecg_inquiries', JSON.stringify(inquiries));
}

// Bind all forms with class .inquiry-form
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.inquiry-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const inputs = this.querySelectorAll('input, select, textarea');
      const data = { source: this.dataset.source || 'Website', date: new Date().toISOString(), id: Date.now() };
      inputs.forEach(input => { if (input.name) data[input.name] = input.value; });
      saveInquiry(data);

      // Show success
      const successMsg = this.querySelector('.form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
        this.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
      }
    });
  });
});

// ============================================
// ADMIN DASHBOARD
// ============================================
function initAdmin() {
  const adminPanel = document.getElementById('admin-panel');
  if (!adminPanel) return;

  const ADMIN_PASSWORD = 'ecgpower2024';
  let isAuthenticated = false;

  function renderLogin() {
    adminPanel.innerHTML = `
      <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div class="text-center mb-6">
            <span class="text-xl font-black text-navy">ECG</span><span class="text-xl font-black text-orange">Power</span>
            <h2 class="text-lg font-bold text-navy mt-2">Admin Dashboard</h2>
            <p class="text-xs text-gray mt-1">Customer Inquiry Management</p>
          </div>
          <form id="admin-login-form">
            <label class="form-label">Password</label>
            <input type="password" id="admin-password" class="form-input mb-4" placeholder="Enter admin password" required>
            <p id="login-error" class="text-xs text-red-500 mb-3 hidden">Incorrect password</p>
            <button type="submit" class="btn btn-navy w-full">Login</button>
          </form>
        </div>
      </div>
    `;
    document.getElementById('admin-login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      if (document.getElementById('admin-password').value === ADMIN_PASSWORD) {
        isAuthenticated = true;
        renderDashboard();
      } else {
        document.getElementById('login-error').classList.remove('hidden');
      }
    });
  }

  function renderDashboard() {
    const inquiries = JSON.parse(localStorage.getItem('ecg_inquiries') || '[]');
    const total = inquiries.length;
    const thisWeek = inquiries.filter(i => new Date(i.date) > new Date(Date.now() - 7 * 86400000)).length;

    adminPanel.innerHTML = `
      <div class="min-h-screen bg-gray-100">
        <div class="bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-lg font-black text-navy">ECG</span><span class="text-lg font-black text-orange">Power</span>
              <span class="text-xs text-gray bg-gray-100 px-2 py-1 rounded">Admin</span>
            </div>
            <button onclick="location.reload()" class="flex items-center gap-1.5 text-sm text-gray hover:text-orange transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Logout
            </button>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <p class="text-xs text-gray uppercase tracking-wider mb-1">Total Inquiries</p>
              <p class="text-2xl font-extrabold text-navy">${total}</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <p class="text-xs text-gray uppercase tracking-wider mb-1">This Week</p>
              <p class="text-2xl font-extrabold text-navy">${thisWeek}</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <p class="text-xs text-gray uppercase tracking-wider mb-1">Product Detail</p>
              <p class="text-2xl font-extrabold text-navy">${inquiries.filter(i => (i.source||'').includes('Product Detail')).length}</p>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <p class="text-xs text-gray uppercase tracking-wider mb-1">Homepage</p>
              <p class="text-2xl font-extrabold text-navy">${inquiries.filter(i => (i.source||'').includes('Homepage')).length}</p>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            ${inquiries.length === 0 ? `
              <div class="p-12 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5CDD8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <p class="text-sm text-gray">No inquiries yet. Data will appear when visitors submit forms.</p>
              </div>
            ` : `
              <div class="overflow-x-auto">
                <table class="w-full min-w-[900px]">
                  <thead><tr class="bg-navy text-white">
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Name</th>
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Contact</th>
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Details</th>
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Source</th>
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Date</th>
                    <th class="px-4 py-3 text-left text-xs font-bold uppercase"></th>
                  </tr></thead>
                  <tbody>
                    ${inquiries.slice().reverse().map((inq, idx) => `
                      <tr class="border-b border-gray-200 hover:bg-orange-light transition-colors">
                        <td class="px-4 py-3">
                          <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A6A7A" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <div>
                              <p class="text-sm font-semibold text-navy">${inq.name || (inq.firstName + ' ' + inq.lastName) || 'Anonymous'}</p>
                              ${inq.company ? `<p class="text-xs text-gray">${inq.company}</p>` : ''}
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3">
                          <p class="text-xs text-gray">${inq.email}</p>
                          ${inq.phone ? `<p class="text-xs text-gray">${inq.countryCode || ''} ${inq.phone}</p>` : ''}
                        </td>
                        <td class="px-4 py-3">
                          ${inq.brand ? `<p class="text-xs font-medium text-orange">${inq.brand}</p>` : ''}
                          ${inq.inquiryReason ? `<p class="text-xs text-gray">${inq.inquiryReason}</p>` : ''}
                          ${inq.powerNeed ? `<p class="text-xs text-gray">${inq.powerNeed} kVA</p>` : ''}
                        </td>
                        <td class="px-4 py-3">
                          <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray">${inq.source}</span>
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap">
                          <p class="text-xs text-gray">${new Date(inq.date).toLocaleDateString()}</p>
                          <p class="text-xs text-gray">${new Date(inq.date).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</p>
                        </td>
                        <td class="px-4 py-3">
                          <button onclick="deleteInquiry(${inq.id})" class="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            `}
          </div>
          ${inquiries.length > 0 ? `
            <div class="mt-4 flex justify-end">
              <button onclick="clearAllInquiries()" class="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                Clear All Data
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderLogin();
}

function deleteInquiry(id) {
  if (!confirm('Delete this inquiry?')) return;
  const inquiries = JSON.parse(localStorage.getItem('ecg_inquiries') || '[]');
  localStorage.setItem('ecg_inquiries', JSON.stringify(inquiries.filter(i => i.id !== id)));
  location.reload();
}

function clearAllInquiries() {
  if (!confirm('Delete ALL inquiries? This cannot be undone.')) return;
  localStorage.setItem('ecg_inquiries', '[]');
  location.reload();
}
