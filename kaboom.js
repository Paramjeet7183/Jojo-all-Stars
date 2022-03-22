const k = kaboom({
  global: true,
  debug: true,
  inspect: true,
  width: window.innerWidth,
  height: window.innerHeight,
  touchToMouse: true,
  crisp: true,
  font: "sinko",
});
window.vw = 0.01 * width();
window.vh = 0.01 * height();
export default k;
