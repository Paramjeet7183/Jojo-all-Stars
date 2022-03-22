const jojo = {
  name: "johnny",
  speed: 256,
  jumpForce: 1,
  loadAsset: async function () {
    loadSpriteAtlas("../assets/jhonny/jhonny-Recovered.png", {
      johnny: {
        x: 0,
        y: 0,
        width: 873, //width of sprite sheet
        height: 639, //height of sprite sheet
        sliceX: 9, // how many frames is in X axis of sprite sheet
        sliceY: 9, //how many frames is in Y axis of sprite sheet
        anims: {
          // defining animations : "from" = starting frame "to" = final frame of animations
          idle: { from: 0, to: 2, speed: 8, loop: true },
          crouch: { from: 3, to: 3, speed: 1 },
          run: { from: 4, to: 6, speed: 8, loop: true },
          punch: { from: 7, to: 10, speed: 12 },
          punch2: { from: 11, to: 14, speed: 12 },
          shootAct1_1: { from: 15, to: 20, speed: 12 },
          shootAct1_2: { from: 21, to: 26, speed: 12 },
          shootAct1_UP: { from: 27, to: 31, speed: 12 },
          shootAct2_1: { from: 32, to: 43, speed: 12 },
          fromPortal: { from: 44, to: 46, speed: 8 },
          charge: { from: 49, to: 49, speed: 12 },
          hurt: { from: 50, to: 52, speed: 8 },
          fall: { from: 53, to: 56, speed: 8 },
          pickSteelBall: { from: 57, to: 62, speed: 16 },
          throwSteelBall: { from: 63, to: 67, speed: 16 },
          punch3: { from: 68, to: 70, speed: 12 },
          punch4: { from: 71, to: 75, speed: 16 },
          shootAct2_DOWN: { from: 76, to: 77, speed: 8 },
        },
      },
    });
    loadSpriteAtlas("../assets/jhonny/bulletTrail.png", {
      bulletTrail: {
        x: 0,
        y: 0,
        width: 147,
        height: 49,
        sliceX: 6,
        anims: {
          idle: { from: 0, to: 5, speed: 24, loop: true },
        },
      },
    });
    loadSpriteAtlas("../assets/jhonny/act4.png", {
      tuskAct4: {
        x: 0,
        y: 0,
        width: 600,
        height: 390,
        sliceX: 4,
        sliceY: 3,
        anims: {
          idle: { from: 0, to: 0, speed: 1 },
          beatdown: { from: 1, to: 10, speed: 24, loop: true },
        },
      },
    });

    loadSpriteAtlas("../assets/jhonny/act2.png", {
      act2: {
        x: 0,
        y: 0,
        width: 2960,
        height: 2418,
        sliceX: 4,
        sliceY: 3,
        anims: {
          idle: { from: 0, to: 11, speed: 32 },
        },
      },
    });
    loadSpriteAtlas("../assets/jhonny/explosion.png", {
      explosion: {
        x: 0,
        y: 0,
        width: 612,
        height: 390,
        sliceX: 3,
        sliceY: 2,
        anims: { idle: { from: 0, to: 4, speed: 32 } },
      },
    });
    // loadSound("theme","../assets/jhonny/theme.mp3")
    loadSprite("bullet2", "../assets/jhonny/07.png");
    loadSprite("steelBall", "../assets/jhonny/steel.png");
    loadSprite("tusk3", "../assets/jhonny/tusk3.png");
    loadSound("kaiten", "../assets/jhonny/kaiten.wav");
    loadSound("tusk", "../assets/jhonny/tusk.wav");
    loadSound("charge1", "../assets/jhonny/charge (1).wav");
    loadSound("charge2", "../assets/jhonny/charge (2).wav");
    loadSound("bulletSound", "../assets/jhonny/bulletSound.wav");
    loadSound("bulletSound2", "../assets/jhonny/bulletSound2.wav");
    loadSound("bulletActivate", "../assets/jhonny/bulletActivate.wav");
    // loadSound("attack1","../assets/jhonny/attack (1).wav")
    loadSound("attack2", "../assets/jhonny/attack (2).wav");
    loadSound("attack3", "../assets/jhonny/attack (3).wav");
    loadSound("attack4", "../assets/jhonny/attack (4).wav");
    // loadSound("attack5","../assets/jhonny/attack (5).wav")
    loadSound("attack6", "../assets/jhonny/attack (6).wav");
    loadSound("chummi1", "../assets/jhonny/chummi (1).wav");
    loadSound("chummi2", "../assets/jhonny/chummi (2).wav");
    loadSound("yoshi", "../assets/jhonny/yoshi.wav");
    loadSound("final", "../assets/jhonny/final.wav");
    loadSound("ora1", "../assets/jhonny/ora (1).wav");
    loadSound("ora2", "../assets/jhonny/ora (2).wav");
    loadSound("stand", "../assets/jhonny/stand appearing.wav");
    loadSound("stand2", "../assets/jhonny/stand appearing (2).wav");
    loadSound("standp", "../assets/jhonny/stand punch.wav");
    loadSound("hurt1", "../assets/jhonny/hurt (1).wav");
    loadSound("hurt2", "../assets/jhonny/hurt (2).wav");
    loadSound("hurt3", "../assets/jhonny/hurt (3).wav");
    loadSound("hurt4", "../assets/jhonny/hurt (4).wav");
    loadSound("hurt5", "../assets/jhonny/hurt (5).wav");
    loadSound("hurt6", "../assets/jhonny/hurt (6).wav");

    loadSound("attack7", "../assets/jhonny/attack (7).wav");
  },
  attacks: {
    hitBox: function ({ w, h, position, delay, timeOut, org, tag }) {
      wait(delay, () => {
        const box = add([
          rect(w, h),
          area(),
          color(YELLOW),
          pos(position),
          origin(org),
          opacity(0),
          lifespan(timeOut),
          `${tag}`,
        ]);
      });
    },
    bullet: async function ({ position, dir, speed, angle, xOffset, yOffset }) {
      const bulletObj = add([
        sprite("bullet2"),
        area(),
        origin("center"),
        cleanup(),
        outview({ hide: true }),
        scale(0.5),
        rotate(angle),
        layer("effect"),
        pos(position),
        move(dir, speed),
        "johnnyBullet",
      ]);
      wait(0.04, () => {
        bulletObj.onUpdate(() => {
          const trail = add([
            sprite("bulletTrail", { anim: "idle" }),
            area(),
            origin("center"),
            pos(bulletObj.pos.sub(xOffset, yOffset)),
            cleanup(),
            layer("effect"),
            rotate(angle),
            outview(),
            lifespan(0.2),
            opacity(0.7),
            scale(0.6),
            "johnnyBulletTrail",
          ]);
        });
      });
    },
    tuskAct3: async function (player) {
      play("bulletActivate");
      play("chummi1");
      player.play("shootAct1_1");
      const a = add([
        sprite("act2", { anim: "idle" }),
        area(),
        pos(player.pos.add(0, -36 * vh)),
        origin("center"),
        layer("effect"),
        lifespan(0.4),
        scale(0.5),
      ]);
      wait(0.35, () => {
        const t = add([
          sprite("tusk3"),
          area(),
          pos(a.pos),
          origin("center"),
          layer("effect"),
          lifespan(1),
          scale(2),
        ]);
        if (player.flipX()) {
          this.bullet({
            position: player.pos.add(-6 * vw, -26 * vh),
            dir: vec2(-1, 0),
            speed: 2512,
            angle: 180,
            xOffset: -6 * vw,
            yOffset: 0,
          });
          player.move(100 * vw, 0);
          a.flipX(true);
          t.flipX(true);
        }
        if (!player.flipX()) {
          this.bullet({
            position: player.pos.add(6 * vw, -26 * vh),
            dir: vec2(1, 0),
            speed: 2512,
            angle: 180,
            xOffset: -6 * vw,
            yOffset: 0,
          });
          player.move(-100 * vw, 0);
          a.flipX(false);
          t.flipX(false);
        }
        play("bulletSound");
      });
    },
    final: async function ({ player, enemy }) {
      player.play("pickSteelBall");
      play("final");
      play("bulletActivate");
      wait(0.5, () => {
        player.play("throwSteelBall");
        wait(0.2, () => {
          play("bulletSound");
          const steelBall = add([
            sprite("steelBall"),
            area(),
            pos(player.pos.add(4 * vw, -26 * vh)),
            origin("center"),
            layer("effect"),
            move(RIGHT, 1500),
            lifespan(1),
            "steelBall",
          ]);
          steelBall.onCollide("HurtBox", () => {
            steelBall.destroy();
            play("stand2");
            const a = add([
              sprite("act2", { anim: "idle" }),
              area(),
              pos(steelBall.pos.sub(6 * vw, 0)),
              origin("center"),
              layer("effect"),
              lifespan(0.4),
              scale(0.5),
            ]);
            wait(0.3, () => {
              const s = add([
                sprite("tuskAct4", {
                  anim: "idle",
                  width: 22.5 * vw,
                  height: 40 * vh,
                }),
                pos(steelBall.pos),
                origin("center"),
                layer("effect"),
                lifespan(7),
              ]);
              wait(0.6, () => {
                s.onUpdate(() => {
                  // w,h,position,delay,timeOut,org
                  this.hitBox({
                    w: 64,
                    h: 16,
                    position: s.pos.add(rand(-8, 8) * vw, rand(-10, 10) * vh),
                    delay: 0,
                    timeOut: 0.1,
                    org: "botleft",
                    tag: "tuskHitBox",
                  });
                  //explosion effect;
                  const ex = add([
                    sprite("explosion", { anim: "idle" }),
                    pos(s.pos.add(rand(-8, 8) * vw, rand(-10, 10) * vh)),
                    origin("botleft"),
                    layer("effect"),
                    scale(0.5),
                    opacity(0.8),
                    lifespan(0.1),
                  ]);
                });
                s.play("beatdown");
                let a = play("standp", { loop: true });
                let b = play("ora1", { loop: true });
                wait(5, () => {
                  b.stop();
                  let c = play("ora2");
                  wait(1, () => {
                    a.stop();
                  });
                });
              });
            });
          });
        });
      });
    },
    canAttack: true,
    keyCount: 0,
    stand: 1,
    attack_A: async function ({ player, enemy }) {
      if (this.canAttack) {
        player.play("punch4");
        play("attack6");
        this.canAttack = false;
        if (player.flipX()) {
          // hitBox: function ({w, h, position, delay, timeOut, origin, tag}) {
          this.hitBox({
            w: 14 * vw,
            h: 2 * vh,
            position: player.pos.add(0, -9 * vh),
            delay: 0.2,
            timeOut: 0.2,
            org: "right",
            tag: "johnnyPunch",
          });
        }
        if (!player.flipX()) {
          this.hitBox({
            w: 14 * vw,
            h: 2 * vh,
            position: player.pos.add(0, -9 * vh),
            delay: 0.2,
            timeOut: 0.2,
            org: "left",
            tag: "johnnyPunch",
          });
        }
      }
      wait(0.5, () => {
        this.canAttack = true;
      });
    },
    attack_S: async function ({ player, enemy }) {
      if (this.canAttack) {
        player.play("punch");
        this.canAttack = false;
        if (player.flipX()) {
          this.hitBox({
            w: 6 * vw,
            h: 4 * vh,
            position: player.pos.add(0, -22 * vh),
            delay: 0.2,
            timeOut: 0.2,
            org: "right",
            tag: "johnnyPunch",
          });
          player.move(-100 * vw, 0);
        }
        if (!player.flipX()) {
          this.hitBox({
            w: 6 * vw,
            h: 4 * vh,
            position: player.pos.add(0, -22 * vh),
            delay: 0.2,
            timeOut: 0.2,
            org: "left",
            tag: "johnnyPunch",
          });
          player.move(100 * vw, 0);
        }
        play("attack2");
        wait(0.4, () => {
          this.canAttack = true;
        });

        if (Math.abs(player.pos.x - enemy.pos.x) <= 128) {
          if (isKeyPressedRepeat("s")) {
            player.play("punch");
            //count number of times key is pressed
            this.keyCount++;
          }
          //if key is pressed 3 times
          if (this.keyCount == 3) {
            //set canAttack to false so player can only attack when one attack is finished
            this.canAttack = false;
            //play punch attack
            player.play("punch");
            //wait 0.4 sec for first attack to finish
            wait(0.4, () => {
              player.play("punch2");
              if (player.flipX()) {
                this.hitBox({
                  w: 6 * vw,
                  h: 8 * vh,
                  position: player.pos.add(0, -16 * vh),
                  delay: 0.2,
                  timeOut: 0.2,
                  org: "right",
                  tag: "johnnyPunch",
                });
              }
              if (!player.flipX()) {
                this.hitBox({
                  w: 6 * vw,
                  h: 8 * vh,
                  position: player.pos.add(0, -16 * vh),
                  delay: 0.2,
                  timeOut: 0.2,
                  org: "left",
                  tag: "johnnyPunch",
                });
              }
              play("attack3");
              //wait 0.5 sec for second attack to finish
              wait(0.5, () => {
                //stop previous attack and begin the next attack
                player.stop("punch2");
                player.play("punch3");
                if (player.flipX()) {
                  this.hitBox({
                    w: 6 * vw,
                    h: 2 * vh,
                    position: player.pos.add(0, -25 * vh),
                    delay: 0.2,
                    timeOut: 0.2,
                    org: "right",
                    tag: "johnnyPunch",
                  });
                }
                if (!player.flipX()) {
                  this.hitBox({
                    w: 6 * vw,
                    h: 2 * vh,
                    position: player.pos.add(0, -25 * vh),
                    delay: 0.2,
                    timeOut: 0.2,
                    org: "left",
                    tag: "johnnyPunch",
                  });
                }
                play("attack4");
                //set canAttack to TRUE so player can attack after this ends
                this.canAttack = true;
                //set keyCount to ZERO so player can again hit 3 punches
                this.keyCount = 0;
              });
            });
          }
        }
      }
    },
    attack_D: async function ({ player, enemy }) {
      if (this.canAttack) {
        if (isKeyDown("down")) {
          play("bulletActivate");
          player.play("shootAct2_DOWN");
          this.canAttack = false;
          wait(0.3, () => {
            this.canAttack = true;
          });
        } else {
          if (isKeyDown("up")) {
            play("bulletActivate", { volume: 0.6 });
            player.play("shootAct1_UP");
            play("kaiten", { volume: 0.5 });
            this.canAttack = false;
            wait(0.3, () => {
              if (player.flipX()) {
                //position,dir,speed,angle,xOffset,yOffset
                this.bullet({
                  position: player.pos.add(-3 * vw, -32 * vh),
                  dir: vec2(-1, -0.75),
                  speed: 2512,
                  angle: 45,
                  xOffset: -4 * vw,
                  yOffset: -6 * vh,
                });
                player.move(100 * vw, 0);
              }
              if (!player.flipX()) {
                this.bullet({
                  position: player.pos.add(3 * vw, -32 * vh),
                  dir: vec2(1, -0.75),
                  speed: 2512,
                  angle: -45,
                  xOffset: 4 * vw,
                  yOffset: -6 * vh,
                });
                player.move(-100 * vw, 0);
              }
              play("bulletSound2", { volume: 1 });
              wait(0.3, () => {
                this.canAttack = true;
              });
            });
          } else {
            play("bulletActivate", { volume: 0.6 });
            player.play("shootAct1_1");
            play("tusk", { volume: 0.5 });
            this.canAttack = false;
            wait(0.3, () => {
              if (player.flipX()) {
                //position,dir,speed,angle,xOffset,yOffset
                this.bullet({
                  position: player.pos.add(-3 * vw, -26 * vh),
                  dir: vec2(-1, 0),
                  speed: 2512,
                  angle: 180,
                  xOffset: -6 * vw,
                  yOffset: 0,
                });
                player.move(100 * vw, 0);
              }
              if (!player.flipX()) {
                this.bullet({
                  position: player.pos.add(3 * vw, -26 * vh),
                  dir: vec2(1, 0),
                  speed: 2512,
                  angle: 0,
                  xOffset: 6 * vw,
                  yOffset: 0,
                });
                player.move(-100 * vw, 0);
              }
              play("bulletSound", { volume: 1 });
              wait(0.3, () => {
                this.canAttack = true;
              });
            });
          }
        }
      }
    },
    attack_W: async function ({ player, enemy }) {
      if (this.canAttack) {
        // this.tuskAct3(player)
        this.final({ player: player, enemy: enemy });
        this.canAttack = false;
        wait(0.5, () => {
          this.canAttack = true;
        });
        // this.final(player,enemyPos);
      }
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
      "punch2",
      "shootAct1_1",
      "shootAct1_2",
      "shootAct1_UP",
      "shootAct2_1",
      "fromPortal",
      "pickSteelBall",
      "throwSteelBall",
      "punch3",
      "punch4",
      "shootAct2_DOWN",
    ],
    hitBox: ["johnnyPunch", "standPunch"],
  },
  collisons: async function ({ enemy, enemyTag, enemyHealth }) {
    let allBox = `${enemyTag}HurtBox`; //both enemy hurt box;
    let boxOne = `${enemyTag}HurtBoxOne`; //upper
    let boxTwo = `${enemyTag}HurtBoxTwo`; //lower

    onCollide(`${allBox}`, "tuskHitBox", () => {
      enemy.play("hurt");
      enemyHealth.hurt(0.3);
      shake(4);
      if (randi(1, 20) == 4) {
        play("hurt1"); //playerSpecific sound
      }
    });
    onCollide(boxOne, "johnnyPunch", () => {
      enemy.play("hurt");
      play("hurt3");
      enemyHealth.hurt(0.3);
      shake(0.1);
    });
    onCollide(boxTwo, "johnnyPunch", () => {
      enemy.play("fall");
      play("hurt2");
      enemyHealth.hurt(0.3);
      shake(0.1);
    });
  },
  hurtBoxData: {
    idle: {
      one: {
        width: 4 * vw,
        height: 8 * vw,
        offset: vec2(0, -13 * vh),
      },
      two: {
        width: 8 * vw,
        height: 4 * vw,
        offset: vec2(0, -4 * vh),
      },
    },
    crouch: {
      one: {
        width: 4 * vw,
        height: 8 * vw,
        offset: vec2(4 * vw, -4 * vh),
      },
      two: {
        width: 8 * vw,
        height: 4 * vw,
        offset: vec2(0, -4 * vh),
      },
    },
    run: {
      one: {
        width: 5.2 * vw,
        height: 5.2 * vw,
        offset: vec2(4 * vw, -13 * vh),
      },
      two: {
        width: 8 * vw,
        height: 4 * vw,
        offset: vec2(-4 * vw, -4 * vh),
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
    },
  },
};

export default jojo;
