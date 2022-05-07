const k = kaboom({
  global: true,
  debug: true,
  width: window.innerWidth,
  height: window.innerHeight,
  touchToMouse: true,
  crisp: true,
  texFilter: "linear",
  font: "apl386o",
  background: [0, 0, 0],
});
window.vw = 0.01 * width();
window.vh = 0.01 * height();
export default k;
