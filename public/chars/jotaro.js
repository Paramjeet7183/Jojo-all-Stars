const jotaro = {
  name: "jotaro",
  speed: 50 * vw,
  jumpForce: 800,
  loadAsset: function () {
    loadSpriteAtlas("../assets/jotaro/jotaro.png", {
      jotaro: {
        x: 0,
        y: 0,
        width: 686,
        height: 574,
        sliceX: 7,
        sliceY: 7,
        anims: {
          idle: { from: 0, to: 5, speed: 8, loop: true },
          run: { from: 6, to: 13, speed: 14, loop: true },
          crouch: { from: 15, to: 15, speed: 16 },
          jump: { from: 16, to: 19, speed: 16 },
          punch: { from: 20, to: 22, speed: 12 },
          kick: { from: 23, to: 28, speed: 16 },
          kick2: { from: 29, to: 33, speed: 16 },
          pose1: { from: 34, to: 37, speed: 12 },
          pose2: { from: 38, to: 41, speed: 12 },
          hurt: { from: 42, to: 44, speed: 8 },
          fall: { from: 45, to: 48, speed: 8 },
        },
      },
    });
    loadSpriteAtlas("../assets/jotaro/star platinum.png", {
      starPlatinum: {
        x: 0,
        y: 0,
        width: 1314,
        height: 1168,
        sliceX: 9,
        sliceY: 8,
        anims: {
          block: { from: 0, to: 1, speed: 8 },
          punch: { from: 2, to: 8, speed: 16 },
          punch2: { from: 9, to: 17, speed: 16, loop: true },
          punchUp: { from: 18, to: 24, speed: 8, loop: true },
          jumpPunchDown: { from: 27, to: 29, speed: 16 },
          jumpPunchDown2: { from: 30, to: 35, speed: 16, loop: true },
          oraora: { from: 41, to: 66, speed: 24, loop: true },
          punchDown: { from: 67, to: 70, speed: 16 },
        },
      },
    });
    loadSound("muh", "../assets/jotaro/muh.wav");
    loadSound("ooh", "../assets/jotaro/ooh.wav");
    loadSound("long ooh", "../assets/jotaro/long ooh.wav");
    loadSound("orayo", "../assets/jotaro/orayo.wav");
    loadSound("ora4", "../assets/jotaro/ora (4).wav");
    loadSound("starplatinum", "../assets/jotaro/starplatinum.wav");
    loadSound("oraora2", "../assets/jotaro/oraora (2).wav");
    loadSound("oraora4", "../assets/jotaro/oraora (4).wav");
  }, //loadAssets end here

  //--------------------------------------------------------

  attacks: {
    canAttack: true,
    keyCount: 0,
    fired: false,
    hitBox: async function ({ w, h, position, delay, timeOut, org, tag }) {
      wait(delay, () => {
        const box = add([
          rect(w, h),
          area(),
          color(YELLOW),
          // outline(4, YELLOW),
          pos(position),
          origin(org),
          opacity(0),
          lifespan(timeOut),
          `${tag}`,
        ]);
      });
    },
    stand: async function ({
      timeOut,
      anim,
      position,
      dir,
      moveSpeed,
      flip,
      loop,
      hitBoxData: { hw, hh, hdelay, htimeOut, hposition },
    }) {
      const starPlatinum = add([
        sprite("starPlatinum", {
          anim: anim,
          width: 2.5 * 9 * vw,
          height: 2.5 * 16 * vw,
        }),
        area({ width: 0, height: 0 }),
        lifespan(timeOut),
        pos(position),
        scale(1),
        move(dir, moveSpeed),
        origin("botleft"),
        opacity(0),
        layer("effect"),
        "stand",
      ]);
      starPlatinum.flipX(flip);
      let n = 50;
      starPlatinum.onUpdate(() => {
        starPlatinum.opacity = n / 100;
        n += 2;
      });
      if (loop) {
        starPlatinum.onUpdate(() => {
          if (starPlatinum.flipX()) {
            this.hitBox({
              w: hw,
              h: hh,
              position: starPlatinum.pos.add(
                rand(hposition.x, 2 * hposition.x) * vw,
                rand(-hposition.y, -2 * hposition.y) * vh
              ),
              delay: hdelay,
              timeOut: htimeOut,
              org: "botright",
              tag: "starPlatinumPunch",
            });
          }
          if (!starPlatinum.flipX()) {
            this.hitBox({
              w: hw,
              h: hh,
              position: starPlatinum.pos.add(
                rand(hposition.x, 2 * hposition.x) * vw,
                rand(-hposition.y, -2 * hposition.y) * vh
              ),
              delay: hdelay,
              timeOut: htimeOut,
              org: "botleft",
              tag: "starPlatinumPunch",
            });
          }
        });
      }
      if (!loop) {
        if (starPlatinum.flipX()) {
          this.hitBox({
            w: hw,
            h: hh,
            delay: hdelay,
            timeOut: htimeOut,
            org: "botright",
            position: starPlatinum.pos.add(-hposition.x, hposition.y),
            tag: "starPlatinumPunch",
          });
        }
        if (!starPlatinum.flipX()) {
          this.hitBox({
            w: hw,
            h: hh,
            delay: hdelay,
            timeOut: htimeOut,
            org: "botleft",
            position: starPlatinum.pos.add(hposition.x, hposition.y),
            tag: "starPlatinumPunch",
          });
        }
      }
    },
    //------------------------------------------------------------
    attack_A: async function ({ player, enemy }) {
      if (isKeyDown("down") && this.canAttack) {
        player.play("kick");
        play("muh");
        if (player.flipX()) {
          this.hitBox({
            w: 7 * vw,
            h: 3 * vw,
            delay: 0.2,
            timeOut: 0.2,
            org: "botright",
            position: player.pos.add(-2 * vw, -8 * vh),
            tag: "jotaroPunch",
          });
        }
        if (!player.flipX()) {
          this.hitBox({
            w: 7 * vw,
            h: 3 * vw,
            delay: 0.2,
            timeOut: 0.2,
            org: "botleft",
            position: player.pos.add(2 * vw, -8 * vh),
            tag: "jotaroPunch",
          });
        }
        this.canAttack = false;
        wait(0.5, () => {
          this.canAttack = true;
        });
      } else {
        if (isKeyDown("up") && this.canAttack) {
          play("orayo");
          if (player.flipX()) {
            this.stand({
              timeOut: 0.4,
              anim: "jumpPunchDown",
              position: player.pos.add(-24 * vw, 13 * vh),
              dir: vec2(-0.3, 0.4),
              moveSpeed: 256,
              flip: true,
              loop: false,
              hitBoxData: {
                hw: 4 * vw,
                hh: 8 * vw,
                hdelay: 0.15,
                htimeOut: 0.15,
                hposition: vec2(-16 * vw, 0 * vh),
              },
            });
          }
          if (!player.flipX()) {
            this.stand({
              timeOut: 0.3,
              anim: "jumpPunchDown",
              position: player.pos.add(-8 * vw, 13 * vh),
              dir: vec2(0.3, 0.4),
              moveSpeed: 256,
              flip: false,
              loop: false,
              hitBoxData: {
                hw: 4 * vw,
                hh: 8 * vw,
                hdelay: 0.15,
                htimeOut: 0.15,
                hposition: vec2(16 * vw, 0 * vh),
              },
            });
          }
          this.canAttack = false;
          wait(0.7, () => {
            this.canAttack = true;
          });
        } else {
          if (this.canAttack) {
            play("ora4");
            if (player.flipX()) {
              this.stand({
                timeOut: 0.3,
                anim: "punch",
                position: player.pos.add(-24 * vw, 13 * vh),
                dir: vec2(-1, 0),
                moveSpeed: 256,
                flip: true,
                loop: false,
                hitBoxData: {
                  hw: 4 * vw,
                  hh: 4 * vw,
                  hdelay: 0.15,
                  htimeOut: 0.15,
                  hposition: vec2(-7 * vw, -26 * vh),
                },
              });
            }
            if (!player.flipX()) {
              this.stand({
                timeOut: 0.3,
                anim: "punch",
                position: player.pos.add(-8 * vw, 13 * vh),
                dir: vec2(1, 0),
                moveSpeed: 256,
                flip: false,
                loop: false,
                hitBoxData: {
                  hw: 4 * vw,
                  hh: 4 * vw,
                  hdelay: 0.15,
                  htimeOut: 0.15,
                  hposition: vec2(26 * vw, -26 * vh),
                },
              });
            }
            this.canAttack = false;
            wait(0.5, () => {
              this.canAttack = true;
            });
          }
        }
      }
    },

    //------------------------------------------------------------
    attack_S: async function ({ player, enemy }) {
      if (this.canAttack) {
        play("muh");
        player.play("punch");
        if (player.flipX()) {
          this.hitBox({
            w: 4 * vw,
            h: 3 * vw,
            delay: 0.2,
            timeOut: 0.2,
            org: "botright",
            position: player.pos.add(-2 * vw, -18 * vh),
            tag: "jotaroPunch",
          });
        }
        if (!player.flipX()) {
          this.hitBox({
            w: 4 * vw,
            h: 3 * vw,
            delay: 0.2,
            timeOut: 0.2,
            org: "botleft",
            position: player.pos.add(2 * vw, -18 * vh),
            tag: "jotaroPunch",
          });
        }
        this.canAttack = false;
        wait(0.5, () => {
          this.canAttack = true;
        });
      }
    },

    //------------------------------------------------------------
    attack_D: async function ({ player, enemy }) {
      //todo
      if (isKeyDown("down") && this.canAttack) {
        play("ora4");
        if (player.flipX()) {
          this.stand({
            timeOut: 0.6,
            anim: "punchDown",
            position: player.pos.add(-24 * vw, 13 * vh),
            dir: vec2(-1, 0),
            moveSpeed: 128,
            flip: true,
            loop: false,
            hitBoxData: {
              hw: 4 * vw,
              hh: 8 * vw,
              hdelay: 0.2,
              htimeOut: 0.3,
              hposition: vec2(-10 * vw, -16 * vh),
            },
          });
        }
        if (!player.flipX()) {
          this.stand({
            timeOut: 0.6,
            anim: "punchDown",
            position: player.pos.add(-8 * vw, 13 * vh),
            dir: vec2(1, 0),
            moveSpeed: 128,
            flip: false,
            loop: false,
            hitBoxData: {
              hw: 4 * vw,
              hh: 8 * vw,
              hdelay: 0.2,
              htimeOut: 0.3,
              hposition: vec2(20 * vw, -16 * vh),
            },
          });
        }
        this.canAttack = false;
        wait(0.6, () => {
          this.canAttack = true;
        });
      } else {
        if (isKeyDown("up") && this.canAttack) {
          play("ooh");
          if (player.flipX()) {
            this.stand({
              timeOut: 0.6,
              anim: "jumpPunchDown2",
              position: player.pos.add(-20 * vw, 5 * vh),
              dir: vec2(-0.3, 0.4),
              moveSpeed: 256,
              flip: true,
              loop: true,
              hitBoxData: {
                hw: 4 * vw,
                hh: 1 * vw,
                hdelay: 0,
                htimeOut: 0.2,
                hposition: { x: 10, y: 8 },
              },
            });
          }
          if (!player.flipX()) {
            this.stand({
              timeOut: 0.6,
              anim: "jumpPunchDown2",
              position: player.pos.add(-20 * vw, 5 * vh),
              dir: vec2(0.3, 0.4),
              moveSpeed: 256,
              flip: false,
              loop: true,
              hitBoxData: {
                hw: 4 * vw,
                hh: 1 * vw,
                hdelay: 0,
                htimeOut: 0.2,
                hposition: { x: 16, y: 8 },
              },
            });
          }

          this.canAttack = false;
          player.paused = true;
          wait(0.7, () => {
            player.paused = false;
            this.canAttack = true;
          });
        } else {
          if (this.canAttack) {
            play("ooh");
            player.play("pose1");
            if (player.flipX()) {
              this.stand({
                timeOut: 0.6,
                anim: "punch2",
                position: player.pos.add(-24 * vw, 10 * vh),
                dir: vec2(-1, 0),
                moveSpeed: 256,
                flip: true,
                loop: true,
                hitBoxData: {
                  hw: 4 * vw,
                  hh: 1 * vw,
                  hdelay: 0,
                  htimeOut: 0.2,
                  hposition: { x: 10, y: 20 },
                },
              });
            }
            if (!player.flipX()) {
              this.stand({
                timeOut: 0.6,
                anim: "punch2",
                position: player.pos.add(-8 * vw, 10 * vh),
                dir: vec2(1, 0),
                moveSpeed: 256,
                flip: false,
                loop: true,
                hitBoxData: {
                  hw: 4 * vw,
                  hh: 1 * vw,
                  hdelay: 0,
                  htimeOut: 0.2,
                  hposition: { x: 10, y: 20 },
                },
              });
            }
            this.canAttack = false;
            wait(0.7, () => {
              this.canAttack = true;
            });
          }
        }
      }
    },

    //------------------------------------------------------------
    attack_W: async function ({ player, enemy }) {
      if (Math.abs(player.pos.x - enemy.pos.x) <= 25 * vw && this.canAttack) {
        play("starplatinum");
        player.play("pose2");
        wait(0.5, () => {
          if (player.flipX()) {
            this.stand({
              timeOut: 10,
              anim: "oraora",
              position: player.pos.add(-32 * vw, 13 * vh),
              dir: vec2(-1, 0),
              moveSpeed: 0,
              flip: true,
              loop: true,
              hitBoxData: {
                hw: 4 * vw,
                hh: 1 * vw,
                hdelay: 0,
                htimeOut: 0.2,
                hposition: { x: 10, y: 20 },
              },
            });
          }
          if (!player.flipX()) {
            this.stand({
              timeOut: 10,
              anim: "oraora",
              position: player.pos.add(2 * vw, 13 * vh),
              dir: vec2(1, 0),
              moveSpeed: 0,
              flip: false,
              loop: true,
              hitBoxData: {
                hw: 4 * vw,
                hh: 1 * vw,
                hdelay: 0,
                htimeOut: 0.2,
                hposition: { x: 10, y: 20 },
              },
            });
          }
          play("oraora2");
          wait(7.5, () => {
            play("oraora4");
            wait(2, () => {
              player.play("idle");
            });
          });
        });
      } else {
        play("starplatinum");
        player.play("pose2");
        player.onAnimEnd("pose2", () => {
          player.play("idle");
        });
      }
    },

    //---------------------------------------------------------------

    charge: async function ({ player, enemy }) {
      console.log("charge");
    },
  },
  allTags: {
    anim: [
      "run",
      "crouch",
      "hurt",
      "fall",
      "charge",
      "punch",
      "kick",
      "kick2",
      "pose1",
    ],
    hitBox: ["jotaroPunch", "starPlatinumPunch"],
  },
  collisons: async function ({ enemy, enemyTag, enemyHealth }) {
    let allBox = `${enemyTag}HurtBox`; //both enemy hurt box;
    let boxOne = `${enemyTag}HurtBoxOne`; //upper
    let boxTwo = `${enemyTag}HurtBoxTwo`; //lower
    let j = 0;
    onCollide(`${allBox}`, "starPlatinumPunch", () => {
      enemy.play("hurt");
      enemyHealth.hurt(0.3);
      if (j % 50 == 0) {
        play("hurt1");
      }
      j++;
      shake(1);
    });
    onCollide(boxOne, "jotaroPunch", () => {
      enemy.play("hurt");
      play("hurt3");
      enemyHealth.hurt(0.3);
      shake(0.1);
    });
    onCollide(boxTwo, "jotaroPunch", () => {
      enemy.play("fall");
      play("hurt2");
      enemyHealth.hurt(0.3);
      shake(0.1);
    });
  },
  hurtBoxData: {
    idle: {
      one: {
        width: 5 * vw,
        height: 7 * vw,
        offset: vec2(2 * vw, -14 * vh),
      },
      two: {
        width: 5 * vw,
        height: 6 * vw,
        offset: vec2(2 * vw, 0 * vh),
      },
    },
    crouch: {
      one: {
        width: 6 * vw,
        height: 5 * vw,
        offset: vec2(4 * vw, -10 * vh),
      },
      two: {
        width: 5 * vw,
        height: 6 * vw,
        offset: vec2(2 * vw, 0 * vh),
      },
    },
    run: {
      one: {
        width: 7 * vw,
        height: 7 * vw,
        offset: vec2(6 * vw, -13 * vh),
      },
      two: {
        width: 6 * vw,
        height: 6 * vw,
        offset: vec2(2 * vw, 0 * vh),
      },
    },
    jump: {
      one: {
        width: 9 * vw,
        height: 7 * vw,
        offset: vec2(4 * vw, -13 * vh),
      },
      two: {
        width: 6 * vw,
        height: 4 * vw,
        offset: vec2(0 * vw, -2 * vh),
      },
    },
    setHurtBox: async function (player, h1, h2) {
      player.onAnimStart("idle", () => {
        h1.width = this.idle.one.width;
        h1.height = this.idle.one.height;
        h1.offset = this.idle.one.offset;
        h2.width = this.idle.two.width;
        h2.height = this.idle.two.height;
        h2.offset = this.idle.two.offset;
      });
      player.onAnimStart("crouch", () => {
        h1.width = this.crouch.one.width;
        h1.height = this.crouch.one.height;
        h1.offset = this.crouch.one.offset;
        h2.width = this.crouch.two.width;
        h2.height = this.crouch.two.height;
        h2.offset = this.crouch.two.offset;
      });
      player.onAnimStart("run", () => {
        h1.width = this.run.one.width;
        h1.height = this.run.one.height;
        h1.offset = this.run.one.offset;
        h2.width = this.run.two.width;
        h2.height = this.run.two.height;
        h2.offset = this.run.two.offset;
      });
      player.onAnimStart("jump", () => {
        h1.width = this.jump.one.width;
        h1.height = this.jump.one.height;
        h1.offset = this.jump.one.offset;
        h2.width = this.jump.two.width;
        h2.height = this.jump.two.height;
        h2.offset = this.jump.two.offset;
      });
    },
  },
};

export default jotaro;
