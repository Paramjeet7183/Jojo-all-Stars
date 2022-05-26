//all animation after which onEnd will be played
const allAnim = [
  {
    name: "chop",
    onEnd: "idle",
  },
  {
    name: "punchUp",
    onEnd: "idle",
  },
  {
    name: "shoot",
    onEnd: "idle",
  },
  {
    name: "shootUp",
    onEnd: "idle",
  },
  {
    name: "heavyPunch",
    onEnd: "idle",
  },
  {
    name: "charge",
    onEnd: "idle",
  },
  {
    name: "walkForward",
    onEnd: "idle",
  },
  {
    name: "walkBackward",
    onEnd: "idle",
  },
  {
    name: "upperHurt",
    onEnd: "idle",
  },
  {
    name: "crouchHurt",
    onEnd: "idle",
  },
  {
    name: "lowerHurt",
    onEnd: "idle",
  },
  {
    name: "getup",
    onEnd: "idle",
  },
  {
    name: "ray",
    onEnd: "idle",
  },
  {
    name: "chop2",
    onEnd: "idle",
  },
  {
    name: "shootDown",
    onEnd: "idle",
  },
  {
    name: "crouchPunch",
    onEnd: "crouch",
    frame: 8,
  },
  {
    name: "crouchPunch2",
    onEnd: "crouch",
    frame: 8,
  },
];
//hitBox data of player
const hitBoxData = [
  {
    //chop animation
    frame: 34,
    position: vec2(90, -228),
    size: { w: 32, h: 32 },
    tag: "johnnyPunch",
  },
  {
    //punch Up
    frame: 40,
    position: vec2(128, -350),
    size: { w: 32, h: 32 },
    tag: "johnnyPunch",
  },
  {
    //heavy Punch
    frame: 50,
    position: vec2(150, -54),
    size: { w: 64, h: 128 },
    tag: "johnnyHeavyPunch",
  },
  {
    //chop2
    frame: 112,
    position: vec2(100, -232),
    size: { w: 100, h: 32 },
    tag: "johnnyChop2",
  },
  {
    //crouch punch1
    frame: 93,
    position: vec2(190, -112),
    size: { w: 48, h: 48 },
    tag: "johnnyChop2",
  },
  {
    //crouch punch2
    frame: 101,
    position: vec2(180, -100),
    size: { w: 48, h: 48 },
    tag: "johnnyChop2",
  },
];
const collisionData = [
  {
    entities: ["johnnyPunch", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    pushX: 16,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    pushX: 16,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyChop2", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    pushX: 16,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyChop2", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    pushX: 16,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyHeavyPunch", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2,
    pushX: 16,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyHeavyPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2,
    pushX: 20,
    pushY: 0,
    effect: [1],
    shake: 2,
  },
  {
    entities: ["johnnyBullet1", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    pushX: 100,
    pushY: 0,
    effect: [7, 1],
    shake: 8,
  },
  {
    entities: ["johnnyBullet1", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    pushX: 100,
    pushY: 0,
    effect: [7, 1],
    shake: 14,
  },
  {
    entities: ["portal", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 4.2,
    pushX: 5,
    pushY: 50,
    effect: [7, 1],
    shake: 8,
  },
  {
    entities: ["johnnyRay", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 4.2,
    pushX: 60,
    pushY: 50,
    effect: [7, 1],
    shake: 8,
  },
];
const hurtBoxData = [
  {
    anim: "idle",
    one: {
      offset: vec2(64, -128),
      size: { w: 90, h: 128 },
      angle: 0,
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 184, h: 90 },
      angle: 0,
    },
  },
  {
    anim: "shootDown",
    one: {
      offset: vec2(64, -128),
      size: { w: 90, h: 128 },
      angle: 0,
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 184, h: 90 },
      angle: 0,
    },
  },
  {
    anim: "shootUp",
    one: {
      offset: vec2(64, -128),
      size: { w: 90, h: 128 },
      angle: 0,
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 184, h: 90 },
      angle: 0,
    },
  },
  {
    anim: "shoot",
    one: {
      offset: vec2(64, -128),
      size: { w: 90, h: 128 },
      angle: 0,
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 184, h: 90 },
      angle: 0,
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(100, -16),
      size: { w: 80, h: 190 },
    },
    two: {
      offset: vec2(0, -32),
      size: { w: 200, h: 80 },
    },
  },
  {
    anim: "walkForward",
    one: {
      offset: vec2(190, -16),
      size: { w: 128, h: 150 },
    },
    two: {
      offset: vec2(40, -54),
      size: { w: 164, h: 64 },
    },
  },
  {
    anim: "walkBackward",
    one: {
      offset: vec2(-64, -54),
      size: { w: 128, h: 150 },
    },
    two: {
      offset: vec2(116, -24),
      size: { w: 176, h: 88 },
    },
  },
];
//tusk bullet
async function fireBullet({ player, dir, p, offset, angle }) {
  const bullet = add([
    sprite("bullet"),
    area(),
    pos(player.pos.add(player.flipX() ? -p.x : p.x, p.y)),
    move(vec2(player.flipX() ? -dir.x : dir.x, dir.y), 2000),
    cleanup(),
    origin("center"),
    layer("effect"),
    rotate(player.flipX() ? angle : -angle),
    scale(0.5),
    opacity(1),
    "johnnyBullet1",
  ]);
  bullet.onCollide("hurtBox", () => {
    bullet.destroy();
  });
  const trail = add([
    sprite("bulletTrail", { anim: "idle" }),
    pos(bullet.pos.sub(player.flipX() ? offset.x : -offset.x, -offset.y / 1.3)),
    origin("center"),
    layer("effect"),
    move(vec2(player.flipX() ? dir.x : -dir.x, -dir.y), 256),
    rotate(player.flipX() ? angle : -angle),
    scale(1.4),
    lifespan(0.3),
  ]);
  let tExist = false;
  wait(0.048, () => {
    bullet.onUpdate(() => {
      if (!tExist) {
        const trail1 = add([
          sprite("blueTrail", { anim: "idle" }),
          pos(
            bullet.pos.sub(
              player.flipX() ? -offset.x : offset.x,
              offset.y / 1.3
            )
          ),
          origin("center"),
          move(
            vec2(player.flipX() ? dir.x : -dir.x, -dir.y),
            vec2(900, 0).lerp(vec2(200, 300), dt() * 16).x
          ),
          rotate(player.flipX() ? angle : -angle),
          layer("effect"),
          scale(0.55),
          lifespan(0.2),
        ]);
        tExist = true;
        wait(0.05, () => {
          tExist = false;
        });
      }
    });
  });
}
const chop = {
  ex: true,
  anim: "chop",
  timeOut: 0.5,
  fun: () => {
    play("punchWooshSound1", {
      volume: airSound,
    });
    play("johnnyAtt1", {
      volume: charSound,
    });
  },
};
const chop2 = {
  ex: true,
  anim: "chop2",
  timeOut: 0.64,
  fun: () => {
    play("punchWooshSound1", {
      volume: airSound,
    });
    play("johnnyAtt2", {
      volume: charSound,
    });
  },
};
const punchUp = {
  ex: true,
  anim: "punchUp",
  timeOut: 0.55,
  fun: () => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("johnnyAtt3", {
      volume: charSound,
    });
  },
};
const heavyPunch = {
  ex: true,
  anim: "heavyPunch",
  timeOut: 0.76,
  fun: () => {
    play("punchWooshSound2", {
      volume: airSound,
    });
    play("johnnyAtt2", {
      volume: charSound,
    });
  },
};
const shoot = {
  ex: true,
  anim: "shoot",
  timeOut: 0.85,
  fun: ({ player, stand, chargeBar }) => {
    play("bulletActivate", {
      volume: charSound * 1.5,
    });
    play("tuskAttack", {
      volume: charSound,
    });
    wait(0.38, () => {
      play("bulletSound", {
        volume: charSound * 1.5,
      });
      fireBullet({
        player: player,
        angle: 0,
        dir: vec2(1, 0),
        offset: vec2(64, 0),
        p: vec2(8 * vw, -35 * vh),
      });
      chargeBar.discharge(20);
    });
  },
};
const shootUp = {
  ex: true,
  anim: "shootUp",
  timeOut: 0.5,
  fun: ({ player, stand, chargeBar }) => {
    play("bulletActivate", {
      volume: charSound * 1.5,
    });
    play("tuskAttack", {
      volume: charSound,
    });
    wait(0.3, () => {
      play("bulletSound", {
        volume: charSound * 1.5,
      });
      fireBullet({
        player: player,
        angle: 45,
        dir: vec2(1, -0.75),
        offset: vec2(64, -64),
        p: vec2(5 * vw, -45 * vh),
      });
      chargeBar.discharge(20);
    });
  },
};

//shootDown
const shootDown = {
  ex: true,
  anim: "shootDown",
  timeOut: 1,
  fun: ({ player, stand, chargeBar }) => {
    wait(0.2, () => {
      play("bulletSound2");
      const portal = add([
        sprite("portal", { anim: "idle" }),
        area({ width: 32, height: 24 }),
        pos(player.pos.add(player.flipX() ? -90 : 90, -30)),
        origin("bot"),
        cleanup(),
        move(player.flipX() ? LEFT : RIGHT, 600),
        scale(2),
        layer("effect"),
        "portal",
      ]);
      chargeBar.discharge(20);
      portal.onCollide("hurtBox", () => {
        portal.destroy();
      });
    });
  },
};

//Ray
const ray = {
  ex: true,
  anim: "ray",
  timeOut: 1,
  fun: ({ player, stand, chargeBar }) => {
    play("bulletActivate", {
      volume: charSound * 1.5,
    });
    // play("johnnyAtt1", {
    //   volume: charSound,
    // });
    wait(0.24, () => {
      add([
        sprite("ray", { anim: "idle" }),
        area(),
        pos(player.pos.add(player.flipX() ? -116 : 116, -30)),
        origin(player.flipX() ? "botright" : "botleft"),
        lifespan(0.5),
        scale(2),
        layer("effect"),
        "johnnyRay",
      ]);
      chargeBar.discharge(20);
    });
  },
};
const crouchPunch = {
  ex: true,
  anim: "crouchPunch",
  timeOut: 0.5,
  fun: () => {
    play("punchWooshSound2", {
      volume: airSound,
    });
    play("johnnyAtt3", {
      volume: charSound,
    });
  },
};
const crouchPunch2 = {
  ex: true,
  timeOut: 0.5,
  anim: "crouchPunch2",
  fun: () => {
    play("punchWooshSound1", {
      volume: airSound,
    });
    play("johnnyAtt2", {
      volume: charSound,
    });
  },
};
const empty = {
  ex: false,
  timeOut: 0,
  anim: "idle",
  fun: () => {},
};

const johnny = {
  name: "johnny",
  standName: "tusk",
  displayName: "JOHNNY JOESTAR",
  speed: 180,
  jumpForce: 0,
  scale: 4,
  width: 3.7,
  height: 3.7,
  standWidth: 0.5,
  standHeight: 1,
  allAnim: allAnim,
  hitBoxData: hitBoxData,
  hurtBoxData: hurtBoxData,
  collisionData: collisionData,
  standHitBoxData: 0,
  areaOffset: vec2(0, -25),
  standOffset: vec2(0, -256),
  normalKey: {
    w: heavyPunch,
    a: punchUp,
    s: chop,
    d: chop2,
    wDown: empty,
    aDown: crouchPunch,
    sDown: crouchPunch2,
    dDown: empty,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: empty,
  },
  standKey: {
    w: heavyPunch,
    a: chop2,
    s: ray,
    d: shoot,
    wDown: empty,
    aDown: crouchPunch,
    sDown: crouchPunch2,
    dDown: shootDown,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: shootUp,
  },
};
export { johnny };
