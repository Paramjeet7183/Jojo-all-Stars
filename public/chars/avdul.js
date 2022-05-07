const allAnim = [
  "walkForward",
  "walkBackward",
  "chop",
  "kick",
  "kick2",
  "heavyPunch",
  "pose1",
  "upperHurt",
  "lowerHurt",
  "crouchHurt",
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
    position: vec2(180, -264),
    size: { w: 32, h: 32 },
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
      offset: vec2(16, -242),
      size: { w: 128, h: 100 },
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
      size: { w: 128, h: 100 },
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
      size: { w: 128, h: 100 },
      angle: 0,
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(-32, -142),
      size: { w: 80, h: 64 },
    },
    two: {
      offset: vec2(24, -32),
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
    effect: 1,
  },
  {
    entities: ["avdulPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1.6,
    effect: 1,
  },
  {
    entities: ["avdulChop", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: 1,
  },
  {
    entities: ["avdulChop", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: 1,
  },
  {
    entities: ["avdulKick", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
  },
  {
    entities: ["avdulKick", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
  },
  {
    entities: ["mrPunch", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
  },
  {
    entities: ["mrPunch", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
  },
  {
    entities: ["mrKick", "H1"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
  },
  {
    entities: ["mrKick", "H2"],
    collideSound: "punchSound1",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 2.2,
    effect: 1,
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
  },
};
const standPunch = {
  ex: true,
  timeOut: 0.45,
  anim: "idle",
  fun: ({ player, stand }) => {
    stand.play("punch");
  },
};
const standkick = {
  ex: true,
  timeOut: 0.45,
  anim: "idle",
  fun: ({ player, stand }) => {
    stand.play("kick");
  },
};
const throwFireBall = {
  ex: true,
  timeOut: 0.45,
  anim: "pose1",
  fun: ({ player, stand }) => {
    stand.play("throwFireBall");
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
