const allAnim = [
  "kick",
  "punch",
  "pose4",
  "pose3",
  "pose2",
  "pose1",
  "walkForward",
  "walkBackward",
  "upperHurt",
  "lowerHurt",
  "crouchHurt",
  "fall",
];
const allStandAnim = [
  "walkForward",
  "walkBackward",
  "punch",
  "kick",
  "punch2",
  "kick",
  "barrage",
  "special",
  "heavyPunch",
  "jump",
];

const playerHitBoxData = [
  {
    //punch
    frame: 47,
    position: vec2(256, -200),
    size: { w: 32, h: 32 },
    tag: "jotaroPunch",
  },
  {
    //kick
    frame: 54,
    position: vec2(100, -50),
    size: { w: 80, h: 50 },
    tag: "jotaroKick",
  },
];
const standHitBoxData = [
  {
    //punch
    frame: 29,
    soundFrame: 29,
    sound: "punchWooshSound1",
    position: vec2(110, -48),
    size: { w: 48, h: 48 },
    tag: "starPlatinumPunch1",
  },
  {
    //punch2
    frame: 36,
    soundFrame: 33,
    sound: "punchWooshSound1",
    position: vec2(160, 0),
    size: { w: 48, h: 48 },
    tag: "starPlatinumPunch2",
  },
  {
    //heavy punch
    frame: 43,
    soundFrame: 40,
    sound: "punchWooshSound1",
    position: vec2(256, -20),
    size: { w: 48, h: 48 },
    tag: "starPlatinumHeavyPunch",
  },
  {
    //kick
    frame: 54,
    soundFrame: 50,
    sound: "punchWooshSound1",
    position: vec2(164, 130),
    size: { w: 48, h: 48 },
    tag: "starPlatinumKick",
  },
  {
    //barrage 1
    frame: 61,
    soundFrame: 59,
    sound: "punchWooshSound1",
    position: vec2(140, -40),
    size: { w: 48, h: 48 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 2
    frame: 64,
    soundFrame: 62,
    sound: "punchWooshSound1",
    position: vec2(116, 0),
    size: { w: 48, h: 48 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 3
    frame: 67,
    soundFrame: 65,
    sound: "punchWooshSound1",
    position: vec2(144, 44),
    size: { w: 48, h: 48 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 3
    frame: 70,
    soundFrame: 68,
    sound: "punchWooshSound1",
    position: vec2(128, -100),
    size: { w: 48, h: 48 },
    tag: "starPlatinumBarrage",
  },
];
const collisionData = [
  {
    entities: ["jotaroPunch", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 2,
  },
  {
    entities: ["jotaroPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 1,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 2,
  },
  {
    entities: ["jotaroKick", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 8, //1
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 2,
  },
  {
    entities: ["jotaroKick", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 8, //1
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 2,
  },
  {
    entities: ["starPlatinumPunch1", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 50,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumPunch1", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 50,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumPunch2", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 50,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumPunch2", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    pushX: 50,
    pushY: 0,
    effect: [3],
    shake: 4,
  },
  {
    entities: ["starPlatinumKick", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 64,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumKick", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 64,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumHeavyPunch", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 80,
    pushY: 0,
    shake: 2,
  },
  {
    entities: ["starPlatinumHeavyPunch", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 80,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["starPlatinumBarrage", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 8, //temp - original - 2.5
    effect: [3],
    pushX: 40,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumBarrage", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 40,
    pushY: 0,
    shake: 4,
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
const punch = {
  ex: true,
  timeOut: 0.45,
  anim: "punch",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
  },
};
const kick = {
  ex: true,
  timeOut: 0.5,
  anim: "kick",
  fun: ({ player, stand }) => {
    play("punchWooshSound2", {
      volume: airSound,
    });
  },
};
const standPunch = {
  ex: true,
  anim: "pose4",
  timeOut: 0.8,
  fun: ({ player, stand }) => {
    stand.play("punch");
  },
};
const standKick = {
  ex: true,
  anim: "pose4",
  timeOut: 0.55,
  fun: ({ player, stand }) => {
    stand.play("kick");
  },
};
const standHeavyPunch = {
  ex: true,
  anim: "pose3",
  timeOut: 0.55,
  fun: ({ player, stand }) => {
    stand.play("heavyPunch");
  },
};
const standSpecial = {
  ex: true,
  anim: "pose1",
  timeOut: 2.5,
  fun: ({ player, stand }) => {
    stand.play("special");
  },
};
const standBarrage = {
  ex: true,
  anim: "pose2",
  timeOut: 1.1,
  fun: ({ player, stand }) => {
    stand.play("barrage");
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
const jotaro = {
  name: "jotaro",
  standName: "starPlatinum",
  displayName: "JOTARO KUJO",
  speed: 400,
  jumpForce: 1256,
  scale: 3,
  allAnim: allAnim,
  allStandAnim: allStandAnim,
  hitBoxData: playerHitBoxData,
  hurtBoxData: hurtBoxData,
  standHitBoxData: standHitBoxData,
  collisionData: collisionData,
  areaOffset: vec2(0, -12),
  standOffset: vec2(150, -256),
  normalKey: {
    w: punch,
    a: kick,
    s: punch,
    d: empty,
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
    w: standBarrage,
    a: standHeavyPunch,
    s: standPunch,
    d: standKick,
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
export { jotaro };
