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





const plumRPath = ['R','U','U','U','U','L','D','D','D','D','R','U','U','U','U','U','L','L','L','L','D','D','D','D','R','U','U','U','U','L','D','D','D','D','D','R','R','R','R','R','R','R','R','U','U','R','R','U','U','U','U','U','L','D','D','R','R','U','U','R','R','U','U','R','R','R','R','R','R','U','L','D','R','U','L','D','R','R','R','R','R','R','R','R','U','L','D','D','D','R','U','L','D','D','D','R','U','L','D','D','D','D','R','D','D','R','U','L','D','D','D','R','U','L','D','D','D','R','U','L','D','D','D','D','R','R','U','L','D','R','R','R','U','L','D','R','D','R','D','R','R','R','R','R','D','R','D','R','R','R','U','L','D','R','R','U','Z','R','R','R','R','U','U','U','L','L','D','D','D','R','R','R','U','L','D','R','D','R','D','R','R','R','R','R','D','R','D','R','R','R','U','L','D','R','R','U','Z','R','R','R','U','L','D','D','R','R','R','U','Z','R','R','U','Z','R','R','U','R','R','U','U','U','U','L','D','R','R','R','U','U','R','R','R','R','U','L','L','R','U','L','U','R','U','L','U','R','U','L','L','U','L','D','E','L','L','L','L','L','U','R','R','R','U','L','L','L','U','R','R','U','L','U','R','U','L','U','R','R','R','R','R','R','R','R','R','D','L','L','D','D','D','R','R','Q','D','R','U','U','U','R','R','U','L','U','R','U','L','U','R','U','L','L','U','R','R','U','L','L','U','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','R','U','L','L','U','R','R','U','L','L','U','R','R','R','R','R','U','L','D','R','R','R','D','L','L','D','R','R','D','L','L','L','D','R','R','R','D','D','R','R','U','L','D','D','R','R','R','U','U','U','R','U','Z','R','R','R','D','L','L','D','R','R','D','L','L','L','D','R','R','R','R','U','R','R','U','L','D','D','R','R','R','U','U','U','U','U','L','D','R','R','R','R','R','R','D','L','L','U','R','R','R','R','U','L','D','R','R','R','U','U','R','R','U','L','D','D','R','R','R','R','R','R','D','R','Q','D','R','R','R','R','R','R','D','L','L','U','R','R','R','R','R','R','R','R','U','U','R','R','U','L','D','D','R','R','D','R','D','R','R','R','U','L','D','R','R','E','U','L','Z','D','D','C','R','U','Q','L','L','Z','D','R','E','U','U','Q','L','D','C','R','R','R','E','U','U','L','L','Z','D','D','D','D','C','R','R','U','U','Q','L','L','L','L','Z','D','D','R','R','E','U','U','U','U','Q','L','L','D','D','C','R','R','R','R','R','R','R','R','R','R','U','L','U','R','U','L','U','R','R','Q','D','R','R','Q','D','R','R','R','U','L','U','R','R','R','R','R','D','L','U','R','R','R','D','L','D','R','D','L','C','L','C','L','D','R','D','L','D','R','D','R','C','R','Q','R','C','E','Q','E','Q','Z','L','E','L','Z','L','U','E','U','Z','U','E','Q','Z','Q','Z','C','D','Q','D','C','D','L','Q','L','C','L','Q','Z','C','Z','C','E','R','Z','R','E','R','D','Z','D','E','D','Z','C','E','C','E','Q','U','C','U','Q','U','R','R','R','R','R','R','R','R','R','U','L','U','R','U','L','U','R','R','Q','D','R','R','Q','D','R','R','R','U','L','U','R','U','R','U','R','R','R','U','Z','R','U','Z','R'];
const plumREvents = {728: { amount: -0.25 },
727: { amount: -0.25 },
726: { amount: -0.25 },
725: { angle: 0, height: 10, radius: 15, amount: -0.25 },
724: { amount: -0.25 },
723: { twirl: true, amount: -0.25 },
722: { amount: -0.25 },
721: { amount: -0.25 },
720: { amount: -0.25 },
719: { amount: -0.25 },
718: { amount: -0.25 },
717: { type: 'speed', bpm: 180, amount: -0.25 },
716: { amount: -0.25 },
715: { twirl: true, amount: -0.25 },
714: { amount: -0.25 },
713: { amount: -0.25 },
712: { amount: -0.25 },
711: { amount: -0.25 },
710: { amount: -0.25 },
709: { amount: -0.25 },
708: { amount: -0.25 },
707: { amount: -0.25 },
706: { amount: -0.25 },
705: { amount: -0.25 },
704: { amount: -0.25 },
703: { twirl: true, amount: -0.25 },
702: { amount: -0.25 },
701: { twirl: true, amount: -0.25 },
700: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
699: { twirl: true, amount: 0.25 },
698: { amount: 0.25 },
697: { twirl: true, amount: 0.25 },
696: { amount: 0.25 },
695: { type: 'speed', bpm: 360, amount: 0.25 },
694: { amount: 0.25 },
693: { amount: 0.25 },
692: { amount: 0.25 },
691: { twirl: true, amount: 0.25 },
690: { amount: 0.25 },
689: { amount: 0.25 },
688: { amount: 0.25 },
687: { type: 'speed', bpm: 720, amount: 0.25 },
686: { type: 'speed', bpm: 360, amount: 0.25 },
685: { twirl: true, amount: 0.25 },
684: { type: 'speed', bpm: 540, amount: 0.25 },
683: { twirl: true, amount: 0.25 },
682: { type: 'speed', bpm: 180, amount: 0.25 },
681: { type: 'speed', twirl: true, bpm: 540, amount: 0.25 },
680: { amount: 0.25 },
679: { twirl: true, amount: 0.25 },
678: { twirl: true, amount: 0.25 },
677: { amount: 0.25 },
676: { type: 'speed', twirl: true, bpm: 360, amount: 0.25 },
675: { type: 'speed', bpm: 540, angle: 0, height: 10, radius: 15, amount: 0.25 },
674: { twirl: true, amount: 0.25 },
673: { type: 'speed', bpm: 180, amount: 0.25 },
672: { twirl: true, amount: 0.25 },
671: { type: 'speed', bpm: 540, amount: 0.25 },
670: { type: 'speed', bpm: 360, amount: 0.25 },
669: { twirl: true, amount: 0.25 },
668: { type: 'speed', bpm: 540, amount: 0.25 },
667: { twirl: true, amount: 0.25 },
666: { type: 'speed', bpm: 180, amount: 0.25 },
665: { type: 'speed', twirl: true, bpm: 540, amount: 0.25 },
664: { amount: 0.25 },
663: { twirl: true, amount: 0.25 },
662: { twirl: true, amount: 0.25 },
661: { amount: 0.25 },
660: { type: 'speed', twirl: true, bpm: 360, amount: 0.25 },
659: { type: 'speed', bpm: 540, amount: 0.25 },
658: { twirl: true, amount: 0.25 },
657: { type: 'speed', bpm: 180, amount: 0.25 },
656: { twirl: true, amount: 0.25 },
655: { type: 'speed', bpm: 540, amount: 0.25 },
654: { type: 'speed', bpm: 360, amount: 0.25 },
653: { twirl: true, amount: 0.25 },
652: { type: 'speed', bpm: 540, amount: 0.25 },
651: { twirl: true, amount: 0.25 },
650: { type: 'speed', bpm: 180, angle: -0.785, height: 25, radius: 35, amount: 0.25 },
649: { type: 'speed', twirl: true, bpm: 540, amount: -0.25 },
648: { amount: -0.25 },
647: { twirl: true, amount: -0.25 },
646: { twirl: true, amount: -0.25 },
645: { amount: -0.25 },
644: { type: 'speed', twirl: true, bpm: 360, amount: -0.25 },
643: { type: 'speed', bpm: 540, amount: -0.25 },
642: { twirl: true, amount: -0.25 },
641: { type: 'speed', bpm: 180, amount: -0.25 },
640: { twirl: true, amount: -0.25 },
639: { type: 'speed', bpm: 540, amount: -0.25 },
638: { type: 'speed', bpm: 360, amount: -0.25 },
637: { twirl: true, amount: -0.25 },
636: { type: 'speed', bpm: 540, amount: -0.25 },
635: { twirl: true, amount: -0.25 },
634: { type: 'speed', bpm: 180, amount: -0.25 },
633: { type: 'speed', twirl: true, bpm: 540, amount: -0.25 },
632: { amount: -0.25 },
631: { twirl: true, amount: -0.25 },
630: { twirl: true, amount: -0.25 },
629: { amount: -0.25 },
628: { type: 'speed', twirl: true, bpm: 360, amount: -0.25 },
627: { type: 'speed', bpm: 540, amount: -0.25 },
626: { twirl: true, amount: -0.25 },
625: { type: 'speed', bpm: 180, angle: 0, height: 10, radius: 15, amount: -0.25 },
624: { twirl: true, amount: -0.25 },
623: { type: 'speed', twirl: true, bpm: 540, amount: -0.25 },
622: { twirl: true, amount: -0.25 },
621: { twirl: true, amount: -0.25 },
620: { amount: -0.25 },
619: { twirl: true, amount: -0.25 },
618: { amount: -0.25 },
617: { twirl: true, amount: -0.25 },
616: { amount: -0.25 },
615: { twirl: true, amount: -0.25 },
614: { twirl: true, amount: -0.25 },
613: { twirl: true, amount: -0.25 },
612: { twirl: true, amount: -0.25 },
611: { twirl: true, amount: -0.25 },
610: { amount: -0.25 },
609: { twirl: true, amount: -0.25 },
608: { amount: -0.25 },
607: { twirl: true, amount: -0.25 },
606: { amount: -0.25 },
605: { amount: -0.25 },
604: { amount: -0.25 },
603: { amount: -0.25 },
602: { amount: -0.25 },
601: { amount: -0.25 },
600: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
599: { amount: 0.25 },
598: { amount: 0.25 },
597: { amount: 0.25 },
596: { amount: 0.25 },
595: { amount: 0.25 },
594: { amount: 0.25 },
593: { twirl: true, amount: 0.25 },
592: { amount: 0.25 },
591: { amount: 0.25 },
590: { amount: 0.25 },
589: { amount: 0.25 },
588: { amount: 0.25 },
587: { amount: 0.25 },
586: { amount: 0.25 },
585: { amount: 0.25 },
584: { amount: 0.25 },
583: { amount: 0.25 },
582: { amount: 0.25 },
581: { twirl: true, amount: 0.25 },
580: { amount: 0.25 },
579: { twirl: true, amount: 0.25 },
578: { amount: 0.25 },
577: { twirl: true, amount: 0.25 },
576: { amount: 0.25 },
575: { twirl: true, angle: 0, height: 10, radius: 15, amount: 0.25 },
574: { amount: 0.25 },
573: { type: 'speed', bpm: 360, amount: 0.25 },
572: { amount: 0.25 },
571: { amount: 0.25 },
570: { amount: 0.25 },
569: { amount: 0.25 },
568: { amount: 0.25 },
567: { amount: 0.25 },
566: { amount: 0.25 },
565: { amount: 0.25 },
564: { type: 'speed', bpm: 720, amount: 0.25 },
563: { amount: 0.25 },
562: { type: 'speed', bpm: 540, amount: 0.25 },
561: { type: 'speed', bpm: 720, amount: 0.25 },
560: { type: 'speed', bpm: 360, amount: 0.25 },
559: { type: 'speed', bpm: 720, amount: 0.25 },
558: { amount: 0.25 },
557: { type: 'speed', bpm: 540, amount: 0.25 },
556: { amount: 0.25 },
555: { amount: 0.25 },
554: { type: 'speed', bpm: 720, amount: 0.25 },
553: { amount: 0.25 },
552: { type: 'speed', bpm: 540, amount: 0.25 },
551: { type: 'speed', bpm: 720, amount: 0.25 },
550: { type: 'speed', bpm: 360, angle: -0.785, height: 25, radius: 35, amount: 0.25 },
549: { type: 'speed', bpm: 720, amount: -0.25 },
548: { amount: -0.25 },
547: { type: 'speed', bpm: 540, amount: -0.25 },
546: { amount: -0.25 },
545: { amount: -0.25 },
544: { type: 'speed', bpm: 720, amount: -0.25 },
543: { amount: -0.25 },
542: { type: 'speed', bpm: 540, amount: -0.25 },
541: { type: 'speed', bpm: 720, amount: -0.25 },
540: { type: 'speed', bpm: 360, amount: -0.25 },
539: { type: 'speed', bpm: 720, amount: -0.25 },
538: { amount: -0.25 },
537: { type: 'speed', bpm: 540, amount: -0.25 },
536: { amount: -0.25 },
535: { amount: -0.25 },
534: { type: 'speed', bpm: 720, amount: -0.25 },
533: { amount: -0.25 },
532: { type: 'speed', bpm: 540, amount: -0.25 },
531: { type: 'speed', bpm: 720, amount: -0.25 },
530: { type: 'speed', bpm: 360, amount: -0.25 },
529: { type: 'speed', bpm: 720, amount: -0.25 },
528: { amount: -0.25 },
527: { type: 'speed', bpm: 540, amount: -0.25 },
526: { amount: -0.25 },
525: { type: 'speed', bpm: 720, angle: 0, height: 10, radius: 15, amount: -0.25 },
524: { amount: -0.25 },
523: { type: 'speed', bpm: 540, amount: -0.25 },
522: { type: 'speed', bpm: 360, amount: -0.25 },
521: { amount: -0.25 },
520: { type: 'speed', bpm: 540, amount: -0.25 },
519: { type: 'speed', bpm: 720, amount: -0.25 },
518: { amount: -0.25 },
517: { type: 'speed', bpm: 540, amount: -0.25 },
516: { type: 'speed', bpm: 360, amount: -0.25 },
515: { amount: -0.25 },
514: { type: 'speed', bpm: 540, amount: -0.25 },
513: { type: 'speed', bpm: 720, amount: -0.25 },
512: { amount: -0.25 },
511: { type: 'speed', bpm: 540, amount: -0.25 },
510: { type: 'speed', bpm: 360, amount: -0.25 },
509: { amount: -0.25 },
508: { type: 'speed', bpm: 540, amount: -0.25 },
507: { type: 'speed', bpm: 720, amount: -0.25 },
506: { amount: -0.25 },
505: { type: 'speed', bpm: 540, amount: -0.25 },
504: { type: 'speed', bpm: 360, amount: -0.25 },
503: { amount: -0.25 },
502: { type: 'speed', bpm: 540, amount: -0.25 },
501: { type: 'speed', bpm: 720, amount: -0.25 },
500: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
499: { amount: 0.25 },
498: { amount: 0.25 },
497: { amount: 0.25 },
496: { amount: 0.25 },
495: { amount: 0.25 },
494: { amount: 0.25 },
493: { amount: 0.25 },
492: { amount: 0.25 },
491: { amount: 0.25 },
490: { amount: 0.25 },
489: { amount: 0.25 },
488: { amount: 0.25 },
487: { amount: 0.25 },
486: { amount: 0.25 },
485: { amount: 0.25 },
484: { amount: 0.25 },
483: { amount: 0.25 },
482: { amount: 0.25 },
481: { amount: 0.25 },
480: { amount: 0.25 },
479: { amount: 0.25 },
478: { amount: 0.25 },
477: { amount: 0.25 },
476: { amount: 0.25 },
475: { angle: 0, height: 10, radius: 15, amount: 0.25 },
474: { amount: 0.25 },
473: { amount: 0.25 },
472: { amount: 0.25 },
471: { amount: 0.25 },
470: { amount: 0.25 },
469: { amount: 0.25 },
468: { amount: 0.25 },
467: { amount: 0.25 },
466: { amount: 0.25 },
465: { amount: 0.25 },
464: { amount: 0.25 },
463: { amount: 0.25 },
462: { amount: 0.25 },
461: { amount: 0.25 },
460: { amount: 0.25 },
459: { amount: 0.25 },
458: { amount: 0.25 },
457: { amount: 0.25 },
456: { amount: 0.25 },
455: { amount: 0.25 },
454: { amount: 0.25 },
453: { amount: 0.25 },
452: { amount: 0.25 },
451: { amount: 0.25 },
450: { angle: -0.785, height: 25, radius: 35, amount: 0.25 },
449: { amount: -0.25 },
448: { amount: -0.25 },
447: { amount: -0.25 },
446: { amount: -0.25 },
445: { amount: -0.25 },
444: { amount: -0.25 },
443: { amount: -0.25 },
442: { amount: -0.25 },
441: { amount: -0.25 },
440: { amount: -0.25 },
439: { amount: -0.25 },
438: { amount: -0.25 },
437: { amount: -0.25 },
436: { amount: -0.25 },
435: { amount: -0.25 },
434: { amount: -0.25 },
433: { amount: -0.25 },
432: { amount: -0.25 },
431: { amount: -0.25 },
430: { amount: -0.25 },
429: { amount: -0.25 },
428: { amount: -0.25 },
427: { amount: -0.25 },
426: { amount: -0.25 },
425: { angle: 0, height: 10, radius: 15, amount: -0.25 },
424: { amount: -0.25 },
423: { amount: -0.25 },
422: { amount: -0.25 },
421: { amount: -0.25 },
420: { amount: -0.25 },
419: { amount: -0.25 },
418: { amount: -0.25 },
417: { amount: -0.25 },
416: { amount: -0.25 },
415: { amount: -0.25 },
414: { amount: -0.25 },
413: { amount: -0.25 },
412: { amount: -0.25 },
411: { amount: -0.25 },
410: { amount: -0.25 },
409: { amount: -0.25 },
408: { amount: -0.25 },
407: { amount: -0.25 },
406: { amount: -0.25 },
405: { amount: -0.25 },
404: { amount: -0.25 },
403: { amount: -0.25 },
402: { amount: -0.25 },
401: { amount: -0.25 },
400: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
399: { twirl: true, amount: 0.25 },
398: { amount: 0.25 },
397: { amount: 0.25 },
396: { twirl: true, amount: 0.25 },
395: { amount: 0.25 },
394: { amount: 0.25 },
393: { amount: 0.25 },
392: { amount: 0.25 },
391: { amount: 0.25 },
390: { amount: 0.25 },
389: { amount: 0.25 },
388: { amount: 0.25 },
387: { amount: 0.25 },
386: { amount: 0.25 },
385: { amount: 0.25 },
384: { amount: 0.25 },
383: { amount: 0.25 },
382: { amount: 0.25 },
381: { amount: 0.25 },
380: { amount: 0.25 },
379: { amount: 0.25 },
378: { amount: 0.25 },
377: { amount: 0.25 },
376: { amount: 0.25 },
375: { angle: 0, height: 10, radius: 15, amount: 0.25 },
374: { amount: 0.25 },
373: { amount: 0.25 },
372: { amount: 0.25 },
371: { amount: 0.25 },
370: { amount: 0.25 },
369: { amount: 0.25 },
368: { amount: 0.25 },
367: { amount: 0.25 },
366: { amount: 0.25 },
365: { twirl: true, amount: 0.25 },
364: { amount: 0.25 },
363: { amount: 0.25 },
362: { twirl: true, amount: 0.25 },
361: { amount: 0.25 },
360: { amount: 0.25 },
359: { type: 'speed', bpm: 180, amount: 0.25 },
358: { amount: 0.25 },
357: { amount: 0.25 },
356: { amount: 0.25 },
355: { amount: 0.25 },
354: { amount: 0.25 },
353: { amount: 0.25 },
352: { amount: 0.25 },
351: { amount: 0.25 },
350: { angle: -0.785, height: 25, radius: 35, amount: 0.25 },
349: { twirl: true, amount: -0.25 },
348: { amount: -0.25 },
347: { amount: -0.25 },
346: { twirl: true, amount: -0.25 },
345: { amount: -0.25 },
344: { amount: -0.25 },
343: { twirl: true, amount: -0.25 },
342: { amount: -0.25 },
341: { amount: -0.25 },
340: { twirl: true, amount: -0.25 },
339: { amount: -0.25 },
338: { amount: -0.25 },
337: { type: 'speed', bpm: 360, amount: -0.25 },
336: { amount: -0.25 },
335: { amount: -0.25 },
334: { amount: -0.25 },
333: { amount: -0.25 },
332: { amount: -0.25 },
331: { amount: -0.25 },
330: { amount: -0.25 },
329: { amount: -0.25 },
328: { amount: -0.25 },
327: { amount: -0.25 },
326: { amount: -0.25 },
325: { angle: 0, height: 10, radius: 15, amount: -0.25 },
324: { amount: -0.25 },
323: { amount: -0.25 },
322: { amount: -0.25 },
321: { type: 'speed', bpm: 720, amount: -0.25 },
320: { amount: -0.25 },
319: { twirl: true, amount: -0.25 },
318: { amount: -0.25 },
317: { twirl: true, amount: -0.25 },
316: { amount: -0.25 },
315: { amount: -0.25 },
314: { twirl: true, amount: -0.25 },
313: { amount: -0.25 },
312: { amount: -0.25 },
311: { twirl: true, amount: -0.25 },
310: { amount: -0.25 },
309: { amount: -0.25 },
308: { twirl: true, amount: -0.25 },
307: { amount: -0.25 },
306: { twirl: true, amount: -0.25 },
305: { amount: -0.25 },
304: { twirl: true, amount: -0.25 },
303: { amount: -0.25 },
302: { twirl: true, amount: -0.25 },
301: { amount: -0.25 },
300: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
299: { type: 'speed', bpm: 360, amount: 0.25 },
298: { amount: 0.25 },
297: { amount: 0.25 },
296: { amount: 0.25 },
295: { amount: 0.25 },
294: { amount: 0.25 },
293: { amount: 0.25 },
292: { amount: 0.25 },
291: { amount: 0.25 },
290: { amount: 0.25 },
289: { amount: 0.25 },
288: { amount: 0.25 },
287: { amount: 0.25 },
286: { amount: 0.25 },
285: { amount: 0.25 },
284: { type: 'speed', bpm: 180, amount: 0.25 },
283: { amount: 0.25 },
282: { amount: 0.25 },
281: { amount: 0.25 },
280: { twirl: true, amount: 0.25 },
279: { amount: 0.25 },
278: { amount: 0.25 },
277: { amount: 0.25 },
276: { type: 'speed', bpm: 720, amount: 0.25 },
275: { angle: 0, height: 10, radius: 15, amount: 0.25 },
274: { twirl: true, amount: 0.25 },
273: { amount: 0.25 },
272: { twirl: true, amount: 0.25 },
271: { amount: 0.25 },
270: { twirl: true, amount: 0.25 },
269: { amount: 0.25 },
268: { twirl: true, amount: 0.25 },
267: { amount: 0.25 },
266: { amount: 0.25 },
265: { twirl: true, amount: 0.25 },
264: { amount: 0.25 },
263: { amount: 0.25 },
262: { amount: 0.25 },
261: { twirl: true, amount: 0.25 },
260: { amount: 0.25 },
259: { amount: 0.25 },
258: { amount: 0.25 },
257: { type: 'speed', bpm: 360, amount: 0.25 },
256: { twirl: true, amount: 0.25 },
255: { amount: 0.25 },
254: { amount: 0.25 },
253: { amount: 0.25 },
252: { amount: 0.25 },
251: { amount: 0.25 },
250: { angle: -0.785, height: 25, radius: 35, amount: 0.25 },
249: { amount: -0.25 },
248: { amount: -0.25 },
247: { type: 'speed', bpm: 180, amount: -0.25 },
246: { amount: -0.25 },
245: { twirl: true, amount: -0.25 },
244: { amount: -0.25 },
243: { twirl: true, amount: -0.25 },
242: { amount: -0.25 },
241: { twirl: true, amount: -0.25 },
240: { amount: -0.25 },
239: { twirl: true, amount: -0.25 },
238: { amount: -0.25 },
237: { amount: -0.25 },
236: { amount: -0.25 },
235: { amount: -0.25 },
234: { amount: -0.25 },
233: { amount: -0.25 },
232: { amount: -0.25 },
231: { amount: -0.25 },
230: { amount: -0.25 },
229: { amount: -0.25 },
228: { amount: -0.25 },
227: { amount: -0.25 },
226: { amount: -0.25 },
225: { angle: 0, height: 10, radius: 15, amount: -0.25 },
224: { amount: -0.25 },
223: { type: 'speed', bpm: 360, amount: -0.25 },
222: { amount: -0.25 },
221: { amount: -0.25 },
220: { amount: -0.25 },
219: { amount: -0.25 },
218: { amount: -0.25 },
217: { amount: -0.25 },
216: { amount: -0.25 },
215: { amount: -0.25 },
214: { amount: -0.25 },
213: { amount: -0.25 },
212: { amount: -0.25 },
211: { amount: -0.25 },
210: { amount: -0.25 },
209: { amount: -0.25 },
208: { amount: -0.25 },
207: { amount: -0.25 },
206: { amount: -0.25 },
205: { amount: -0.25 },
204: { amount: -0.25 },
203: { amount: -0.25 },
202: { amount: -0.25 },
201: { amount: -0.25 },
200: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
199: { amount: 0.25 },
198: { amount: 0.25 },
197: { amount: 0.25 },
196: { amount: 0.25 },
195: { amount: 0.25 },
194: { amount: 0.25 },
193: { amount: 0.25 },
192: { amount: 0.25 },
191: { amount: 0.25 },
190: { amount: 0.25 },
189: { amount: 0.25 },
188: { amount: 0.25 },
187: { amount: 0.25 },
186: { amount: 0.25 },
185: { amount: 0.25 },
184: { amount: 0.25 },
183: { amount: 0.25 },
182: { amount: 0.25 },
181: { amount: 0.25 },
180: { amount: 0.25 },
179: { amount: 0.25 },
178: { amount: 0.25 },
177: { amount: 0.25 },
176: { amount: 0.25 },
175: { angle: 0, height: 10, radius: 15, amount: 0.25 },
174: { amount: 0.25 },
173: { amount: 0.25 },
172: { amount: 0.25 },
171: { amount: 0.25 },
170: { amount: 0.25 },
169: { amount: 0.25 },
168: { amount: 0.25 },
167: { amount: 0.25 },
166: { amount: 0.25 },
165: { amount: 0.25 },
164: { amount: 0.25 },
163: { amount: 0.25 },
162: { amount: 0.25 },
161: { amount: 0.25 },
160: { amount: 0.25 },
159: { amount: 0.25 },
158: { amount: 0.25 },
157: { amount: 0.25 },
156: { amount: 0.25 },
155: { amount: 0.25 },
154: { amount: 0.25 },
153: { amount: 0.25 },
152: { amount: 0.25 },
151: { amount: 0.25 },
150: { angle: -0.785, height: 25, radius: 35, amount: 0.25 },
149: { amount: -0.25 },
148: { amount: -0.25 },
147: { amount: -0.25 },
146: { amount: -0.25 },
145: { amount: -0.25 },
144: { amount: -0.25 },
143: { amount: -0.25 },
142: { amount: -0.25 },
141: { amount: -0.25 },
140: { amount: -0.25 },
139: { amount: -0.25 },
138: { amount: -0.25 },
137: { amount: -0.25 },
136: { amount: -0.25 },
135: { amount: -0.25 },
134: { amount: -0.25 },
133: { amount: -0.25 },
132: { amount: -0.25 },
131: { amount: -0.25 },
130: { amount: -0.25 },
129: { amount: -0.25 },
128: { amount: -0.25 },
127: { amount: -0.25 },
126: { amount: -0.25 },
125: { angle: 0, height: 10, radius: 15, amount: -0.25 },
124: { amount: -0.25 },
123: { amount: -0.25 },
122: { amount: -0.25 },
121: { amount: -0.25 },
120: { amount: -0.25 },
119: { amount: -0.25 },
118: { amount: -0.25 },
117: { amount: -0.25 },
116: { amount: -0.25 },
115: { amount: -0.25 },
114: { amount: -0.25 },
113: { amount: -0.25 },
112: { amount: -0.25 },
111: { amount: -0.25 },
110: { amount: -0.25 },
109: { amount: -0.25 },
108: { amount: -0.25 },
107: { amount: -0.25 },
106: { amount: -0.25 },
105: { amount: -0.25 },
104: { amount: -0.25 },
103: { amount: -0.25 },
102: { amount: -0.25 },
101: { amount: -0.25 },
100: { angle: 0.785, height: 25, radius: 35, amount: -0.25 },
99: { amount: 0.25 },
98: { amount: 0.25 },
97: { amount: 0.25 },
96: { amount: 0.25 },
95: { amount: 0.25 },
94: { amount: 0.25 },
93: { amount: 0.25 },
92: { amount: 0.25 },
91: { amount: 0.25 },
90: { amount: 0.25 },
89: { amount: 0.25 },
88: { amount: 0.25 },
87: { amount: 0.25 },
86: { amount: 0.25 },
85: { amount: 0.25 },
84: { amount: 0.25 },
83: { type: 'speed', bpm: 180, amount: 0.25 },
82: { amount: 0.25 },
81: { amount: 0.25 },
80: { amount: 0.25 },
79: { amount: 0.25 },
78: { amount: 0.25 },
77: { amount: 0.25 },
76: { amount: 0.25 },
75: { angle: 0, height: 10, radius: 15, amount: 0.25 },
74: { amount: 0.25 },
73: { amount: 0.25 },
72: { amount: 0.25 },
71: { amount: 0.25 },
70: { amount: 0.25 },
69: { amount: 0.25 },
68: { amount: 0.25 },
67: { amount: 0.25 },
66: { amount: 0.25 },
65: { type: 'speed', bpm: 360, amount: 0.25 },
64: { amount: 0.25 },
63: { amount: 0.25 },
62: { amount: 0.25 },
61: { amount: 0.25 },
60: { amount: 0.25 },
59: { amount: 0.25 },
58: { amount: 0.25 },
57: { amount: 0.25 },
56: { amount: 0.25 },
55: { amount: 0.25 },
54: { amount: 0.25 },
53: { amount: 0.25 },
52: { amount: 0.25 },
51: { amount: 0.25 },
50: { angle: -0.785, height: 25, radius: 35, amount: 0.25 },
49: { amount: -0.25 },
48: { amount: -0.25 },
47: { amount: -0.25 },
46: { amount: -0.25 },
45: { amount: -0.25 },
44: { amount: -0.25 },
43: { amount: -0.25 },
42: { amount: -0.25 },
41: { amount: -0.25 },
40: { amount: -0.25 },
39: { amount: -0.25 },
38: { amount: -0.25 },
37: { amount: -0.25 },
36: { amount: -0.25 },
35: { amount: -0.25 },
34: { amount: -0.25 },
33: { amount: -0.25 },
32: { amount: -0.25 },
31: { amount: -0.25 },
30: { amount: -0.25 },
29: { amount: -0.25 },
28: { amount: -0.25 },
27: { amount: -0.25 },
26: { amount: -0.25 },
25: { angle: 0, height: 10, radius: 15, amount: -0.25 },
24: { amount: -0.25 },
23: { amount: -0.25 },
22: { amount: -0.25 },
21: { amount: -0.25 },
20: { amount: -0.25 },
19: { amount: -0.25 },
18: { amount: -0.25 },
17: { amount: -0.25 },
16: { amount: -0.25 },
15: { amount: -0.25 },
14: { amount: -0.25 },
13: { amount: -0.25 },
12: { amount: -0.25 },
11: { amount: -0.25 },
10: { amount: -0.25 },
9: { amount: -0.25 },
8: { amount: -0.25 },
7: { amount: -0.25 },
6: { amount: -0.25 },
5: { amount: -0.25 },
4: { amount: -0.25 },
3: { amount: -0.25 },
2: { amount: -0.25 },
1: { amount: -0.25 },
0: { angle: 0.785, height: 25, radius: 35, amount: -0.25 }};

levels['level5'] = {
    id: 'level5',
    name: 'Level 5: Plum - R (3D Ultimate Rollercoaster)',
    bpm: 180,
    audioSrc: '/plum-r.mp3',
    path: plumRPath,
    events: plumREvents
};
