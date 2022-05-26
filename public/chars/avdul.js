import { addFire } from "./effects.js";

const allAnim = [
  { name: "kick", onEnd: "idle" },
  { name: "getup", onEnd: "idle" },
  { name: "heavyPunch", onEnd: "idle" },
  { name: "kick2", onEnd: "idle" },
  { name: "chop", onEnd: "idle" },
  { name: "walkForward", onEnd: "idle" },
  { name: "walkBackward", onEnd: "idle" },
  { name: "pose1", onEnd: "idle" },
  { name: "upperHurt", onEnd: "idle" },
  { name: "lowerHurt", onEnd: "idle" },
  { name: "crouchHurt", onEnd: "idle" },
];
const allStandAnim = [
  "walkBackward",
  "walkForward",
  "punch",
  "kick",
  "kick2",
  "throwFireBall",
];
const playerHitBoxData = [
  {
    //chop
    frame: 37,
    position: vec2(40, -280),
    size: { w: 140, h: 32 },
    tag: "avdulChop",
  },
  {
    //kick
    frame: 44,
    position: vec2(124, -64),
    size: { w: 32, h: 32 },
    tag: "avdulKick",
  },
  {
    //kick2
    frame: 49,
    position: vec2(216, -264),
    size: { w: 32, h: 32 },
    tag: "avdulKick",
  },
  {
    //heavyPunch
    frame: 57,
    position: vec2(280, -232),
    size: { w: 32, h: 64 },
    tag: "avdulPunch",
  },
];
const standHitBoxData = [
  {
    //punch
    frame: 9,
    soundFrame: 8,
    sound: "punchWooshSound5",
    position: vec2(150, -50),
    size: { w: 100, h: 100 },
    tag: "mrPunch",
  },
  {
    //kick
    frame: 20,
    soundFrame: 18,
    sound: "punchWooshSound3",
    position: vec2(200, 0),
    size: { w: 80, h: 80 },
    tag: "mrKick",
  },
];
const hurtBoxData = [
  {
    anim: "idle",
    one: {
      offset: vec2(24, -242),
      size: { w: 140, h: 150 },
    },
    two: {
      offset: vec2(32, -32),
      size: { w: 150, h: 200 },
    },
  },
  {
    anim: "walkForward",
    one: {
      offset: vec2(64, -242),
      size: { w: 140, h: 150 },
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "walkBackward",
    one: {
      offset: vec2(64, -242),
      size: { w: 140, h: 150 },
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(64, -110),
      size: { w: 150, h: 100 },
    },
    two: {
      offset: vec2(64, -12),
      size: { w: 144, h: 90 },
    },
  },
  {
    anim: "jump",
    one: {
      offset: vec2(-16, -300),
      size: { w: 106, h: 90 },
    },
    two: {
      offset: vec2(0, -180),
      size: { w: 144, h: 90 },
    },
  },
];
const collisionData = [
  {
    entities: ["avdulPunch", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.6,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["avdulPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.6,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["avdulChop", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["avdulChop", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["avdulKick", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 8,
  },
  {
    entities: ["avdulKick", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 8,
  },
  {
    entities: ["mrPunch", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [3, 8],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["mrPunch", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [3, 8],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["mrKick", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [3, 8],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["mrKick", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: [3, 8],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["mrFireBall", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.5,
    soundTimeOut: 0.5,
    attackDamage: 5,
    effect: [3],
    pushX: 0,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["mrFireBall", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.5,
    soundTimeOut: 0.5,
    attackDamage: 5,
    effect: [3],
    pushX: 0,
    pushY: 0,
    shake: 10,
  },
];
const chop = {
  ex: true,
  timeOut: 0.3,
  anim: "chop",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("avdulAtt1", {
      volume: charSound,
    });
  },
};
const kick = {
  ex: true,
  timeOut: 0.45,
  anim: "kick",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("avdulAtt2", {
      volume: charSound,
    });
  },
};
const kick2 = {
  ex: true,
  timeOut: 0.45,
  anim: "kick2",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("avdulAtt3", {
      volume: charSound,
    });
  },
};
const heavyPunch = {
  ex: true,
  timeOut: 0.45,
  anim: "heavyPunch",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("avdulAtt3", {
      volume: charSound,
    });
  },
};
const standPunch = {
  ex: true,
  timeOut: 0.45,
  anim: "idle",
  fun: ({ player, stand, chargeBar }) => {
    stand.play("punch");
    play("avdulAtt1", {
      volume: charSound,
    });
    chargeBar.discharge(10);
  },
};
const standkick = {
  ex: true,
  timeOut: 0.45,
  anim: "idle",
  fun: ({ player, stand, chargeBar }) => {
    stand.play("kick");
    play("avdulAtt2", {
      volume: charSound,
    });
    chargeBar.discharge(10);
  },
};
const throwFireBall = {
  ex: true,
  timeOut: 0.45,
  anim: "pose1",
  fun: ({ player, stand, chargeBar }) => {
    stand.play("throwFireBall");
    play("avdulAtt3", {
      volume: charSound,
    });
    const f = add([
      sprite("avdulFireBall", { anim: "idle" }),
      area(),
      pos(player.pos.add(256, -280)),
      move(player.flipX() ? LEFT : RIGHT, 800),
      cleanup(),
      origin("center"),
      layer("effect"),
      scale(3),
      "mrFireBall",
    ]);
    f.onCollide("hurtBox", () => {
      f.destroy();
    });
    chargeBar.discharge(40);
  },
};
const empty = {
  ex: false,
  timeOut: 0,
  anim: "idle",
  fun: ({ player, stand }) => {
    console.log("empty");
  },
};
const avdul = {
  name: "avdul",
  standName: "magicianRed",
  displayName: "MOHAMMAD AVDUL",
  speed: 400,
  jumpForce: 1100,
  scale: 3,
  width: 4,
  height: 4,
  standWidth: 4,
  standHeight: 4,
  allAnim: allAnim,
  allStandAnim: allStandAnim,
  hitBoxData: playerHitBoxData,
  hurtBoxData: hurtBoxData,
  standHitBoxData: standHitBoxData,
  collisionData: collisionData,
  areaOffset: vec2(0, -12),
  standOffset: vec2(0, -200),
  normalKey: {
    w: heavyPunch,
    a: kick,
    s: chop,
    d: kick2,
    wDown: empty,
    aDown: empty,
    sDown: empty,
    dDown: empty,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: empty,
  },
  standKey: {
    w: empty,
    a: standkick,
    s: standPunch,
    d: throwFireBall,
    wDown: empty,
    aDown: empty,
    sDown: empty,
    dDown: empty,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: empty,
  },
};
export { avdul };
