/**
 * Dot Display Config
 * - 纯静态页面用法：在 `app.js` 之前通过 `<script src="./config.js"></script>` 注入全局配置。
 * - 你可以直接改这里，不需要改业务逻辑。
 */
window.DOT_DISPLAY_CONFIG = {
  // UI 默认值（启动时由 app.js 写入表单；改这里即可，不必改 index.html 里的 value）
  defaults: {
    screenMode: "black", // "black" | "white"
    dotRadius: 4,
    dotGap: 3,
    charGap: 1,
    lineGap: 1,
    edgeGapDots: 2,
    typewriter: false,
    text: "DOT DISPLAY\n2026-03-26\n\nASCII 32-126", // 可选：初始文本（textarea）
  },

  // 数值限制（防止输入异常）
  limits: {
    dotRadius: { min: 1, max: 12 },
    dotGap: { min: 0, max: 14 },
    charGap: { min: 0, max: 10 },
    lineGap: { min: 0, max: 10 },
    edgeGapDots: { min: 0, max: 50 },
  },

  // 逐字显示速度（毫秒/字符）
  typewriter: {
    msPerChar: 40,
  },

  // 全屏“铺满屏幕”模式安全上限（防止点太小导致矩阵过大）
  fullscreen: {
    maxGridX: 1200,
    maxGridY: 800,
  },

  // DPR 上限（越高越清晰但越吃资源）
  dprMax: 3,
};

