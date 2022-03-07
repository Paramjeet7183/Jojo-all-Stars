const menu = {
  loadAsset: async function () {
    // all the backgrounds and stuff
    loadSprite("cover", "../assets/menu/cover.png");
    loadSprite("greenBg", "../assets/menu/bg.png");
    loadSprite("purpleBg", "../assets/menu/bg2.png");
    loadSprite("jotaroBg", "../assets/menu/fg.png");
    loadSprite("arrow", "../assets/menu/arrow.png");

    loadSprite(`johnnyMiniFace`, `../assets/menuFaces/johnnyMiniFace.png`);
    loadSprite(`jotaroMiniFace`, `../assets/menuFaces/jotaroMiniFace.png`);
    loadSprite(`johnnyBarFace`, `../assets/menuFaces/johnnyBarFace.png`);
    loadSprite(`jotaroBarFace`, `../assets/menuFaces/jotaroBarFace.png`);
    loadSprite(`johnnyBigFace`, `../assets/menuFaces/johnnyBigFace.png`);
    loadSprite(`jotaroBigFace`, `../assets/menuFaces/jotaroBigFace.png`);

    loadSprite("p1", "../assets/menu/p1.png");
    loadSprite("p1s", "../assets/menu/p1s.png");
    loadSprite("p2", "../assets/menu/p2.png");
    loadSprite("p2s", "../assets/menu/p2s.png");
  },

  introScene: async function () {
    scene("intro", () => {
      console.log("intro scene is running");

      //intro cover with game title
      const cover = add([
        sprite("cover"),
        area(),
        pos(center()),
        outview(),
        cleanup(),
        scale(Math.max(width() / 1280, height() / 720)),
        origin("center"),
        z(0),
        "coverObj",
      ]);

      const txt = add([
        text("Press ENTER to continue", {
          font: "sinko",
          size: (16 * width()) / height(),
          transform: () => ({
            scale: wave(1, 1.4, time() * 6),
          }),
        }),
        area(),
        pos(width() / 2, height() - 64),
        origin("center"),
        z(1),
      ]);

      onKeyPress("enter", () => {
        txt.destroy();
        cover.destroy();
        go("menu");
      });

      onClick("coverObj", () => {
        txt.destroy();
        cover.destroy();
        go("menu");
      });
    });
  }, //introScene function ends here

  menuScene: async function () {
    scene("menu", () => {
      console.log("menu scene is running");
      //moving green background
      const greenBg = add([
        sprite("greenBg", { width: width() * 64, tiled: true }),
        area(),
        pos(center()),
        origin("left"),
        outview(),
        cleanup(),
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
        area(),
        pos(0, height()),
        outview(),
        origin("botleft"),
        cleanup(),
        scale(Math.min(width() / 1280, height() / 720)),
        z(1),
      ]);

      //arrow at the bootm with select and esc instruction
      const arrow = add([
        sprite("arrow"),
        area(),
        pos(width(), height() - height() / 9),
        origin("botright"),
        outview(),
        scale(Math.min((width() * 1) / 3 / 512, (height() - 57) / 57)),
        z(1),
      ]);
      onKeyPress("enter", () => {
        greenBg.destroy();
        jotaroBg.destroy();
        arrow.destroy();
        go("playerOneSelectMenu");
      });
    });
  }, //menuScene function Ends Here
};

export default menu;
