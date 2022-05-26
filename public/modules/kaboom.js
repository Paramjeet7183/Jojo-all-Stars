const k = kaboom({
  global: true,
  debug: true,
  canvas: document.querySelector("#myCanvas"),
  width: Math.floor(window.innerWidth / 16) * 16,
  height: Math.floor(window.innerWidth / 16) * 9,
  touchToMouse: true,
  crisp: false,
  // texFilter: "linear",
  font: "apl386o",
  backgrond: [0, 0, 0, 0],
});
window.vw = 0.01 * width();
window.vh = 0.01 * height();
window.charSound = 0.24;
window.bgm = 0.6;
window.punchSound = 0.45;
window.airSound = 0.36;
export default k;
