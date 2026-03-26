/**
 * 经典 5x7 ASCII 点阵字库（95 个字符，覆盖 0x20..0x7E）。
 *
 * 存储格式（非常关键）：
 * - 每个字符占 5 个 byte（5 列）
 * - 按“列”存储（列优先）
 * - 每个 byte 的 bit0 表示最上方像素（低位在顶端）
 *
 * 这样读取时：列 = glyph[x]，像素是否点亮 = (col >> y) & 1。
 */
const FONT_5X7 = [
  0x00,0x00,0x00,0x00,0x00, 0x00,0x00,0x5f,0x00,0x00, 0x00,0x07,0x00,0x07,0x00, 0x14,0x7f,0x14,0x7f,0x14,
  0x24,0x2a,0x7f,0x2a,0x12, 0x23,0x13,0x08,0x64,0x62, 0x36,0x49,0x55,0x22,0x50, 0x00,0x05,0x03,0x00,0x00,
  0x00,0x1c,0x22,0x41,0x00, 0x00,0x41,0x22,0x1c,0x00, 0x14,0x08,0x3e,0x08,0x14, 0x08,0x08,0x3e,0x08,0x08,
  0x00,0x50,0x30,0x00,0x00, 0x08,0x08,0x08,0x08,0x08, 0x00,0x60,0x60,0x00,0x00, 0x20,0x10,0x08,0x04,0x02,
  0x3e,0x51,0x49,0x45,0x3e, 0x00,0x42,0x7f,0x40,0x00, 0x42,0x61,0x51,0x49,0x46, 0x21,0x41,0x45,0x4b,0x31,
  0x18,0x14,0x12,0x7f,0x10, 0x27,0x45,0x45,0x45,0x39, 0x3c,0x4a,0x49,0x49,0x30, 0x01,0x71,0x09,0x05,0x03,
  0x36,0x49,0x49,0x49,0x36, 0x06,0x49,0x49,0x29,0x1e, 0x00,0x36,0x36,0x00,0x00, 0x00,0x56,0x36,0x00,0x00,
  0x08,0x14,0x22,0x41,0x00, 0x14,0x14,0x14,0x14,0x14, 0x00,0x41,0x22,0x14,0x08, 0x02,0x01,0x51,0x09,0x06,
  0x32,0x49,0x79,0x41,0x3e, 0x7e,0x11,0x11,0x11,0x7e, 0x7f,0x49,0x49,0x49,0x36, 0x3e,0x41,0x41,0x41,0x22,
  0x7f,0x41,0x41,0x22,0x1c, 0x7f,0x49,0x49,0x49,0x41, 0x7f,0x09,0x09,0x09,0x01, 0x3e,0x41,0x49,0x49,0x7a,
  0x7f,0x08,0x08,0x08,0x7f, 0x00,0x41,0x7f,0x41,0x00, 0x20,0x40,0x41,0x3f,0x01, 0x7f,0x08,0x14,0x22,0x41,
  0x7f,0x40,0x40,0x40,0x40, 0x7f,0x02,0x0c,0x02,0x7f, 0x7f,0x04,0x08,0x10,0x7f, 0x3e,0x41,0x41,0x41,0x3e,
  0x7f,0x09,0x09,0x09,0x06, 0x3e,0x41,0x51,0x21,0x5e, 0x7f,0x09,0x19,0x29,0x46, 0x46,0x49,0x49,0x49,0x31,
  0x01,0x01,0x7f,0x01,0x01, 0x3f,0x40,0x40,0x40,0x3f, 0x1f,0x20,0x40,0x20,0x1f, 0x3f,0x40,0x38,0x40,0x3f,
  0x63,0x14,0x08,0x14,0x63, 0x07,0x08,0x70,0x08,0x07, 0x61,0x51,0x49,0x45,0x43, 0x00,0x7f,0x41,0x41,0x00,
  0x02,0x04,0x08,0x10,0x20, 0x00,0x41,0x41,0x7f,0x00, 0x04,0x02,0x01,0x02,0x04, 0x40,0x40,0x40,0x40,0x40,
  0x00,0x01,0x02,0x04,0x00, 0x20,0x54,0x54,0x54,0x78, 0x7f,0x48,0x44,0x44,0x38, 0x38,0x44,0x44,0x44,0x20,
  0x38,0x44,0x44,0x48,0x7f, 0x38,0x54,0x54,0x54,0x18, 0x08,0x7e,0x09,0x01,0x02, 0x0c,0x52,0x52,0x52,0x3e,
  0x7f,0x08,0x04,0x04,0x78, 0x00,0x44,0x7d,0x40,0x00, 0x20,0x40,0x44,0x3d,0x00, 0x7f,0x10,0x28,0x44,0x00,
  0x00,0x41,0x7f,0x40,0x00, 0x7c,0x04,0x18,0x04,0x78, 0x7c,0x08,0x04,0x04,0x78, 0x38,0x44,0x44,0x44,0x38,
  0x7c,0x14,0x14,0x14,0x08, 0x08,0x14,0x14,0x18,0x7c, 0x7c,0x08,0x04,0x04,0x08, 0x48,0x54,0x54,0x54,0x20,
  0x04,0x3f,0x44,0x40,0x20, 0x3c,0x40,0x40,0x20,0x7c, 0x1c,0x20,0x40,0x20,0x1c, 0x3c,0x40,0x30,0x40,0x3c,
  0x44,0x28,0x10,0x28,0x44, 0x0c,0x50,0x50,0x50,0x3c, 0x44,0x64,0x54,0x4c,0x44, 0x00,0x08,0x36,0x41,0x00,
  0x00,0x00,0x7f,0x00,0x00, 0x00,0x41,0x36,0x08,0x00, 0x08,0x04,0x08,0x10,0x08
];

const els = {
  canvas: document.getElementById("screen"),
  meta: document.getElementById("meta"),
  btnFullscreen: document.getElementById("btnFullscreen"),
  screenModeRadios: Array.from(document.querySelectorAll('input[type="radio"][name="screenMode"]')),
  dotRadius: document.getElementById("dotRadius"),
  dotGap: document.getElementById("dotGap"),
  charGap: document.getElementById("charGap"),
  lineGap: document.getElementById("lineGap"),
  edgeGapDots: document.getElementById("edgeGapDots"),
  typewriter: document.getElementById("typewriter"),
  textInput: document.getElementById("textInput"),
  btnRender: document.getElementById("btnRender"),
  btnClear: document.getElementById("btnClear"),
};

const CONFIG = window.DOT_DISPLAY_CONFIG ?? {
  defaults: { screenMode: "black", dotRadius: 4, dotGap: 3, charGap: 1, lineGap: 1, edgeGapDots: 0, typewriter: false },
  limits: {
    dotRadius: { min: 1, max: 12 },
    dotGap: { min: 0, max: 14 },
    charGap: { min: 0, max: 10 },
    lineGap: { min: 0, max: 10 },
    edgeGapDots: { min: 0, max: 50 },
  },
  typewriter: { msPerChar: 40 },
  fullscreen: { maxGridX: 1200, maxGridY: 800 },
  dprMax: 3,
};

/** 将 CONFIG.defaults 写入表单，使首次打开页面与 config.js 一致。 */
function applyConfigDefaultsToUI() {
  const d = CONFIG.defaults;
  if (!d) return;
  const L = CONFIG.limits ?? {};

  const setClamped = (el, value, limKey) => {
    if (!el || value === undefined || value === null) return;
    const lim = L[limKey];
    const min = lim?.min ?? -Infinity;
    const max = lim?.max ?? Infinity;
    const n = typeof value === "number" ? value : Number.parseInt(String(value), 10);
    const fallback =
      Number.isFinite(n) ? n : Number.parseInt(String(el.value), 10);
    el.value = String(clampInt(n, min, max, Number.isNaN(fallback) ? min : fallback));
  };

  setClamped(els.dotRadius, d.dotRadius, "dotRadius");
  setClamped(els.dotGap, d.dotGap, "dotGap");
  setClamped(els.charGap, d.charGap, "charGap");
  setClamped(els.lineGap, d.lineGap, "lineGap");
  setClamped(els.edgeGapDots, d.edgeGapDots, "edgeGapDots");

  if (els.typewriter && typeof d.typewriter === "boolean") {
    els.typewriter.checked = d.typewriter;
  }

  const mode = d.screenMode === "white" ? "white" : "black";
  for (const r of els.screenModeRadios) {
    r.checked = r.value === mode;
  }

  if (els.textInput && typeof d.text === "string") {
    els.textInput.value = d.text;
  }
}

applyConfigDefaultsToUI();

function clampInt(v, min, max, fallback) {
  const n = Number.parseInt(v, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.max(min, Math.min(max, n));
}

function getTheme(mode) {
  const isBlack = mode === "black";
  // 屏幕背景要求严格纯色（纯黑/纯白）
  const bg = isBlack ? "#000000" : "#ffffff";
  const on = isBlack ? "#ffffff" : "#000000";
  const off = isBlack ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const glow = isBlack ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.18)";
  return { bg, on, off, glow };
}

function getGlyph5x7Columns(ch) {
  const code = ch.charCodeAt(0);
  if (code < 0x20 || code > 0x7e) return null;
  const idx = (code - 0x20) * 5;
  return FONT_5X7.slice(idx, idx + 5);
}

function isGlyphPixelOn5x7(ch, x, y) {
  if (ch === "\n") return false;
  const base = getGlyph5x7Columns(ch);
  if (!base) return false;

  if (x < 0 || x >= 5 || y < 0 || y >= 7) return false;
  const col = base[x];
  return ((col >> y) & 1) === 1;
}

function buildMatrix({ gridX, gridY }) {
  const m = new Array(gridY);
  for (let y = 0; y < gridY; y++) m[y] = new Uint8Array(gridX);
  return m;
}

function clearMatrix(matrix) {
  for (let y = 0; y < matrix.length; y++) matrix[y].fill(0);
}

function blitTextToMatrix(matrix, text, charGap, lineGap, edgeGapDots) {
  const gridY = matrix.length;
  const gridX = matrix[0]?.length ?? 0;
  const glyphW = 5;
  const glyphH = 7;
  // 额外 +1 的空列/空行，能让字符/行之间更清晰；再叠加用户配置的 gap。
  const advanceX = glyphW + 1 + charGap;
  const advanceY = glyphH + 1 + lineGap;

  const requested = clampInt(
    edgeGapDots,
    CONFIG.limits.edgeGapDots?.min ?? 0,
    CONFIG.limits.edgeGapDots?.max ?? 50,
    CONFIG.defaults.edgeGapDots ?? 0
  );
  const maxMargin = Math.min(Math.floor((gridX - 1) / 2), Math.floor((gridY - 1) / 2));
  const margin = Math.max(0, Math.min(requested, maxMargin));
  const right = gridX - margin;
  const bottom = gridY - margin;

  let cursorX = margin;
  let cursorY = margin;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "\r") continue;
    if (ch === "\n") {
      cursorX = margin;
      cursorY += advanceY;
      if (cursorY + glyphH > bottom) break;
      continue;
    }

    if (cursorX + glyphW > right) {
      cursorX = margin;
      cursorY += advanceY;
      if (cursorY + glyphH > bottom) break;
    }

    for (let gy = 0; gy < glyphH; gy++) {
      const py = cursorY + gy;
      if (py < margin || py >= bottom) continue;
      const row = matrix[py];
      for (let gx = 0; gx < glyphW; gx++) {
        const px = cursorX + gx;
        if (px < margin || px >= right) continue;
        if (isGlyphPixelOn5x7(ch, gx, gy)) row[px] = 1;
      }
    }

    cursorX += advanceX;
    if (cursorY + glyphH > bottom) break;
  }
}

function resizeCanvasForGrid(canvas, gridX, gridY, radius, gap, targetW, targetH) {
  const cell = 2 * radius + gap;
  const baseW = gridX * cell + gap;
  const baseH = gridY * cell + gap;
  const w = typeof targetW === "number" ? targetW : baseW;
  const h = typeof targetH === "number" ? targetH : baseH;
  // DPR 适配：用更高的内部像素密度保证圆点边缘更细腻；
  // 同时给一个上限，避免在超高 DPR 设备上创建过大的 canvas。
  const dpr = Math.max(1, Math.min(CONFIG.dprMax ?? 3, window.devicePixelRatio || 1));

  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  if (typeof targetW === "number" && typeof targetH === "number") {
    canvas.style.aspectRatio = "";
  } else {
    canvas.style.aspectRatio = `${w} / ${h}`;
  }

  const ctx = canvas.getContext("2d");

  // 若指定了目标尺寸，将「虚拟网格」（baseW×baseH）等比缩放以塞进画布。
  // 用于把按全屏视口算出的点阵缩小绘制到当前 canvas 可视区域内。
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (typeof targetW === "number" && typeof targetH === "number") {
    const sx = targetW / baseW;
    const sy = targetH / baseH;
    scale = Math.max(0.0001, Math.min(sx, sy)); // 等比例缩放，避免为 0
    offsetX = (targetW - baseW * scale) / 2;
    offsetY = (targetH - baseH * scale) / 2;
  }

  ctx.setTransform(dpr * scale, 0, 0, dpr * scale, offsetX * dpr, offsetY * dpr);
  ctx.imageSmoothingEnabled = true;

  return { ctx, cell, w, h, baseW, baseH, scale, offsetX, offsetY };
}

// 点阵鼠标覆盖层（仅悬停在 canvas 上时显示）
const cursorOverlay = {
  visible: false,
  // 点阵坐标中的光标锚点（字形左上角）
  gx: 0,
  gy: 0,
  // 最近一次绘制的度量，用于屏幕坐标 → 点阵格换算
  metrics: null,
};

// 小型箭头状光标点阵，(dx, dy) 以点距为单位；低分辨率下仍尽量可读
const CURSOR_GLYPH_POINTS = [
  [0, 0],
  [0, 1], [1, 1],
  [0, 2], [2, 2],
  [0, 3], [3, 3],
  [0, 4], [4, 4],
  [0, 5], [5, 5],
  [0, 6], [1, 6], [2, 6],
  [1, 5],
  [2, 4],
  [3, 3],
];

function draw(matrix, opts) {
  const { gridX, gridY, radius, gap, mode, targetW, targetH } = opts;
  const { ctx, cell, w, h, baseW, baseH, scale, offsetX, offsetY } =
    resizeCanvasForGrid(els.canvas, gridX, gridY, radius, gap, targetW, targetH);
  const theme = getTheme(mode);

  // 先在屏幕像素空间清空，再在虚拟网格空间铺背景色
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, Math.ceil(w * (window.devicePixelRatio || 1)), Math.ceil(h * (window.devicePixelRatio || 1)));
  ctx.setTransform((window.devicePixelRatio || 1) * scale, 0, 0, (window.devicePixelRatio || 1) * scale, offsetX * (window.devicePixelRatio || 1), offsetY * (window.devicePixelRatio || 1));
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, baseW, baseH);

  const cx0 = gap + radius;
  const cy0 = gap + radius;

  // 缓存度量，供指针位置换算到点阵格
  cursorOverlay.metrics = { gridX, gridY, radius, gap, cell, cx0, cy0, w, h, baseW, baseH, scale, offsetX, offsetY, mode };

  // 先画一层较大的“辉光”再画实心点，能更像真实点阵屏（尤其黑底白点）。
  for (let y = 0; y < gridY; y++) {
    const row = matrix[y];
    const cy = cy0 + y * cell;
    for (let x = 0; x < gridX; x++) {
      if (row[x] !== 1) continue;
      const cx = cx0 + x * cell;
      ctx.beginPath();
      ctx.fillStyle = theme.glow;
      ctx.arc(cx, cy, radius + 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let y = 0; y < gridY; y++) {
    const row = matrix[y];
    const cy = cy0 + y * cell;
    for (let x = 0; x < gridX; x++) {
      const cx = cx0 + x * cell;
      ctx.beginPath();
      ctx.fillStyle = row[x] === 1 ? theme.on : theme.off;
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 光标层：在底层点阵之后绘制，叠在内容之上
  if (cursorOverlay.visible && cursorOverlay.metrics) {
    const gx0 = cursorOverlay.gx;
    const gy0 = cursorOverlay.gy;

    const drawDot = (x, y, r, fill) => {
      const cx = cx0 + x * cell;
      const cy = cy0 + y * cell;
      ctx.beginPath();
      ctx.fillStyle = fill;
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    };

    for (const [dx, dy] of CURSOR_GLYPH_POINTS) {
      const x = gx0 + dx;
      const y = gy0 + dy;
      if (x < 0 || y < 0 || x >= gridX || y >= gridY) continue;
      // 稍强的辉光 + 实心点
      drawDot(x, y, radius + 2, theme.glow);
    }
    for (const [dx, dy] of CURSOR_GLYPH_POINTS) {
      const x = gx0 + dx;
      const y = gy0 + dy;
      if (x < 0 || y < 0 || x >= gridX || y >= gridY) continue;
      drawDot(x, y, radius, theme.on);
    }
  }
}

let matrix = buildMatrix({ gridX: 128, gridY: 100 });

// 打字机（逐字显示）状态
let typewriterTimer = null;
let typewriterIndex = 0;
const TYPEWRITER_MS = CONFIG.typewriter?.msPerChar ?? 40;

function stopTypewriter({ keepProgress = false } = {}) {
  if (typewriterTimer !== null) {
    window.clearInterval(typewriterTimer);
    typewriterTimer = null;
  }
  if (!keepProgress) typewriterIndex = 0;
}

function clampPositiveInt(n, fallback) {
  if (!Number.isFinite(n)) return fallback;
  const i = Math.floor(n);
  return i > 0 ? i : fallback;
}

function computeAutoGridForSize(w, h, radius, gap, caps) {
  const cell = 2 * radius + gap;
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0 || cell <= 0) {
    return null;
  }

  // 用 ceil：保证点阵“顶到边缘”。多出来的一列/一行会被 canvas 裁切，
  // 但视觉上能确保整屏都是点阵，不出现空白条。
  const gridX = clampPositiveInt(Math.ceil((w - gap) / cell), 64);
  const gridY = clampPositiveInt(Math.ceil((h - gap) / cell), 16);

  const cappedX = Math.min(gridX, caps?.maxGridX ?? 1200);
  const cappedY = Math.min(gridY, caps?.maxGridY ?? 800);
  return { gridX: cappedX, gridY: cappedY, targetW: w, targetH: h };
}

function readSettings() {
  const radius = clampInt(
    els.dotRadius.value,
    CONFIG.limits.dotRadius.min, CONFIG.limits.dotRadius.max,
    CONFIG.defaults.dotRadius
  );
  const gap = clampInt(
    els.dotGap.value,
    CONFIG.limits.dotGap.min, CONFIG.limits.dotGap.max,
    CONFIG.defaults.dotGap
  );
  const charGap = clampInt(
    els.charGap.value,
    CONFIG.limits.charGap.min, CONFIG.limits.charGap.max,
    CONFIG.defaults.charGap
  );
  const lineGap = clampInt(
    els.lineGap.value,
    CONFIG.limits.lineGap.min, CONFIG.limits.lineGap.max,
    CONFIG.defaults.lineGap
  );
  const edgeGapDots = clampInt(
    els.edgeGapDots?.value ?? CONFIG.defaults.edgeGapDots ?? 0,
    CONFIG.limits.edgeGapDots?.min ?? 0,
    CONFIG.limits.edgeGapDots?.max ?? 50,
    CONFIG.defaults.edgeGapDots ?? 0
  );
  const selectedMode =
    els.screenModeRadios.find((r) => r.checked)?.value ||
    CONFIG.defaults.screenMode;
  const mode = selectedMode === "white" ? "white" : "black";
  const text = els.textInput.value ?? "";
  const typewriter = Boolean(els.typewriter?.checked);

  const isFs = Boolean(document.fullscreenElement);
  const caps = CONFIG.fullscreen ?? { maxGridX: 1200, maxGridY: 800 };

  // 虚拟全屏网格：按窗口内部宽高算行列，再缩放到当前 canvas 可视区域
  const virtualW = window.innerWidth;
  const virtualH = window.innerHeight;
  const virtual = computeAutoGridForSize(virtualW, virtualH, radius, gap, caps);

  // 让 canvas 外框比例与虚拟全屏一致，避免上下留白（非真全屏时用 CSS aspect-ratio 由宽推高度）
  if (!isFs) {
    els.canvas.style.aspectRatio = `${virtualW} / ${virtualH}`;
  } else {
    els.canvas.style.aspectRatio = "";
  }

  const targetW = els.canvas.clientWidth;
  const targetH = els.canvas.clientHeight;
  if (virtual && Number.isFinite(targetW) && Number.isFinite(targetH) && targetW > 0 && targetH > 0) {
    return {
      gridX: virtual.gridX,
      gridY: virtual.gridY,
      targetW,
      targetH,
      radius,
      gap,
      charGap,
      lineGap,
      edgeGapDots,
      mode,
      text,
      isFullscreen: isFs,
      typewriter,
      isVirtualFullscreen: true,
      virtualW,
      virtualH,
    };
  }

  // canvas 尚无可测尺寸（例如首帧宽高为 0）时的退路
  return {
    gridX: 128,
    gridY: 100,
    targetW: undefined,
    targetH: undefined,
    radius,
    gap,
    charGap,
    lineGap,
    edgeGapDots,
    mode,
    text,
    isFullscreen: isFs,
    typewriter,
    isVirtualFullscreen: false,
  };
}

function ensureMatrixSize(gridX, gridY) {
  const curY = matrix.length;
  const curX = matrix[0]?.length ?? 0;
  if (curX === gridX && curY === gridY) return;
  matrix = buildMatrix({ gridX, gridY });
}

function setFullscreenBtn(isFs) {
  if (!els.btnFullscreen) return;
  els.btnFullscreen.textContent = isFs ? "退出全屏" : "全屏";
  els.btnFullscreen.setAttribute("aria-label", isFs ? "退出全屏" : "进入全屏");
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled) return;
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }
  // 仅点阵 canvas 进入全屏，不带上侧栏等其它 UI
  await els.canvas.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
}

function render() {
  const s = readSettings();
  ensureMatrixSize(s.gridX, s.gridY);
  clearMatrix(matrix);
  // 逐字显示：只渲染到当前字符索引之前的子串，其余格保持未点亮（0）
  const visibleText = s.typewriter ? s.text.slice(0, typewriterIndex) : s.text;
  blitTextToMatrix(matrix, visibleText, s.charGap, s.lineGap, s.edgeGapDots);
  draw(matrix, {
    gridX: s.gridX,
    gridY: s.gridY,
    radius: s.radius,
    gap: s.gap,
    mode: s.mode,
    targetW: s.targetW,
    targetH: s.targetH,
  });

  const dims = { w: 5, h: 7 };
  const fs = s.isFullscreen ? " · fullscreen" : "";
  const tw = s.typewriter ? " · typewriter" : "";
  const vfs = s.isVirtualFullscreen ? " · virtual-fullscreen(scale-to-fit)" : "";
  if (els.meta) {
    els.meta.textContent = `${s.gridX}x${s.gridY} dots · ${dims.w}x${dims.h} font(5x7) · r=${s.radius} gap=${s.gap}${fs}${vfs}${tw}`;
  }
}

function clearScreen() {
  const s = readSettings();
  ensureMatrixSize(s.gridX, s.gridY);
  stopTypewriter();
  clearMatrix(matrix);
  draw(matrix, {
    gridX: s.gridX,
    gridY: s.gridY,
    radius: s.radius,
    gap: s.gap,
    mode: s.mode,
    targetW: s.targetW,
    targetH: s.targetH,
  });
  const dims = { w: 5, h: 7 };
  const fs = s.isFullscreen ? " · fullscreen" : "";
  const tw = s.typewriter ? " · typewriter" : "";
  const vfs = s.isVirtualFullscreen ? " · virtual-fullscreen(scale-to-fit)" : "";
  if (els.meta) {
    els.meta.textContent = `${s.gridX}x${s.gridY} dots · ${dims.w}x${dims.h} font(5x7) · r=${s.radius} gap=${s.gap}${fs}${vfs}${tw}`;
  }
}

els.btnClear.addEventListener("click", clearScreen);
els.btnFullscreen?.addEventListener("click", toggleFullscreen);
els.canvas.addEventListener("dblclick", toggleFullscreen);

const autoEls = [
  ...els.screenModeRadios,
  els.dotRadius, els.dotGap, els.charGap, els.lineGap, els.edgeGapDots, els.typewriter, els.textInput
].filter(Boolean);
for (const el of autoEls) {
  el.addEventListener("input", () => {
    // 任意参数变更则停止打字机、重置进度并重绘
    stopTypewriter();
    render();
  });
}

function startTypewriterIfNeeded() {
  const s = readSettings();
  if (!s.typewriter) return;
  stopTypewriter();
  typewriterIndex = 0;
  typewriterTimer = window.setInterval(() => {
    const cur = readSettings();
    if (!cur.typewriter) {
      stopTypewriter();
      render();
      return;
    }

    typewriterIndex = Math.min(cur.text.length, typewriterIndex + 1);
    render();
    // 播完只停定时器并保留已播进度；若将索引归零，下次重绘（如鼠标移动画光标）会按空串显示导致文字消失
    if (typewriterIndex >= cur.text.length) stopTypewriter({ keepProgress: true });
  }, TYPEWRITER_MS);
}

els.btnRender.addEventListener("click", () => {
  startTypewriterIfNeeded();
  render();
});

document.addEventListener("fullscreenchange", () => {
  setFullscreenBtn(Boolean(document.fullscreenElement));
  const isFs = Boolean(document.fullscreenElement);
  if (isFs) {
    // 进入全屏：按需启动打字机并重绘
    startTypewriterIfNeeded();
    render();
  } else {
    // 退出全屏：停止打字机并按当前设置静态重绘
    stopTypewriter();
    render();
  }
});

window.addEventListener("resize", () => {
  // 全屏或视口变化后重绘，避免缩放模糊或尺寸错位
  render();
});

let cursorOverlayRaf = 0;
function scheduleCursorOverlayRender() {
  if (cursorOverlayRaf) return;
  cursorOverlayRaf = window.requestAnimationFrame(() => {
    cursorOverlayRaf = 0;
    render();
  });
}

function setCursorOverlayFromEvent(ev) {
  const m = cursorOverlay.metrics;
  if (!m) return;

  // 使用内容盒坐标（不含边框），并考虑 CSS 对 canvas 的缩放
  const cw = els.canvas.clientWidth || 1;
  const ch = els.canvas.clientHeight || 1;

  // offsetX/offsetY 相对内边距边缘；本 canvas 无内边距，即内容盒内坐标
  const xCss = typeof ev.offsetX === "number" ? ev.offsetX : 0;
  const yCss = typeof ev.offsetY === "number" ? ev.offsetY : 0;

  // 超出 canvas 内容范围则隐藏光标层
  if (xCss < 0 || yCss < 0 || xCss > cw || yCss > ch) {
    cursorOverlay.visible = false;
    return;
  }

  // 内容盒 CSS 像素 → 与位图逻辑尺寸一致的绘制坐标（m.w/m.h 可能与 cw/ch 不同）
  const xDraw = (xCss / cw) * m.w;
  const yDraw = (yCss / ch) * m.h;

  // 逆「缩放适配」变换：画布像素空间 → 虚拟网格空间
  const xVirtual = (xDraw - (m.offsetX ?? 0)) / (m.scale ?? 1);
  const yVirtual = (yDraw - (m.offsetY ?? 0)) / (m.scale ?? 1);

  // cx0/cy0 为虚拟网格坐标系中第一个圆点的圆心位置
  const gx = Math.round((xVirtual - m.cx0) / m.cell);
  const gy = Math.round((yVirtual - m.cy0) / m.cell);

  // 锚点偏离网格过远则隐藏，避免出现怪异夹持
  if (gx < -8 || gy < -8 || gx > m.gridX + 8 || gy > m.gridY + 8) {
    cursorOverlay.visible = false;
    return;
  }

  cursorOverlay.gx = gx;
  cursorOverlay.gy = gy;
  cursorOverlay.visible = true;
}

els.canvas.addEventListener("mouseenter", (ev) => {
  setCursorOverlayFromEvent(ev);
  scheduleCursorOverlayRender();
});
els.canvas.addEventListener("mousemove", (ev) => {
  setCursorOverlayFromEvent(ev);
  scheduleCursorOverlayRender();
});
els.canvas.addEventListener("mouseleave", () => {
  cursorOverlay.visible = false;
  scheduleCursorOverlayRender();
});
window.addEventListener("blur", () => {
  cursorOverlay.visible = false;
  scheduleCursorOverlayRender();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cursorOverlay.visible = false;
    scheduleCursorOverlayRender();
  }
});

setFullscreenBtn(Boolean(document.fullscreenElement));
render();

