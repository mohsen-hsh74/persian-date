const MONTHS = {
    fa: {
        1: "فروردین",
        2: "اردیبهشت",
        3: "خرداد",
        4: "تیر",
        5: "مرداد",
        6: "شهریور",
        7: "مهر",
        8: "آبان",
        9: "آذر",
        10: "دی",
        11: "بهمن",
        12: "اسفند",
    },
    en: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }
};

const ORDINALNUMBERS = {
    fa1: {
        1: "اول",
        2: "دوم",
        3: "سوم",
        4: "چهارم",
        5: "پنجم",
        6: "ششم",
        7: "هفتم",
        8: "هشتم",
        9: "نهم",
        10: "دهم",
        11: "یازدهم",
        12: "دوازدهم",
        13: "سیزدهم",
        14: "چهاردهم",
        15: "پانزدهم",
        16: "شانزدهم",
        17: "هفدهم",
        18: "هجدهم",
        19: "نوزدهم",
        20: "بیستم",
        21: "بیست و یکم",
        22: "بیست و دوم",
        23: "بیست و سوم",
        24: "بیست و چهارم",
        25: "بیست و پنجم",
        26: "بیست و ششم",
        27: "بیست و هفتم",
        28: "بیست و هشتم",
        29: "بیست و نهم",
        30: "سی‌ام",
        31: "سی‌ و یکم",
        32: "سی‌‌ و دوم",
        33: "سی‌‌ و سوم",
        34: "سی‌‌ و چهارم",
        35: "سی‌‌ و پنجم",
        36: "سی‌‌ و ششم",
        37: "سی‌‌ و هفتم",
        38: "سی‌‌ و هشتم",
        39: "سی‌‌ و نهم",
        40: "چهلم",
        41: "چهل و یکم",
        42: "چهل و دوم",
        43: "چهل و سوم",
        44: "چهل و چهارم",
        45: "چهل و پنجم",
        46: "چهل و ششم",
        47: "چهل و هفتم",
        48: "چهل و هشتم",
        49: "چهل و نهم",
        50: "پنجاهم",
        51: "پنجاه و یکم",
        52: "پنجاه و دوم",
        53: "پنجاه و سوم",
        54: "پنجاه و چهارم",
        55: "پنجاه و پنجم",
        56: "پنجاه و ششم",
        57: "پنجاه و هفتم",
        58: "پنجاه و هشتم",
        59: "پنجاه و نهم",
        60: "شصتم",
        61: "شصت و یکم",
        62: "شصت و دوم",
        63: "شصت و سوم",
        64: "شصت و چهارم",
        65: "شصت و پنجم",
        66: "شصت و ششم",
        67: "شصت و هفتم",
        68: "شصت و هشتم",
        69: "شصت و نهم",
        70: "هفتادم",
        71: "هفتاد و یکم",
        72: "هفتاد و دوم",
        73: "هفتاد و سوم",
        74: "هفتاد و چهارم",
        75: "هفتاد و پنجم",
        76: "هفتاد و ششم",
        77: "هفتاد و هفتم",
        78: "هفتاد و هشتم",
        79: "هفتاد و نهم",
        80: "هشتادم",
        81: "هشتاد و یکم",
        82: "هشتاد و دوم",
        83: "هشتاد و سوم",
        84: "هشتاد و چهارم",
        85: "هشتاد و پنجم",
        86: "هشتاد و ششم",
        87: "هشتاد و هفتم",
        88: "هشتاد و هشتم",
        89: "هشتاد و نهم",
        90: "نودم",
        91: "نود و یکم",
        92: "نود و دوم",
        93: "نود و سوم",
        94: "نود و چهارم",
        95: "نود و پنجم",
        96: "نود و ششم",
        97: "نود و هفتم",
        98: "نود و هشتم",
        99: "نود و نهم",
        100: "صدم",
        101: "صد و یکم",
        102: "صد و دوم",
        103: "صد و سوم",
        104: "صد و چهارم",
        105: "صد و پنجم",
        106: "صد و ششم",
        107: "صد و هفتم",
        108: "صد و هشتم",
        109: "صد و نهم",
        110: "صد و دهم",
        111: "صد و یازدهم",
        112: "صد و دوازدهم",
        113: "صد و سیزدهم",
        114: "صد و چهاردهم",
        115: "صد و پانزدهم",
        116: "صد و شانزدهم",
        117: "صد و هفدهم",
        118: "صد و هجدهم",
        119: "صد و نوزدهم",
        120: "صد و بیستم",
        121: "صد و بیست و یکم",
        122: "صد و بیست و دوم",
        123: "صد و بیست و سوم",
        124: "صد و بیست و چهارم",
        125: "صد و بیست و پنجم",
        126: "صد و بیست و ششم",
        127: "صد و بیست و هفتم",
        128: "صد و بیست و هشتم",
        129: "صد و بیست و نهم",
        130: "صد و سی‌ام",
        131: "صد و سی‌ و یکم",
        132: "صد و سی‌‌ و دوم",
        133: "صد و سی‌‌ و سوم",
        134: "صد و سی‌‌ و چهارم",
        135: "صد و سی‌‌ و پنجم",
        136: "صد و سی‌‌ و ششم",
        137: "صد و سی‌‌ و هفتم",
        138: "صد و سی‌‌ و هشتم",
        139: "صد و سی‌‌ و نهم",
        140: "صد و چهلم",
        141: "صد و چهل و یکم",
        142: "صد و چهل و دوم",
        143: "صد و چهل و سوم",
        144: "صد و چهل و چهارم",
        145: "صد و چهل و پنجم",
        146: "صد و چهل و ششم",
        147: "صد و چهل و هفتم",
        148: "صد و چهل و هشتم",
        149: "صد و چهل و نهم",
        150: "صد و پنجاهم",
        151: "صد و پنجاه و یکم",
        152: "صد و پنجاه و دوم",
        153: "صد و پنجاه و سوم",
        154: "صد و پنجاه و چهارم",
        155: "صد و پنجاه و پنجم",
        156: "صد و پنجاه و ششم",
        157: "صد و پنجاه و هفتم",
        158: "صد و پنجاه و هشتم",
        159: "صد و پنجاه و نهم",
        160: "صد و شصتم",
        161: "صد و شصت و یکم",
        162: "صد و شصت و دوم",
        163: "صد و شصت و سوم",
        164: "صد و شصت و چهارم",
        165: "صد و شصت و پنجم",
        166: "صد و شصت و ششم",
        167: "صد و شصت و هفتم",
        168: "صد و شصت و هشتم",
        169: "صد و شصت و نهم",
        170: "صد و هفتادم",
        171: "صد و هفتاد و یکم",
        172: "صد و هفتاد و دوم",
        173: "صد و هفتاد و سوم",
        174: "صد و هفتاد و چهارم",
        175: "صد و هفتاد و پنجم",
        176: "صد و هفتاد و ششم",
        177: "صد و هفتاد و هفتم",
        178: "صد و هفتاد و هشتم",
        179: "صد و هفتاد و نهم",
        180: "صد و هشتادم",
        181: "صد و هشتاد و یکم",
        182: "صد و هشتاد و دوم",
        183: "صد و هشتاد و سوم",
        184: "صد و هشتاد و چهارم",
        185: "صد و هشتاد و پنجم",
        186: "صد و هشتاد و ششم",
        187: "صد و هشتاد و هفتم",
        188: "صد و هشتاد و هشتم",
        189: "صد و هشتاد و نهم",
        190: "صد و نودم",
        191: "صد و نود و یکم",
        192: "صد و نود و دوم",
        193: "صد و نود و سوم",
        194: "صد و نود و چهارم",
        195: "صد و نود و پنجم",
        196: "صد و نود و ششم",
        197: "صد و نود و هفتم",
        198: "صد و نود و هشتم",
        199: "صد و نود و نهم",
        200: "دویستم",
        201: "دویست و یکم",
        202: "دویست و دوم",
        203: "دویست و سوم",
        204: "دویست و چهارم",
        205: "دویست و پنجم",
        206: "دویست و ششم",
        207: "دویست و هفتم",
        208: "دویست و هشتم",
        209: "دویست و نهم",
        210: "دویست و دهم",
        211: "دویست و یازدهم",
        212: "دویست و دوازدهم",
        213: "دویست و سیزدهم",
        214: "دویست و چهاردهم",
        215: "دویست و پانزدهم",
        216: "دویست و شانزدهم",
        217: "دویست و هفدهم",
        218: "دویست و هجدهم",
        219: "دویست و نوزدهم",
        220: "دویست و بیستم",
        221: "دویست و بیست و یکم",
        222: "دویست و بیست و دوم",
        223: "دویست و بیست و سوم",
        224: "دویست و بیست و چهارم",
        225: "دویست و بیست و پنجم",
        226: "دویست و بیست و ششم",
        227: "دویست و بیست و هفتم",
        228: "دویست و بیست و هشتم",
        229: "دویست و بیست و نهم",
        230: "دویست و سی‌ام",
        231: "دویست و سی‌ و یکم",
        232: "دویست و سی‌‌ و دوم",
        233: "دویست و سی‌‌ و سوم",
        234: "دویست و سی‌‌ و چهارم",
        235: "دویست و سی‌‌ و پنجم",
        236: "دویست و سی‌‌ و ششم",
        237: "دویست و سی‌‌ و هفتم",
        238: "دویست و سی‌‌ و هشتم",
        239: "دویست و سی‌‌ و نهم",
        240: "دویست و چهلم",
        241: "دویست و چهل و یکم",
        242: "دویست و چهل و دوم",
        243: "دویست و چهل و سوم",
        244: "دویست و چهل و چهارم",
        245: "دویست و چهل و پنجم",
        246: "دویست و چهل و ششم",
        247: "دویست و چهل و هفتم",
        248: "دویست و چهل و هشتم",
        249: "دویست و چهل و نهم",
        250: "دویست و پنجاهم",
        251: "دویست و پنجاه و یکم",
        252: "دویست و پنجاه و دوم",
        253: "دویست و پنجاه و سوم",
        254: "دویست و پنجاه و چهارم",
        255: "دویست و پنجاه و پنجم",
        256: "دویست و پنجاه و ششم",
        257: "دویست و پنجاه و هفتم",
        258: "دویست و پنجاه و هشتم",
        259: "دویست و پنجاه و نهم",
        260: "دویست و شصتم",
        261: "دویست و شصت و یکم",
        262: "دویست و شصت و دوم",
        263: "دویست و شصت و سوم",
        264: "دویست و شصت و چهارم",
        265: "دویست و شصت و پنجم",
        266: "دویست و شصت و ششم",
        267: "دویست و شصت و هفتم",
        268: "دویست و شصت و هشتم",
        269: "دویست و شصت و نهم",
        270: "دویست و هفتادم",
        271: "دویست و هفتاد و یکم",
        272: "دویست و هفتاد و دوم",
        273: "دویست و هفتاد و سوم",
        274: "دویست و هفتاد و چهارم",
        275: "دویست و هفتاد و پنجم",
        276: "دویست و هفتاد و ششم",
        277: "دویست و هفتاد و هفتم",
        278: "دویست و هفتاد و هشتم",
        279: "دویست و هفتاد و نهم",
        280: "دویست و هشتادم",
        281: "دویست و هشتاد و یکم",
        282: "دویست و هشتاد و دوم",
        283: "دویست و هشتاد و سوم",
        284: "دویست و هشتاد و چهارم",
        285: "دویست و هشتاد و پنجم",
        286: "دویست و هشتاد و ششم",
        287: "دویست و هشتاد و هفتم",
        288: "دویست و هشتاد و هشتم",
        289: "دویست و هشتاد و نهم",
        290: "دویست و نودم",
        291: "دویست و نود و یکم",
        292: "دویست و نود و دوم",
        293: "دویست و نود و سوم",
        294: "دویست و نود و چهارم",
        295: "دویست و نود و پنجم",
        296: "دویست و نود و ششم",
        297: "دویست و نود و هفتم",
        298: "دویست و نود و هشتم",
        299: "دویست و نود و نهم",
        300: "سیصدم",
        301: "سیصد و یکم",
        302: "سیصد و دوم",
        303: "سیصد و سوم",
        304: "سیصد و چهارم",
        305: "سیصد و پنجم",
        306: "سیصد و ششم",
        307: "سیصد و هفتم",
        308: "سیصد و هشتم",
        309: "سیصد و نهم",
        310: "سیصد و دهم",
        311: "سیصد و یازدهم",
        312: "سیصد و دوازدهم",
        313: "سیصد و سیزدهم",
        314: "سیصد و چهاردهم",
        315: "سیصد و پانزدهم",
        316: "سیصد و شانزدهم",
        317: "سیصد و هفدهم",
        318: "سیصد و هجدهم",
        319: "سیصد و نوزدهم",
        320: "سیصد و بیستم",
        321: "سیصد و بیست و یکم",
        322: "سیصد و بیست و دوم",
        323: "سیصد و بیست و سوم",
        324: "سیصد و بیست و چهارم",
        325: "سیصد و بیست و پنجم",
        326: "سیصد و بیست و ششم",
        327: "سیصد و بیست و هفتم",
        328: "سیصد و بیست و هشتم",
        329: "سیصد و بیست و نهم",
        330: "سیصد و سی‌ام",
        331: "سیصد و سی‌ و یکم",
        332: "سیصد و سی‌‌ و دوم",
        333: "سیصد و سی‌‌ و سوم",
        334: "سیصد و سی‌‌ و چهارم",
        335: "سیصد و سی‌‌ و پنجم",
        336: "سیصد و سی‌‌ و ششم",
        337: "سیصد و سی‌‌ و هفتم",
        338: "سیصد و سی‌‌ و هشتم",
        339: "سیصد و سی‌‌ و نهم",
        340: "سیصد و چهلم",
        341: "سیصد و چهل و یکم",
        342: "سیصد و چهل و دوم",
        343: "سیصد و چهل و سوم",
        344: "سیصد و چهل و چهارم",
        345: "سیصد و چهل و پنجم",
        346: "سیصد و چهل و ششم",
        347: "سیصد و چهل و هفتم",
        348: "سیصد و چهل و هشتم",
        349: "سیصد و چهل و نهم",
        350: "سیصد و پنجاهم",
        351: "سیصد و پنجاه و یکم",
        352: "سیصد و پنجاه و دوم",
        353: "سیصد و پنجاه و سوم",
        354: "سیصد و پنجاه و چهارم",
        355: "سیصد و پنجاه و پنجم",
        356: "سیصد و پنجاه و ششم",
        357: "سیصد و پنجاه و هفتم",
        358: "سیصد و پنجاه و هشتم",
        359: "سیصد و پنجاه و نهم",
        360: "سیصد و شصتم",
        361: "سیصد و شصت و یکم",
        362: "سیصد و شصت و دوم",
        363: "سیصد و شصت و سوم",
        364: "سیصد و شصت و چهارم",
        365: "سیصد و شصت و پنجم",
        366: "سیصد و شصت و ششم",
    },
    fa2: {
        1: "اولین",
        2: "دومین",
        3: "سومین",
        4: "چهارمین",
        5: "پنجمین",
        6: "ششمین",
        7: "هفتمین",
        8: "هشتمین",
        9: "نهمین",
        10: "دهمین",
        11: "یازدهمین",
        12: "دوازدهمین",
        13: "سیزدهمین",
        14: "چهاردهمین",
        15: "پانزدهمین",
        16: "شانزدهمین",
        17: "هفدهمین",
        18: "هجدهمین",
        19: "نوزدهمین",
        20: "بیستمین",
        21: "بیست و یکمین",
        22: "بیست و دومین",
        23: "بیست و سومین",
        24: "بیست و چهارمین",
        25: "بیست و پنجمین",
        26: "بیست و ششمین",
        27: "بیست و هفتمین",
        28: "بیست و هشتمین",
        29: "بیست و نهمین",
        30: "سی‌امین",
        31: "سی‌ و یکمین",
        32: "سی‌ و دومین",
        33: "سی‌ و سومین",
        34: "سی‌ و چهارمین",
        35: "سی‌ و پنجمین",
        36: "سی‌ و ششمین",
        37: "سی‌ و هفتمین",
        38: "سی‌ و هشتمین",
        39: "سی‌ و نهمین",
        40: "چهلمین",
        41: "چهل و یکمین",
        42: "چهل و دومین",
        43: "چهل و سومین",
        44: "چهل و چهارمین",
        45: "چهل و پنجمین",
        46: "چهل و ششمین",
        47: "چهل و هفتمین",
        48: "چهل و هشتمین",
        49: "چهل و نهمین",
        50: "پنجاهمین",
        51: "پنجاه و یکمین",
        52: "پنجاه و دومین",
        53: "پنجاه و سومین",
        54: "پنجاه و چهارمین",
        55: "پنجاه و پنجمین",
        56: "پنجاه و ششمین",
        57: "پنجاه و هفتمین",
        58: "پنجاه و هشتمین",
        59: "پنجاه و نهمین",
        60: "شصتمین",
        61: "شصت و یکمین",
        62: "شصت و دومین",
        63: "شصت و سومین",
        64: "شصت و چهارمین",
        65: "شصت و پنجمین",
        66: "شصت و ششمین",
        67: "شصت و هفتمین",
        68: "شصت و هشتمین",
        69: "شصت و نهمین",
        70: "هفتادمین",
        71: "هفتاد و یکمین",
        72: "هفتاد و دومین",
        73: "هفتاد و سومین",
        74: "هفتاد و چهارمین",
        75: "هفتاد و پنجمین",
        76: "هفتاد و ششمین",
        77: "هفتاد و هفتمین",
        78: "هفتاد و هشتمین",
        79: "هفتاد و نهمین",
        80: "هشتادمین",
        81: "هشتاد و یکمین",
        82: "هشتاد و دومین",
        83: "هشتاد و سومین",
        84: "هشتاد و چهارمین",
        85: "هشتاد و پنجمین",
        86: "هشتاد و ششمین",
        87: "هشتاد و هفتمین",
        88: "هشتاد و هشتمین",
        89: "هشتاد و نهمین",
        90: "نودمین",
        91: "نود و یکمین",
        92: "نود و دومین",
        93: "نود و سومین",
        94: "نود و چهارمین",
        95: "نود و پنجمین",
        96: "نود و ششمین",
        97: "نود و هفتمین",
        98: "نود و هشتمین",
        99: "نود و نهمین",
        100: "صدمین",
        101: "صد و یکمین",
        102: "صد و دومین",
        103: "صد و سومین",
        104: "صد و چهارمین",
        105: "صد و پنجمین",
        106: "صد و ششمین",
        107: "صد و هفتمین",
        108: "صد و هشتمین",
        109: "صد و نهمین",
        110: "صد و دهمین",
        111: "صد و یازدهمین",
        112: "صد و دوازدهمین",
        113: "صد و سیزدهمین",
        114: "صد و چهاردهمین",
        115: "صد و پانزدهمین",
        116: "صد و شانزدهمین",
        117: "صد و هفدهمین",
        118: "صد و هجدهمین",
        119: "صد و نوزدهمین",
        120: "صد و بیستمین",
        121: "صد و بیست و یکمین",
        122: "صد و بیست و دومین",
        123: "صد و بیست و سومین",
        124: "صد و بیست و چهارمین",
        125: "صد و بیست و پنجمین",
        126: "صد و بیست و ششمین",
        127: "صد و بیست و هفتمین",
        128: "صد و بیست و هشتمین",
        129: "صد و بیست و نهمین",
        130: "صد و سی‌امین",
        131: "صد و سی‌ و یکمین",
        132: "صد و سی‌ و دومین",
        133: "صد و سی‌ و سومین",
        134: "صد و سی‌ و چهارمین",
        135: "صد و سی‌ و پنجمین",
        136: "صد و سی‌ و ششمین",
        137: "صد و سی‌ و هفتمین",
        138: "صد و سی‌ و هشتمین",
        139: "صد و سی‌ و نهمین",
        140: "صد و چهلمین",
        141: "صد و چهل و یکمین",
        142: "صد و چهل و دومین",
        143: "صد و چهل و سومین",
        144: "صد و چهل و چهارمین",
        145: "صد و چهل و پنجمین",
        146: "صد و چهل و ششمین",
        147: "صد و چهل و هفتمین",
        148: "صد و چهل و هشتمین",
        149: "صد و چهل و نهمین",
        150: "صد و پنجاهمین",
        151: "صد و پنجاه و یکمین",
        152: "صد و پنجاه و دومین",
        153: "صد و پنجاه و سومین",
        154: "صد و پنجاه و چهارمین",
        155: "صد و پنجاه و پنجمین",
        156: "صد و پنجاه و ششمین",
        157: "صد و پنجاه و هفتمین",
        158: "صد و پنجاه و هشتمین",
        159: "صد و پنجاه و نهمین",
        160: "صد و شصتمین",
        161: "صد و شصت و یکمین",
        162: "صد و شصت و دومین",
        163: "صد و شصت و سومین",
        164: "صد و شصت و چهارمین",
        165: "صد و شصت و پنجمین",
        166: "صد و شصت و ششمین",
        167: "صد و شصت و هفتمین",
        168: "صد و شصت و هشتمین",
        169: "صد و شصت و نهمین",
        170: "صد و هفتادمین",
        171: "صد و هفتاد و یکمین",
        172: "صد و هفتاد و دومین",
        173: "صد و هفتاد و سومین",
        174: "صد و هفتاد و چهارمین",
        175: "صد و هفتاد و پنجمین",
        176: "صد و هفتاد و ششمین",
        177: "صد و هفتاد و هفتمین",
        178: "صد و هفتاد و هشتمین",
        179: "صد و هفتاد و نهمین",
        180: "صد و هشتادمین",
        181: "صد و هشتاد و یکمین",
        182: "صد و هشتاد و دومین",
        183: "صد و هشتاد و سومین",
        184: "صد و هشتاد و چهارمین",
        185: "صد و هشتاد و پنجمین",
        186: "صد و هشتاد و ششمین",
        187: "صد و هشتاد و هفتمین",
        188: "صد و هشتاد و هشتمین",
        189: "صد و هشتاد و نهمین",
        190: "صد و نودمین",
        191: "صد و نود و یکمین",
        192: "صد و نود و دومین",
        193: "صد و نود و سومین",
        194: "صد و نود و چهارمین",
        195: "صد و نود و پنجمین",
        196: "صد و نود و ششمین",
        197: "صد و نود و هفتمین",
        198: "صد و نود و هشتمین",
        199: "صد و نود و نهمین",
        200: "دویستمین",
        201: "دویست و یکمین",
        202: "دویست و دومین",
        203: "دویست و سومین",
        204: "دویست و چهارمین",
        205: "دویست و پنجمین",
        206: "دویست و ششمین",
        207: "دویست و هفتمین",
        208: "دویست و هشتمین",
        209: "دویست و نهمین",
        210: "دویست و دهمین",
        211: "دویست و یازدهمین",
        212: "دویست و دوازدهمین",
        213: "دویست و سیزدهمین",
        214: "دویست و چهاردهمین",
        215: "دویست و پانزدهمین",
        216: "دویست و شانزدهمین",
        217: "دویست و هفدهمین",
        218: "دویست و هجدهمین",
        219: "دویست و نوزدهمین",
        220: "دویست و بیستمین",
        221: "دویست و بیست و یکمین",
        222: "دویست و بیست و دومین",
        223: "دویست و بیست و سومین",
        224: "دویست و بیست و چهارمین",
        225: "دویست و بیست و پنجمین",
        226: "دویست و بیست و ششمین",
        227: "دویست و بیست و هفتمین",
        228: "دویست و بیست و هشتمین",
        229: "دویست و بیست و نهمین",
        230: "دویست و سی‌امین",
        231: "دویست و سی‌ و یکمین",
        232: "دویست و سی‌ و دومین",
        233: "دویست و سی‌ و سومین",
        234: "دویست و سی‌ و چهارمین",
        235: "دویست و سی‌ و پنجمین",
        236: "دویست و سی‌ و ششمین",
        237: "دویست و سی‌ و هفتمین",
        238: "دویست و سی‌ و هشتمین",
        239: "دویست و سی‌ و نهمین",
        240: "دویست و چهلمین",
        241: "دویست و چهل و یکمین",
        242: "دویست و چهل و دومین",
        243: "دویست و چهل و سومین",
        244: "دویست و چهل و چهارمین",
        245: "دویست و چهل و پنجمین",
        246: "دویست و چهل و ششمین",
        247: "دویست و چهل و هفتمین",
        248: "دویست و چهل و هشتمین",
        249: "دویست و چهل و نهمین",
        250: "دویست و پنجاهمین",
        251: "دویست و پنجاه و یکمین",
        252: "دویست و پنجاه و دومین",
        253: "دویست و پنجاه و سومین",
        254: "دویست و پنجاه و چهارمین",
        255: "دویست و پنجاه و پنجمین",
        256: "دویست و پنجاه و ششمین",
        257: "دویست و پنجاه و هفتمین",
        258: "دویست و پنجاه و هشتمین",
        259: "دویست و پنجاه و نهمین",
        260: "دویست و شصتمین",
        261: "دویست و شصت و یکمین",
        262: "دویست و شصت و دومین",
        263: "دویست و شصت و سومین",
        264: "دویست و شصت و چهارمین",
        265: "دویست و شصت و پنجمین",
        266: "دویست و شصت و ششمین",
        267: "دویست و شصت و هفتمین",
        268: "دویست و شصت و هشتمین",
        269: "دویست و شصت و نهمین",
        270: "دویست و هفتادمین",
        271: "دویست و هفتاد و یکمین",
        272: "دویست و هفتاد و دومین",
        273: "دویست و هفتاد و سومین",
        274: "دویست و هفتاد و چهارمین",
        275: "دویست و هفتاد و پنجمین",
        276: "دویست و هفتاد و ششمین",
        277: "دویست و هفتاد و هفتمین",
        278: "دویست و هفتاد و هشتمین",
        279: "دویست و هفتاد و نهمین",
        280: "دویست و هشتادمین",
        281: "دویست و هشتاد و یکمین",
        282: "دویست و هشتاد و دومین",
        283: "دویست و هشتاد و سومین",
        284: "دویست و هشتاد و چهارمین",
        285: "دویست و هشتاد و پنجمین",
        286: "دویست و هشتاد و ششمین",
        287: "دویست و هشتاد و هفتمین",
        288: "دویست و هشتاد و هشتمین",
        289: "دویست و هشتاد و نهمین",
        290: "دویست و نودمین",
        291: "دویست و نود و یکمین",
        292: "دویست و نود و دومین",
        293: "دویست و نود و سومین",
        294: "دویست و نود و چهارمین",
        295: "دویست و نود و پنجمین",
        296: "دویست و نود و ششمین",
        297: "دویست و نود و هفتمین",
        298: "دویست و نود و هشتمین",
        299: "دویست و نود و نهمین",
        300: "سیصدمین",
        301: "سیصد و یکمین",
        302: "سیصد و دومین",
        303: "سیصد و سومین",
        304: "سیصد و چهارمین",
        305: "سیصد و پنجمین",
        306: "سیصد و ششمین",
        307: "سیصد و هفتمین",
        308: "سیصد و هشتمین",
        309: "سیصد و نهمین",
        310: "سیصد و دهمین",
        311: "سیصد و یازدهمین",
        312: "سیصد و دوازدهمین",
        313: "سیصد و سیزدهمین",
        314: "سیصد و چهاردهمین",
        315: "سیصد و پانزدهمین",
        316: "سیصد و شانزدهمین",
        317: "سیصد و هفدهمین",
        318: "سیصد و هجدهمین",
        319: "سیصد و نوزدهمین",
        320: "سیصد و بیستمین",
        321: "سیصد و بیست و یکمین",
        322: "سیصد و بیست و دومین",
        323: "سیصد و بیست و سومین",
        324: "سیصد و بیست و چهارمین",
        325: "سیصد و بیست و پنجمین",
        326: "سیصد و بیست و ششمین",
        327: "سیصد و بیست و هفتمین",
        328: "سیصد و بیست و هشتمین",
        329: "سیصد و بیست و نهمین",
        330: "سیصد و سی‌امین",
        331: "سیصد و سی‌ و یکمین",
        332: "سیصد و سی‌ و دومین",
        333: "سیصد و سی‌ و سومین",
        334: "سیصد و سی‌ و چهارمین",
        335: "سیصد و سی‌ و پنجمین",
        336: "سیصد و سی‌ و ششمین",
        337: "سیصد و سی‌ و هفتمین",
        338: "سیصد و سی‌ و هشتمین",
        339: "سیصد و سی‌ و نهمین",
        340: "سیصد و چهلمین",
        341: "سیصد و چهل و یکمین",
        342: "سیصد و چهل و دومین",
        343: "سیصد و چهل و سومین",
        344: "سیصد و چهل و چهارمین",
        345: "سیصد و چهل و پنجمین",
        346: "سیصد و چهل و ششمین",
        347: "سیصد و چهل و هفتمین",
        348: "سیصد و چهل و هشتمین",
        349: "سیصد و چهل و نهمین",
        350: "سیصد و پنجاهمین",
        351: "سیصد و پنجاه و یکمین",
        352: "سیصد و پنجاه و دومین",
        353: "سیصد و پنجاه و سومین",
        354: "سیصد و پنجاه و چهارمین",
        355: "سیصد و پنجاه و پنجمین",
        356: "سیصد و پنجاه و ششمین",
        357: "سیصد و پنجاه و هفتمین",
        358: "سیصد و پنجاه و هشتمین",
        359: "سیصد و پنجاه و نهمین",
        360: "سیصد و شصتمین",
        361: "سیصد و شصت و یکمین",
        362: "سیصد و شصت و دومین",
        363: "سیصد و شصت و سومین",
        364: "سیصد و شصت و چهارمین",
        365: "سیصد و شصت و پنجمین",
        366: "سیصد و شصت و ششمین",
    },
    en: function () {
        let ordinalNumber = {};
        for (let i = 1; i <= 366; i++) {
            if (i == 1 || i % 10 == 1 && i != 11)
                ordinalNumber[i] = i + 'st';
            else if (i == 2 || i % 10 == 2 && i != 12)
                ordinalNumber[i] = i + 'nd';
            else if (i == 3 || i % 10 == 3 && i != 13)
                ordinalNumber[i] = i + 'rd';
            else
                ordinalNumber[i] = i + 'th';
        }
        return ordinalNumber;
    }(),
};

const DAYS = {
    fa: { // days in persian calendar start from saturday or 0
        6: 0,
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
    },
    en: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
    },
    label: {
        fa: {
            6: "شنبه",
            0: "یکشنبه",
            1: "دوشنبه",
            2: "سه‌شنبه",
            3: "چهارشنبه",
            4: "پنجشنبه",
            5: "جمعه",
        },
        en: {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        }
    }
};

const REGEX = {
    format: /j*(YYYY|YY|y|Qo|QO|Q|MMMM|MMM|MM|Mo|MO|M|DDDD|DDDo|DDDO|DDD|DD|Do|DO|D|dddd|ddd|dd|do|dO|de|d|ww|WW|wo|Wo|wO|WO|w|W|HH|hh|H|h|kk|k|mm|m|ss|s|CCCC|CCC|c|t|aa|a|A)/g,
    isNumeric: /^\d+$/, // this regex, checks input to see is a number or not
    separators: "" // find ['/',' ','-','.',',',':'] and split string to array by this symbols
};

const TIMETYPE = function (hour, format) {
    if (hour >= 0 && hour < 12) {
        if (format == 'a')
            return 'am';
        if (format == 'aa')
            return 'A.M.';
        if (format == 'A')
            return 'AM';
        if (format == 'ja')
            return 'ق ظ';
        if (format == 'jaa')
            return 'ق.ظ';
        if (format == 'jA')
            return 'قبل از ظهر';
        return 'ق.ظ';
    }
    if (hour > 12 && hour <= 23) {
        if (format == 'a')
            return 'pm';
        if (format == 'aa')
            return 'P.M.';
        if (format == 'A')
            return 'PM';
        if (format == 'ja')
            return 'ب ظ';
        if (format == 'jaa')
            return 'ب.ظ';
        if (format == 'jA')
            return 'بعد از ظهر';
        return 'ب.ظ';
    }
};

export { ORDINALNUMBERS, MONTHS, DAYS, TIMETYPE, REGEX };