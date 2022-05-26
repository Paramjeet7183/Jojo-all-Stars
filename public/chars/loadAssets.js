async function loadAssets() {
  //round start assets
  loadSound("theme", "../assets/sound/theme.mp3");
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
      sliceX: 14,
      anims: {
        idle: { from: 0, to: 13, speed: 24 },
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
  loadSpriteAtlas("../assets/effects/eff13.png", {
    lightning: {
      x: 0,
      y: 0,
      width: 910,
      height: 59,
      sliceX: 14,
      anims: {
        idle: { from: 0, to: 13, speed: 24 },
      },
    },
  });
  //jotaro---
  loadSound("jotaroHurt1", "../assets/jotaro/hurt (1).wav");
  loadSound("jotaroHurt2", "../assets/jotaro/hurt (2).wav");
  loadSound("jotaroHurt3", "../assets/jotaro/hurt (3).wav");
  loadSound("jotaroStand", "../assets/jotaro/starplatinum.wav");
  loadSound("jotaroStandAppear", "../assets/jotaro/deploy.wav");
  loadSound("long ooh", "../assets/jotaro/long ooh.wav");
  loadSound("jotaroCharge", "../assets/jotaro/long ooh.wav");
  loadSound("orayo", "../assets/jotaro/orayo.wav");
  loadSound("ora", "../assets/jotaro/ora (4).wav");
  loadSound("muh", "../assets/jotaro/muh.wav");
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
      width: 2652,
      height: 2088,
      sliceX: 13,
      sliceY: 12,
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
        charge: { from: 109, to: 109, speed: 1 },
        win: { from: 38, to: 43, speed: 24 },
        jump: { from: 83, to: 93, speed: 16 },
        crouch: { from: 32, to: 34, speed: 24 },
        upperHurt: { from: 115, to: 115, speed: 8 },
        fall: { from: 118, to: 128, speed: 16 },
        getup: { from: 129, to: 134, speed: 24 },
        crouchHurt: { from: 116, to: 116, speed: 8 },
        lowerHurt: { from: 117, to: 117, speed: 8 },
        jumpKick: { from: 135, to: 137, speed: 8 },
        crouchPunch: { from: 138, to: 146, speed: 20 },
      },
    },
  });
  //jotaro end----

  //johnny----
  loadSound("bulletActivate", "../assets/jhonny/bulletActivate.wav");
  loadSound("tuskAttack", "../assets/jhonny/tusk.wav");
  loadSound("johnnyAtt1", "../assets/jhonny/attack (1).wav");
  loadSound("johnnyAtt2", "../assets/jhonny/attack (3).wav");
  loadSound("johnnyAtt3", "../assets/jhonny/attack (5).wav");
  loadSound("johnnyStand", "../assets/jhonny/tusk act3.wav");
  loadSound("johnnyStandAppear", "../assets/jhonny/stand appearing.wav");
  loadSound("bulletSound", "../assets/jhonny/bulletSound.wav");
  loadSound("bulletSound2", "../assets/jhonny/bulletSound2.wav");
  loadSound("johnnyHurt1", "../assets/jhonny/hurt (1).wav");
  loadSound("johnnyHurt2", "../assets/jhonny/hurt (2).wav");
  loadSound("johnnyHurt3", "../assets/jhonny/hurt (3).wav");
  // loadSound("chummi", "../assets/jhonny/chummi (1).wav");
  loadSound("johnnyCharge", "../assets/jhonny/charge (1).wav");
  // loadSound("johnnyTheme", "../assets/jhonny/theme.mp3");
  loadSprite("tusk", "../assets/jhonny/tusk3.png");
  loadSprite("bullet", "../assets/jhonny/07.png");
  loadSpriteAtlas("../assets/jhonny/blueTrail.png", {
    blueTrail: {
      x: 0,
      y: 0,
      width: 57,
      height: 237,
      sliceX: 3,
      sliceY: 3,
      anims: {
        idle: { from: 0, to: 8, speed: 24, loop: true },
      },
    },
  });
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
        idle: { from: 0, to: 19, speed: 48 },
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
      width: 1911,
      height: 1332,
      sliceX: 13,
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
        crouchPunch: { from: 91, to: 96, speed: 16 }, //3
        crouchPunch2: { from: 97, to: 107, speed: 16 }, //6
        crouchHurt: { from: 83, to: 86, speed: 24 },
        fall: { from: 137, to: 142, speed: 24 },
        getup: { from: 143, to: 148, speed: 24 },
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
        charge: { from: 66, to: 66, speed: 1 },
        win: { from: 65, to: 67, speed: 24 },
        pose1loop: { from: 68, to: 71, speed: 24, loop: true },
        upperHurt: { from: 72, to: 72, speed: 24 },
        lowerHurt: { from: 73, to: 73, speed: 24 },
        fall: { from: 76, to: 79, speed: 16 },
        getup: { from: 80, to: 81, speed: 16 },
        hurt3: { from: 74, to: 74, speed: 24 },
        crouchHurt: { from: 75, to: 75, speed: 24 },
      },
    },
  });
  loadSound("avdulAtt1", "../assets/avdul/attack (1).wav");
  loadSound("avdulAtt2", "../assets/avdul/attack (2).wav");
  loadSound("avdulAtt3", "../assets/avdul/attack (3).wav");
  loadSprite("avdulIcon", "../assets/hud/avdul.png");
  loadSound("avdulHurt1", "../assets/avdul/hurt (1).wav");
  loadSound("avdulHurt2", "../assets/avdul/hurt (2).wav");
  loadSound("avdulHurt3", "../assets/avdul/hurt (3).wav");
  loadSound("avdulStandAppear", "../assets/avdul/standAppear.wav");
  loadSound("avdulStand", "../assets/avdul/standName.wav");
  loadSpriteAtlas("../assets/avdul/fireball.png", {
    avdulFireBall: {
      x: 0,
      y: 0,
      width: 594,
      height: 335,
      sliceX: 6,
      sliceY: 5,
      anims: {
        idle: { from: 0, to: 25, speed: 24 },
      },
    },
  });
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
  // giorono
  loadSound("gioronoStandAppear", "../assets/giorono/standAppear.wav");
  loadSound("gioronoStand", "../assets/giorono/standCall.wav");
  loadSound("gioronoHurt1", "../assets/giorono/hurt (1).wav");
  loadSound("gioronoHurt2", "../assets/giorono/hurt (2).wav");
  loadSound("gioronoHurt3", "../assets/giorono/hurt (3).wav");
  loadSound("gioronoHurt4", "../assets/giorono/hurt (4).wav");
  loadSound("gioronoAtt1", "../assets/giorono/att (1).wav");
  loadSound("gioronoAtt2", "../assets/giorono/att (2).wav");
  loadSound("gioronoAtt3", "../assets/giorono/att (3).wav");
  loadSound("gioronoAtt4", "../assets/giorono/att (4).wav");
  loadSound("gioronoMuda1", "../assets/giorono/muda (1).wav");
  loadSound("gioronoMuda2", "../assets/giorono/muda (2).wav");
  loadSound("gioronoMuda3", "../assets/giorono/muda (3).wav");
  loadSound("gioronoMuda4", "../assets/giorono/muda (4).wav");
  loadSound("goldExpPunchEff1", "../assets/giorono/standPunchSound (1).wav");
  loadSound("goldExpPunchEff2", "../assets/giorono/standPunchSound (2).wav");
  loadSound("goldExpPunchEff3", "../assets/giorono/standPunchSound (3).wav");
  loadSpriteAtlas("../assets/giorono/giorono.png", {
    giorono: {
      x: 0,
      y: 0,
      width: 1432,
      height: 1160,
      sliceX: 8,
      sliceY: 8,
      anims: {
        idle: { from: 0, to: 3, speed: 24, loop: true },
        crouch: { from: 4, to: 6, speed: 24 },
        walkForward: { from: 7, to: 14, speed: 15, loop: true },
        walkBackward: { from: 14, to: 7, speed: 14, loop: true },
        jump: { from: 45, to: 47, speed: 8 },
        jumpKick: { from: 48, to: 50, speed: 24 },
        punch: { from: 15, to: 19, speed: 24 },
        kick: { from: 20, to: 24, speed: 24 },
        kick2: { from: 25, to: 27, speed: 24 },
        pose1: { from: 28, to: 33, speed: 24 },
        win: { from: 34, to: 36, speed: 24 },
        crouchPunch: { from: 37, to: 39, speed: 24 },
        crouchKick: { from: 40, to: 44, speed: 24 },
        upperHurt: { from: 51, to: 53, speed: 24 },
        lowerHurt: { from: 54, to: 56, speed: 24 },
        fall: { from: 57, to: 59, speed: 8 },
        getup: { from: 60, to: 61, speed: 16 },
        charge: { from: 35, to: 35, speed: 1 },
      },
    },
  });
  loadSpriteAtlas("../assets/giorono/goldExp.png", {
    goldExp: {
      x: 0,
      y: 0,
      width: 1057,
      height: 978,
      sliceX: 7,
      sliceY: 6,
      anims: {
        idle: { from: 0, to: 0, speed: 1, loop: true },
        walkForward: { from: 1, to: 1, speed: 1, loop: true },
        walkBackward: { from: 2, to: 2, speed: 1, loop: true },
        heavyPunch: { from: 12, to: 14, speed: 16 },
        punch: { from: 6, to: 11, speed: 16 },
        kick: { from: 15, to: 20, speed: 16 },
        goldTree: { from: 21, to: 25, speed: 16 },
        barrage: { from: 26, to: 37, speed: 24 },
        jump: { from: 3, to: 5, speed: 12 },
      },
    },
  });
  //
  // //stage beach--
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
}
export { loadAssets };
