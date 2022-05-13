loadShader(
  "invert",
  null,
  `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	vec4 c = def_frag();
	return mix(c, vec4(0,0,0,c.a), 1.0);
}
`
);
class Player {
  constructor({ dataObj, spawnPos, tag }) {
    //fighter
    this.player = add([
      sprite(dataObj.name, {
        anim: "idle",
      }),
      area({
        width: 4,
        height: 4,
        offset: dataObj.areaOffset,
      }),
      body({
        weight: 2.2,
      }),
      pos(spawnPos, 98 * vh),
      layer("players"),
      scale(3),
      origin("bot"),
      z(1),
      state("idle", ["idle", "runForward", "runBackward", "attack"]),
      `${tag}`,
    ]);
    //fighters stand
    this.stand = add([
      sprite(dataObj.standName, {
        anim: dataObj.name !== "johhny" ? "" : "idle",
      }),
      pos(0, 0),
      follow(this.player, vec2(0, 0)),
      origin("center"),
      layer("players"),
      scale(3),
      z(0),
      "stand",
      `${dataObj.standName}`,
    ]);
    //shadow
    this.pShadow = add([
      sprite(dataObj.name),
      pos(this.player.x, height() - 5 * vh + dataObj.areaOffset.y - 16),
      scale(2.8, 3),
      origin("top"),
      opacity(0.4),
      shader("invert"),
      layer("players"),
      z(0),
    ]);
    this.pShadow.flipY(true);
    //--
    this.stand.onUpdate(() => {
      //--
      if (this.player.flipX()) {
        this.stand.flipX(true);
        this.stand.follow.offset = vec2(
          -dataObj.standOffset.x,
          dataObj.standOffset.y
        );
      } else {
        if (!this.player.flipX()) {
          this.stand.flipX(false);
          this.stand.follow.offset = vec2(
            dataObj.standOffset.x,
            dataObj.standOffset.y
          );
        }
      }
    });
    destroy(this.stand);

    //temporary :- for reference point
    // const c = add([
    //   rect(2, 32),
    //   pos(this.player.pos),
    //   follow(this.player),
    //   origin("center"),
    //   color(GREEN),
    //   layer("effect"),
    // ]);
    //woosh sound

    //playing idle animation after end of these animations.
    for (let i = 0; i <= dataObj.allAnim.length - 1; i++) {
      this.player.onAnimEnd(`${dataObj.allAnim[i]}`, () => {
        this.player.play("idle");
      });
    }
    //stand animation end play idle
    if (dataObj.name !== "johnny") {
      for (let i = 0; i <= dataObj.allStandAnim.length - 1; i++) {
        this.stand.onAnimEnd(`${dataObj.allStandAnim[i]}`, () => {
          this.stand.play("idle");
        });
      }
    }

    //SETTING HURTBOX
    const hurtBoxOne = add([
      rect(0, 0),
      area(),
      pos(),
      follow(this.player, vec2(0, 0)),
      origin("botright"),
      color(RED),
      layer("pvp"),
      // outline(4, GREEN),
      opacity(0),
      "hurtBox",
      `${tag}HurtBox`,
      `${tag}HurtBoxOne`,
    ]);
    const hurtBoxTwo = add([
      rect(0, 0),
      area(),
      pos(),
      follow(this.player, vec2(0, 0)),
      origin("botright"),
      color(RED),
      rotate(0),
      // outline(4, RED),
      layer("pvp"),
      opacity(0),
      "hurtBox",
      `${tag}HurtBox`,
      `${tag}HurtBoxTwo`,
    ]);
    // SETTING HITBOXES
    async function hitBox({ POSITION, SIZE, ORIGIN, TAG }) {
      add([
        rect(SIZE.w, SIZE.h),
        area(),
        pos(POSITION),
        origin(ORIGIN),
        layer("pvp"),
        opacity(0),
        // outline(4, RED),
        lifespan(0.1),
        "hitBox",
        `${TAG}`,
      ]);
    }
    this.player.onUpdate(() => {
      //hit Box
      this.pShadow.frame = this.player.frame;
      this.pShadow.flipX(this.player.flipX());
      this.pShadow.pos.x = this.player.pos.x;
      for (let i = 0; i <= dataObj.hitBoxData.length - 1; i++) {
        if (this.player.frame == dataObj.hitBoxData[i].frame) {
          if (!this.player.flipX()) {
            hitBox({
              POSITION: this.player.pos.add(dataObj.hitBoxData[i].position),
              SIZE: dataObj.hitBoxData[i].size,
              ORIGIN: "botleft",
              TAG: dataObj.hitBoxData[i].tag,
            });
          }
          if (this.player.flipX()) {
            hitBox({
              POSITION: this.player.pos.add(
                -dataObj.hitBoxData[i].position.x,
                dataObj.hitBoxData[i].position.y
              ),
              SIZE: dataObj.hitBoxData[i].size,
              ORIGIN: "botright",
              TAG: dataObj.hitBoxData[i].tag,
            });
          }
        }
      }
      //hurt box
      for (let i = 0; i <= dataObj.hurtBoxData.length - 1; i++) {
        if (this.player.curAnim() == dataObj.hurtBoxData[i].anim) {
          hurtBoxOne.width = dataObj.hurtBoxData[i].one.size.w;
          hurtBoxOne.height = dataObj.hurtBoxData[i].one.size.h;
          hurtBoxOne.follow.offset.y = dataObj.hurtBoxData[i].one.offset.y;
          hurtBoxTwo.width = dataObj.hurtBoxData[i].two.size.w;
          hurtBoxTwo.height = dataObj.hurtBoxData[i].two.size.h;
          hurtBoxTwo.follow.offset.y = dataObj.hurtBoxData[i].two.offset.y;
          if (this.player.flipX()) {
            hurtBoxOne.origin = "botleft";
            hurtBoxTwo.origin = "botleft";
            hurtBoxOne.follow.offset.x = -dataObj.hurtBoxData[i].one.offset.x;
            hurtBoxTwo.follow.offset.x = -dataObj.hurtBoxData[i].two.offset.x;
          } else {
            hurtBoxOne.origin = "botright";
            hurtBoxTwo.origin = "botright";
            hurtBoxOne.follow.offset.x = dataObj.hurtBoxData[i].one.offset.x;
            hurtBoxTwo.follow.offset.x = dataObj.hurtBoxData[i].two.offset.x;
          }
        }
      }
    });
    this.stand.onUpdate(() => {
      if (dataObj.standHitBoxData !== 0) {
        for (let i = 0; i <= dataObj.standHitBoxData.length - 1; i++) {
          if (this.stand.frame == dataObj.standHitBoxData[i].frame) {
            hitBox({
              POSITION: this.stand.pos.add(
                this.stand.flipX()
                  ? -dataObj.standHitBoxData[i].position.x
                  : dataObj.standHitBoxData[i].position.x,
                dataObj.standHitBoxData[i].position.y
              ),
              SIZE: dataObj.standHitBoxData[i].size,
              ORIGIN: this.stand.flipX() ? "botright" : "botleft",
              TAG: dataObj.standHitBoxData[i].tag,
            });
          }
          //playing woosh sounds
          if (this.stand.frame == dataObj.standHitBoxData[i].soundFrame) {
            play(dataObj.standHitBoxData[i].sound, {
              volume: airSound,
            });
          }
        }
      }
    });
  }
  getPlayer() {
    return this.player;
  }
  getStand() {
    return this.stand;
  }
}
export { Player };
