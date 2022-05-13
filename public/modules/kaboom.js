const k = kaboom({
  global: true,
  debug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  touchToMouse: true,
  crisp: false,
  //texFilter: "linear",
  font: "apl386o",
  background: [0, 0, 0],
});
window.vw = 0.01 * width();
window.vh = 0.01 * height();
window.charSound = 0.24;
window.bgm = 0.6;
window.punchSound = 0.45;
window.airSound = 0.36;
export default k;
