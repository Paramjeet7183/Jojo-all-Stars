const allAnim = [
  {
    name: "kick",
    onEnd: "idle",
  },
  {
    name: "kick2",
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
    frame: 6,
  },
  {
    name: "crouchKick",
    onEnd: "crouch",
    frame: 6,
  },
  {
    name: "jumpKick",
    onEnd: "jump",
    frame: 47,
  },
];
const allStandAnim = [
  "walkForward",
  "walkBackward",
  "punch",
  "kick",
  "punch2",
  "barrage",
  "heavyPunch",
  "jump",
  "goldTree",
];
const playerHitBoxData = [
  {
    //punch
    frame: 18,
    position: vec2(36, -270),
    size: { w: 148, h: 32 },
    tag: "gioronoPunch",
  },
  {
    //kick
    frame: 22,
    position: vec2(64, -232),
    size: { w: 200, h: 64 },
    tag: "gioronoKick",
  },
  {
    //kick2
    frame: 27,
    position: vec2(185, -130),
    size: { w: 48, h: 48 },
    tag: "gioronoPunch",
  },
];
const standHitBoxData = [
  {
    //punch
    frame: 7,
    soundFrame: 6,
    sound: "punchWooshSound1",
    position: vec2(32, -48),
    size: { w: 100, h: 48 },
    tag: "goldExpPunch",
  },
  {
    //punch
    frame: 10,
    soundFrame: 8,
    sound: "punchWooshSound1",
    position: vec2(32, -32),
    size: { w: 190, h: 48 },
    tag: "goldExpPunch",
  },
  {
    //heavyPunch
    frame: 13,
    soundFrame: 12,
    sound: "punchWooshSound1",
    position: vec2(32, 0),
    size: { w: 232, h: 48 },
    tag: "goldExpHeavyPunch",
  },
  {
    //Kick
    frame: 18,
    soundFrame: 16,
    sound: "punchWooshSound1",
    position: vec2(64, -50),
    size: { w: 135, h: 48 },
    tag: "goldExpKick",
  },
  {
    //barrage
    frame: 26,
    soundFrame: 26,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrage",
  },
  {
    //barrage
    frame: 28,
    soundFrame: 27,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrage",
  },
  {
    //barrage
    frame: 30,
    soundFrame: 29,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrage",
  },
  {
    //barrage
    frame: 32,
    soundFrame: 31,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrage",
  },
  {
    frame: 34,
    soundFrame: 33,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrage",
  },
  {
    frame: 36,
    soundFrame: 35,
    sound: "punchWooshSound1",
    position: vec2(0, 80),
    size: { w: 185, h: 200 },
    tag: "goldExpBarrageFinal",
  },
];
const collisionData = [
  {
    entities: ["gioronoPunch", "H1"],
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
    entities: ["gioronoPunch", "H2"],
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
    entities: ["gioronoKick", "H1"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["gioronoKick", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 1.5,
    effect: [1],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["goldExpPunch", "H1"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["goldExpPunch", "H2"],
    collideSound: "punchSound3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 4,
  },
  {
    entities: ["goldExpKick", "H1"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["goldExpKick", "H2"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 2.5,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["goldExpHeavyPunch", "H1"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 5,
    effect: [3],
    pushX: 10,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["goldExpHeavyPunch", "H2"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.2,
    pauseTimeOut: 0.25,
    soundTimeOut: 0.5,
    attackDamage: 5,
    effect: [3],
    pushX: 10,
    pushY: 0,
    shake: 6,
  },
  {
    entities: ["goldExpBarrage", "H1"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.1,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    effect: [3],
    pushX: 8,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["goldExpBarrage", "H2"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.1,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 3.5,
    effect: [3],
    pushX: 8,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["goldExpBarrageFinal", "H1"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.1,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 4.5,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 10,
  },
  {
    entities: ["goldExpBarrageFinal", "H2"],
    collideSound: "goldExpPunchEff3",
    collisionTimeOut: 0.1,
    pauseTimeOut: 0.4,
    soundTimeOut: 0.5,
    attackDamage: 4.5,
    effect: [3],
    pushX: 26,
    pushY: 0,
    shake: 10,
  },
];
const hurtBoxData = [
  {
    anim: "idle",
    one: {
      offset: vec2(16, -242),
      size: { w: 90, h: 150 },
    },
    two: {
      offset: vec2(64, -32),
      size: { w: 180, h: 200 },
    },
  },
  {
    anim: "walkForward",
    one: {
      offset: vec2(32, -242),
      size: { w: 90, h: 140 },
    },
    two: {
      offset: vec2(32, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "walkBackward",
    one: {
      offset: vec2(32, -242),
      size: { w: 90, h: 140 },
    },
    two: {
      offset: vec2(32, -32),
      size: { w: 100, h: 200 },
    },
  },
  {
    anim: "crouch",
    one: {
      offset: vec2(40, -142),
      size: { w: 100, h: 128 },
    },
    two: {
      offset: vec2(40, -32),
      size: { w: 144, h: 90 },
    },
  },
  {
    anim: "jump",
    one: {
      offset: vec2(-32, -320),
      size: { w: 90, h: 132 },
    },
    two: {
      offset: vec2(-32, -180),
      size: { w: 90, h: 150 },
    },
  },
];
const punch = {
  ex: true,
  timeOut: 0.35,
  anim: "punch",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("gioronoAtt1", {
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
    play("gioronoAtt1", {
      volume: charSound,
    });
  },
};
const crouchKick = {
  ex: true,
  timeOut: 0.45,
  anim: "crouchKick",
  fun: ({ player, stand }) => {
    play("punchWooshSound3", {
      volume: airSound,
    });
    play("gioronoAtt2", {
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
    play("gioronoAtt4", {
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
    play("gioronoAtt4", {
      volume: charSound,
    });
  },
};
const kick2 = {
  ex: true,
  timeOut: 0.38,
  anim: "kick2",
  fun: ({ player, stand }) => {
    play("punchWooshSound2", {
      volume: airSound,
    });
    play("gioronoAtt2", {
      volume: charSound,
    });
  },
};
const standPunch = {
  ex: true,
  anim: "pose1",
  timeOut: 0.7,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("punch");
    play("gioronoMuda3", {
      volume: charSound,
    });
    chargeBar.discharge(10);
  },
};
const standKick = {
  ex: true,
  anim: "pose1",
  timeOut: 0.55,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("kick");
    play("gioronoMuda3", {
      volume: charSound,
    });
    chargeBar.discharge(15);
  },
};
const standHeavyPunch = {
  ex: true,
  anim: "pose1",
  timeOut: 0.5,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("heavyPunch");
    play("gioronoMuda3", {
      volume: charSound * 1.5,
    });
    chargeBar.discharge(15);
  },
};
const standBarrage = {
  ex: true,
  anim: "pose1",
  timeOut: 1,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("barrage");
    play("gioronoMuda2", {
      volume: charSound,
      seek: 0.5,
    });
    chargeBar.discharge(0);
  },
};
const standTree = {
  ex: true,
  anim: "pose1",
  timeOut: 0.6,
  fun: ({ player, stand, chargeBar }) => {
    stand.play("goldTree");
    play("gioronoMuda3", {
      volume: charSound,
    });
    chargeBar.discharge(20);
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
const giorono = {
  name: "giorono",
  standName: "goldExp",
  displayName: "GIORONO GIOVANNA",
  speed: 460,
  jumpForce: 1256,
  scale: 5,
  width: 3.9,
  height: 3.9,
  standWidth: 4,
  standHeight: 4,
  allAnim: allAnim,
  allStandAnim: allStandAnim,
  hitBoxData: playerHitBoxData,
  hurtBoxData: hurtBoxData,
  standHitBoxData: standHitBoxData,
  collisionData: collisionData,
  areaOffset: vec2(0, -30),
  standOffset: vec2(64, -300),
  normalKey: {
    w: punch,
    a: kick2,
    s: punch,
    d: kick,
    wDown: empty,
    aDown: crouchPunch,
    sDown: crouchKick,
    dDown: empty,
    wUp: empty,
    aUp: empty,
    sUp: jumpKick,
    dUp: empty,
  },
  standKey: {
    w: standBarrage,
    a: standHeavyPunch,
    s: standPunch,
    d: standKick,
    wDown: standTree,
    aDown: empty,
    sDown: empty,
    dDown: empty,
    wUp: empty,
    aUp: empty,
    sUp: empty,
    dUp: empty,
  },
};
export { giorono };
