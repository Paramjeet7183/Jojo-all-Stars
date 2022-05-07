const menu = {
  loadAsset: async function () {
    // all the backgrounds and stuff
    loadSprite("cover", "../assets/menu/cover.png");
    loadSprite("greenBg", "../assets/menu/bg.png");
    loadSprite("purpleBg", "../assets/menu/bg2.png");
    loadSprite("jotaroBg", "../assets/menu/fg.png");
    loadSprite("arrow", "../assets/menu/arrow.png");
    loadSpriteAtlas("../assets/menu/menuSheet.png", {
      menuOption: {
        x: 0,
        y: 0,
        width: 3003,
        height: 466,
        sliceX: 7,
      },
    });
    loadSpriteAtlas("../assets/menu/1-sheet.png", {
      pvpBgAnim: {
        x: 0,
        y: 0,
        width: 2560,
        height: 720,
        sliceX: 2,
        anims: { idle: { from: 0, to: 1, speed: 24, loop: true } },
      },
    });

    loadSprite(`johnnyMiniFace`, `../assets/menuFaces/johnnyMiniFace.png`);
    loadSprite(`jotaroMiniFace`, `../assets/menuFaces/jotaroMiniFace.png`);
    loadSprite(`johnnyBigFace`, `../assets/menuFaces/johnnyBigFace.png`);
    loadSprite(`jotaroBigFace`, `../assets/menuFaces/jotaroBigFace.png`);
    loadSprite(`avdulMiniFace`, `../assets/menuFaces/avdulMiniFace.png`);
    loadSprite(`avdulBigFace`, `../assets/menuFaces/avdulBigFace.png`);

    loadSprite("p1", "../assets/menu/p1.png");
    loadSprite("p1s", "../assets/menu/p1s.png");
    loadSprite("p2", "../assets/menu/p2.png");
    loadSprite("p2s", "../assets/menu/p2s.png");
    loadSprite("pvpBg", "../assets/menu/pvp.png");
    loadSprite("vsBg", "../assets/menu/vs.png");
    loadSprite("pvpBg", "../assets/menu/pvp.png");

    loadSound("intro", "../assets/sound/intro.wav");
    loadSound("introSound", "../assets/sound/jotaroIntro.wav");
    loadSound("menu", "../assets/sound/menu.wav");
    loadSound("playerMenu", "../assets/sound/player.wav");
    loadSound("menuNav", "../assets/sound/menuNav.wav");
    loadSound("select", "../assets/sound/select.wav");
    loadSound("vsSound", "../assets/sound/vs.mp3");
    // loadSound("winSound", "../assets/sound/win.mp3");
  },

  introScene: async function () {
    scene("intro", () => {
      const jotaroSound = play("introSound", {
        volume: 0.8,
      });
      const introSound = play("intro", {
        loop: true,
        volume: 0.35,
      });
      // jotaroSound.play();
      // introSound.play();
      console.log("intro scene is running");
      //intro cover with game title
      const cover = add([
        sprite("cover"),
        pos(center()),
        scale(Math.max(width() / 1280, height() / 720)),
        origin("center"),
        z(0),
        "coverObj",
      ]);
      const txt = add([
        text("Press ENTER to continue", {
          font: "apl386o",
          size: (16 * width()) / height(),
          transform: () => ({
            scale: wave(1, 1.4, time() * 6),
          }),
        }),
        color(WHITE),
        pos(width() / 2, height() - 64),
        origin("center"),
        z(1),
      ]);

      onKeyPress("enter", () => {
        txt.destroy();
        cover.destroy();
        go("menu");
        introSound.stop();
      });
    });
  }, //introScene function ends here

  menuScene: async function () {
    scene("menu", () => {
      const menuSound = play("menu", {
        loop: true,
        volume: 0.35,
      });
      console.log("menu scene is running");
      //moving green background
      const greenBg = add([
        sprite("greenBg", { width: width() * 64, tiled: true }),
        pos(center()),
        origin("left"),
        scale(1),
        origin("center"),
        z(0),
      ]);

      //for changing the direction of background image movement
      const inv = (a) => {
        return !a;
      };

      let a = true;

      greenBg.onUpdate(() => {
        if (!a) {
          //background image move 64px Left.
          greenBg.move(-64, 0);
        }
        if (a) {
          //background image move 64px Right.
          greenBg.move(64, 0);
        }
      });

      //chnage direction of background movement every 20 seconds.
      loop(20, () => {
        a = inv(a);
      });

      //jotaro foreground
      const jotaroBg = add([
        sprite("jotaroBg"),
        pos(0, height()),
        origin("botleft"),
        scale(Math.min(width() / 1280, height() / 720)),
        z(1),
      ]);

      //arrow at the bootm with select and esc instruction
      const arrow = add([
        sprite("arrow"),
        pos(width(), 95 * vh),
        origin("botright"),
        scale(Math.min((width() * 1) / 3 / 512, (height() - 57) / 57)),
        z(1),
      ]);
      const option = add([
        sprite("menuOption"),
        pos(95 * vw, height() / 2),
        origin("right"),
        scale(Math.min((100 * vw) / 466 / 2.3, (75 * vh) / 466)),
        z(2),
      ]);
      let op = 0;
      option.frame = op;
      onKeyPress("down", () => {
        if (op < 6) {
          op++;
          option.frame = op;
          play("storyNav");
          console.log("down", op);
        }
      });
      onKeyPress("up", () => {
        if (op > 0) {
          op--;
          option.frame = op;
          play("storyNav");
          console.log("up", op);
        }
      });
      onKeyPress("enter", () => {
        greenBg.destroy();
        jotaroBg.destroy();
        arrow.destroy();
        menuSound.stop();
        play("storySelect1");
        // go("playerOneSelectMenu");
        switch (op) {
          case 0:
            go("loadingScreen", {
              sceneFun: () => {
                go("storyMenu");
              },
            });
            break;
          case 1:
            go("playerOneSelectMenu", { mode: "versus" });
            break;
          case 2:
            go("playerOneSelectMenu", { mode: "survive" });
            break;
          case 3:
            go("playerOneSelectMenu", { mode: "test" });
            break;
          case 4:
            go("playerOneSelectMenu", { mode: "test" }); //watching the match cpu mode
            break;
          case 5:
            go("setting");
            break;
          case 6:
            go("intro");
            break;
          default:
            play("select");
            break;
        }
      });
    });
  }, //menuScene function Ends Here
};

export default menu;
