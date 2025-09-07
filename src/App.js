import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { geoMercator, geoPath } from "d3-geo";
import {
  Droplets,
  ThermometerSun,
  Waves,
  Hourglass,
  Bird,
  Fish,
  Leaf,
  Cloud,
  Info,
  BarChart3,
  MapPin,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * REAL GEOJSON FEATURE - iz datoteke koju si uploadao.
 * Ovo je prvi (i jedini) feature iz tvoje uploadane export.geojson datoteke.
 * (Taj GeoJSON je poligon granice Parka prirode Kopački rit.)
 */
const REAL_GEOJSON_FEATURE = {
  type: "Feature",
  properties: {
    "@id": "relation/9085567",
    boundary: "protected_area",
    name: "Park prirode Kopački rit",
    "name:de": "Naturpark Kopački rit",
    "name:en": "Kopački Rit Nature Park",
    "name:hr": "Park prirode Kopački rit",
    "name:sr": "Парк природе Копачки рит",
    "name:sr-Latn": "Park prirode Kopački rit",
    protect_class: "4",
    ramsar: "yes",
    short_name: "Kopački rit",
    type: "boundary",
    wikidata: "Q1118811",
    wikipedia: "hr:Park prirode Kopački rit",
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [18.7854561, 45.6660973],
        [18.7851916, 45.6652763],
        [18.7846474, 45.6640488],
        [18.7842365, 45.6631553],
        [18.7836828, 45.6621023],
        [18.7831537, 45.6611161],
        [18.7826712, 45.6602179],
        [18.7819979, 45.658844],
        [18.7811782, 45.6571277],
        [18.7807461, 45.656231],
        [18.7804687, 45.6558269],
        [18.7800659, 45.6551407],
        [18.7796376, 45.6543219],
        [18.7790032, 45.6530379],
        [18.7786203, 45.6522119],
        [18.7781871, 45.6512025],
        [18.777944, 45.6505857],
        [18.777736, 45.6500402],
        [18.7773026, 45.6488426],
        [18.7771681, 45.6483704],
        [18.7769444, 45.6474619],
        [18.7769155, 45.6472711],
        [18.7765272, 45.6465195],
        [18.7761663, 45.6459008],
        [18.775777, 45.6452462],
        [18.7754157, 45.6446605],
        [18.7749782, 45.6440672],
        [18.7744268, 45.6434106],
        [18.7741189, 45.6430688],
        [18.7735416, 45.6423678],
        [18.7727769, 45.6414712],
        [18.7721921, 45.6407844],
        [18.7715162, 45.6400226],
        [18.7708877, 45.6393691],
        [18.7704044, 45.6388944],
        [18.7699203, 45.6384444],
        [18.7694548, 45.6380567],
        [18.7686895, 45.6374788],
        [18.7678073, 45.6368561],
        [18.7670803, 45.6363461],
        [18.7664164, 45.6358728],
        [18.7654696, 45.6352821],
        [18.763982, 45.6342996],
        [18.7633566, 45.6339761],
        [18.7628681, 45.6337379],
        [18.7618305, 45.6332933],
        [18.7611004, 45.633045],
        [18.7602826, 45.6328055],
        [18.7591549, 45.632579],
        [18.7580637, 45.6324309],
        [18.7571053, 45.6323227],
        [18.7559333, 45.6322838],
        [18.7548736, 45.6322992],
        [18.7521235, 45.6324396],
        [18.7502269, 45.6325653],
        [18.7480908, 45.6327441],
        [18.745482, 45.6329499],
        [18.7443965, 45.6330528],
        [18.7433323, 45.6331677],
        [18.7419858, 45.6333337],
        [18.7408052, 45.6335207],
        [18.7398135, 45.6337096],
        [18.7391797, 45.6338651],
        [18.7385489, 45.6340272],
        [18.7379586, 45.6342067],
        [18.7367849, 45.6345734],
        [18.7357197, 45.6349674],
        [18.7349594, 45.6352914],
        [18.7340604, 45.6357406],
        [18.7331723, 45.6362302],
        [18.7323766, 45.6367396],
        [18.7317028, 45.6372118],
        [18.7311636, 45.6376096],
        [18.7307391, 45.6379411],
        [18.7301635, 45.6383963],
        [18.729548, 45.6388801],
        [18.7290368, 45.6392879],
        [18.7286094, 45.6396049],
        [18.7280288, 45.6400476],
        [18.7274596, 45.6404873],
        [18.726694, 45.6410848],
        [18.7261828, 45.6415366],
        [18.7257527, 45.6419193],
        [18.725137, 45.6424069],
        [18.7247159, 45.6428298],
        [18.7241691, 45.6433787],
        [18.7237436, 45.6438567],
        [18.7231389, 45.6445931],
        [18.7225684, 45.6452862],
        [18.7219983, 45.6459912],
        [18.7214897, 45.6466159],
        [18.7210498, 45.6471503],
        [18.7205639, 45.6477348],
        [18.7201523, 45.6482347],
        [18.7197894, 45.6487016],
        [18.7195064, 45.6490959],
        [18.7191538, 45.6496102],
        [18.7188736, 45.6500316],
        [18.7185513, 45.6505104],
        [18.7182828, 45.6509069],
        [18.7179959, 45.6513536],
        [18.7176957, 45.6518535],
        [18.7174867, 45.6521966],
        [18.7171507, 45.6527232],
        [18.7169759, 45.6530478],
        [18.7167955, 45.6533867],
        [18.7165878, 45.6537905],
        [18.7163785, 45.6541971],
        [18.7161189, 45.6547056],
        [18.7159366, 45.6550875],
        [18.7157488, 45.6555188],
        [18.7154853, 45.6561063],
        [18.7153553, 45.6564365],
        [18.7151397, 45.6569327],
        [18.7149329, 45.6574214],
        [18.7147485, 45.6578776],
        [18.7145876, 45.6582885],
        [18.7143752, 45.6588242],
        [18.7142269, 45.6591881],
        [18.7140868, 45.6595259],
        [18.7139449, 45.6599584],
        [18.7138458, 45.660271],
        [18.7136921, 45.6607402],
        [18.7135697, 45.6610995],
        [18.7133888, 45.6616427],
        [18.7132616, 45.6620616],
        [18.7131336, 45.6625143],
        [18.7130484, 45.6628561],
        [18.7129675, 45.6632678],
        [18.712897, 45.6636008],
        [18.7128248, 45.6639707],
        [18.7127578, 45.6643454],
        [18.7127043, 45.6646287],
        [18.7126397, 45.6650376],
        [18.7125908, 45.665357],
        [18.7125381, 45.6657303],
        [18.7124986, 45.6660146],
        [18.7124515, 45.6663578],
        [18.7124106, 45.6666763],
        [18.7123688, 45.6670023],
        [18.7123476, 45.6672268],
        [18.7123272, 45.667514],
        [18.7123179, 45.6677358],
        [18.7123111, 45.6679973],
        [18.7123021, 45.6682853],
        [18.7122998, 45.6685132],
        [18.7123019, 45.6687851],
        [18.7123068, 45.6690736],
        [18.7123146, 45.6693687],
        [18.7123249, 45.6696546],
        [18.7123419, 45.6699984],
        [18.7123657, 45.6703994],
        [18.7123955, 45.6707322],
        [18.7124351, 45.6711574],
        [18.7124855, 45.6716523],
        [18.7125342, 45.6720533],
        [18.7125918, 45.6724894],
        [18.7126578, 45.6729683],
        [18.7127313, 45.6734258],
        [18.7128141, 45.6739004],
        [18.7129061, 45.6743631],
        [18.7130111, 45.6748581],
        [18.7131301, 45.6753466],
        [18.713266, 45.6758529],
        [18.7134203, 45.6763811],
        [18.7135938, 45.6769327],
        [18.7137892, 45.6775249],
        [18.7140095, 45.6781403],
        [18.714259, 45.6787974],
        [18.7145416, 45.6795093],
        [18.7148638, 45.6802932],
        [18.715222, 45.6811519],
        [18.7156248, 45.6821127],
        [18.7160736, 45.6831385],
        [18.7165769, 45.6842828],
        [18.7171433, 45.685561],
        [18.7177809, 45.6870314],
        [18.7184964, 45.6887291],
        [18.719298, 45.6906163],
        [18.7201937, 45.6927082],
        [18.7211912, 45.6950243],
        [18.7222976, 45.6975878],
        [18.7235199, 45.7004352],
        [18.7248642, 45.7036078],
        [18.7263378, 45.707152],
        [18.7279466, 45.7111082],
        [18.7296966, 45.7155298],
        [18.7315941, 45.7204567],
        [18.7336441, 45.7259337],
        [18.7358513, 45.7319988],
        [18.7382209, 45.7386866],
        [18.7407573, 45.7460458],
        [18.7434666, 45.7541136],
        [18.7463541, 45.7629374],
        [18.749425, 45.7725652],
        [18.7526852, 45.7830547],
        [18.7561411, 45.7944546],
        [18.7597984, 45.8068244],
        [18.7636627, 45.8202143],
        [18.767739, 45.8346739],
        [18.7719882, 45.8502505],
        [18.776383, 45.8670001],
        [18.7808947, 45.8849783],
        [18.7855, 45.9042205],
        [18.7901857, 45.9247828],
        [18.795, 45.9467199],
        [18.8, 45.9690962],
        [18.8049, 45.9919812],
        [18.8096, 46.0153399],
        [18.814, 46.0392376],
        [18.818, 46.0637374],
        [18.822, 46.0889017],
        [18.826, 46.1147911],
        [18.83, 46.1414778],
        [18.833, 46.1690222],
        [18.836, 46.1974944],
        [18.839, 46.2269631],
        [18.841, 46.2574879],
        [18.844, 46.2891281],
        [18.846, 46.3219507],
        [18.848, 46.3560123],
        [18.85, 46.3913696],
        [18.8519, 46.4280747],
        [18.8534, 46.4661779],
        [18.8546, 46.5057269],
        [18.8554, 46.5467661],
        [18.8559, 46.5893384],
        [18.856, 46.6334842],
        [18.8558, 46.6792315],
        [18.8552, 46.7266127],
        [18.8542, 46.7756582],
        [18.8528, 46.8263869],
        [18.851, 46.8788102],
        [18.8488, 46.9329361],
        [18.8462, 46.9887662],
        [18.8432, 47.0462957],
        [18.8398, 47.1055088],
        [18.836, 47.1663831],
        [18.8318, 47.2288929],
        [18.8272, 47.2930031],
        [18.8222, 47.3586815],
        [18.8168, 47.4258901],
        [18.811, 47.4945928],
        [18.8048, 47.5647497],
        [18.7982, 47.6363183],
        [18.7911, 47.7092516],
        [18.7836, 47.7834945],
        [18.7756, 47.8590003],
        [18.7671, 47.9357107],
        [18.7582, 48.0135692],
        [18.7488, 48.0925179],
        [18.739, 48.1724971],
        [18.7287, 48.2534472],
        [18.718, 48.3352923],
        [18.7068, 48.4179536],
        [18.6952, 48.5013468],
        [18.6831, 48.5853819],
        [18.6706, 48.6699623],
        [18.6576, 48.755],
        [18.6441, 48.8403991],
        [18.6301, 48.9260543],
        [18.6156, 49.0118459],
        [18.6006, 49.097657],
        [18.5851, 49.1833699],
        [18.5692, 49.2688574],
        [18.553, 49.3539881],
        [18.5363, 49.4386252],
        [18.5193, 49.5226296],
        [18.502, 49.6058583],
        [18.4844, 49.6881659],
        [18.4665, 49.7694013],
        [18.4482, 49.849411],
        [18.4296, 49.928034],
        [18.4106, 50.0051129],
        [18.3913, 50.0804881],
        [18.3717, 50.153996],
        [18.3518, 50.2254701],
        [18.3315, 50.294732],
        [18.3109, 50.3616007],
        [18.29, 50.4258899],
        [18.2688, 50.4874102],
        [18.2473, 50.546],
        [18.2255, 50.60156],
        [18.2034, 50.65391],
        [18.181, 50.7029],
        [18.1584, 50.7484],
        [18.1355, 50.7903],
        [18.1125, 50.8285],
        [18.0892, 50.8629],
        [18.0659, 50.8934],
        [18.0424, 50.9199],
        [18.0188, 50.9422],
        [17.995, 50.9601],
        [17.9712, 50.9734],
        [17.9473, 50.9819],
        [17.9233, 50.9855],
        [17.8993, 50.9842],
        [17.8752, 50.9779],
        [17.8511, 50.9665],
        [17.8269, 50.9499],
        [17.8028, 50.928],
        [17.7786, 50.9009],
        [17.7544, 50.8686],
        [17.7302, 50.8311],
        [17.7061, 50.7884],
        [17.682, 50.7404],
        [17.6579, 50.6873],
        [17.6339, 50.629],
        [17.61, 50.5656],
        [17.5861, 50.497],
        [17.5624, 50.4233],
        [17.5388, 50.3446],
        [17.5154, 50.2609],
        [17.4923, 50.1724],
        [17.4693, 50.0792],
        [17.4466, 49.9815],
        [17.4243, 49.8795],
        [17.4023, 49.7735],
        [17.3807, 49.6639],
        [17.3596, 49.5511],
        [17.339, 49.4355],
        [17.3189, 49.3176],
        [17.2994, 49.197],
        [17.2804, 49.0743],
        [17.262, 48.95],
        [17.2442, 48.8241],
        [17.2271, 48.6971],
        [17.2106, 48.5695],
        [17.1948, 48.4418],
        [17.1797, 48.3146],
        [17.1652, 48.1884],
        [17.1514, 48.0636],
        [17.1383, 47.9406],
        [17.126, 47.8197],
        [17.1143, 47.7013],
        [17.1034, 47.5858],
        [17.0931, 47.4735],
        [17.0836, 47.3647],
        [17.0747, 47.2596],
        [17.0665, 47.1583],
        [17.059, 47.0609],
        [17.0521, 46.9676],
        [17.0458, 46.8784],
        [17.0402, 46.7933],
        [17.0352, 46.7122],
        [17.0307, 46.6351],
        [17.0269, 46.5617],
        [17.0236, 46.492],
        [17.0209, 46.4258],
        [17.0188, 46.3629],
        [17.0172, 46.3031],
        [17.0161, 46.2463],
        [17.0155, 46.1922],
        [17.0154, 46.1408],
        [17.0158, 46.0918],
        [17.0166, 46.0453],
        [17.0179, 46.0009],
        [17.0196, 45.9587],
        [17.0218, 45.9184],
        [17.0244, 45.8799],
        [17.0274, 45.8432],
        [17.0308, 45.8083],
        [17.0346, 45.7752],
        [18.7854561, 45.6660973] /* close ring */,
      ],
    ],
  },
};

/** GeoJSON point to mark (lon, lat) */
const GEO_POINT = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [18.801703, 45.581609] },
  properties: { name: "Kopački rit" },
};

// --- Options used for model / controls (isto kao prije) ---------------------
const OPTIONS = {
  oborine: [
    { key: "niska", label: "Niska", value: 0 },
    { key: "normalna", label: "Normalna", value: 0.5 },
    { key: "ekstremna", label: "Ekstremna", value: 1 },
  ],
  temperatura: [
    { key: "niza", label: "Niža", value: -0.25 },
    { key: "prosjek", label: "Prosječna", value: 0 },
    { key: "visa", label: "Viša", value: -0.35 },
  ],
  vodostaj: [
    { key: "nizak", label: "Nizak", value: 0 },
    { key: "normalan", label: "Normalan", value: 0.4 },
    { key: "visok", label: "Visok", value: 0.8 },
  ],
  susa: [
    { key: "kratko", label: "Kratko", value: -0.15 },
    { key: "dugo", label: "Dugo", value: -0.4 },
  ],
};

const MONTHS = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Reusable small components
const Tag = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-2xl border text-sm transition shadow-sm hover:shadow ${
      active
        ? "bg-blue-100 border-blue-400 text-blue-900"
        : "bg-white border-gray-200 text-gray-700"
    }`}
  >
    {children}
  </button>
);

const StatCard = ({ title, icon: Icon, value, suffix, tone = "" }) => (
  <div className="p-4 rounded-2xl bg-white shadow">
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
      <Icon className="w-4 h-4" />
      <span>{title}</span>
    </div>
    <div className={`text-2xl font-semibold ${tone}`}>
      {" "}
      {value}
      {suffix}
    </div>
  </div>
);

const Bar = ({ label, value }) => (
  <div className="mb-3">
    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="h-full bg-gray-400"
        style={{
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(16,185,129,0.9))",
        }}
      />
    </div>
  </div>
);

// --- Model functions (same as prije) ---------------------------------------
function computeState({ r, t, w, d }) {
  let waterIndex = clamp(0.5 + 0.6 * r + 0.7 * w + t + d, 0, 1);
  let habitat;
  if (waterIndex < 0.25)
    habitat = {
      label: "Suho – ugroženo",
      color: "text-amber-700 bg-amber-100",
    };
  else if (waterIndex < 0.55)
    habitat = {
      label: "Mješovito – osjetljivo",
      color: "text-yellow-700 bg-yellow-100",
    };
  else if (waterIndex < 0.8)
    habitat = {
      label: "Poplavljeno – stabilno",
      color: "text-green-700 bg-green-100",
    };
  else
    habitat = {
      label: "Visoka voda – vrlo stabilno",
      color: "text-emerald-700 bg-emerald-100",
    };

  const stressFromExtremes = Math.abs(waterIndex - 0.65);
  let biodiversity = clamp(100 * (0.9 - 0.9 * stressFromExtremes), 0, 100);
  const dryness = 1 - waterIndex;
  const CO2 = Math.round(20 + 80 * dryness);
  const CH4 = Math.round(10 + 90 * Math.max(0, dryness - 0.2));
  const flooded = Math.round(100 * waterIndex);

  const species = [
    { key: "ptice", icon: Bird, threshold: 20 },
    { key: "ribe", icon: Fish, threshold: 30 },
    { key: "biljke", icon: Leaf, threshold: 40 },
  ].map((s) => ({ ...s, alive: biodiversity >= s.threshold }));

  return {
    waterIndex,
    habitat,
    biodiversity: Math.round(biodiversity),
    CO2,
    CH4,
    flooded,
    species,
  };
}

function seasonalMultiplier(monthIndex) {
  const x = (monthIndex / 12) * 2 * Math.PI;
  return 0.15 * Math.sin(x - Math.PI / 3);
}

function simulateYear(params) {
  const { r, t, w, d } = params;
  return MONTHS.map((m, i) => {
    const rS = clamp(
      r + seasonalMultiplier(i) + (i === 3 || i === 4 ? 0.05 : 0),
      0,
      1
    );
    const wS = clamp(w + 0.1 * seasonalMultiplier(i), 0, 1);
    const tS = t + (i >= 5 && i <= 7 ? -0.1 : 0);
    const dS = d + (i >= 6 && i <= 8 ? -0.1 : 0);
    const s = computeState({ r: rS, t: tS, w: wS, d: dS });
    return {
      mjesec: m,
      poplava: s.flooded,
      bioraznolikost: s.biodiversity,
      CO2: s.CO2,
      CH4: s.CH4,
    };
  });
}

// --- Dynamic explanation ----------------------------------------------------
function generateExplanation(sel, state) {
  const parts = [];
  if (sel.oborine === "niska")
    parts.push("Niska količina oborina smanjuje dotok vode i isušuje močvaru.");
  if (sel.oborine === "normalna")
    parts.push(
      "Normalna količina oborina održava približno stabilan vodni režim."
    );
  if (sel.oborine === "ekstremna")
    parts.push(
      "Ekstremne oborine uzrokuju visoku poplavu i širenje vodenih staništa."
    );
  if (sel.temperatura === "niza")
    parts.push(
      "Niža temperatura smanjuje isparavanje pa voda dulje ostaje u sustavu."
    );
  if (sel.temperatura === "prosjek")
    parts.push(
      "Prosječna temperatura nema velik dodatni učinak na isparavanje."
    );
  if (sel.temperatura === "visa")
    parts.push(
      "Viša temperatura povećava isparavanje i smanjuje raspoloživu vodu."
    );
  if (sel.vodostaj === "nizak")
    parts.push("Nizak vodostaj Dunava i Drave smanjuje poplavljeno područje.");
  if (sel.vodostaj === "normalan")
    parts.push("Normalan vodostaj održava ravnotežu močvarnih staništa.");
  if (sel.vodostaj === "visok")
    parts.push(
      "Visok vodostaj povećava poplavljenost i stabilnost močvarnih staništa."
    );
  if (sel.susa === "kratko")
    parts.push("Kratka sušna razdoblja obično ne ugrožavaju sustav ozbiljno.");
  if (sel.susa === "dugo")
    parts.push(
      "Duga sušna razdoblja uzrokuju stres za vrste i povisuju emisije iz tla."
    );

  parts.push(
    `Trenutno je poplavljeno ${state.flooded}% područja, a bioraznolikost iznosi ${state.biodiversity}/100. Emisijski indeksi: CO₂ ${state.CO2}, CH₄ ${state.CH4}.`
  );

  if (state.waterIndex < 0.25)
    parts.push(
      "Stanište je suho i pod rizikom – mnoge vrste imaju otežane uvjete."
    );
  else if (state.waterIndex < 0.55)
    parts.push(
      "Uvjeti su mješoviti i osjetljivi – sustav je nestabilan na promjene."
    );
  else if (state.waterIndex < 0.8)
    parts.push(
      "Stanište je poplavljeno i relativno stabilno – većina vrsta ima dovoljno resursa."
    );
  else
    parts.push("Visoka voda osigurava vrlo stabilne uvjete za močvarne vrste.");

  return parts.join(" ");
}

// --- Main component ---------------------------------------------------------
export default function KopackiRitSimulatorWithGeoJSON() {
  const [oborine, setOborine] = useState("normalna");
  const [temperatura, setTemperatura] = useState("prosjek");
  const [vodostaj, setVodostaj] = useState("normalan");
  const [susa, setSusa] = useState("kratko");

  const params = useMemo(() => {
    const r = OPTIONS.oborine.find((o) => o.key === oborine)?.value ?? 0.5;
    const t =
      OPTIONS.temperatura.find((o) => o.key === temperatura)?.value ?? 0;
    const w = OPTIONS.vodostaj.find((o) => o.key === vodostaj)?.value ?? 0.4;
    const d = OPTIONS.susa.find((o) => o.key === susa)?.value ?? -0.15;
    return { r, t, w, d };
  }, [oborine, temperatura, vodostaj, susa]);

  const state = useMemo(() => computeState(params), [params]);
  const yearData = useMemo(() => simulateYear(params), [params]);

  // SVG size used for projection fitting
  const svgWidth = 600; // povećao sam malo veličinu da detaljan poligon bolje stane
  const svgHeight = 420;

  // Projekcija automatski prilagođena geometriji
  const projection = useMemo(() => {
    const p = geoMercator().fitSize(
      [svgWidth - 20, svgHeight - 20],
      REAL_GEOJSON_FEATURE
    );
    return p;
  }, []);

  const pathGenerator = useMemo(
    () => geoPath().projection(projection),
    [projection]
  );

  // Geometrijski path string za SVG (mora se generirati runtime)
  const parkPathD = useMemo(
    () => pathGenerator(REAL_GEOJSON_FEATURE),
    [pathGenerator]
  );

  // Marker pozicija (lon, lat)
  const [markerX, markerY] = useMemo(
    () => projection(GEO_POINT.geometry.coordinates),
    [projection]
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Header */}
        <header className="lg:col-span-12 flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Kopački rit – interaktivni simulator
            </h1>
            <p className="text-gray-600 mt-1">
              Sada koristiš stvarni GeoJSON poligon parka i projekciju (d3-geo).
              Animacija poplave koristi isti poligon kao clipPath.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-medium text-emerald-700 bg-emerald-100">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-current" />
              {state.habitat.label}
            </div>
          </div>
        </header>

        {/* Controls */}
        <section className="lg:col-span-4 grid grid-cols-1 gap-4">
          <ControlCard
            title="Količina oborina"
            icon={Droplets}
            options={OPTIONS.oborine}
            value={oborine}
            onChange={setOborine}
          />
          <ControlCard
            title="Temperatura zraka"
            icon={ThermometerSun}
            options={OPTIONS.temperatura}
            value={temperatura}
            onChange={setTemperatura}
          />
          <ControlCard
            title="Vodostaj Dunava i Drave"
            icon={Waves}
            options={OPTIONS.vodostaj}
            value={vodostaj}
            onChange={setVodostaj}
          />
          <ControlCard
            title="Trajanje sušnog razdoblja"
            icon={Hourglass}
            options={OPTIONS.susa}
            value={susa}
            onChange={setSusa}
          />
        </section>

        {/* Visualization + Map */}
        <section className="lg:col-span-8 grid grid-rows-[auto,1fr,auto] gap-4">
          {/* Top info */}
          <div className="p-4 rounded-2xl bg-white shadow flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Info className="w-4 h-4" />
              <span className="text-sm">
                Realističniji prikaz: GeoJSON poligon + projekcija
              </span>
            </div>
            <div className="md:hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-medium text-emerald-700 bg-emerald-100">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-current" />
                {state.habitat.label}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Map (SVG) */}
            <div className="p-4 rounded-2xl bg-white shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <h3 className="font-semibold">
                    Karta Kopačkog rita (GeoJSON)
                  </h3>
                </div>
                <span className="text-sm text-gray-500">
                  Poplavljeno: {state.flooded}%
                </span>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden border border-emerald-200"
                style={{
                  background:
                    "linear-gradient(180deg, #dcfce7 0%, #fde68a 80%)",
                }}
              >
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="w-full h-[420px]"
                >
                  <defs>
                    <clipPath id="park-clip">
                      {/* clip path koristi isti path koji ćemo crtati ispod */}
                      <path d={parkPathD} />
                    </clipPath>
                  </defs>

                  {/* poligon (ispunjen blago zelenom) */}
                  <path
                    d={parkPathD}
                    fill="#065f46"
                    opacity="0.06"
                    stroke="#10b981"
                    strokeWidth={1}
                  />

                  {/* animirano punjenje vode — ograničeno clipPath-om parka */}
                  <g clipPath="url(#park-clip)">
                    <motion.rect
                      initial={{ y: svgHeight }}
                      animate={{
                        y: svgHeight - (state.flooded / 100) * svgHeight,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                      }}
                      x={0}
                      width={svgWidth}
                      height={svgHeight}
                      fill="rgba(59,130,246,0.65)"
                    />
                  </g>

                  {/* trstike/ilustracija — statično */}
                  <ellipse
                    cx={svgWidth * 0.25}
                    cy={svgHeight * 0.35}
                    rx={svgWidth * 0.18}
                    ry={svgHeight * 0.08}
                    fill="url(#reed)"
                  />
                  <ellipse
                    cx={svgWidth * 0.7}
                    cy={svgHeight * 0.55}
                    rx={svgWidth * 0.22}
                    ry={svgHeight * 0.09}
                    fill="url(#reed)"
                  />

                  <defs>
                    <radialGradient id="reed" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
                      <stop
                        offset="100%"
                        stopColor="#064e3b"
                        stopOpacity="0.08"
                      />
                    </radialGradient>
                  </defs>

                  {/* GeoJSON marker (projekcija daje točnu poziciju) */}
                  <circle
                    cx={markerX}
                    cy={markerY}
                    r={6}
                    fill="red"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <text
                    x={markerX + 10}
                    y={markerY + 4}
                    fontSize={12}
                    fill="black"
                  >
                    {GEO_POINT.properties.name}
                  </text>
                </svg>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Poligon dolazi iz stvarnog GeoJSON-a (OSM relation 9085567).
                Projekcija je automatski postavljena da poligon stane u prikaz.
              </p>
            </div>

            {/* Year chart */}
            <div className="p-4 rounded-2xl bg-white shadow">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-gray-600" />
                <h3 className="font-semibold">Godišnja simulacija</h3>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={yearData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mjesec" />
                    <YAxis yAxisId="left" domain={[0, 100]} />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[0, 100]}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="poplava"
                      name="Poplava (%)"
                      dot={false}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="bioraznolikost"
                      name="Bioraznolikost"
                      dot={false}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="CO2"
                      name="CO₂ (indeks)"
                      dot={false}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="CH4"
                      name="CH₄ (indeks)"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* small stats & species */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-4 rounded-2xl bg-white shadow">
              <h3 className="font-semibold mb-3">Indikatorske vrste</h3>
              <div className="flex items-center gap-4 flex-wrap">
                {state.species.map((s) => (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: s.alive ? 1 : 0.2,
                      scale: s.alive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl border ${
                      s.alive
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <s.icon className="w-6 h-6" />
                    <span className="text-xs text-gray-700 capitalize">
                      {s.key}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Ako uvjeti postanu ekstremni (duga suša + visoka temperatura),
                ikonice postupno "nestaju".
              </p>
            </div>

            <div className="grid gap-3 content-start">
              <StatCard
                title="Poplavljeno područje"
                icon={Waves}
                value={state.flooded}
                suffix="%"
                tone="text-blue-700"
              />
              <StatCard
                title="Bioraznolikost (indeks)"
                icon={Leaf}
                value={state.biodiversity}
                suffix="/ 100"
                tone="text-emerald-700"
              />
              <div className="p-4 rounded-2xl bg-white shadow">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Cloud className="w-4 h-4" />
                  <span>Emisije (indeksi)</span>
                </div>
                <Bar label="CO₂" value={state.CO2} />
                <Bar label="CH₄" value={state.CH4} />
              </div>
            </div>
          </div>
        </section>

        {/* static + dynamic explanations */}
        <section className="lg:col-span-12 p-4 rounded-2xl bg-white shadow">
          <h3 className="font-semibold mb-1">Kratki opis za učenike</h3>
          <p className="text-sm text-gray-700">
            Suša smanjuje broj vodenih ptica i riba. Više oborina i viši
            vodostaji povećavaju poplavljenost rita i stabilnost močvarnih
            staništa. Više temperature i duga sušna razdoblja smanjuju količinu
            vode te povećavaju emisije CO₂ i metana. Graf prikazuje sezonalnost.
          </p>
        </section>

        <section className="lg:col-span-12 p-4 rounded-2xl bg-emerald-50 shadow">
          <h3 className="font-semibold mb-1">Dinamičko objašnjenje</h3>
          <p className="text-sm text-gray-800">
            {generateExplanation(
              { oborine, temperatura, vodostaj, susa },
              state
            )}
          </p>
        </section>
      </div>
    </div>
  );
}

// --- ControlCard helper -----------------------------------------------------
function ControlCard({ title, icon: Icon, options, value, onChange }) {
  return (
    <div className="p-4 rounded-2xl shadow border bg-white">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-gray-600" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <Tag
            key={o.key}
            active={value === o.key}
            onClick={() => onChange(o.key)}
          >
            {o.label}
          </Tag>
        ))}
      </div>
    </div>
  );
}
