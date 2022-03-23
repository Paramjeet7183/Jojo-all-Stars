class Player {
  constructor({ dataObj, spawnPos, flip, tag }) {
    dataObj.loadAsset();
    this.player = add([
      sprite(dataObj.name, { width: 22.5 * vw, height: 40 * vh, anim: "idle" }), //in ratio of 9:16
      area({
        width: 5 * vw,
        height: 6 * vh,
      }),
      body({
        weight: 2,
      }),
      cleanup(),
      outview(),
      pos(spawnPos, 70 * vh),
      scale(1),
      layer("players"),
      origin("bot"),
      "player",
      `${tag}`,
    ]);
    //temporary :- for reference point
    const c = add([
      rect(2, 32),
      pos(this.player.pos),
      follow(this.player),
      origin("center"),
      color(GREEN),
    ]);
    //playing idle animation after end of these animations.
    for (let i = 0; i <= dataObj.allTags.anim.length - 1; i++) {
      this.player.onAnimEnd(`${dataObj.allTags.anim[i]}`, () => {
        this.player.play("idle");
      });
    }
    this.player.flipX(flip);
  }
  get() {
    return this.player;
  }
}

export default Player;
