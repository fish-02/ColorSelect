/* ══════════════════════════════════════
   FULL COLOR FAMILIES — COMPLETE SPECTRUM
   24 families covering the entire hue wheel + neutrals
══════════════════════════════════════ */
const COLOR_FAMILIES = [
  // ── REDS ──
  {
    id: 'red',
    swatches: ['#FCEAEA', '#F49090', '#E02828', '#A81010'],
    hueRange: [350, 12],
    bgColor: '#FDF5F5', headerBg: '#F8D8D8', textColor: '#580808', accentColor: '#D02020',
  },

  // ── PINKS ──
  {
    id: 'hot-pink',
    swatches: ['#FCE0EE', '#F880C0', '#E01888', '#A80058'],
    hueRange: [325, 345],
    bgColor: '#FDF0F6', headerBg: '#F8C8E0', textColor: '#600038', accentColor: '#E02888',
  },

  // ── ORANGES ──
  {
    id: 'coral',
    swatches: ['#FCE8E0', '#F4A880', '#E05828', '#B83010'],
    hueRange: [10, 28],
    bgColor: '#FDF5F0', headerBg: '#F5D8C8', textColor: '#501808', accentColor: '#D04820',
  },
  {
    id: 'orange',
    swatches: ['#FCEEDD', '#F5C080', '#E08018', '#B85000'],
    hueRange: [28, 42],
    bgColor: '#FDF8F0', headerBg: '#F5E0B8', textColor: '#502800', accentColor: '#D07010',
  },

  // ── AMBERS & YELLOWS ──
  {
    id: 'amber',
    swatches: ['#FDF5D8', '#F5D870', '#D4A800', '#A07000'],
    hueRange: [42, 56],
    bgColor: '#FDFBF0', headerBg: '#F5ECA0', textColor: '#4A3800', accentColor: '#C89800',
  },
  {
    id: 'yellow',
    swatches: ['#FEFEE0', '#F8F080', '#D8C800', '#A09000'],
    hueRange: [56, 72],
    bgColor: '#FEFEF0', headerBg: '#F8F8A8', textColor: '#484000', accentColor: '#C8B800',
  },

  // ── GREENS ──
  {
    id: 'lime',
    swatches: ['#F0FCE0', '#C8F080', '#78C010', '#488000'],
    hueRange: [72, 92],
    bgColor: '#F5FBF0', headerBg: '#D8F0C0', textColor: '#284010', accentColor: '#68A808',
  },
  {
    id: 'green',
    swatches: ['#E0F4D8', '#98D880', '#38A028', '#186808'],
    hueRange: [92, 138],
    bgColor: '#F0F8EC', headerBg: '#C8E8B8', textColor: '#184808', accentColor: '#408820',
  },
  {
    id: 'emerald',
    swatches: ['#D8F4E8', '#80D0A0', '#10A060', '#006840'],
    hueRange: [140, 162],
    bgColor: '#F0FAF4', headerBg: '#B8E8D0', textColor: '#004830', accentColor: '#109858',
  },

  // ── TEALS / CYANS ──
  {
    id: 'teal',
    swatches: ['#D8F0EC', '#80C8C0', '#189890', '#006058'],
    hueRange: [162, 188],
    bgColor: '#EEF8F6', headerBg: '#B8E0DC', textColor: '#004840', accentColor: '#108880',
  },
  {
    id: 'cyan',
    swatches: ['#D8F0F8', '#80C8E8', '#1090C8', '#005888'],
    hueRange: [188, 208],
    bgColor: '#EEF6FC', headerBg: '#B8D8EC', textColor: '#003858', accentColor: '#1080B8',
  },

  // ── BLUES ──
  {
    id: 'sky',
    swatches: ['#E0EEF8', '#A0C8F0', '#4090D0', '#1050A0'],
    hueRange: [205, 225],
    bgColor: '#F0F5FC', headerBg: '#D0E4F4', textColor: '#183860', accentColor: '#4080C0',
  },
  {
    id: 'blue',
    swatches: ['#E0E8F8', '#90A8F0', '#2848D0', '#0818A0'],
    hueRange: [225, 248],
    bgColor: '#F0F2FC', headerBg: '#C8D4F4', textColor: '#101858', accentColor: '#3050C8',
  },
  {
    id: 'navy',
    swatches: ['#D8E0F0', '#8898D0', '#1828A0', '#001060'],
    hueRange: [238, 256],
    bgColor: '#EEF0F8', headerBg: '#C0C8E4', textColor: '#080828', accentColor: '#2030A0',
  },

  // ── INDIGOS / VIOLETS ──
  {
    id: 'indigo',
    swatches: ['#E8E0F8', '#A888F0', '#5018D0', '#280088'],
    hueRange: [254, 272],
    bgColor: '#F4F0FC', headerBg: '#D8C8F4', textColor: '#280060', accentColor: '#6020C8',
  },
  {
    id: 'violet',
    swatches: ['#EDE0FA', '#C898F0', '#8030D0', '#500090'],
    hueRange: [272, 298],
    bgColor: '#F6F0FC', headerBg: '#E0C8F4', textColor: '#380068', accentColor: '#8828C0',
  },

  // ── PURPLES / MAGENTAS ──
  {
    id: 'purple',
    swatches: ['#F0E0F8', '#D078E8', '#A018C0', '#680078'],
    hueRange: [296, 322],
    bgColor: '#FAF0FC', headerBg: '#ECC8F4', textColor: '#500068', accentColor: '#A018B8',
  },
  {
    id: 'magenta',
    swatches: ['#F8E0F4', '#F070C8', '#D01090', '#900058'],
    hueRange: [320, 338],
    bgColor: '#FCF0FA', headerBg: '#F4C8EC', textColor: '#580048', accentColor: '#C01090',
  },

  // ── NEUTRALS & EARTH TONES ──
  {
    id: 'ivory',
    swatches: ['#F7F0E2', '#EDD5A3', '#D4B46A', '#B8952F'],
    hueRange: [36, 52],
    bgColor: '#FAF7F0', headerBg: '#F5EDDA', textColor: '#4A3A1A', accentColor: '#C9A550',
  },
  {
    id: 'terracotta',
    swatches: ['#F5E8DC', '#E4BFA0', '#C07848', '#8C4820'],
    hueRange: [18, 36],
    bgColor: '#FAF2EB', headerBg: '#EED8C0', textColor: '#4A2010', accentColor: '#B86030',
  },
  {
    id: 'warm-gray',
    swatches: ['#F5F2EE', '#E0D8D0', '#B0A898', '#706860'],
    hueRange: [0, 360], satMax: 0.10,
    bgColor: '#F8F6F3', headerBg: '#EAE4DE', textColor: '#403028', accentColor: '#908070',
  },
  {
    id: 'charcoal',
    swatches: ['#EBEBEB', '#B8B8B8', '#686868', '#242424'],
    hueRange: [0, 360], satMax: 0.14,
    bgColor: '#F5F5F5', headerBg: '#E0E0E0', textColor: '#1A1A1A', accentColor: '#585858',
  },
];


/* ══════════════════════════════════════
   APPLICATION STATE
══════════════════════════════════════ */
const state = {
  step: 'intro',
  selectedFamily: null,
  gridMode: 9,
  photos: Array(9).fill(null),
  eventName: '',
  eventDate: '',
  authorName: '',
  collageCanvas: null,
  borderColor: '',
  borderWidth: 50,
  fontStyle: 'default',
  directEntry: false,
  colorMode: 'white',
  outputWidth: 1080,
  outputHeight: 1350,
  colorScheme: 'mono',
  showColors: true,
  autoBgStyle: 'grad-light',  // 'grad-light' | 'grad-dark' | 'mono'
  autoBgMonoIdx: -1,          // -1 = auto-pick middle color
  textColor: '',              // '' = use family default
};

const TEXT_COLOR_PRESETS = [
  { color: '',        label: '自動' },
  { color: '#1A1A1A', label: '黑' },
  { color: '#FFFFFF', label: '白' },
  { color: '#F7F2E8', label: '奶油' },
  { color: '#4A3728', label: '深棕' },
  { color: '#C0A060', label: '金' },
];

const BORDER_PRESETS = [
  { color: '',        label: '無邊框' },
  { color: '#FFFFFF', label: '白' },
  { color: '#F7F2E8', label: '奶油' },
  { color: '#1A1A1A', label: '黑' },
  { color: '#D4B46A', label: '金' },
  { color: '#E8C8C0', label: '玫瑰' },
  { color: '#B0C4B0', label: '霧綠' },
  { color: '#A8BAC8', label: '霧藍' },
];

/* ── Color-mode palette helpers ── */
const WHITE_PALETTE = {
  bgColor: '#FFFFFF', headerBg: '#F0EEEC', textColor: '#1A1A1A',
  accentColor: '#888888', swatches: ['#EEEEEE', '#CCCCCC', '#AAAAAA', '#888888'],
};

function hslToRgb(h, s, l) {
  if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  return [
    Math.round(hue2rgb(p, q, h + 1/3) * 255),
    Math.round(hue2rgb(p, q, h)       * 255),
    Math.round(hue2rgb(p, q, h - 1/3) * 255),
  ];
}

function buildPaletteFromHex(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const [hDeg, s] = rgbToHsl(r, g, b);
  const h = hDeg / 360; // normalize to 0–1 for hslToRgb

  const mk = (sat, lig) => toHex(...hslToRgb(h, Math.min(sat, 1), Math.min(lig, 1)));

  return {
    bgColor:     mk(Math.min(s, 0.22), 0.97),
    headerBg:    mk(Math.min(s, 0.32), 0.91),
    textColor:   mk(Math.min(s, 0.20), 0.14),
    accentColor: mk(Math.min(s + 0.15, 0.65), 0.44),
    swatches: [
      mk(Math.min(s, 0.22), 0.90),
      mk(Math.min(s + 0.05, 0.45), 0.72),
      mk(Math.min(s + 0.15, 0.62), 0.52),
      mk(Math.min(s + 0.05, 0.42), 0.34),
    ],
  };
}

function extractDominantFromAllPhotos() {
  const photos = state.photos.filter(Boolean);
  if (!photos.length) return '#888888';
  let hSum = 0, sSum = 0, lSum = 0, n = 0;
  photos.forEach(p => {
    const data = sampleImagePixels(p.img, 32);
    for (let i = 0; i < data.length; i += 4) {
      const [h, s, lv] = rgbToHsl(data[i], data[i+1], data[i+2]);
      if (s > 0.08 && lv > 0.1 && lv < 0.9) { hSum += h; sSum += s; lSum += lv; n++; }
    }
  });
  if (n === 0) return '#888888';
  const [r, g, b] = hslToRgb((hSum / n) / 360, sSum / n, lSum / n);
  return toHex(r, g, b);
}

function getEffectiveFamily() {
  if (state.colorMode === 'white') {
    if (state.selectedFamily) {
      return {
        ...WHITE_PALETTE,
        swatches: state.selectedFamily.swatches,
        accentColor: state.selectedFamily.accentColor,
      };
    }
    return WHITE_PALETTE;
  }
  if (state.colorMode === 'auto')  return buildPaletteFromHex(extractDominantFromAllPhotos());
  if (state.colorMode === 'border' && state.borderColor) {
    const palette = buildPaletteFromHex(state.borderColor);
    // Ensure text contrasts with actual border bg (not the derived light bgColor)
    const r = parseInt(state.borderColor.slice(1,3), 16);
    const g = parseInt(state.borderColor.slice(3,5), 16);
    const b = parseInt(state.borderColor.slice(5,7), 16);
    if ((0.299*r + 0.587*g + 0.114*b) / 255 < 0.45) {
      palette.textColor   = '#F0EDE8';
      palette.accentColor = '#C8C0B4';
    }
    return palette;
  }
  return state.selectedFamily || {
    bgColor: '#F8F6F2', headerBg: '#EDE8E0', textColor: '#1A1A1A',
    accentColor: '#8A7E72', swatches: ['#E8E0D4', '#C8BFB0', '#A09080', '#706050'],
  };
}

/* ── Collect all scheme-extracted colors from photos, sorted light→dark ── */
function getAutoColors() {
  const seen = new Set();
  const all = [];
  state.photos.filter(Boolean).forEach(p => {
    (p.customColors || p.colors || []).forEach(hex => {
      if (!seen.has(hex)) { seen.add(hex); all.push(hex); }
    });
  });
  if (!all.length) return ['#DDDDDD', '#BBBBBB', '#888888'];
  return all.sort((a, b) => {
    const luma = h => {
      const r = parseInt(h.slice(1,3),16)/255, g = parseInt(h.slice(3,5),16)/255, b = parseInt(h.slice(5,7),16)/255;
      return 0.299*r + 0.587*g + 0.114*b;
    };
    return luma(a) - luma(b); // light-first
  });
}

function switchColorMode(mode) {
  state.colorMode = mode;
  document.querySelectorAll('.color-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const autoBgOptions = document.getElementById('autoBgOptions');
  if (autoBgOptions) autoBgOptions.style.display = mode === 'auto' ? 'block' : 'none';
  if (mode === 'auto' && state.autoBgStyle === 'mono') updateAutoBgMonoPicker();
  scheduleLivePreview();
}

function switchAutoBgStyle(style) {
  state.autoBgStyle = style;
  document.querySelectorAll('.auto-style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.astyle === style);
  });
  const monoPicker = document.getElementById('autoBgMonoPicker');
  if (monoPicker) monoPicker.style.display = style === 'mono' ? 'flex' : 'none';
  if (style === 'mono') updateAutoBgMonoPicker();
  scheduleLivePreview();
}

function updateAutoBgMonoPicker() {
  const container = document.getElementById('autoBgMonoPicker');
  if (!container) return;
  container.innerHTML = '';
  const colors = getAutoColors();
  if (!colors.length) return;
  // Default to middle color
  if (state.autoBgMonoIdx < 0 || state.autoBgMonoIdx >= colors.length) {
    state.autoBgMonoIdx = Math.floor(colors.length / 2);
  }
  colors.forEach((hex, i) => {
    const btn = document.createElement('button');
    btn.className = 'auto-mono-swatch' + (i === state.autoBgMonoIdx ? ' active' : '');
    btn.style.background = hex;
    btn.title = hex.toUpperCase();
    btn.addEventListener('click', () => {
      state.autoBgMonoIdx = i;
      document.querySelectorAll('.auto-mono-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scheduleLivePreview();
    });
    container.appendChild(btn);
  });
}

let currentUploadIndex = -1;
const cropState = {
  index: -1, ox: 0.5, oy: 0.5, scale: 1.0,
  dragging: false, startX: 0, startY: 0, startOX: 0, startOY: 0,
  _rX: 0, _rY: 0, _rW: 0, _rH: 0, _vpW: 0, _vpH: 0, _maxOX: 0, _maxOY: 0,
  colorPickMode: false,
  colorTabVisited: false,
  pickedColors: [],
  pickMarkers: [],
};


/* ══════════════════════════════════════
   INITIALIZATION
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildFamilyGrid();
  buildPhotoGrid();
  buildGuideSpectrum();
  buildBorderColors();
  buildTextColorPicker();
  initCropDrag();
  initCropColorPick();

  document.getElementById('fileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && currentUploadIndex >= 0) handlePhotoUpload(currentUploadIndex, file);
    e.target.value = '';
  });
});


/* ══════════════════════════════════════
   VIEW NAVIGATION
══════════════════════════════════════ */
function goToStep(step) {
  const current = document.querySelector('.view.active');
  const target  = document.getElementById(`view-${step}`);
  if (!target || state.step === step) return;

  if (step === 'color') state.directEntry = false;

  current.classList.remove('active');
  current.classList.add('exit-up');
  setTimeout(() => current.classList.remove('exit-up'), 500);

  target.classList.add('active');
  state.step = step;

  if (step === 'grid') {
    updateGridHeader();
    updateFamilyBadge();
    state.photos.forEach((photo, i) => {
      if (photo?.img && !photo.customColors) {
        photo.colors = extractSchemeColors(photo.img, state.colorScheme);
        renderPhotoCell(i);
      }
    });
    updateGenerateBtn();
    scheduleLivePreview();
  }
}


/* ══════════════════════════════════════
   GUIDE SPECTRUM (intro page)
══════════════════════════════════════ */
function buildGuideSpectrum() {
  const container = document.getElementById('guideSpectches') || document.getElementById('guideSwatches');
  if (!container) return;

  COLOR_FAMILIES.forEach((family, idx) => {
    const group = document.createElement('div');
    group.className = 'spectrum-group';
    group.title = family.id;
    group.addEventListener('click', () => {
      selectFamily(idx);
      goToStep('color');
    });
    family.swatches.forEach(color => {
      const dot = document.createElement('div');
      dot.className = 'spectrum-dot';
      dot.style.background = color;
      group.appendChild(dot);
    });
    container.appendChild(group);
  });
}


/* ══════════════════════════════════════
   COLOR FAMILY GRID
══════════════════════════════════════ */
function buildFamilyGrid() {
  const grid = document.getElementById('familyGrid');
  grid.innerHTML = '';

  COLOR_FAMILIES.forEach((family, idx) => {
    const card = document.createElement('div');
    card.className = 'family-card';
    card.dataset.idx = idx;
    card.title = family.id;

    // Show only swatches — no text names
    card.innerHTML = `
      <div class="card-swatches">
        ${family.swatches.map(s => `<div class="card-swatch" style="background:${s}"></div>`).join('')}
      </div>
      <div class="card-check">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
    `;
    card.addEventListener('click', () => selectFamily(idx));
    grid.appendChild(card);
  });
}

function selectFamily(idx) {
  if (idx < 0 || idx >= COLOR_FAMILIES.length) return;
  state.selectedFamily = COLOR_FAMILIES[idx];

  document.querySelectorAll('.family-card').forEach((c, i) => {
    c.classList.toggle('selected', i === idx);
  });

  document.getElementById('btnToGrid').disabled = false;
}

async function randomSelect() {
  const btn = document.getElementById('btnRandom');
  btn.disabled = true;
  btn.classList.add('spinning');

  const cards = document.querySelectorAll('.family-card');
  const count = cards.length;
  const steps = 24;

  for (let i = 0; i < steps; i++) {
    cards.forEach(c => c.classList.remove('flash'));
    cards[Math.floor(Math.random() * count)].classList.add('flash');
    await sleep(38 + i * 11);
  }

  cards.forEach(c => c.classList.remove('flash'));
  const finalIdx = Math.floor(Math.random() * count);
  selectFamily(finalIdx);
  cards[finalIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  btn.classList.remove('spinning');
  btn.disabled = false;
}


/* ══════════════════════════════════════
   GRID MODE
══════════════════════════════════════ */
function switchGridMode(mode) {
  if (state.gridMode === mode) return;
  state.gridMode = mode;
  state.photos = Array(mode).fill(null);

  // Update button states
  document.querySelectorAll('.size-btn[data-mode]').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.mode) === mode);
  });

  // Update grid layout attribute
  const grid = document.getElementById('photoGrid');
  grid.dataset.mode = mode;

  // Update max count label
  document.getElementById('uploadMax').textContent = mode;

  buildPhotoGrid();
  updateUploadCount();
  updateGenerateBtn();
  scheduleLivePreview();
}


/* ══════════════════════════════════════
   PHOTO GRID
══════════════════════════════════════ */
function buildPhotoGrid() {
  const grid = document.getElementById('photoGrid');
  grid.innerHTML = '';
  grid.dataset.mode = state.gridMode;

  for (let i = 0; i < state.gridMode; i++) {
    const cell = document.createElement('div');
    cell.className = 'photo-cell';
    cell.dataset.index = i;
    cell.innerHTML = `
      <div class="cell-placeholder">
        <span class="cell-plus">+</span>
        <span class="cell-label">上傳</span>
      </div>
    `;

    cell.addEventListener('click', () => {
      if (state.photos[i]) {
        openCropModal(i);
      } else {
        currentUploadIndex = i;
        document.getElementById('fileInput').click();
      }
    });

    cell.addEventListener('dragover', (e) => { e.preventDefault(); cell.classList.add('drag-over'); });
    cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      cell.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith('image/')) handlePhotoUpload(i, file);
    });

    grid.appendChild(cell);
  }
}

function handlePhotoUpload(index, file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const colors = extractSchemeColors(img, state.colorScheme);
      state.photos[index] = { file, dataURL: e.target.result, img, colors };
      renderPhotoCell(index);
      updateUploadCount();
      updateGenerateBtn();
      if (state.colorMode === 'auto') updateAutoBgMonoPicker();
      scheduleLivePreview();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function renderPhotoCell(index) {
  const cell = document.querySelector(`.photo-cell[data-index="${index}"]`);
  if (!cell) return;
  const photo = state.photos[index];

  if (!photo) {
    cell.className = 'photo-cell';
    cell.innerHTML = `
      <div class="cell-placeholder">
        <span class="cell-plus">+</span>
        <span class="cell-label">上傳</span>
      </div>
    `;
    return;
  }

  cell.classList.add('has-photo');
  const colors = photo.customColors || photo.colors || ['#888', '#aaa', '#ccc'];

  cell.innerHTML = `
    <img class="cell-img" src="${photo.dataURL}" alt=""
         style="object-position:${Math.round((photo.cropX??0.5)*100)}% ${Math.round((photo.cropY??0.5)*100)}%">
    ${state.showColors ? `<div class="cell-colors">
      ${colors.map(color => `
        <div class="cell-swatch" style="background:${color}">
          <span class="cell-hex" style="color:${getContrastHex(color)}">${color.toUpperCase()}</span>
        </div>
      `).join('')}
    </div>` : ''}
    <button class="cell-remove" onclick="removePhoto(${index}, event)" aria-label="移除">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
  `;
}

function removePhoto(index, event) {
  event.stopPropagation();
  state.photos[index] = null;
  renderPhotoCell(index);
  updateUploadCount();
  updateGenerateBtn();
  if (state.colorMode === 'auto') updateAutoBgMonoPicker();
  scheduleLivePreview();
}

function updateUploadCount() {
  document.getElementById('uploadCount').textContent = state.photos.filter(Boolean).length;
  document.getElementById('uploadMax').textContent = state.gridMode;
}

function updateGenerateBtn() {
  document.getElementById('btnGenerate').disabled = !state.photos.some(Boolean);
}

function updateFamilyBadge() {
  const badge = document.getElementById('familyBadge');
  const f = state.selectedFamily;
  if (!f) { badge.innerHTML = ''; return; }
  badge.innerHTML = `
    <div class="badge-swatches">
      ${f.swatches.map(s => `<span style="background:${s}"></span>`).join('')}
    </div>
  `;
}

function goToGridDirect() {
  state.directEntry = true;
  state.selectedFamily = null;
  document.querySelectorAll('.family-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btnToGrid').disabled = true;
  goToStep('grid');
}

function goGridBack() {
  goToStep(state.directEntry ? 'intro' : 'color');
}

function updateGridHeader() {
  const nav = document.querySelector('#view-grid .step-nav');
  if (!nav) return;
  if (state.directEntry) {
    nav.innerHTML = '<span class="step">直接拼圖</span>';
  } else {
    nav.innerHTML = `
      <span class="step dim">01 &nbsp;色系</span>
      <span class="step-line"></span>
      <span class="step active">02 &nbsp;拼圖</span>
    `;
  }
}

function buildBorderColors() {
  const container = document.getElementById('borderColorPicker');
  if (!container) return;
  BORDER_PRESETS.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'border-swatch' + (i === 0 ? ' active' : '');
    btn.title = p.label;
    if (p.color) {
      btn.style.background = p.color;
    } else {
      btn.classList.add('border-none');
      btn.innerHTML = `<svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/></svg>`;
    }
    btn.addEventListener('click', () => {
      state.borderColor = p.color;
      document.querySelectorAll('.border-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scheduleLivePreview();
    });
    container.appendChild(btn);
  });

  // Custom color button with native color picker
  const customBtn = document.createElement('button');
  customBtn.className = 'border-swatch border-custom';
  customBtn.title = '自訂顏色';

  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.style.cssText = 'position:absolute;opacity:0;width:0;height:0;pointer-events:none;';
  colorInput.value = '#E08040';
  colorInput.addEventListener('input', (e) => {
    const hex = e.target.value;
    state.borderColor = hex;
    customBtn.style.background = hex;
    document.querySelectorAll('.border-swatch').forEach(b => b.classList.remove('active'));
    customBtn.classList.add('active');
    scheduleLivePreview();
  });
  customBtn.addEventListener('click', () => colorInput.click());
  customBtn.appendChild(colorInput);
  container.appendChild(customBtn);
}

function buildTextColorPicker() {
  const container = document.getElementById('textColorPicker');
  if (!container) return;

  TEXT_COLOR_PRESETS.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'border-swatch' + (i === 0 ? ' active' : '');
    btn.title = p.label;
    if (p.color === '') {
      btn.classList.add('text-color-auto');
    } else {
      btn.style.background = p.color;
    }
    btn.addEventListener('click', () => {
      state.textColor = p.color;
      document.querySelectorAll('#textColorPicker .border-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scheduleLivePreview();
    });
    container.appendChild(btn);
  });

  // Custom color button
  const customBtn = document.createElement('button');
  customBtn.className = 'border-swatch border-custom';
  customBtn.title = '自訂文字顏色';

  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.style.cssText = 'position:absolute;opacity:0;width:0;height:0;pointer-events:none;';
  colorInput.value = '#1A1A1A';
  colorInput.addEventListener('input', (e) => {
    const hex = e.target.value;
    state.textColor = hex;
    customBtn.style.background = hex;
    document.querySelectorAll('#textColorPicker .border-swatch').forEach(b => b.classList.remove('active'));
    customBtn.classList.add('active');
    scheduleLivePreview();
  });
  customBtn.addEventListener('click', () => colorInput.click());
  customBtn.appendChild(colorInput);
  container.appendChild(customBtn);
}

function switchFontStyle(style) {
  state.fontStyle = style;
  document.querySelectorAll('.font-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.font === style);
  });
  scheduleLivePreview();
}

function switchOutputSize(w, h) {
  state.outputWidth  = w;
  state.outputHeight = h;
  document.querySelectorAll('.size-btn[data-w]').forEach(btn => {
    btn.classList.toggle('active', +btn.dataset.w === w && +btn.dataset.h === h);
  });
  const customBtn = document.querySelector('.size-btn[data-ratio="custom"]');
  if (customBtn) customBtn.classList.remove('active');
  const customRow = document.getElementById('outputCustomRow');
  if (customRow) customRow.style.display = 'none';
  scheduleLivePreview();
}

function switchOutputCustom() {
  document.querySelectorAll('.size-btn[data-w]').forEach(btn => btn.classList.remove('active'));
  const customBtn = document.querySelector('.size-btn[data-ratio="custom"]');
  if (customBtn) customBtn.classList.add('active');
  const customRow = document.getElementById('outputCustomRow');
  if (customRow) customRow.style.display = 'flex';
  const wInput = document.getElementById('customW');
  const hInput = document.getElementById('customH');
  if (wInput) wInput.value = state.outputWidth;
  if (hInput) hInput.value = state.outputHeight;
}

function applyCustomSize() {
  const w = parseInt(document.getElementById('customW')?.value) || 1080;
  const h = parseInt(document.getElementById('customH')?.value) || 1350;
  state.outputWidth  = Math.max(400, Math.min(4000, w));
  state.outputHeight = Math.max(400, Math.min(4000, h));
  scheduleLivePreview();
}

function toggleColorDisplay() {
  state.showColors = !state.showColors;
  const pill  = document.getElementById('colorTogglePill');
  const label = document.getElementById('colorToggleLabel');
  const opts  = document.getElementById('colorSchemeSelector');
  if (pill)  pill.classList.toggle('on', state.showColors);
  if (label) label.textContent = state.showColors ? '開啟' : '關閉';
  if (opts)  opts.style.opacity = state.showColors ? '1' : '0.38';
  state.photos.forEach((_, i) => renderPhotoCell(i));
  scheduleLivePreview();
}

function switchColorScheme(scheme) {
  state.colorScheme = scheme;
  document.querySelectorAll('.size-btn[data-scheme]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.scheme === scheme);
  });
  // Re-extract colors for all uploaded photos (skip custom-picked ones)
  state.photos.forEach((photo, i) => {
    if (photo?.img && !photo.customColors) {
      photo.colors = extractSchemeColors(photo.img, scheme);
      renderPhotoCell(i);
    }
  });
  if (state.colorMode === 'auto') {
    state.autoBgMonoIdx = -1; // reset to middle on scheme change
    updateAutoBgMonoPicker();
  }
  scheduleLivePreview();
}


/* ══════════════════════════════════════
   COLOR EXTRACTION
══════════════════════════════════════ */
function sampleImagePixels(img, size = 80) {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, size, size);
  return ctx.getImageData(0, 0, size, size).data;
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  switch (max) {
    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
    case g: h = ((b - r) / d + 2) / 6; break;
    case b: h = ((r - g) / d + 4) / 6; break;
  }
  return [h * 360, s, l];
}

function hueDistToFamily(h, family) {
  if (family.satMax !== undefined) return 0; // neutrals accept all hues
  const [min, max] = family.hueRange;
  if (min <= max) {
    if (h >= min && h <= max) return 0;
    return Math.min(Math.abs(h - min), Math.abs(h - max));
  } else {
    // Wraps around 0°
    if (h >= min || h <= max) return 0;
    return Math.min(
      Math.abs(h - min),
      Math.abs(h - max + 360),
      360 - Math.abs(h - min),
      360 - Math.abs(h - max)
    );
  }
}

function getColorBuckets(img) {
  const data = sampleImagePixels(img, 80);
  const map = new Map();
  for (let i = 0; i < data.length; i += 4) {
    const r = Math.round(data[i]   / 20) * 20;
    const g = Math.round(data[i+1] / 20) * 20;
    const b = Math.round(data[i+2] / 20) * 20;
    const key = (r << 16) | (g << 8) | b;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 60)
    .map(([key, count]) => {
      const r = (key >> 16) & 0xFF;
      const g = (key >> 8)  & 0xFF;
      const b =  key        & 0xFF;
      const [h, s, l] = rgbToHsl(r, g, b);
      return { r, g, b, h, s, l, count };
    });
}

function extractFamilyColors(img, family) {
  const buckets = getColorBuckets(img);
  if (!buckets.length) return ['#888888', '#AAAAAA', '#CCCCCC'];

  const dominant = buckets.find(p => p.l > 0.08 && p.l < 0.95) || buckets[0];

  let familyMatch = null, bestScore = Infinity;
  for (const p of buckets) {
    if (family.satMax !== undefined) {
      // Neutral family: pick lowest-saturation pixel
      const score = p.s * 200 - p.count * 0.01;
      if (score < bestScore) { bestScore = score; familyMatch = p; }
    } else {
      if (p.s < 0.06) continue;
      const dist = hueDistToFamily(p.h, family);
      if (dist < bestScore) { bestScore = dist; familyMatch = p; }
    }
  }
  if (!familyMatch || bestScore > 70) familyMatch = dominant;

  let accent = null;
  for (const p of buckets) {
    if (p === dominant || p === familyMatch) continue;
    if (colorDist(p, dominant) > 25 && colorDist(p, familyMatch) > 25) {
      accent = p; break;
    }
  }
  if (!accent) accent = buckets[Math.min(2, buckets.length - 1)] || dominant;

  return [
    toHex(familyMatch.r, familyMatch.g, familyMatch.b),
    toHex(dominant.r,    dominant.g,    dominant.b),
    toHex(accent.r,      accent.g,      accent.b),
  ];
}

function extractTopColors(img, n = 3) {
  const buckets = getColorBuckets(img);
  const result = [], used = new Set();
  for (const p of buckets) {
    if (result.length >= n) break;
    const hex = toHex(p.r, p.g, p.b);
    let tooClose = false;
    for (const prev of result) {
      if (colorDist(p, { r: parseInt(prev.slice(1,3),16), g: parseInt(prev.slice(3,5),16), b: parseInt(prev.slice(5,7),16) }) < 20) {
        tooClose = true; break;
      }
    }
    if (!tooClose && !used.has(hex)) { result.push(hex); used.add(hex); }
  }
  while (result.length < n) result.push('#AAAAAA');
  return result;
}

/* ── Harmonic color scheme extraction ── */

// Find bucket closest to targetH within hueTol, weighted by lightness proximity
function pickClosestToHue(buckets, targetH, targetL, hueTol) {
  let best = null, bestScore = Infinity;
  for (const p of buckets) {
    if (p.s < 0.04) continue;
    let hd = Math.abs(p.h - targetH);
    if (hd > 180) hd = 360 - hd;
    if (hd > hueTol) continue;
    const score = hd + Math.abs(p.l - targetL) * 160;
    if (score < bestScore) { bestScore = score; best = p; }
  }
  return best;
}

function extractSchemeColors(img, scheme) {
  const buckets = getColorBuckets(img);
  if (!buckets.length) {
    return scheme === 'tetrad' ? ['#888','#aaa','#bbb','#ccc'] : ['#888','#aaa','#ccc'];
  }

  // Dominant: most saturated pixel in mid-lightness range
  const dominant = [...buckets]
    .filter(p => p.s > 0.06 && p.l > 0.1 && p.l < 0.9)
    .sort((a, b) => b.s * b.count - a.s * a.count)[0] || buckets[0];

  const H = dominant.h;
  const S = Math.max(dominant.s, 0.28);
  const L = Math.max(0.32, Math.min(0.65, dominant.l));

  // Try to find a real pixel near the target hue; synthesize if none found
  const pickOrSynth = (targetH, targetL, hueTol = 38) => {
    const best = pickClosestToHue(buckets, targetH, targetL, hueTol);
    if (best) return toHex(best.r, best.g, best.b);
    const [r, g, b] = hslToRgb(targetH / 360, Math.min(S, 0.72), targetL);
    return toHex(r, g, b);
  };

  switch (scheme) {
    case 'mono':
      // Same hue, three distinct lightness levels (light → mid → dark)
      return [
        pickOrSynth(H, Math.min(L * 1.35, 0.80), 18),
        pickOrSynth(H, L, 18),
        pickOrSynth(H, Math.max(L * 0.55, 0.22), 18),
      ];
    case 'adjacent':
      // Three hues 30° apart (analogous)
      return [
        pickOrSynth((H - 30 + 360) % 360, L, 30),
        pickOrSynth(H, L, 30),
        pickOrSynth((H + 30) % 360, L, 30),
      ];
    case 'triad':
      // Three hues 120° apart
      return [
        pickOrSynth(H, L, 38),
        pickOrSynth((H + 120) % 360, L, 38),
        pickOrSynth((H + 240) % 360, L, 38),
      ];
    case 'tetrad':
      // Four hues 90° apart
      return [
        pickOrSynth(H, L, 38),
        pickOrSynth((H + 90) % 360, L, 38),
        pickOrSynth((H + 180) % 360, L, 38),
        pickOrSynth((H + 270) % 360, L, 38),
      ];
    default:
      return extractTopColors(img, 3);
  }
}

function colorDist(a, b) {
  return Math.sqrt((a.r-b.r)**2 + (a.g-b.g)**2 + (a.b-b.b)**2) / 4.41;
}

function toHex(r, g, b) {
  return '#' + [r,g,b].map(v => Math.min(255, Math.max(0, v)).toString(16).padStart(2,'0')).join('');
}

function getContrastHex(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const L = (0.299*r + 0.587*g + 0.114*b) / 255;
  return L > 0.52 ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.88)';
}


/* ══════════════════════════════════════
   CANVAS LAYOUT CONFIGS
══════════════════════════════════════ */
function getLayout(mode) {
  const W = state.outputWidth  || 1080;
  const H = state.outputHeight || 1350;
  const s = Math.min(W, H) / 1080;

  const BW       = state.borderColor ? Math.round((state.borderWidth || 0) * (W / 1080)) : 0;
  const HEADER_H = Math.round(210 * s) + BW;
  const FOOTER_H = Math.round(160 * s) + BW;
  const SIDE_PAD = Math.max(Math.round(30 * s), BW + Math.round(10 * s));
  const GAP      = Math.round(8 * s);

  if (mode === 1) {
    const CELL_W = W - 2 * SIDE_PAD;
    const CELL_H = H - HEADER_H - FOOTER_H;
    const COLOR_BAR_H = state.showColors ? Math.round(68 * s) : 0;
    const PHOTO_H = CELL_H - COLOR_BAR_H;
    return {
      W, H, HEADER_H, FOOTER_H, SIDE_PAD, GAP: 0, scale: s, BW,
      COLOR_BAR_H, CELL_W, CELL_H, PHOTO_H,
      COLS: 1, ROWS: 1, COUNT: 1,
      cellX: () => SIDE_PAD,
      cellY: () => HEADER_H,
    };
  }

  if (mode === 3) {
    const GRID_W = W - 2 * SIDE_PAD;
    const CELL_W = Math.floor((GRID_W - 2 * GAP) / 3);
    const CELL_H = H - HEADER_H - FOOTER_H;
    const COLOR_BAR_H = state.showColors ? Math.round(56 * s) : 0;
    const PHOTO_H = CELL_H - COLOR_BAR_H;
    return {
      W, H, HEADER_H, FOOTER_H, SIDE_PAD, GAP, scale: s, BW,
      COLOR_BAR_H, CELL_W, CELL_H, PHOTO_H,
      COLS: 3, ROWS: 1, COUNT: 3,
      cellX: (col) => SIDE_PAD + col * (CELL_W + GAP),
      cellY: () => HEADER_H,
    };
  }

  // mode === 9
  const GRID_W = W - 2 * SIDE_PAD;
  const CELL_W = Math.floor((GRID_W - 2 * GAP) / 3);
  const GRID_H = H - HEADER_H - FOOTER_H;
  const CELL_H = Math.floor((GRID_H - 2 * GAP) / 3);
  const COLOR_BAR_H = state.showColors ? Math.round(48 * s) : 0;
  const PHOTO_H = CELL_H - COLOR_BAR_H;
  return {
    W, H, HEADER_H, FOOTER_H, SIDE_PAD, GAP, scale: s, BW,
    COLOR_BAR_H, CELL_W, CELL_H, PHOTO_H,
    COLS: 3, ROWS: 3, COUNT: 9,
    cellX: (col) => SIDE_PAD + col * (CELL_W + GAP),
    cellY: (row) => HEADER_H + row * (CELL_H + GAP),
  };
}


/* ══════════════════════════════════════
   COLLAGE CANVAS RENDERING
══════════════════════════════════════ */
/* ── Canvas helpers ── */
function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function shadeColor(hex, pct) {
  const f = 1 + pct / 100;
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return toHex(
    Math.round(Math.min(255, Math.max(0, r * f))),
    Math.round(Math.min(255, Math.max(0, g * f))),
    Math.round(Math.min(255, Math.max(0, b * f)))
  );
}

function drawFrameBorder(ctx, W, H, color) {
  const BW = Math.round((state.borderWidth || 50) * (W / 1080));
  if (BW <= 0) return;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, W, BW);
  ctx.fillRect(0, H - BW, W, BW);
  ctx.fillRect(0, 0, BW, H);
  ctx.fillRect(W - BW, 0, BW, H);
  // Inner hairline
  const hairOff = Math.round(6 * W / 1080);
  ctx.strokeStyle = color === '#1A1A1A' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 1;
  ctx.strokeRect(BW + hairOff, BW + hairOff, W - 2 * (BW + hairOff), H - 2 * (BW + hairOff));
}

function drawBackground(ctx, W, H, family) {
  const mode = state.colorMode;

  if (mode === 'white') {
    // 純白，無漸層
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    return;
  }

  if (mode === 'auto') {
    const colors = getAutoColors(); // sorted light → dark
    const style  = state.autoBgStyle || 'grad-light';
    if (style === 'grad-light') {
      // 最淺色在上，最深色在下
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(1, colors[colors.length - 1]);
      ctx.fillStyle = grad;
    } else if (style === 'grad-dark') {
      // 最深色在上，最淺色在下
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, colors[colors.length - 1]);
      grad.addColorStop(1, colors[0]);
      ctx.fillStyle = grad;
    } else {
      // 單色：使用選定的顏色
      let idx = state.autoBgMonoIdx;
      if (idx < 0 || idx >= colors.length) idx = Math.floor(colors.length / 2);
      ctx.fillStyle = colors[idx];
    }
    ctx.fillRect(0, 0, W, H);
    return;
  }

  if (mode === 'border') {
    // 與邊框顏色相同，素色無漸層
    ctx.fillStyle = state.borderColor || '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    return;
  }

  if (mode === 'family') {
    // 色系中間色，素色無漸層
    const mid = (family.swatches && family.swatches[1]) || family.bgColor;
    ctx.fillStyle = mid;
    ctx.fillRect(0, 0, W, H);
    return;
  }

  // fallback
  ctx.fillStyle = family.bgColor;
  ctx.fillRect(0, 0, W, H);
}

async function renderCollage() {
  await document.fonts.ready;

  const family = getEffectiveFamily();
  const layout = getLayout(state.gridMode);
  const { W, H, COLS } = layout;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  drawBackground(ctx, W, H, family);

  drawHeader(ctx, family, layout);

  for (let i = 0; i < state.gridMode; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    drawCell(ctx, layout.cellX(col), layout.cellY(row), state.photos[i], family, layout);
  }

  drawFooter(ctx, family, layout);

  if (state.borderColor) {
    drawFrameBorder(ctx, W, H, state.borderColor);
  }

  return canvas;
}

function drawHeader(ctx, family, L) {
  const { W, HEADER_H, SIDE_PAD } = L;
  const s = L.scale || 1;
  const BW = L.BW || 0;
  const textColor = state.textColor || family.textColor;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  const eventName  = state.eventName  || '街拍活動';
  const eventDate  = state.eventDate  || '';
  const authorName = state.authorName || '';
  const hasDate    = !!eventDate;
  const hasAuthor  = !!authorName;

  // Dynamic font size for event name
  const nameFontSize = Math.min(Math.round(80 * s), Math.max(Math.round(44 * s), Math.floor(W / (eventName.length * 0.68 + 1.8))));
  const subLineH = Math.round(34 * s);
  const totalH   = nameFontSize + (hasDate ? subLineH : 0) + (hasAuthor ? subLineH - Math.round(2 * s) : 0);
  // Center text in the area below the top border
  const startY   = BW + (HEADER_H - BW - totalH) / 2 + nameFontSize * 0.82;

  // Small decorative bar above title
  const barY = startY - nameFontSize - Math.round(24 * s);
  if (barY > BW + 8) {
    ctx.strokeStyle = family.accentColor + '55';
    ctx.lineWidth = 1;
    const barOff = Math.round(28 * s);
    ctx.beginPath();
    ctx.moveTo(W / 2 - barOff, barY); ctx.lineTo(W / 2 + barOff, barY);
    ctx.stroke();
    ctx.fillStyle = family.accentColor + '80';
    ctx.beginPath(); ctx.arc(W / 2, barY, Math.round(2 * s), 0, Math.PI * 2); ctx.fill();
  }

  // Event name — use Chinese-capable fonts per style
  const fs22 = Math.round(22 * s), fs21 = Math.round(21 * s), fs20 = Math.round(20 * s), fs19 = Math.round(19 * s);
  let titleFont, dateFont, authorFont;
  if (state.fontStyle === 'serif') {
    titleFont  = `400 ${nameFontSize}px "ZCOOL QingKe HuangYou", cursive`;
    dateFont   = `400 ${fs22}px "ZCOOL QingKe HuangYou", cursive`;
    authorFont = `400 ${fs20}px "ZCOOL QingKe HuangYou", cursive`;
  } else if (state.fontStyle === 'sans') {
    titleFont  = `300 ${nameFontSize}px "DM Sans", "Noto Sans TC", Arial, sans-serif`;
    dateFont   = `300 ${fs20}px "DM Sans", "Noto Sans TC", Arial, sans-serif`;
    authorFont = `300 ${fs19}px "DM Sans", "Noto Sans TC", Arial, sans-serif`;
  } else {
    titleFont  = `300 ${nameFontSize}px "Cormorant Garamond", "Noto Serif TC", Georgia, serif`;
    dateFont   = `300 italic ${fs22}px "Cormorant Garamond", "Noto Serif TC", Georgia, serif`;
    authorFont = `italic 300 ${fs21}px "Cormorant Garamond", "Noto Serif TC", Georgia, serif`;
  }
  ctx.font = titleFont;
  ctx.fillStyle = textColor;
  ctx.fillText(eventName, W / 2, startY);

  let nextY = startY + subLineH + Math.round(4 * s);

  if (hasDate) {
    ctx.font = dateFont;
    ctx.fillStyle = textColor + '90';
    ctx.fillText(eventDate, W / 2, nextY);
    nextY += subLineH - Math.round(4 * s);
  }

  if (hasAuthor) {
    ctx.font = authorFont;
    ctx.fillStyle = textColor + '75';
    ctx.fillText(authorName, W / 2, nextY);
  }

  // Ornamental divider
  const divY = HEADER_H - Math.round(26 * s);
  ctx.beginPath();
  ctx.strokeStyle = textColor + '1C';
  ctx.lineWidth = 1;
  ctx.moveTo(SIDE_PAD + Math.round(90 * s), divY);
  ctx.lineTo(W - SIDE_PAD - Math.round(90 * s), divY);
  ctx.stroke();

  // Three-dot ornament on divider
  const dotOff = Math.round(22 * s);
  [-dotOff, 0, dotOff].forEach((offset, i) => {
    ctx.beginPath();
    ctx.arc(W / 2 + offset, divY, i === 1 ? Math.round(3 * s) : Math.round(1.5 * s), 0, Math.PI * 2);
    ctx.fillStyle = family.accentColor + (i === 1 ? 'C0' : '60');
    ctx.fill();
  });
}

function drawCell(ctx, x, y, photo, family, L) {
  const { CELL_W, CELL_H, PHOTO_H, COLOR_BAR_H } = L;
  const s = L.scale || 1;
  const R = state.gridMode === 1 ? Math.round(8 * s) : state.gridMode === 3 ? Math.round(5 * s) : Math.round(3 * s);

  if (!photo) {
    ctx.save();
    roundedRect(ctx, x, y, CELL_W, CELL_H, R);
    ctx.fillStyle = family.textColor + '0A';
    ctx.fill();
    ctx.strokeStyle = family.textColor + '18';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = family.textColor + '28';
    ctx.lineWidth = 1.5;
    const cx = x + CELL_W / 2, cy = y + CELL_H / 2 - 8, arm = 14;
    ctx.beginPath();
    ctx.moveTo(cx - arm, cy); ctx.lineTo(cx + arm, cy);
    ctx.moveTo(cx, cy - arm); ctx.lineTo(cx, cy + arm);
    ctx.stroke();
    return;
  }

  // Clip entire cell with rounded corners
  ctx.save();
  roundedRect(ctx, x, y, CELL_W, CELL_H, R);
  ctx.clip();

  // Photo
  drawImageCover(ctx, photo.img, x, y, CELL_W, PHOTO_H, photo.cropX ?? 0.5, photo.cropY ?? 0.5);

  // Color swatch bar (supports 3 or 4 swatches)
  const colors = photo.customColors || photo.colors || ['#888', '#aaa', '#bbb'];
  const swatchW = CELL_W / colors.length;
  const baseFontSize = state.gridMode === 1 ? 14 : colors.length > 3 ? 10 : 12;
  const hexFontSize  = Math.round(baseFontSize * s);
  colors.forEach((hex, ci) => {
    const sx = x + ci * swatchW;
    const sy = y + PHOTO_H;
    ctx.fillStyle = hex;
    ctx.fillRect(sx, sy, swatchW, COLOR_BAR_H);

    ctx.font = `400 ${hexFontSize}px "DM Sans", monospace, Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = getContrastHexCanvas(hex);
    ctx.fillText(hex.toUpperCase(), sx + swatchW / 2, sy + COLOR_BAR_H / 2);
  });

  ctx.restore();

  // Subtle cell inset shadow
  ctx.save();
  roundedRect(ctx, x, y, CELL_W, CELL_H, R);
  ctx.strokeStyle = 'rgba(0,0,0,0.07)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

function drawFooter(ctx, family, L) {
  const { W, H, FOOTER_H, SIDE_PAD } = L;
  const s = L.scale || 1;
  const BW = L.BW || 0;
  const textColor = state.textColor || family.textColor;
  const fy = H - FOOTER_H;

  // Top divider
  ctx.beginPath();
  ctx.strokeStyle = textColor + '18';
  ctx.lineWidth = 1;
  ctx.moveTo(SIDE_PAD + Math.round(60 * s), fy + 1);
  ctx.lineTo(W - SIDE_PAD - Math.round(60 * s), fy + 1);
  ctx.stroke();

  if (state.selectedFamily) {
    // Family swatches — inside a pill background
    const swatchR   = Math.round(9 * s);
    const swatchGap = Math.round(8 * s);
    const numSw = family.swatches.length;
    const totalSwatch = numSw * (swatchR * 2 + swatchGap) - swatchGap;
    const swatchStartX = (W - totalSwatch) / 2;
    const swatchY = fy + Math.round(42 * s);

    // Pill bg
    const pillPad = Math.round(24 * s), pillVPad = Math.round(12 * s);
    const pillW = totalSwatch + pillPad, pillH = swatchR * 2 + pillVPad;
    roundedRect(ctx, (W - pillW) / 2, swatchY - swatchR - pillVPad / 2, pillW, pillH, pillH / 2);
    ctx.fillStyle = textColor + '0C';
    ctx.fill();

    family.swatches.forEach((color, i) => {
      const cx = swatchStartX + i * (swatchR * 2 + swatchGap) + swatchR;
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(cx, swatchY, swatchR, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = textColor + '1A';
      ctx.lineWidth = 0.8; ctx.stroke();
    });
  }

  // Unique color dots from all photos (use customColors if available)
  const allColors = [...new Set(state.photos.filter(Boolean).flatMap(p => p.customColors || p.colors || []))].slice(0, 14);
  if (allColors.length > 0) {
    const dotR = Math.round(5 * s), dotGap = Math.round(6 * s);
    const totalDots = allColors.length * (dotR * 2 + dotGap) - dotGap;
    const dotStartX = (W - Math.min(totalDots, W - 2 * SIDE_PAD)) / 2;
    const dotY = fy + Math.round(92 * s);
    allColors.forEach((hex, i) => {
      const dx = dotStartX + i * (dotR * 2 + dotGap);
      if (dx + dotR * 2 > W - SIDE_PAD) return;
      ctx.fillStyle = hex;
      ctx.beginPath(); ctx.arc(dx + dotR, dotY, dotR, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = textColor + '14';
      ctx.lineWidth = 0.6; ctx.stroke();
    });
  }

  // Branding
  const modeLabels = { 1: '1 格', 3: '3 格', 9: '9 格' };
  ctx.font = `300 ${Math.round(13 * s)}px "DM Sans", "Noto Sans TC", Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = textColor + '35';
  ctx.fillText(`Street Palette  ·  ${modeLabels[state.gridMode] || ''}`, W / 2, H - BW - Math.round(18 * s));
}

function drawImageCover(ctx, img, x, y, w, h, ox = 0.5, oy = 0.5) {
  const ir = img.width / img.height;
  const cr = w / h;
  let sx, sy, sw, sh;
  if (ir > cr) {
    sh = img.height; sw = img.height * cr;
    sx = (img.width - sw) * ox; sy = 0;
  } else {
    sw = img.width; sh = img.width / cr;
    sx = 0; sy = (img.height - sh) * oy;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function getContrastHexCanvas(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const L = (0.299*r + 0.587*g + 0.114*b) / 255;
  return L > 0.52 ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.88)';
}


/* ══════════════════════════════════════
   GENERATE & MODAL
══════════════════════════════════════ */
async function triggerGenerate() {
  const btn = document.getElementById('btnGenerate');
  btn.classList.add('loading');
  btn.textContent = '生成中…';

  try {
    await sleep(30);
    const fullCanvas = await renderCollage();
    state.collageCanvas = fullCanvas;

    const previewCanvas = document.getElementById('previewCanvas');
    const maxW = Math.min(460, window.innerWidth * 0.8);
    const scale = maxW / fullCanvas.width;
    previewCanvas.width  = Math.round(fullCanvas.width  * scale);
    previewCanvas.height = Math.round(fullCanvas.height * scale);
    previewCanvas.getContext('2d').drawImage(fullCanvas, 0, 0, previewCanvas.width, previewCanvas.height);
    openModal();
  } catch (err) {
    console.error('Generate failed:', err);
    alert('生成失敗，請再試一次。');
  } finally {
    btn.classList.remove('loading');
    btn.textContent = '生成拼圖';
    updateGenerateBtn();
  }
}

function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}


/* ══════════════════════════════════════
   CROP MODAL
══════════════════════════════════════ */
function openCropModal(index) {
  const photo = state.photos[index];
  if (!photo) return;
  cropState.index = index;
  cropState.ox = photo.cropX ?? 0.5;
  cropState.oy = photo.cropY ?? 0.5;

  cropState.scale = 1.0;
  const zoomSlider = document.getElementById('cropZoom');
  const zoomVal    = document.getElementById('cropZoomVal');
  if (zoomSlider) zoomSlider.value = 100;
  if (zoomVal)    zoomVal.textContent = '100%';

  // Reset color pick state
  cropState.colorPickMode  = false;
  cropState.colorTabVisited = false;
  cropState.pickedColors   = photo.customColors ? [...photo.customColors] : [];
  cropState.pickMarkers.forEach(m => m.remove());
  cropState.pickMarkers = [];

  const img   = document.getElementById('cropImg');
  const modal = document.getElementById('cropModal');
  img.onload = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setCropMode('crop');
    updateColorPickDotsUI();
    requestAnimationFrame(updateCropViewport);
  };
  img.src = photo.dataURL;
}

function updateCropViewport() {
  const img     = document.getElementById('cropImg');
  const stage   = document.getElementById('cropStage');
  const cropBox = document.getElementById('cropBox');
  if (!img || !stage || !cropBox || !img.naturalWidth) return;

  const natW = img.naturalWidth, natH = img.naturalHeight;
  const imgAspect = natW / natH;
  const stageW = stage.offsetWidth, stageH = stage.offsetHeight;

  // Rendered image bounds inside stage (object-fit: contain simulation)
  let rW, rH, rX, rY;
  if (imgAspect > stageW / stageH) {
    rW = stageW; rH = stageW / imgAspect; rX = 0; rY = (stageH - rH) / 2;
  } else {
    rH = stageH; rW = stageH * imgAspect; rX = (stageW - rW) / 2; rY = 0;
  }

  // Crop viewport — matches the canvas cell's photo aspect ratio
  const L = getLayout(state.gridMode);
  const cellAspect = L.CELL_W / L.PHOTO_H;
  let vpWBase, vpHBase;
  if (imgAspect > cellAspect) { vpHBase = rH; vpWBase = rH * cellAspect; }
  else                         { vpWBase = rW; vpHBase = rW / cellAspect; }

  // Apply zoom scale: scale < 1 → smaller viewport → zooms in
  const scale = cropState.scale ?? 1.0;
  const vpW = vpWBase * scale;
  const vpH = vpHBase * scale;

  const maxOX = Math.max(0, rW - vpW);
  const maxOY = Math.max(0, rH - vpH);

  cropBox.style.width  = vpW + 'px';
  cropBox.style.height = vpH + 'px';
  cropBox.style.left   = (rX + cropState.ox * maxOX) + 'px';
  cropBox.style.top    = (rY + cropState.oy * maxOY) + 'px';

  Object.assign(cropState, { _rX: rX, _rY: rY, _rW: rW, _rH: rH, _vpW: vpW, _vpH: vpH, _maxOX: maxOX, _maxOY: maxOY });
}

function confirmCrop() {
  const idx = cropState.index;
  if (idx >= 0 && state.photos[idx]) {
    state.photos[idx].cropX = cropState.ox;
    state.photos[idx].cropY = cropState.oy;
    // Save custom colors only if user visited the color tab
    if (cropState.colorTabVisited) {
      state.photos[idx].customColors = cropState.pickedColors.length > 0
        ? [...cropState.pickedColors]
        : null;
    }
    renderPhotoCell(idx);
  }
  cancelCropModal();
  scheduleLivePreview();
}

function cancelCropModal() {
  cropState.pickMarkers.forEach(m => m.remove());
  cropState.pickMarkers = [];
  const modal = document.getElementById('cropModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  cropState.index = -1;
}

/* ── Crop modal mode switch ── */
function setCropMode(mode) {
  cropState.colorPickMode = (mode === 'color');
  if (mode === 'color') cropState.colorTabVisited = true;

  document.querySelectorAll('.crop-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.mode === mode);
  });

  const stage        = document.getElementById('cropStage');
  const cropBox      = document.getElementById('cropBox');
  const zoomRow      = document.querySelector('.crop-zoom-row');
  const cropHint     = document.getElementById('cropHint');
  const colorPickUI  = document.getElementById('colorPickUI');
  const colorPickHint = document.getElementById('colorPickHint');

  if (mode === 'color') {
    stage.classList.add('pick-mode');
    if (cropBox)      cropBox.style.display     = 'none';
    if (zoomRow)      zoomRow.style.display      = 'none';
    if (cropHint)     cropHint.style.display     = 'none';
    if (colorPickUI)  colorPickUI.style.display  = 'flex';
    if (colorPickHint) colorPickHint.style.display = 'block';
  } else {
    stage.classList.remove('pick-mode');
    if (cropBox)      cropBox.style.display     = '';
    if (zoomRow)      zoomRow.style.display      = '';
    if (cropHint)     cropHint.style.display     = '';
    if (colorPickUI)  colorPickUI.style.display  = 'none';
    if (colorPickHint) colorPickHint.style.display = 'none';
    requestAnimationFrame(updateCropViewport);
  }
}

function updateColorPickDotsUI() {
  const container = document.getElementById('colorPickDots');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    if (i < cropState.pickedColors.length) {
      const hex = cropState.pickedColors[i];
      const idx = i;
      const item = document.createElement('div');
      item.className = 'pick-dot-item';
      const swatch = document.createElement('div');
      swatch.className = 'pick-dot-swatch';
      swatch.style.background = hex;
      const del = document.createElement('button');
      del.className = 'pick-dot-del';
      del.textContent = '×';
      del.title = '刪除此色點';
      del.addEventListener('click', (e) => { e.stopPropagation(); deletePickedColor(idx); });
      swatch.appendChild(del);
      const hexLabel = document.createElement('span');
      hexLabel.className = 'pick-dot-hex';
      hexLabel.textContent = hex.toUpperCase();
      item.appendChild(swatch);
      item.appendChild(hexLabel);
      container.appendChild(item);
    } else {
      const empty = document.createElement('div');
      empty.className = 'pick-dot-empty';
      empty.textContent = '+';
      container.appendChild(empty);
    }
  }
}

function deletePickedColor(index) {
  cropState.pickedColors.splice(index, 1);
  if (index < cropState.pickMarkers.length) {
    cropState.pickMarkers[index].remove();
    cropState.pickMarkers.splice(index, 1);
  }
  updateColorPickDotsUI();
}

function clearPickedColors() {
  cropState.pickedColors = [];
  cropState.pickMarkers.forEach(m => m.remove());
  cropState.pickMarkers = [];
  updateColorPickDotsUI();
}

function computeImageBounds() {
  const img   = document.getElementById('cropImg');
  const stage = document.getElementById('cropStage');
  if (!img || !stage || !img.naturalWidth) return null;
  const natW = img.naturalWidth, natH = img.naturalHeight;
  const imgAspect = natW / natH;
  const stageW = stage.offsetWidth, stageH = stage.offsetHeight;
  let rW, rH, rX, rY;
  if (imgAspect > stageW / stageH) {
    rW = stageW; rH = stageW / imgAspect; rX = 0; rY = (stageH - rH) / 2;
  } else {
    rH = stageH; rW = stageH * imgAspect; rX = (stageW - rW) / 2; rY = 0;
  }
  return { rX, rY, rW, rH };
}

function initCropColorPick() {
  const stage = document.getElementById('cropStage');
  if (!stage) return;

  stage.addEventListener('click', (e) => {
    if (!cropState.colorPickMode) return;
    if (cropState.pickedColors.length >= 3) return;

    const bounds = computeImageBounds();
    if (!bounds) return;
    const { rX, rY, rW, rH } = bounds;

    const rect   = stage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const relX = (clickX - rX) / rW;
    const relY = (clickY - rY) / rH;
    if (relX < 0 || relX > 1 || relY < 0 || relY > 1) return;

    const img = document.getElementById('cropImg');
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = 1; tmpCanvas.height = 1;
    const tmpCtx = tmpCanvas.getContext('2d', { willReadFrequently: true });
    const px = Math.floor(relX * img.naturalWidth);
    const py = Math.floor(relY * img.naturalHeight);
    tmpCtx.drawImage(img, px, py, 1, 1, 0, 0, 1, 1);
    const [r, g, b] = tmpCtx.getImageData(0, 0, 1, 1).data;
    const hex = toHex(r, g, b);

    cropState.pickedColors.push(hex);

    // Place marker dot on stage
    const marker = document.createElement('div');
    marker.className = 'pick-marker';
    marker.style.left       = clickX + 'px';
    marker.style.top        = clickY + 'px';
    marker.style.background = hex;
    stage.appendChild(marker);
    cropState.pickMarkers.push(marker);

    updateColorPickDotsUI();
  });
}

function initCropDrag() {
  const cropBox = document.getElementById('cropBox');
  if (!cropBox) return;

  const onStart = (e) => {
    e.preventDefault();
    cropState.dragging = true;
    const pt = e.touches ? e.touches[0] : e;
    cropState.startX = pt.clientX; cropState.startY = pt.clientY;
    cropState.startOX = cropState.ox; cropState.startOY = cropState.oy;
  };
  const onMove = (e) => {
    if (!cropState.dragging) return;
    e.preventDefault();
    const pt = e.touches ? e.touches[0] : e;
    const dx = pt.clientX - cropState.startX;
    const dy = pt.clientY - cropState.startY;
    if (cropState._maxOX > 0)
      cropState.ox = Math.max(0, Math.min(1, cropState.startOX + dx / cropState._maxOX));
    if (cropState._maxOY > 0)
      cropState.oy = Math.max(0, Math.min(1, cropState.startOY + dy / cropState._maxOY));
    updateCropViewport();
  };
  const onEnd = () => { cropState.dragging = false; };

  cropBox.addEventListener('mousedown',  onStart);
  cropBox.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('mousemove',  onMove);
  document.addEventListener('touchmove',  onMove, { passive: false });
  document.addEventListener('mouseup',   onEnd);
  document.addEventListener('touchend',  onEnd);
}

function downloadCollage() {
  if (!state.collageCanvas) return;
  const name = state.eventName || '街拍活動';
  const date = state.eventDate
    ? state.eventDate.replace(/[./\s]/g, '-')
    : new Date().toISOString().slice(0, 10);
  const filename = `${name}-${date}.png`;

  state.collageCanvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}


/* ══════════════════════════════════════
   LIVE PREVIEW
══════════════════════════════════════ */
let _livePreviewTimer = null;

function scheduleLivePreview() {
  clearTimeout(_livePreviewTimer);
  _livePreviewTimer = setTimeout(updateLivePreview, 200);
}

async function updateLivePreview() {
  const canvas      = document.getElementById('livePreviewCanvas');
  const placeholder = document.getElementById('livePreviewPlaceholder');
  if (!canvas) return;

  const hasPhotos = state.photos.some(Boolean);
  if (!hasPhotos) {
    canvas.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
    return;
  }

  if (placeholder) placeholder.style.display = 'none';
  canvas.style.display = 'block';

  try {
    const fullCanvas = await renderCollage();
    const body   = document.getElementById('livePreviewBody');
    const availW = body ? Math.max(100, body.clientWidth - 32) : 200;
    const scale  = availW / fullCanvas.width;
    canvas.width  = Math.round(fullCanvas.width  * scale);
    canvas.height = Math.round(fullCanvas.height * scale);
    canvas.getContext('2d').drawImage(fullCanvas, 0, 0, canvas.width, canvas.height);
  } catch (err) {
    console.warn('Live preview update failed:', err);
  }
}


/* ══════════════════════════════════════
   UTILITIES
══════════════════════════════════════ */
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
