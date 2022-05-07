async function loadAssets() {
  //round start assets
  loadSprite("fightLogo", "../assets/hud/fight.png");
  loadSprite("winLogo", "../assets/hud/win.png");
  loadSprite("loseLogo", "../assets/hud/lose.png");
  loadSprite("round", "../assets/hud/round.png");
  loadSound("r1f", "../assets/sound/r1.wav");
  loadSound("r2f", "../assets/sound/r2.wav");
  loadSound("r3f", "../assets/sound/r3.wav");
  loadSound("fightSound", "../assets/sound/fight.wav");
  loadSound("retTbc", "../assets/sound/retTbc.wav");
  loadSound("timeUp", "../assets/sound/time up.wav");
  //round start asstes end--
  // loadSound("footSound", "../assets/sound/foot.wav");
  // loadSound("jumpLandingSound", "../assets/sound/jump landing.wav");
  //Punching sound efects
  loadSound("punchWooshSound1", "../assets/sound/punch woosh (1).wav");
  loadSound("punchWooshSound2", "../assets/sound/punch woosh (2).wav");
  loadSound("punchWooshSound3", "../assets/sound/punch woosh (3).wav");
  loadSound("punchWooshSound4", "../assets/sound/punch woosh (4).wav");
  loadSound("punchWooshSound5", "../assets/sound/punch woosh (5).wav");
  loadSound("punchWooshSound6", "../assets/sound/punch woosh (6).wav");
  loadSound("punchSound1", "../assets/sound/punch (1).wav");
  loadSound("punchSound2", "../assets/sound/punch (2).wav");
  loadSound("punchSound3", "../assets/sound/punch (3).wav");
  loadSound("punchSound4", "../assets/sound/punch (4).wav");
  loadSound("punchSound5", "../assets/sound/punch (5).wav");
  loadSound("punchSound6", "../assets/sound/punch (6).wav");
  //   loadSound("heavyPunchSound1", "../assets/sound/heavy punch (1).wav");
  //   loadSound("heavyPunchSound2", "../assets/sound/heavy punch (2).wav");
  //   loadSound("heavyPunchSound3", "../assets/sound/heavy punch (3).wav");
  //   loadSound("heavyPunchSound4", "../assets/sound/heavy punch (4).wav");
  //   loadSound("heavyPunchSound5", "../assets/sound/heavy punch (5).wav");
  //punching sound effects end---
  //effects--
  loadSpriteAtlas("../assets/effects/eff1.png", {
    eff1: {
      x: 0,
      y: 0,
      width: 342,
      height: 50,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, speed: 30 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff2.png", {
    eff2: {
      x: 0,
      y: 0,
      width: 588,
      height: 75,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff3.png", {
    eff3: {
      x: 0,
      y: 0,
      width: 756,
      height: 90,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff4.png", {
    eff4: {
      x: 0,
      y: 0,
      width: 276,
      height: 47,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff5.png", {
    eff5: {
      x: 0,
      y: 0,
      width: 1250,
      height: 151,
      sliceX: 9,
      anims: {
        idle: { from: 0, to: 8, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff6.png", {
    fireEffect: {
      x: 0,
      y: 0,
      width: 924,
      height: 64,
      sliceX: 13,
      anims: {
        idle: { from: 0, to: 7, loop: true, speed: 24 },
        close: { from: 8, to: 12, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff6.png", {
    fireEffect: {
      x: 0,
      y: 0,
      width: 924,
      height: 64,
      sliceX: 13,
      anims: {
        idle: { from: 0, to: 7, loop: true, speed: 24 },
        close: { from: 8, to: 12, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff7.png", {
    chargeEffect: {
      x: 0,
      y: 0,
      width: 2603,
      height: 292,
      sliceX: 19,
      anims: {
        idle: { from: 0, to: 9, loop: true, speed: 24 },
        close: { from: 10, to: 18, loop: true, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/effects/eff12.png", {
    bloodEffect: {
      x: 0,
      y: 0,
      width: 160,
      height: 30,
      sliceX: 4,
      anims: {
        idle: { from: 0, to: 3, speed: 24 },
      },
    },
  });
  //jotaro---
  loadSound("jotaroHurt1", "../assets/jotaro/hurt (1).wav");
  loadSound("jotaroHurt2", "../assets/jotaro/hurt (2).wav");
  loadSound("jotaroHurt3", "../assets/jotaro/hurt (3).wav");
  loadSound("jotaroStand", "../assets/jotaro/starplatinum.wav");
  loadSound("jotaroStandAppear", "../assets/jotaro/deploy.wav");
  loadSpriteAtlas("../assets/jotaro/starPlatinum.png", {
    starPlatinum: {
      x: 0,
      y: 0,
      width: 1845,
      height: 1206,
      sliceX: 9,
      sliceY: 9,
      anims: {
        idle: { from: 0, to: 7, speed: 24, loop: true },
        walkForward: { from: 8, to: 14, speed: 24, loop: true },
        walkBackward: { from: 16, to: 22, speed: 24, loop: true },
        jump: { from: 23, to: 28, speed: 24, loop: true }, //originally its block
        punch: { from: 29, to: 39, speed: 24 },
        punch2: { from: 33, to: 39, speed: 24 },
        heavyPunch: { from: 40, to: 49, speed: 24 },
        kick: { from: 50, to: 58, speed: 30 },
        barrage: { from: 59, to: 79, speed: 24 },
        special: { from: 29, to: 79, speed: 24 },
      },
    },
  });
  loadSpriteAtlas("../assets/jotaro/jotaro.png", {
    jotaro: {
      x: 0,
      y: 0,
      width: 2244,
      height: 1815,
      sliceX: 11,
      sliceY: 11,
      anims: {
        idle: { from: 0, to: 7, speed: 16, loop: true },
        walkForward: { from: 8, to: 23, speed: 24, loop: true },
        walkBackward: { from: 24, to: 31, speed: 24, loop: true },
        punch: { from: 44, to: 51, speed: 24 },
        kick: { from: 52, to: 57, speed: 24 },
        pose1: { from: 35, to: 43, speed: 24 },
        pose2: { from: 58, to: 82, speed: 24 },
        pose3: { from: 94, to: 105, speed: 24 },
        pose4: { from: 106, to: 114, speed: 24 },
        win: { from: 38, to: 43, speed: 24 },
        jump: { from: 83, to: 93, speed: 20 },
        crouch: { from: 32, to: 34, speed: 24 },
        upperHurt: { from: 115, to: 115, speed: 8 },
        fall: { from: 116, to: 116, speed: 8 },
        crouchHurt: { from: 117, to: 117, speed: 8 },
        lowerHurt: { from: 118, to: 118, speed: 8 },
      },
    },
  });
  //jotaro end----

  //johnny----
  loadSound("bulletActivate", "../assets/jhonny/bulletActivate.wav");
  loadSound("attack", "../assets/jhonny/tusk.wav");
  loadSound("johnnyStand", "../assets/jhonny/tusk act3.wav");
  loadSound("johnnyStandAppear", "../assets/jhonny/stand appearing.wav");
  loadSound("bulletSound", "../assets/jhonny/bulletSound.wav");
  loadSound("bulletSound2", "../assets/jhonny/bulletSound2.wav");
  loadSound("johnnyHurt1", "../assets/jhonny/hurt (1).wav");
  loadSound("johnnyHurt2", "../assets/jhonny/hurt (2).wav");
  loadSound("johnnyHurt3", "../assets/jhonny/hurt (3).wav");
  // loadSound("johnnyTheme", "../assets/jhonny/theme.mp3");
  loadSprite("tusk", "../assets/jhonny/tusk3.png");
  loadSprite("bullet", "../assets/jhonny/07.png");
  loadSpriteAtlas("../assets/jhonny/bulletTrail.png", {
    bulletTrail: {
      x: 0,
      y: 0,
      width: 174,
      height: 86,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, speed: 24, loop: true },
      },
    },
  });
  loadSpriteAtlas("../assets/jhonny/bulletTrail1.png", {
    bulletTrail1: {
      x: 0,
      y: 0,
      width: 50,
      height: 150,
      sliceX: 3,
      sliceY: 2,
      anims: {
        idle: { from: 0, to: 5, speed: 30, loop: true },
      },
    },
  });
  loadSpriteAtlas("../assets/jhonny/spinEffect.png", {
    spinEffect: {
      x: 0,
      y: 0,
      width: 505,
      height: 488,
      sliceX: 5,
      sliceY: 4,
      anims: {
        idle: { from: 0, to: 19, speed: 60 },
      },
    },
  });
  loadSpriteAtlas("../assets/jhonny/ray.png", {
    ray: {
      x: 0,
      y: 0,
      width: 577,
      height: 244,
      sliceX: 5,
      sliceY: 4,
      anims: {
        idle: { from: 0, to: 19, speed: 40 },
      },
    },
  });
  loadSpriteAtlas("../assets/jhonny/portal.png", {
    portal: {
      x: 0,
      y: 0,
      width: 333,
      height: 66,
      sliceX: 3,
      sliceY: 2,
      anims: {
        idle: { from: 0, to: 5, speed: 30, loop: true },
      },
    },
  });
  loadSpriteAtlas("../assets/jhonny/jhonny.png", {
    johnny: {
      x: 0,
      y: 0,
      width: 1836,
      height: 1500,
      sliceX: 12,
      sliceY: 12,
      anims: {
        idle: { from: 0, to: 3, speed: 16, loop: true },
        crouch: { from: 4, to: 8, speed: 24 },
        walkForward: { from: 11, to: 22, speed: 24, loop: true },
        walkBackward: { from: 23, to: 30, speed: 24, loop: true },
        chop: { from: 31, to: 35, speed: 24 },
        punchUp: { from: 36, to: 43, speed: 24 },
        heavyPunch: { from: 44, to: 57, speed: 24 },
        shoot: { from: 58, to: 71, speed: 24 },
        shootUp: { from: 72, to: 81, speed: 24 },
        ray: { from: 117, to: 125, speed: 24 },
        shootDown: { from: 126, to: 136, speed: 24 },
        chop2: { from: 108, to: 116, speed: 24 },
        lowerHurt: { from: 83, to: 86, speed: 24 },
        upperHurt: { from: 87, to: 87, speed: 8 },
        charge: { from: 88, to: 88, speed: 16 },
        win: { from: 88, to: 88, speed: 16 },
        crouchPunch: { from: 91, to: 96, speed: 16 },
        crouchPunch2: { from: 97, to: 107, speed: 16 },
        crouchHurt: { from: 83, to: 86, speed: 24 },
        fall: { from: 83, to: 86, speed: 24 },
      },
    },
  });
  //--johnny ends
  //avdul---
  loadSpriteAtlas("../assets/avdul/avdul.png", {
    avdul: {
      x: 0,
      y: 0,
      width: 2120,
      height: 1278,
      sliceX: 10,
      sliceY: 9,
      anims: {
        idle: { from: 0, to: 7, speed: 24, loop: true },
        crouch: { from: 8, to: 13, speed: 24 },
        walkForward: { from: 15, to: 23, speed: 20, loop: true },
        walkBackward: { from: 23, to: 15, speed: 16, loop: true },
        jump: { from: 25, to: 35, speed: 24 },
        chop: { from: 36, to: 40, speed: 24 },
        kick: { from: 41, to: 45, speed: 24 },
        kick2: { from: 46, to: 53, speed: 24 },
        heavyPunch: { from: 54, to: 62, speed: 24 },
        pose1: { from: 63, to: 67, speed: 24 },
        win: { from: 63, to: 67, speed: 24 },
        pose1loop: { from: 68, to: 71, speed: 24, loop: true },
        upperHurt: { from: 72, to: 72, speed: 24 },
        lowerHurt: { from: 73, to: 73, speed: 24 },
        fall: { from: 73, to: 73, speed: 24 },
        hurt3: { from: 74, to: 74, speed: 24 },
        crouchHurt: { from: 75, to: 75, speed: 24 },
      },
    },
  });
  loadSprite("avdulIcon", "../assets/hud/avdul.png");
  loadSound("avdulHurt1", "../assets/avdul/hurt (1).wav");
  loadSound("avdulHurt2", "../assets/avdul/hurt (2).wav");
  loadSound("avdulHurt3", "../assets/avdul/hurt (3).wav");
  loadSound("avdulStandAppear", "../assets/avdul/standAppear.wav");
  loadSound("avdulStand", "../assets/avdul/standName.wav");
  loadSpriteAtlas("../assets/avdul/magicianRed.png", {
    magicianRed: {
      x: 0,
      y: 0,
      width: 1414,
      height: 959,
      sliceX: 7,
      sliceY: 7,
      anims: {
        idle: { from: 0, to: 7, speed: 24, loop: true },
        walkForward: { from: 0, to: 7, speed: 24, loop: true },
        walkBackward: { from: 0, to: 7, speed: 24, loop: true },
        jump: { from: 31, to: 42, speed: 24 },
        punch: { from: 8, to: 17, speed: 24 },
        kick: { from: 18, to: 26, speed: 24 },
        throwFireBall: { from: 27, to: 30, speed: 20 },
      },
    },
  });
  //avdul end -----
  //stage_desert---
  loadSprite("desertSky", "../assets/stage_desert/2.png");
  loadSprite("desertSand", "../assets/stage_desert/1.png");
  loadSprite("desertSandBg", "../assets/stage_desert/3.png");
  loadSpriteAtlas("../assets/stage_desert/4.png", {
    desertWheel: {
      x: 0,
      y: 0,
      width: 876,
      height: 62,
      sliceX: 6,
      anims: {
        idle: { from: 0, to: 5, speed: 16, loop: true },
      },
    },
  });
  //stage_desert---
  //stage train--
  loadSprite("trainBg", "../assets/stage_training/1.png");
  loadSprite("trainGround", "../assets/stage_training/2.png");
  //stage train--
  //stage beach--
  loadSprite("beachSky", "../assets/stage_beach/4.png");
  loadSprite("beachTreeBg", "../assets/stage_beach/3.png");
  loadSprite("beachBush", "../assets/stage_beach/1.png");
  loadSpriteAtlas("../assets/stage_beach/2.png", {
    beachWater: {
      x: 0,
      y: 0,
      width: 624,
      height: 48,
      sliceX: 3,
      anims: {
        idle: { from: 0, to: 2, speed: 8, loop: true },
      },
    },
  });
  //stage beach--
  loadSprite("jail", "../assets/stage_jail/jail.png");
  loadSprite("school", "../assets/stage_school/school.png");
  loadSprite("injured", "../assets/stage_school/injured.png", {
    x: 0,
    y: 0,
    width: 285,
    height: 72,
    sliceX: 3,
    sliceY: 2,
    anims: {
      idle: { from: 0, to: 4, speed: 8, loop: true },
    },
  });
  window.charSound = 0.24;
  window.bgm = 0.6;
  window.punchSound = 0.45;
  window.airSound = 0.2;
}
export { loadAssets };
