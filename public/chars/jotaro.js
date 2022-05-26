const allAnim = [
  {
    name: "kick",
    onEnd: "idle",
  },
  {
    name: "punch",
    onEnd: "idle",
  },
  {
    name: "pose1",
    onEnd: "idle",
  },
  {
    name: "pose2",
    onEnd: "idle",
  },
  {
    name: "pose3",
    onEnd: "idle",
  },
  {
    name: "pose4",
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
    name: "crouchPunch",
    onEnd: "crouch",
    frame: 34,
  },
  {
    name: "jumpKick",
    onEnd: "jump",
    frame: 93,
  },
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
    position: vec2(250, -250),
    size: { w: 64, h: 32 },
    tag: "jotaroPunch",
  },
  {
    //kick
    frame: 54,
    position: vec2(100, -80),
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
    position: vec2(30, -48),
    size: { w: 128, h: 48 },
    tag: "starPlatinumPunch1",
  },
  {
    //punch2
    frame: 36,
    soundFrame: 33,
    sound: "punchWooshSound1",
    position: vec2(30, 24),
    size: { w: 128, h: 48 },
    tag: "starPlatinumPunch2",
  },
  {
    //heavy punch
    frame: 43,
    soundFrame: 40,
    sound: "punchWooshSound1",
    position: vec2(75, -20),
    size: { w: 200, h: 48 },
    tag: "starPlatinumHeavyPunch",
  },
  {
    //kick
    frame: 54,
    soundFrame: 50,
    sound: "punchWooshSound1",
    position: vec2(128, 140),
    size: { w: 48, h: 48 },
    tag: "starPlatinumKick",
  },
  {
    //barrage 1
    frame: 61,
    soundFrame: 59,
    sound: "punchWooshSound1",
    position: vec2(-64, 80),
    size: { w: 250, h: 250 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 2
    frame: 64,
    soundFrame: 62,
    sound: "punchWooshSound1",
    position: vec2(-64, 80),
    size: { w: 250, h: 250 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 3
    frame: 67,
    soundFrame: 65,
    sound: "punchWooshSound1",
    position: vec2(-64, 80),
    size: { w: 250, h: 250 },
    tag: "starPlatinumBarrage",
  },
  {
    //barrage 3
    frame: 70,
    soundFrame: 68,
    sound: "punchWooshSound1",
    position: vec2(-64, 80),
    size: { w: 250, h: 250 },
    tag: "starPlatinumBarrageFinal",
  },
];
const collisionData = [
  {
    entities: ["jotaroPunch", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
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
    attackDamage: 2.5,
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
    attackDamage: 2.5, //1
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["jotaroKick", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5, //1
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["starPlatinumPunch1", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 3,
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
    attackDamage: 3,
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
    attackDamage: 3,
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
    attackDamage: 3,
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
    attackDamage: 3.5,
    effect: [3],
    pushX: 64,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["starPlatinumKick", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    effect: [3],
    pushX: 64,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["starPlatinumHeavyPunch", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    effect: [3],
    pushX: 80,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["starPlatinumHeavyPunch", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
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
    attackDamage: 3.9, //temp - original - 2.5
    effect: [3],
    pushX: 10,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["starPlatinumBarrage", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 3.9,
    effect: [3],
    pushX: 10,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["starPlatinumBarrageFinal", "H1"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 7.5,
    effect: [3],
    pushX: 30,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["starPlatinumBarrageFinal", "H2"],
    collideSound: "punchSound2",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 7.5,
    effect: [3],
    pushX: 30,
    pushY: 0,
    shake: 10,
  },
];
const hurtBoxData = [
  {
    anim: "idle",
    one: {
      offset: vec2(24, -242),
      size: { w: 140, h: 170 },
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
      size: { w: 140, h: 170 },
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
      size: { w: 140, h: 170 },
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(-8, -142),
      size: { w: 128, h: 100 },
    },
    two: {
      offset: vec2(24, -32),
      size: { w: 232, h: 102 },
    },
  },
  {
    anim: "jump",
    one: {
      offset: vec2(0, -300),
      size: { w: 128, h: 128 },
    },
    two: {
      offset: vec2(0, -128),
      size: { w: 128, h: 150 },
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
    play("muh", {
      volume: charSound,
    });
  },
};
const crouchPunch = {
  ex: true,
  timeOut: 0.45,
  anim: "crouchPunch",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("muh", {
      volume: charSound,
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
    play("muh", {
      volume: charSound,
    });
  },
};
const jumpKick = {
  ex: true,
  timeOut: 0.5,
  anim: "jumpKick",
  fun: ({ player, stand }) => {
    play("punchWooshSound2", {
      volume: airSound,
    });
    play("muh", {
      volume: charSound,
    });
  },
};
const standPunch = {
  ex: true,
  anim: "pose4",
  timeOut: 0.8,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("punch");
    play("muh", {
      volume: charSound,
    });
    chargeBar.discharge(5);
  },
};
const standKick = {
  ex: true,
  anim: "pose4",
  timeOut: 0.55,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("kick");
    play("orayo", {
      volume: charSound,
    });
    chargeBar.discharge(5);
  },
};
const standHeavyPunch = {
  ex: true,
  anim: "pose3",
  timeOut: 0.55,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("heavyPunch");
    play("ora", {
      volume: charSound * 1.5,
    });
    chargeBar.discharge(10);
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
  fun: ({ player, stand, chargeBar }) => {
    stand.play("barrage");
    play("long ooh", {
      volume: charSound,
      seek: 0.5,
    });
    chargeBar.discharge(10);
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
  scale: 6,
  width: 4.8,
  height: 4.8,
  standWidth: 4,
  standHeight: 4,
  allAnim: allAnim,
  allStandAnim: allStandAnim,
  hitBoxData: playerHitBoxData,
  hurtBoxData: hurtBoxData,
  standHitBoxData: standHitBoxData,
  collisionData: collisionData,
  areaOffset: vec2(0, -42),
  standOffset: vec2(150, -300),
  normalKey: {
    w: punch,
    a: kick,
    s: punch,
    d: empty,
    wDown: empty,
    aDown: empty,
    sDown: crouchPunch,
    dDown: empty,
    wUp: empty,
    aUp: jumpKick,
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
