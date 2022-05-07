loadSprite("loading1", "../assets/loading/johnny.png");
loadSprite("loading2", "../assets/loading/dio.png");
loadSprite("loading3", "../assets/loading/jotaro.png");
loadSprite("loading4", "../assets/loading/gyro.png");
loadSprite("loading5", "../assets/loading/funny.png");
loadSprite("loading6", "../assets/loading/giorono.png");
loadSprite("loading7", "../assets/loading/blackmore.png");
loadSprite("loading8", "../assets/loading/josuke.png");
loadSprite("loading9", "../assets/loading/kira.png");
// loadSprite("loadingBg", "../assets/loading/bg.png");
async function loading() {
  scene("loadingScreen", ({ sceneFun }) => {
    // const b = add([
    //   sprite("loadingBg"),
    //   pos(center()),
    //   origin("center"),
    //   scale(Math.max(width() / 1280, height() / 720)),
    //   z(0),
    // ]);

    const a = add([
      sprite(`loading${randi(1, 9)}`),
      pos(0, 0),
      scale(Math.max(width() / 1280, height() / 720)),
      z(1),
    ]);
    const t = add([
      text("Loading", {
        font: "apl386o",
        letterSpacing: 4,
        size: 2.4 * vw,
        transform: () => ({
          scale: wave(1, 1.4, time() * 6),
        }),
      }),
      pos(90 * vw, 90 * vh),
      origin("botright"),
      z(2),
    ]);
    // a.onUpdate(() => {
    //   if (is > fs) {
    //     a.scaleTo((is -= 0.0017));
    //   }
    // });
    wait(randi(8, 12), () => {
      a.destroy();
      t.destroy();
      sceneFun();
    });
  });
}
export { loading };
