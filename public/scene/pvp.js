loadSprite("pvpFrame", "../assets/menu/pvp.png");
loadSprite("vsFrame", "../assets/menu/vs.png");
loadSprite("bg", "../assets/menu/1-sheet.png", {
  x: 0,
  y: 0,
  width: 2560,
  height: 720,
  sliceX: 2,
  anims: {
    idle: { from: 0, to: 1, loop: true },
  },
});
async function pvp() {
  const allPlayers = [
    {
      name: "johnny",
      displayName: "JOHNNY JOESTAR",
    },
    {
      name: "jotaro",
      displayName: "JOTARO KUJO",
    },
    {
      name: "avdul",
      displayName: "MOHAMMAD AVDUL",
    },
    {
      name: "kakyoin",
      displayName: "NORYAKI KAKYOIN",
    },
  ];
  scene("pvpScene", ({ p1, p2, nextScene }) => {
    const s = play("vsSound", {
      volume: 0.6,
    });
    const bg = add([
      sprite("bg", { anim: "idle", speed: 24 }),
      pos(center()),
      origin("center"),
      z(0),
      scale(Math.max(width() / 1280, height() / 720)),
    ]);
    const p1Frame = add([
      sprite(`${allPlayers[p1].name}BigFace`),
      pos(0, 100 * vh),
      origin("botleft"),
      scale(Math.max(width() / 1280, height() / 720)),
      z(1),
    ]);
    const p2Frame = add([
      sprite(`${allPlayers[p2].name}BigFace`),
      pos(100 * vw, 100 * vh),
      origin("botright"),
      scale(Math.max(width() / 1280, height() / 720)),
      z(0),
    ]);
    p2Frame.flipX(true);
    const pvpFrame = add([
      sprite("pvpFrame"),
      pos(center()),
      origin("center"),
      scale(Math.max(width() / 1280, height() / 720)),
      z(1),
    ]);
    const vsFrame = add([
      sprite("vsFrame"),
      pos(center()),
      origin("center"),
      scale(Math.max(width() / 1280, height() / 720)),
      z(1),
    ]);
    // const t = add([
    //   text(`${allPlayers[p1].displayName}`, {
    //     font: "apl386",
    //     size: 3.2 * vw,
    //   }),
    //   pos(5 * vw, 90 * vh),
    //   origin("botleft"),
    //   z(2),
    // ]);
    // const t2 = add([
    //   text(`${allPlayers[p2].displayName}`, {
    //     font: "apl386",
    //     size: 3.2 * vw,
    //   }),
    //   pos(95 * vw, 90 * vh),
    //   origin("botright"),
    //   z(2),
    // ]);
    wait(7.5, () => {
      bg.destroy();
      s.stop();
      pvpFrame.destroy();
      vsFrame.destroy();
      p1Frame.destroy();
      p2Frame.destroy();
      nextScene();
    });
  });
}
export { pvp };
