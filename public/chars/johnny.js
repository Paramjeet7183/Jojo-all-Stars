//all animation after which idle will be played
const allAnim = [
  "chop",
  "punchUp",
  "shoot",
  "shootUp",
  "heavyPunch",
  "charge",
  "walkForward",
  "walkBackward",
  "upperHurt",
  "lowerHurt",
  "crouchHurt",
  "chop2",
  "shootDown",
  "ray",
  "fall",
];
//hitBox data of player
const hitBoxData = [
  {
    //chop animation
    frame: 34,
    position: vec2(76, -200),
    size: { w: 32, h: 32 },
    tag: "johnnyPunch",
  },
  {
    //punch Up
    frame: 40,
    position: vec2(90, -300),
    size: { w: 32, h: 32 },
    tag: "johnnyPunch",
  },
  {
    //heavy Punch
    frame: 50,
    position: vec2(128, -54),
    size: { w: 64, h: 128 },
    tag: "johnnyHeavyPunch",
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
    shake: 8,
  },
];
const hurtBoxData = [
  {
    anim: "idle",
    one: {
      offset: vec2(44, -144),
      size: { w: 80, h: 100 },
      angle: 0,
    },
    two: {
      offset: vec2(44, -54),
      size: { w: 164, h: 70 },
      angle: 0,
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(64, -32),
      size: { w: 64, h: 136 },
    },
    two: {
      offset: vec2(-32, -54),
      size: { w: 144, h: 64 },
    },
  },
  {
    anim: "walkForward",
    one: {
      offset: vec2(156, -54),
      size: { w: 98, h: 128 },
      angle: -45,
    },
    two: {
      offset: vec2(44, -54),
      size: { w: 164, h: 64 },
    },
  },
  {
    anim: "walkBackward",
    one: {
      offset: vec2(-64, -54),
      size: { w: 90, h: 128 },
    },
    two: {
      offset: vec2(116, -54),
      size: { w: 176, h: 64 },
    },
  },
  {
    anim: "shootDown",
    one: {
      offset: vec2(44, -144),
      size: { w: 80, h: 100 },
      angle: 0,
    },
    two: {
      offset: vec2(44, -54),
      size: { w: 164, h: 70 },
      angle: 0,
    },
  },
];
//tusk bullet
async function fireBullet(player) {
  const bullet = add([
    sprite("bullet"),
    area(),
    pos(player.pos.add(player.flipX() ? -128 : 128, -222)),
    move(player.flipX() ? LEFT : RIGHT, 2000),
    cleanup(),
    origin("center"),
    layer("effect"),
    scale(0.5),
    opacity(1),
    "johnnyBullet1",
  ]);
  bullet.onCollide("hurtBox", () => {
    bullet.destroy();
  });
  const trail = add([
    sprite("bulletTrail1", { anim: "idle" }),
    pos(bullet.pos.sub(-16, 0)),
    origin("center"),
    layer("effect"),
    move(player.flipX() ? RIGHT : LEFT, 256),
    scale(1.4),
    lifespan(0.3),
  ]);
  let tExist = false;
  wait(0.048, () => {
    bullet.onUpdate(() => {
      if (!tExist) {
        const trail1 = add([
          sprite("bulletTrail1", { anim: "idle" }),
          pos(bullet.pos.sub(player.flipX() ? -64 : 64, 0)),
          origin("center"),
          move(player.flipX() ? RIGHT : LEFT, 900),
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
  },
};
const chop2 = {
  ex: true,
  anim: "chop2",
  timeOut: 0.5,
  fun: () => {
    play("punchWooshSound1", {
      volume: airSound,
    });
  },
};
const punchUp = {
  ex: true,
  anim: "punchUp",
  timeOut: 0.5,
  fun: () => {
    play("punchWooshSound3", {
      volume: airSound,
    });
  },
};
const heavyPunch = {
  ex: true,
  anim: "heavyPunch",
  timeOut: 0.5,
  fun: () => {
    play("punchWooshSound2", {
      volume: airSound,
    });
  },
};
const shoot = {
  ex: true,
  anim: "shoot",
  timeOut: 0.85,
  fun: ({ player, stand }) => {
    play("bulletActivate", {
      volume: 0.3,
    });
    play("attack", {
      volume: 0.5,
    });
    wait(0.38, () => {
      play("bulletSound", {
        volume: 0.5,
      });
      fireBullet(player);
    });
  },
};
const shootUp = {
  ex: true,
  anim: "shootUp",
  timeOut: 0.5,
  fun: () => {},
};

//shootDown
const shootDown = {
  ex: true,
  anim: "shootDown",
  timeOut: 1,
  fun: ({ player, stand }) => {
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
  fun: ({ player, stand }) => {
    play("bulletActivate", {
      volume: 0.3,
    });
    wait(0.24, () => {
      add([
        sprite("ray", { anim: "idle" }),
        pos(player.pos.add(player.flipX() ? -116 : 116, -50)),
        origin(player.flipX() ? "botright" : "botleft"),
        lifespan(0.7),
        scale(2),
        layer("effect"),
        "johnnyRay",
      ]);
    });
  },
};
const crouchPunch = {
  ex: true,
  anim: "crouchPunch",
  timeOut: 0.5,
  fun: () => {},
};
const crouchPunch2 = {
  ex: true,
  timeOut: 0.5,
  anim: "crouchPunch2",
  fun: () => {},
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
  scale: 3,
  allAnim: allAnim,
  hitBoxData: hitBoxData,
  hurtBoxData: hurtBoxData,
  collisionData: collisionData,
  standHitBoxData: 0,
  areaOffset: vec2(0, -50),
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
    aDown: empty,
    sDown: empty,
    dDown: shootDown,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: shootUp,
  },
};
export { johnny };
