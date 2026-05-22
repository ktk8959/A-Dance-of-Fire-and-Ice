export const levels = {};

// Level 4 (Nada Nada)

const nadaPath = ["R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R","R","D","L","D","D","L","D","R","R","U","R","D","R","D","D","R"];
const nadaEvents = {
  "0": {
    "type": "camera",
    "angle": 0.7853981633974483,
    "height": 18,
    "radius": 15
  },
  "5": {
    "type": "elevation",
    "amount": -2
  },
  "7": {
    "type": "twirl"
  },
  "10": {
    "type": "elevation",
    "amount": 2
  },
  "11": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "14": {
    "type": "twirl"
  },
  "15": {
    "type": "elevation",
    "amount": -2
  },
  "20": {
    "type": "elevation",
    "amount": 2
  },
  "21": {
    "type": "twirl"
  },
  "22": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "25": {
    "type": "elevation",
    "amount": -2
  },
  "28": {
    "type": "twirl"
  },
  "30": {
    "type": "elevation",
    "amount": 2
  },
  "33": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "35": {
    "type": "twirl"
  },
  "40": {
    "type": "elevation",
    "amount": -2
  },
  "42": {
    "type": "twirl"
  },
  "44": {
    "type": "speed",
    "bpm": 578
  },
  "45": {
    "type": "elevation",
    "amount": 2
  },
  "49": {
    "type": "twirl"
  },
  "50": {
    "type": "elevation",
    "amount": -2
  },
  "55": {
    "type": "elevation",
    "amount": 2
  },
  "56": {
    "type": "twirl"
  },
  "60": {
    "type": "elevation",
    "amount": -2
  },
  "63": {
    "type": "twirl"
  },
  "65": {
    "type": "elevation",
    "amount": 2
  },
  "66": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "70": {
    "type": "twirl"
  },
  "75": {
    "type": "elevation",
    "amount": -2
  },
  "77": {
    "type": "twirl"
  },
  "80": {
    "type": "elevation",
    "amount": 2
  },
  "84": {
    "type": "twirl"
  },
  "85": {
    "type": "elevation",
    "amount": -2
  },
  "88": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "90": {
    "type": "elevation",
    "amount": 2
  },
  "91": {
    "type": "twirl"
  },
  "95": {
    "type": "elevation",
    "amount": -2
  },
  "98": {
    "type": "twirl"
  },
  "99": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "100": {
    "type": "elevation",
    "amount": 2
  },
  "105": {
    "type": "twirl"
  },
  "110": {
    "type": "elevation",
    "amount": -2
  },
  "112": {
    "type": "twirl"
  },
  "115": {
    "type": "elevation",
    "amount": 2
  },
  "119": {
    "type": "twirl"
  },
  "120": {
    "type": "elevation",
    "amount": -2
  },
  "121": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "125": {
    "type": "elevation",
    "amount": 2
  },
  "126": {
    "type": "twirl"
  },
  "130": {
    "type": "elevation",
    "amount": -2
  },
  "132": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "133": {
    "type": "twirl"
  },
  "135": {
    "type": "elevation",
    "amount": 2
  },
  "140": {
    "type": "twirl"
  },
  "143": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "145": {
    "type": "elevation",
    "amount": -2
  },
  "147": {
    "type": "twirl"
  },
  "150": {
    "type": "elevation",
    "amount": 2
  },
  "154": {
    "type": "twirl"
  },
  "155": {
    "type": "elevation",
    "amount": -2
  },
  "160": {
    "type": "elevation",
    "amount": 2
  },
  "161": {
    "type": "twirl"
  },
  "165": {
    "type": "elevation",
    "amount": -2
  },
  "168": {
    "type": "twirl"
  },
  "170": {
    "type": "speed",
    "bpm": 158
  },
  "175": {
    "type": "twirl"
  },
  "176": {
    "type": "camera",
    "angle": 1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "180": {
    "type": "elevation",
    "amount": 2
  },
  "182": {
    "type": "twirl"
  },
  "185": {
    "type": "elevation",
    "amount": -2
  },
  "187": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "189": {
    "type": "twirl"
  },
  "190": {
    "type": "speed",
    "bpm": 263
  },
  "195": {
    "type": "elevation",
    "amount": 2
  },
  "196": {
    "type": "twirl"
  },
  "198": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "200": {
    "type": "elevation",
    "amount": -2
  },
  "203": {
    "type": "twirl"
  },
  "205": {
    "type": "elevation",
    "amount": 2
  },
  "209": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "210": {
    "type": "twirl"
  },
  "215": {
    "type": "elevation",
    "amount": -2
  },
  "217": {
    "type": "twirl"
  },
  "220": {
    "type": "elevation",
    "amount": 2
  },
  "222": {
    "type": "speed",
    "bpm": 630
  },
  "224": {
    "type": "twirl"
  },
  "225": {
    "type": "elevation",
    "amount": -2
  },
  "230": {
    "type": "elevation",
    "amount": 2
  },
  "231": {
    "type": "twirl"
  },
  "235": {
    "type": "elevation",
    "amount": -2
  },
  "238": {
    "type": "twirl"
  },
  "240": {
    "type": "elevation",
    "amount": 2
  },
  "242": {
    "type": "camera",
    "angle": 1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "245": {
    "type": "twirl"
  },
  "250": {
    "type": "elevation",
    "amount": -2
  },
  "252": {
    "type": "twirl"
  },
  "253": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "255": {
    "type": "elevation",
    "amount": 2
  },
  "259": {
    "type": "twirl"
  },
  "260": {
    "type": "elevation",
    "amount": -2
  },
  "264": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "265": {
    "type": "elevation",
    "amount": 2
  },
  "266": {
    "type": "twirl"
  },
  "270": {
    "type": "elevation",
    "amount": -2
  },
  "273": {
    "type": "twirl"
  },
  "275": {
    "type": "elevation",
    "amount": 2
  },
  "280": {
    "type": "twirl"
  },
  "285": {
    "type": "elevation",
    "amount": -2
  },
  "286": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "287": {
    "type": "twirl"
  },
  "290": {
    "type": "elevation",
    "amount": 2
  },
  "294": {
    "type": "twirl"
  },
  "295": {
    "type": "elevation",
    "amount": -2
  },
  "297": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "300": {
    "type": "elevation",
    "amount": 2
  },
  "301": {
    "type": "twirl"
  },
  "305": {
    "type": "elevation",
    "amount": -2
  },
  "308": {
    "type": "twirl"
  },
  "310": {
    "type": "elevation",
    "amount": 2
  },
  "315": {
    "type": "twirl"
  },
  "319": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "320": {
    "type": "elevation",
    "amount": -2
  },
  "322": {
    "type": "twirl"
  },
  "325": {
    "type": "elevation",
    "amount": 2
  },
  "329": {
    "type": "twirl"
  },
  "330": {
    "type": "elevation",
    "amount": -2
  },
  "335": {
    "type": "elevation",
    "amount": 2
  },
  "336": {
    "type": "twirl"
  },
  "340": {
    "type": "elevation",
    "amount": -2
  },
  "341": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "343": {
    "type": "twirl"
  },
  "345": {
    "type": "elevation",
    "amount": 2
  },
  "350": {
    "type": "twirl"
  },
  "351": {
    "type": "speed",
    "bpm": 137
  },
  "352": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "355": {
    "type": "elevation",
    "amount": -2
  },
  "357": {
    "type": "twirl"
  },
  "360": {
    "type": "elevation",
    "amount": 2
  },
  "363": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "364": {
    "type": "twirl"
  },
  "365": {
    "type": "elevation",
    "amount": -2
  },
  "368": {
    "type": "speed",
    "bpm": 315
  },
  "370": {
    "type": "elevation",
    "amount": 2
  },
  "371": {
    "type": "twirl"
  },
  "374": {
    "type": "camera",
    "angle": 1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "375": {
    "type": "elevation",
    "amount": -2
  },
  "378": {
    "type": "twirl"
  },
  "380": {
    "type": "elevation",
    "amount": 2
  },
  "385": {
    "type": "twirl"
  },
  "390": {
    "type": "elevation",
    "amount": -2
  },
  "392": {
    "type": "twirl"
  },
  "395": {
    "type": "elevation",
    "amount": 2
  },
  "396": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "399": {
    "type": "twirl"
  },
  "400": {
    "type": "elevation",
    "amount": -2
  },
  "405": {
    "type": "elevation",
    "amount": 2
  },
  "406": {
    "type": "twirl"
  },
  "407": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "410": {
    "type": "elevation",
    "amount": -2
  },
  "413": {
    "type": "twirl"
  },
  "415": {
    "type": "elevation",
    "amount": 2
  },
  "417": {
    "type": "speed",
    "bpm": 735
  },
  "418": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "420": {
    "type": "twirl"
  },
  "425": {
    "type": "elevation",
    "amount": -2
  },
  "427": {
    "type": "twirl"
  },
  "429": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "430": {
    "type": "elevation",
    "amount": 2
  },
  "434": {
    "type": "twirl"
  },
  "435": {
    "type": "elevation",
    "amount": -2
  },
  "440": {
    "type": "elevation",
    "amount": 2
  },
  "441": {
    "type": "twirl"
  },
  "445": {
    "type": "elevation",
    "amount": -2
  },
  "448": {
    "type": "twirl"
  },
  "450": {
    "type": "elevation",
    "amount": 2
  },
  "451": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "455": {
    "type": "twirl"
  },
  "460": {
    "type": "elevation",
    "amount": -2
  },
  "462": {
    "type": "twirl"
  },
  "465": {
    "type": "elevation",
    "amount": 2
  },
  "469": {
    "type": "twirl"
  },
  "470": {
    "type": "elevation",
    "amount": -2
  },
  "473": {
    "type": "camera",
    "angle": -0.5,
    "height": 15,
    "radius": 20
  },
  "475": {
    "type": "elevation",
    "amount": 2
  },
  "476": {
    "type": "twirl"
  },
  "480": {
    "type": "elevation",
    "amount": -2
  },
  "483": {
    "type": "twirl"
  },
  "484": {
    "type": "camera",
    "angle": 0,
    "height": 6,
    "radius": 10
  },
  "485": {
    "type": "elevation",
    "amount": 2
  },
  "490": {
    "type": "twirl"
  },
  "495": {
    "type": "elevation",
    "amount": -2
  },
  "497": {
    "type": "twirl"
  },
  "500": {
    "type": "elevation",
    "amount": 2
  },
  "504": {
    "type": "twirl"
  },
  "505": {
    "type": "elevation",
    "amount": -2
  },
  "506": {
    "type": "camera",
    "angle": 1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "510": {
    "type": "elevation",
    "amount": 2
  },
  "511": {
    "type": "twirl"
  },
  "515": {
    "type": "elevation",
    "amount": -2
  },
  "517": {
    "type": "camera",
    "angle": -1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "518": {
    "type": "twirl"
  },
  "520": {
    "type": "elevation",
    "amount": 2
  },
  "525": {
    "type": "twirl"
  },
  "528": {
    "type": "camera",
    "angle": 0.5,
    "height": 12,
    "radius": 18
  },
  "530": {
    "type": "elevation",
    "amount": -2
  },
  "532": {
    "type": "twirl"
  },
  "535": {
    "type": "elevation",
    "amount": 2
  },
  "539": {
    "type": "twirl"
  },
  "540": {
    "type": "elevation",
    "amount": -2
  },
  "545": {
    "type": "elevation",
    "amount": 2
  },
  "546": {
    "type": "twirl"
  },
  "550": {
    "type": "elevation",
    "amount": -2
  },
  "553": {
    "type": "twirl"
  },
  "555": {
    "type": "elevation",
    "amount": 2
  },
  "560": {
    "type": "twirl"
  },
  "561": {
    "type": "camera",
    "angle": 3.141592653589793,
    "height": 25,
    "radius": 15
  },
  "565": {
    "type": "elevation",
    "amount": -2
  },
  "567": {
    "type": "twirl"
  },
  "570": {
    "type": "elevation",
    "amount": 2
  },
  "572": {
    "type": "camera",
    "angle": 1.5707963267948966,
    "height": 18,
    "radius": 25
  },
  "574": {
    "type": "twirl"
  },
  "575": {
    "type": "speed",
    "bpm": 105
  }
};



const origHungarianPath = ["R","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","U","R","D","R","U","R","D","R","U","R","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","U","R","D","R","U","R","D","R","U","R","D","R","U","L","D","R","D","L","U","R","U","L","D","R","D","L","U","R","U","L","D","R","D","L","U","R","U","L","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","U","R","D","R","U","R","D","R","U","R","D","R","U","R","D","R","U","R","D","R","U","R","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","L","L","D","D","R","R","U","U","R","R","R","R","R","R"];
const origHungarianEvents = {
  "0": {
    "type": "speed",
    "bpm": 780,
    "color": 16777215
  },
  "1": {
    "type": "elevation",
    "bpm": 144,
    "color": 2236962,
    "amount": 0.5
  },
  "2": {
    "type": "elevation",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5
  },
  "3": {
    "type": "elevation",
    "bpm": 36,
    "color": 2236962,
    "amount": 0.5
  },
  "4": {
    "type": "camera",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5,
    "angle": 0.39269908169872414,
    "height": 15,
    "radius": 20
  },
  "5": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "6": {
    "type": "elevation",
    "bpm": 72,
    "color": 2236962,
    "amount": 0.5
  },
  "7": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "8": {
    "type": "camera",
    "bpm": 144,
    "color": 2236962,
    "amount": 0.5,
    "angle": 0.7853981633974483,
    "height": 15,
    "radius": 20
  },
  "9": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "10": {
    "type": "elevation",
    "bpm": 144,
    "color": 2236962,
    "amount": 0.5
  },
  "11": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "12": {
    "type": "camera",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5,
    "angle": 1.1780972450961724,
    "height": 15,
    "radius": 20
  },
  "13": {
    "type": "elevation",
    "bpm": 36,
    "color": 2236962,
    "amount": 0.5
  },
  "14": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "15": {
    "type": "elevation",
    "bpm": 72,
    "color": 2236962,
    "amount": 0.5
  },
  "16": {
    "type": "camera",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5,
    "angle": 1.5707963267948966,
    "height": 15,
    "radius": 20
  },
  "17": {
    "type": "elevation",
    "bpm": 36,
    "color": 16777215,
    "amount": 0.5
  },
  "18": {
    "type": "elevation",
    "bpm": 144,
    "color": 2236962,
    "amount": 0.5
  },
  "19": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "20": {
    "type": "camera",
    "bpm": 72,
    "color": 2236962,
    "amount": 0.5,
    "angle": 1.9634954084936207,
    "height": 15,
    "radius": 20
  },
  "21": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "22": {
    "type": "elevation",
    "bpm": 144,
    "color": 2236962,
    "amount": 0.5
  },
  "23": {
    "type": "elevation",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5
  },
  "24": {
    "type": "camera",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5,
    "angle": 2.356194490192345,
    "height": 15,
    "radius": 20
  },
  "25": {
    "type": "elevation",
    "bpm": 72,
    "color": 2236962,
    "amount": 0.5
  },
  "26": {
    "type": "elevation",
    "bpm": 144,
    "color": 16777215,
    "amount": 0.5
  },
  "27": {
    "type": "elevation",
    "bpm": 36,
    "color": 2236962,
    "amount": 0.5
  },
  "28": {
    "type": "camera",
    "bpm": 72,
    "color": 16777215,
    "amount": 0.5,
    "angle": 2.748893571891069,
    "height": 15,
    "radius": 20
  },
  "29": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "30": {
    "type": "elevation",
    "bpm": 164,
    "color": 2236962,
    "amount": 0.5
  },
  "31": {
    "type": "elevation",
    "bpm": 41,
    "color": 16777215,
    "amount": 0.5
  },
  "32": {
    "type": "camera",
    "bpm": 164,
    "color": 2236962,
    "amount": 0.5,
    "angle": 3.141592653589793,
    "height": 15,
    "radius": 20
  },
  "33": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "34": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "35": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "36": {
    "type": "camera",
    "bpm": 164,
    "color": 16777215,
    "amount": 0.5,
    "angle": 3.5342917352885173,
    "height": 15,
    "radius": 20
  },
  "37": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "38": {
    "type": "elevation",
    "bpm": 164,
    "color": 16777215,
    "amount": 0.5
  },
  "39": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "40": {
    "type": "camera",
    "bpm": 164,
    "color": 16777215,
    "amount": 0.5,
    "angle": 3.9269908169872414,
    "height": 15,
    "radius": 20
  },
  "41": {
    "type": "elevation",
    "bpm": 41,
    "color": 16777215,
    "amount": 0.5
  },
  "42": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "43": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "44": {
    "type": "camera",
    "bpm": 164,
    "color": 2236962,
    "amount": 0.5,
    "angle": 4.319689898685965,
    "height": 15,
    "radius": 20
  },
  "45": {
    "type": "elevation",
    "bpm": 41,
    "color": 16777215,
    "amount": 0.5
  },
  "46": {
    "type": "elevation",
    "bpm": 164,
    "color": 2236962,
    "amount": 0.5
  },
  "47": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "48": {
    "type": "camera",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5,
    "angle": 4.71238898038469,
    "height": 15,
    "radius": 20
  },
  "49": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "50": {
    "type": "elevation",
    "bpm": 164,
    "color": 16777215,
    "amount": 0.5
  },
  "51": {
    "type": "elevation",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5
  },
  "52": {
    "type": "camera",
    "bpm": 164,
    "color": 16777215,
    "amount": 0.5,
    "angle": 5.105088062083414,
    "height": 15,
    "radius": 20
  },
  "53": {
    "type": "elevation",
    "bpm": 82,
    "color": 16777215,
    "amount": 0.5
  },
  "54": {
    "type": "elevation",
    "bpm": 164,
    "color": 2236962,
    "amount": 0.5
  },
  "55": {
    "type": "elevation",
    "bpm": 41,
    "color": 16777215,
    "amount": 0.5
  },
  "56": {
    "type": "camera",
    "bpm": 82,
    "color": 2236962,
    "amount": 0.5,
    "angle": 5.497787143782139,
    "height": 15,
    "radius": 20
  },
  "57": {
    "type": "elevation",
    "bpm": 44,
    "color": 16777215,
    "amount": -0.723494756044245
  },
  "58": {
    "type": "elevation",
    "bpm": 44,
    "color": 2236962,
    "amount": -0.9352099151945402
  },
  "59": {
    "type": "elevation",
    "bpm": 264,
    "color": 16777215,
    "amount": -0.9992759921366277
  },
  "60": {
    "type": "elevation",
    "bpm": 264,
    "color": 16777215,
    "amount": -0.9055783620066238
  },
  "61": {
    "type": "elevation",
    "bpm": 44,
    "color": 2236962,
    "amount": -0.6689098203780216
  },
  "62": {
    "type": "elevation",
    "bpm": 44,
    "color": 16777215,
    "amount": -0.32663512610472223
  },
  "63": {
    "type": "elevation",
    "bpm": 132,
    "color": 2236962,
    "amount": 0.06720807252547847
  },
  "64": {
    "type": "elevation",
    "bpm": 132,
    "color": 16777215,
    "amount": 0.4504405942753893
  },
  "65": {
    "type": "elevation",
    "bpm": 88,
    "color": 16777215,
    "amount": 0.7625584504796028
  },
  "66": {
    "type": "elevation",
    "bpm": 88,
    "color": 2236962,
    "amount": 0.954285094492698
  },
  "67": {
    "type": "elevation",
    "bpm": 132,
    "color": 16777215,
    "amount": 0.9953511049115591
  },
  "68": {
    "type": "elevation",
    "bpm": 132,
    "color": 2236962,
    "amount": 0.8792730616507226
  },
  "69": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "70": {
    "type": "elevation",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5
  },
  "71": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": 0.5
  },
  "72": {
    "type": "camera",
    "bpm": 130,
    "color": 16777215,
    "amount": 0.5,
    "angle": 5.890486225480863,
    "height": 15,
    "radius": 20
  },
  "73": {
    "type": "elevation",
    "bpm": 65,
    "color": 2236962,
    "amount": 0.5
  },
  "74": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "75": {
    "type": "elevation",
    "bpm": 65,
    "color": 2236962,
    "amount": 0.5
  },
  "76": {
    "type": "camera",
    "bpm": 130,
    "color": 16777215,
    "amount": 0.5,
    "angle": 6.283185307179588,
    "height": 15,
    "radius": 20
  },
  "77": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "78": {
    "type": "elevation",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5
  },
  "79": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "80": {
    "type": "camera",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5,
    "angle": 6.675884388878313,
    "height": 15,
    "radius": 20
  },
  "81": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": 0.5
  },
  "82": {
    "type": "elevation",
    "bpm": 65,
    "color": 2236962,
    "amount": 0.5
  },
  "83": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "84": {
    "type": "camera",
    "bpm": 130,
    "color": 16777215,
    "amount": 0.5,
    "angle": 7.068583470577037,
    "height": 15,
    "radius": 20
  },
  "85": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 2236962,
    "amount": 0.5
  },
  "86": {
    "type": "elevation",
    "bpm": 130,
    "color": 16777215,
    "amount": 0.5
  },
  "87": {
    "type": "elevation",
    "bpm": 65,
    "color": 2236962,
    "amount": 0.5
  },
  "88": {
    "type": "camera",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5,
    "angle": 7.461282552275762,
    "height": 15,
    "radius": 20
  },
  "89": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "90": {
    "type": "elevation",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5
  },
  "91": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "92": {
    "type": "camera",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5,
    "angle": 7.853981633974486,
    "height": 15,
    "radius": 20
  },
  "93": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5
  },
  "94": {
    "type": "elevation",
    "bpm": 130,
    "color": 2236962,
    "amount": 0.5
  },
  "95": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": 0.5
  },
  "96": {
    "type": "camera",
    "bpm": 65,
    "color": 16777215,
    "amount": 0.5,
    "angle": 8.246680715673211,
    "height": 15,
    "radius": 20
  },
  "97": {
    "type": "elevation",
    "bpm": 75,
    "color": 2236962,
    "amount": 0.5
  },
  "98": {
    "type": "elevation",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5
  },
  "99": {
    "type": "elevation",
    "bpm": 37.5,
    "color": 2236962,
    "amount": 0.5
  },
  "100": {
    "type": "camera",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5,
    "angle": 8.639379797371936,
    "height": 15,
    "radius": 20
  },
  "101": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "102": {
    "type": "elevation",
    "bpm": 75,
    "color": 2236962,
    "amount": 0.5
  },
  "103": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "104": {
    "type": "camera",
    "bpm": 150,
    "color": 2236962,
    "amount": 0.5,
    "angle": 9.03207887907066,
    "height": 15,
    "radius": 20
  },
  "105": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "106": {
    "type": "elevation",
    "bpm": 150,
    "color": 2236962,
    "amount": 0.5
  },
  "107": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "108": {
    "type": "camera",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5,
    "angle": 9.424777960769385,
    "height": 15,
    "radius": 20
  },
  "109": {
    "type": "elevation",
    "bpm": 37.5,
    "color": 2236962,
    "amount": 0.5
  },
  "110": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "111": {
    "type": "elevation",
    "bpm": 75,
    "color": 2236962,
    "amount": 0.5
  },
  "112": {
    "type": "camera",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5,
    "angle": 9.81747704246811,
    "height": 15,
    "radius": 20
  },
  "113": {
    "type": "elevation",
    "bpm": 37.5,
    "color": 16777215,
    "amount": 0.5
  },
  "114": {
    "type": "elevation",
    "bpm": 150,
    "color": 2236962,
    "amount": 0.5
  },
  "115": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "116": {
    "type": "camera",
    "bpm": 75,
    "color": 2236962,
    "amount": 0.5,
    "angle": 10.210176124166834,
    "height": 15,
    "radius": 20
  },
  "117": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "118": {
    "type": "elevation",
    "bpm": 150,
    "color": 2236962,
    "amount": 0.5
  },
  "119": {
    "type": "elevation",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5
  },
  "120": {
    "type": "camera",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5,
    "angle": 10.602875205865558,
    "height": 15,
    "radius": 20
  },
  "121": {
    "type": "elevation",
    "bpm": 75,
    "color": 2236962,
    "amount": 0.5
  },
  "122": {
    "type": "elevation",
    "bpm": 150,
    "color": 16777215,
    "amount": 0.5
  },
  "123": {
    "type": "elevation",
    "bpm": 37.5,
    "color": 2236962,
    "amount": 0.5
  },
  "124": {
    "type": "camera",
    "bpm": 75,
    "color": 16777215,
    "amount": 0.5,
    "angle": 10.995574287564283,
    "height": 15,
    "radius": 20
  },
  "125": {
    "type": "elevation",
    "bpm": 45.5,
    "color": 16777215,
    "amount": -0.26237485370392877
  },
  "126": {
    "type": "elevation",
    "bpm": 45.5,
    "color": 2236962,
    "amount": 0.1341122276456642
  },
  "127": {
    "type": "elevation",
    "bpm": 273,
    "color": 16777215,
    "amount": 0.5094259371104354
  },
  "128": {
    "type": "elevation",
    "bpm": 273,
    "color": 2236962,
    "amount": 0.8043124923659141
  },
  "129": {
    "type": "elevation",
    "bpm": 45.5,
    "color": 16777215,
    "amount": 0.972215790304539
  },
  "130": {
    "type": "elevation",
    "bpm": 45.5,
    "color": 2236962,
    "amount": 0.9866275920404853
  },
  "131": {
    "type": "elevation",
    "bpm": 136.5,
    "color": 16777215,
    "amount": 0.845272590966423
  },
  "132": {
    "type": "elevation",
    "bpm": 136.5,
    "color": 16777215,
    "amount": 0.5704676336373723
  },
  "133": {
    "type": "elevation",
    "bpm": 91,
    "color": 2236962,
    "amount": 0.20559838040260117
  },
  "134": {
    "type": "elevation",
    "bpm": 91,
    "color": 16777215,
    "amount": -0.19173033639936585
  },
  "135": {
    "type": "elevation",
    "bpm": 136.5,
    "color": 2236962,
    "amount": -0.5587890488516163
  },
  "136": {
    "type": "elevation",
    "bpm": 136.5,
    "color": 16777215,
    "amount": -0.8376272571470315
  },
  "137": {
    "type": "speed",
    "bpm": 208,
    "color": 0
  },
  "138": {
    "type": "speed",
    "bpm": 208,
    "color": 16711680
  },
  "139": {
    "type": "speed",
    "bpm": 208,
    "color": 0
  },
  "140": {
    "type": "elevation",
    "bpm": 624,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "141": {
    "type": "speed",
    "bpm": 624,
    "color": 0
  },
  "142": {
    "type": "speed",
    "bpm": 208,
    "color": 16711680
  },
  "143": {
    "type": "speed",
    "bpm": 208,
    "color": 0
  },
  "144": {
    "type": "elevation",
    "bpm": 624,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "145": {
    "type": "speed",
    "bpm": 624,
    "color": 0
  },
  "146": {
    "type": "speed",
    "bpm": 208,
    "color": 16711680
  },
  "147": {
    "type": "speed",
    "bpm": 208,
    "color": 0
  },
  "148": {
    "type": "elevation",
    "bpm": 624,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "149": {
    "type": "speed",
    "bpm": 156,
    "color": 0
  },
  "150": {
    "type": "speed",
    "bpm": 52,
    "color": 16711680
  },
  "151": {
    "type": "speed",
    "bpm": 234,
    "color": 0
  },
  "152": {
    "type": "elevation",
    "bpm": 702,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "153": {
    "type": "speed",
    "bpm": 702,
    "color": 0
  },
  "154": {
    "type": "speed",
    "bpm": 234,
    "color": 16711680
  },
  "155": {
    "type": "speed",
    "bpm": 234,
    "color": 0
  },
  "156": {
    "type": "elevation",
    "bpm": 702,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "157": {
    "type": "speed",
    "bpm": 702,
    "color": 0
  },
  "158": {
    "type": "speed",
    "bpm": 234,
    "color": 16711680
  },
  "159": {
    "type": "speed",
    "bpm": 234,
    "color": 0
  },
  "160": {
    "type": "elevation",
    "bpm": 702,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "161": {
    "type": "speed",
    "bpm": 702,
    "color": 0
  },
  "162": {
    "type": "speed",
    "bpm": 234,
    "color": 16711680
  },
  "163": {
    "type": "speed",
    "bpm": 58.5,
    "color": 0
  },
  "164": {
    "type": "elevation",
    "bpm": 175.5,
    "color": 16711680,
    "twirl": true,
    "amount": -2
  },
  "165": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "166": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "167": {
    "type": "elevation",
    "bpm": 117,
    "color": 16777215,
    "amount": 0.5
  },
  "168": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 11.388273369263008,
    "height": 15,
    "radius": 20
  },
  "169": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "170": {
    "type": "elevation",
    "bpm": 78,
    "color": 16777215,
    "amount": 0.5
  },
  "171": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "172": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 11.780972450961732,
    "height": 15,
    "radius": 20
  },
  "173": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "174": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "175": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "176": {
    "type": "camera",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5,
    "angle": 12.173671532660457,
    "height": 15,
    "radius": 20
  },
  "177": {
    "type": "elevation",
    "bpm": 117,
    "color": 16777215,
    "amount": 0.5
  },
  "178": {
    "type": "elevation",
    "bpm": 78,
    "color": 2236962,
    "amount": 0.5
  },
  "179": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "180": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 12.566370614359181,
    "height": 15,
    "radius": 20
  },
  "181": {
    "type": "elevation",
    "bpm": 117,
    "color": 2236962,
    "amount": 0.5
  },
  "182": {
    "type": "elevation",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5
  },
  "183": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "184": {
    "type": "camera",
    "bpm": 78,
    "color": 16777215,
    "amount": 0.5,
    "angle": 12.959069696057906,
    "height": 15,
    "radius": 20
  },
  "185": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "186": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "187": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "188": {
    "type": "camera",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5,
    "angle": 13.35176877775663,
    "height": 15,
    "radius": 20
  },
  "189": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "190": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "191": {
    "type": "elevation",
    "bpm": 117,
    "color": 16777215,
    "amount": 0.5
  },
  "192": {
    "type": "camera",
    "bpm": 78,
    "color": 16777215,
    "amount": 0.5,
    "angle": 13.744467859455355,
    "height": 15,
    "radius": 20
  },
  "193": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "194": {
    "type": "elevation",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5
  },
  "195": {
    "type": "elevation",
    "bpm": 117,
    "color": 2236962,
    "amount": 0.5
  },
  "196": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 14.13716694115408,
    "height": 15,
    "radius": 20
  },
  "197": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "198": {
    "type": "elevation",
    "bpm": 78,
    "color": 2236962,
    "amount": 0.5
  },
  "199": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "200": {
    "type": "camera",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5,
    "angle": 14.529866022852804,
    "height": 15,
    "radius": 20
  },
  "201": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "202": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "203": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "204": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 14.922565104551529,
    "height": 15,
    "radius": 20
  },
  "205": {
    "type": "elevation",
    "bpm": 117,
    "color": 2236962,
    "amount": 0.5
  },
  "206": {
    "type": "elevation",
    "bpm": 78,
    "color": 16777215,
    "amount": 0.5
  },
  "207": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "208": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 15.315264186250253,
    "height": 15,
    "radius": 20
  },
  "209": {
    "type": "elevation",
    "bpm": 117,
    "color": 16777215,
    "amount": 0.5
  },
  "210": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "211": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "212": {
    "type": "camera",
    "bpm": 78,
    "color": 2236962,
    "amount": 0.5,
    "angle": 15.707963267948978,
    "height": 15,
    "radius": 20
  },
  "213": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "214": {
    "type": "elevation",
    "bpm": 156,
    "color": 2236962,
    "amount": 0.5
  },
  "215": {
    "type": "elevation",
    "bpm": 234,
    "color": 16777215,
    "amount": 0.5
  },
  "216": {
    "type": "camera",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5,
    "angle": 16.100662349647703,
    "height": 15,
    "radius": 20
  },
  "217": {
    "type": "elevation",
    "bpm": 234,
    "color": 2236962,
    "amount": 0.5
  },
  "218": {
    "type": "elevation",
    "bpm": 156,
    "color": 16777215,
    "amount": 0.5
  },
  "219": {
    "type": "elevation",
    "bpm": 117,
    "color": 2236962,
    "amount": 0.5
  },
  "220": {
    "type": "camera",
    "bpm": 78,
    "color": 16777215,
    "amount": 0.5,
    "angle": 16.493361431346425,
    "height": 15,
    "radius": 20
  },
  "221": {
    "type": "elevation",
    "bpm": 132,
    "color": 16777215,
    "amount": 0.4217782833859938
  },
  "222": {
    "type": "elevation",
    "bpm": 132,
    "color": 2236962,
    "amount": 0.7415687471550055
  },
  "223": {
    "type": "elevation",
    "bpm": 88,
    "color": 16777215,
    "amount": 0.9442818113661253
  },
  "224": {
    "type": "elevation",
    "bpm": 88,
    "color": 2236962,
    "amount": 0.9979135404364562
  },
  "225": {
    "type": "elevation",
    "bpm": 132,
    "color": 16777215,
    "amount": 0.8939966636005579
  },
  "226": {
    "type": "elevation",
    "bpm": 132,
    "color": 2236962,
    "amount": 0.6489373707859244
  },
  "227": {
    "type": "elevation",
    "bpm": 44,
    "color": 16777215,
    "amount": 0.3014251359628438
  },
  "228": {
    "type": "elevation",
    "bpm": 44,
    "color": 16777215,
    "amount": -0.09367550009112813
  },
  "229": {
    "type": "elevation",
    "bpm": 264,
    "color": 2236962,
    "amount": -0.4739868344181606
  },
  "230": {
    "type": "elevation",
    "bpm": 264,
    "color": 16777215,
    "amount": -0.7794660696158047
  },
  "231": {
    "type": "elevation",
    "bpm": 44,
    "color": 2236962,
    "amount": -0.9618847513255586
  },
  "232": {
    "type": "elevation",
    "bpm": 44,
    "color": 16777215,
    "amount": -0.992442980728465
  },
  "233": {
    "type": "elevation",
    "bpm": 97.5,
    "color": 16777215,
    "amount": -0.8663162853163362
  },
  "234": {
    "type": "elevation",
    "bpm": 97.5,
    "color": 2236962,
    "amount": -0.6034172970202327
  },
  "235": {
    "type": "elevation",
    "bpm": 65,
    "color": 16777215,
    "amount": -0.24525198546765434
  },
  "236": {
    "type": "elevation",
    "bpm": 65,
    "color": 2236962,
    "amount": 0.15163322198820756
  },
  "237": {
    "type": "elevation",
    "bpm": 97.5,
    "color": 16777215,
    "amount": 0.5245788778042908
  },
  "238": {
    "type": "elevation",
    "bpm": 97.5,
    "color": 2236962,
    "amount": 0.814705063258458
  },
  "239": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": 0.9762072329637551
  },
  "240": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": 0.9835877454343449
  },
  "241": {
    "type": "elevation",
    "bpm": 195,
    "color": 2236962,
    "amount": 0.8356813800338723
  },
  "242": {
    "type": "elevation",
    "bpm": 195,
    "color": 16777215,
    "amount": 0.5558392996930538
  },
  "243": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 2236962,
    "amount": 0.18824241572844258
  },
  "244": {
    "type": "elevation",
    "bpm": 32.5,
    "color": 16777215,
    "amount": -0.20907380660437916
  },
  "245": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "246": {
    "type": "elevation",
    "bpm": 170,
    "color": 2236962,
    "amount": 0.5
  },
  "247": {
    "type": "elevation",
    "bpm": 127.5,
    "color": 16777215,
    "amount": 0.5
  },
  "248": {
    "type": "camera",
    "bpm": 170,
    "color": 2236962,
    "amount": 0.5,
    "angle": 16.886060513045148,
    "height": 15,
    "radius": 20
  },
  "249": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "250": {
    "type": "elevation",
    "bpm": 85,
    "color": 2236962,
    "amount": 0.5
  },
  "251": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "252": {
    "type": "camera",
    "bpm": 170,
    "color": 16777215,
    "amount": 0.5,
    "angle": 17.27875959474387,
    "height": 15,
    "radius": 20
  },
  "253": {
    "type": "elevation",
    "bpm": 255,
    "color": 2236962,
    "amount": 0.5
  },
  "254": {
    "type": "elevation",
    "bpm": 170,
    "color": 16777215,
    "amount": 0.5
  },
  "255": {
    "type": "elevation",
    "bpm": 255,
    "color": 2236962,
    "amount": 0.5
  },
  "256": {
    "type": "camera",
    "bpm": 170,
    "color": 16777215,
    "amount": 0.5,
    "angle": 17.671458676442594,
    "height": 15,
    "radius": 20
  },
  "257": {
    "type": "elevation",
    "bpm": 127.5,
    "color": 16777215,
    "amount": 0.5
  },
  "258": {
    "type": "elevation",
    "bpm": 85,
    "color": 2236962,
    "amount": 0.5
  },
  "259": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "260": {
    "type": "camera",
    "bpm": 170,
    "color": 2236962,
    "amount": 0.5,
    "angle": 18.064157758141317,
    "height": 15,
    "radius": 20
  },
  "261": {
    "type": "elevation",
    "bpm": 127.5,
    "color": 16777215,
    "amount": 0.5
  },
  "262": {
    "type": "elevation",
    "bpm": 170,
    "color": 2236962,
    "amount": 0.5
  },
  "263": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "264": {
    "type": "camera",
    "bpm": 85,
    "color": 16777215,
    "amount": 0.5,
    "angle": 18.45685683984004,
    "height": 15,
    "radius": 20
  },
  "265": {
    "type": "elevation",
    "bpm": 255,
    "color": 2236962,
    "amount": 0.5
  },
  "266": {
    "type": "elevation",
    "bpm": 170,
    "color": 16777215,
    "amount": 0.5
  },
  "267": {
    "type": "elevation",
    "bpm": 255,
    "color": 2236962,
    "amount": 0.5
  },
  "268": {
    "type": "camera",
    "bpm": 170,
    "color": 16777215,
    "amount": 0.5,
    "angle": 18.849555921538762,
    "height": 15,
    "radius": 20
  },
  "269": {
    "type": "elevation",
    "bpm": 255,
    "color": 16777215,
    "amount": 0.5
  },
  "270": {
    "type": "elevation",
    "bpm": 170,
    "color": 2236962,
    "amount": 0.5
  },
  "271": {
    "type": "elevation",
    "bpm": 127.5,
    "color": 16777215,
    "amount": 0.5
  },
  "272": {
    "type": "camera",
    "bpm": 85,
    "color": 2236962,
    "amount": 0.5,
    "angle": 19.242255003237485,
    "height": 15,
    "radius": 20
  },
  "273": {
    "type": "elevation",
    "bpm": 29.5,
    "color": 16777215,
    "amount": -0.5
  },
  "274": {
    "type": "elevation",
    "bpm": 59,
    "color": 2236962,
    "amount": -0.5
  },
  "275": {
    "type": "elevation",
    "bpm": 59,
    "color": 16777215,
    "amount": -0.5
  },
  "276": {
    "type": "elevation",
    "bpm": 59,
    "color": 16777215,
    "amount": -0.5
  },
  "277": {
    "type": "elevation",
    "bpm": 29.5,
    "color": 2236962,
    "amount": -0.5
  },
  "278": {
    "type": "elevation",
    "bpm": 14.75,
    "color": 16777215,
    "amount": -0.5
  }
};

levels['hub'] = {
    id: 'hub',
    name: 'Hub World',
    bpm: 120,
    path: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    branches: {
        2: { dir: 'U', levelId: 'level1', name: 'Level 1: The Beginning' },
        15: { dir: 'U', levelId: 'level5', name: 'Level 5: Plum - R' },
        6: { dir: 'U', levelId: 'level2', name: 'Level 2: Fast Track' },
        9: { dir: 'U', levelId: 'level3', name: 'Level 3: 3D Vertigo' },
        13: { dir: 'U', levelId: 'level4', name: 'Level 4: Nada Nada' }
    },
    events: {}
};

levels['level1'] = {
    id: 'level1',
    name: 'Level 1: The Beginning',
    bpm: 120,
    path: ['R', 'R', 'U', 'R', 'D', 'R', 'R', 'U', 'U', 'R', 'R', 'D', 'L', 'D', 'R', 'R', 'R'],
    events: {
        4: { type: 'twirl' },
        8: { type: 'speed', bpm: 250 },
        13: { type: 'twirl' }
    }
};

levels['level2'] = {
    id: 'level2',
    name: 'Level 2: Fast Track',
    bpm: 160,
    path: ['R', 'U', 'L', 'U', 'R', 'D', 'R', 'U', 'R', 'U', 'L', 'U', 'R', 'R', 'D', 'D', 'R', 'U', 'R', 'R', 'D', 'R', 'U', 'R'],
    events: {
        2: { type: 'twirl' },
        5: { type: 'speed', bpm: 100 },
        10: { type: 'twirl' },
        15: { type: 'speed', bpm: 200 }
    }
};

levels['level3'] = {
    id: 'level3',
    name: 'Level 3: 3D Vertigo',
    bpm: 140,
    path: [
        'R', 'U', 'R', 'D', 'R', 'R', 'U', 'L', 'U', 'R', 'U', 'R', 'R', 'D', 'R', 'U', 'L', 'U', 'R', 'R',
        'D', 'L', 'D', 'R', 'R', 'U', 'L', 'U', 'R', 'R', 'U', 'R', 'D', 'R', 'U', 'L', 'U', 'R', 'R', 'D',
        'R', 'U', 'R', 'D', 'R', 'R', 'U', 'L', 'U', 'R', 'U', 'R', 'R', 'D', 'R', 'U', 'L', 'U', 'R', 'R'
    ],
    events: {
        3: { type: 'camera', angle: Math.PI / 4, height: 12, radius: 15 },
        6: { type: 'twirl' },
        9: { type: 'camera', angle: Math.PI, height: 8, radius: 20 },
        13: { type: 'twirl' },
        16: { type: 'camera', angle: 0, height: 22, radius: 0 },
        22: { type: 'twirl' },
        25: { type: 'camera', angle: -Math.PI / 4, height: 12, radius: 15 },
        30: { type: 'twirl' },
        35: { type: 'camera', angle: -Math.PI, height: 8, radius: 20 },
        42: { type: 'twirl' },
        48: { type: 'camera', angle: Math.PI / 2, height: 18, radius: 10 },
        55: { type: 'twirl' },
        58: { type: 'camera', angle: 0, height: 22, radius: 0 }
    }
};

levels['level4'] = {
    id: 'level4',
    name: 'Level 4: Nada Nada - Jmilton & Mc Jhey',
    bpm: 158, // Adjusted for sync
    audioSrc: '/nada.mp3',
    path: nadaPath,
    events: nadaEvents
};




const plumRPath = [];
const plumREvents = {};

(function generatePlum() {
    let totalTiles = 500;
    
    // Intro
    for (let i = 0; i < 15; i++) {
        plumRPath.push('R');
    }
    
    // Octagon Magic Circles
    const octagon = ['R', 'C', 'D', 'Z', 'L', 'Q', 'U', 'E'];
    const octagonRev = ['R', 'E', 'U', 'Q', 'L', 'Z', 'D', 'C'];
    const fastZigZag = ['E', 'C', 'E', 'C', 'E', 'C', 'E', 'C'];
    const fastZigZag2 = ['R', 'U', 'L', 'U', 'R', 'U', 'L', 'U'];
    
    for (let i = 15; i < totalTiles; i++) {
        let section = Math.floor((i - 15) / 40);
        
        if (section % 4 === 0) {
            // Magic Circle Octagon
            let idx = (i - 15) % 8;
            plumRPath.push(octagon[idx]);
            if (idx === 7) plumREvents[i] = { type: 'twirl' };
        } else if (section % 4 === 1) {
            // High speed diagonal zigzags
            plumRPath.push(i % 2 === 0 ? 'E' : 'C');
            if (i % 20 === 0) plumREvents[i] = { type: 'speed', bpm: 400 };
            if (i % 20 === 19) plumREvents[i] = { type: 'speed', bpm: 200 };
        } else if (section % 4 === 2) {
            // Reverse Octagon
            let idx = (i - 15) % 8;
            plumRPath.push(octagonRev[idx]);
            if (idx === 7) plumREvents[i] = { type: 'twirl' };
        } else {
            // Intense stairs
            plumRPath.push(i % 2 === 0 ? 'R' : 'U');
            if (i % 20 === 0) plumREvents[i] = { type: 'speed', bpm: 300 };
        }
        
        // Camera events
        if (i % 40 === 0) {
            plumREvents[i] = Object.assign(plumREvents[i] || {}, { type: 'camera', angle: Math.PI / 2, height: 25, radius: 25 });
            plumREvents[i + 20] = Object.assign(plumREvents[i + 20] || {}, { type: 'camera', angle: 0, height: 18, radius: 10 });
        }
    }
})();

levels['level5'] = {
    id: 'level5',
    name: 'Level 5: Plum - R',
    bpm: 220, // Faster base BPM
    audioSrc: '/plum-r.mp3',
    path: plumRPath,
    events: plumREvents
};
