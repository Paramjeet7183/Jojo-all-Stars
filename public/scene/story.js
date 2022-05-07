loadSpriteAtlas("../assets/story/chapterOneBefore.png", {
  chapterOneB: {
    x: 0,
    y: 0,
    width: 2164,
    height: 1536,
    sliceX: 4,
    sliceY: 3,
  },
});
loadSpriteAtlas("../assets/story/chapterOneAfter.png", {
  chapterOneA: {
    x: 0,
    y: 0,
    width: 2656,
    height: 1536,
    sliceX: 4,
    sliceY: 3,
  },
});
loadSpriteAtlas("../assets/story/camel.png", {
  camel: {
    x: 0,
    y: 0,
    width: 210,
    height: 23,
    sliceX: 6,
    anims: { idle: { from: 0, to: 5, speed: 6, loop: true } },
  },
});
loadSpriteAtlas("../assets/story/sun.png", {
  sun: {
    x: 0,
    y: 0,
    width: 390,
    height: 66,
    sliceX: 5,
    anims: { idle: { from: 0, to: 4, speed: 6, loop: true } },
  },
});
loadSpriteAtlas("../assets/story/ship.png", {
  ship: {
    x: 0,
    y: 0,
    width: 188,
    height: 36,
    sliceX: 4,
    anims: {
      left: { from: 0, to: 1, speed: 6, loop: true },
      right: { from: 2, to: 3, speed: 6, loop: true },
    },
  },
});
loadSprite("mapWorld", "../assets/story/map.png");
loadSprite("mapJapan", "../assets/story/mapJapan.png");
loadSprite("mapEgypt", "../assets/story/mapEgypt.png");
loadSprite("mapTag", "../assets/story/mapTag.png");
loadSprite("mapPin", "../assets/story/mapPin.png");
loadSound("menuSong", "../assets/story/menu.mp3");
loadSound("storyNav", "../assets/story/storyNav.wav");
loadSound("storySelect1", "../assets/story/storySelect.wav");
loadSound("storySelect2", "../assets/story/storySelect2.wav");
loadSound("keySound", "../assets/story/key.wav");
import { chapterOne } from "./storyData.js";
async function story() {
  scene("storyMenu", () => {
    const storyMenuSong = play("menuSong", {
      loop: true,
      volume: 0.25,
    });
    const mapWorld = add([
      sprite("mapWorld"),
      pos(center()),
      origin("center"),
      scale(Math.max(width() / 512, height() / 320)),
      z(0),
      "storyMenuElements",
    ]);
    const mapJapan = add([
      sprite("mapJapan"),
      pos(76 * vw, 16 * vh),
      origin("center"),
      scale(1),
      z(1),
      "storyMenuElements",
    ]);
    const mapEgypt = add([
      sprite("mapEgypt"),
      pos(8 * vw, 42 * vh),
      origin("center"),
      scale(1),
      z(1),
      "storyMenuElements",
    ]);
    const mapTag = add([
      sprite("mapTag"),
      pos(50 * vw, 100 * vh),
      origin("bot"),
      scale(1.6),
      z(1),
      "storyMenuElements",
    ]);
    const mapPin = add([
      sprite("mapPin"),
      pos(77 * vw, 21 * vh),
      origin("center"),
      scale(1),
      z(2),
      "storyMenuElements",
    ]);
    const sun = add([
      sprite("sun", { anim: "idle" }),
      pos(25 * vw, 28 * vh),
      origin("center"),
      scale(1.5),
      z(1),
      "storyMenuElements",
    ]);
    const camel = add([
      sprite("camel", { anim: "idle" }),
      pos(20 * vw, 42 * vh),
      origin("center"),
      scale(2.5),
      z(1),
      "storyMenuElements",
    ]);
    const ship1 = add([
      sprite("ship", { anim: "left" }),
      pos(82 * vw, 38 * vh),
      origin("center"),
      scale(1.5),
      z(1),
      "storyMenuElements",
    ]);
    const ship2 = add([
      sprite("ship", { anim: "right" }),
      pos(35 * vw, 60 * vh),
      origin("center"),
      scale(1.5),
      z(1),
      "storyMenuElements",
    ]);
    onKeyPress("d", () => {
      go("menu");
      destroyAll("storyMenuElements");
      storyMenuSong.stop();
    });
    const mapLocations = [
      { unlocked: true, pos: vec2(77 * vw, 21 * vh) }, //avdol
      { unlocked: false, pos: vec2(72 * vw, 8 * vh) }, //kakyoin
      { unlocked: false, pos: vec2(63 * vw, 61 * vh) }, //polnareff
      { unlocked: false, pos: vec2(43.5 * vw, 52 * vh) }, //india
      { unlocked: false, pos: vec2(25 * vw, 30 * vh) }, //iran
      { unlocked: false, pos: vec2(20 * vw, 46 * vh) }, //emirates
      { unlocked: false, pos: vec2(9.5 * vw, 44 * vh) }, //egypt
    ];
    let i = 0;
    onKeyPress("right", () => {
      if (i > 0) {
        --i;
        play("storyNav", { volume: 1 });
        mapPin.moveTo(mapLocations[i].pos);
        // console.log("right", i);
      }
    });
    onKeyPress("left", () => {
      if (i < mapLocations.length - 1) {
        ++i;
        play("storyNav", { volume: 1 });
        mapPin.moveTo(mapLocations[i].pos);
        // console.log("left", i);
      }
    });
    for (let i = 0; i <= mapLocations.length - 1; i++) {
      add([
        circle(8),
        pos(mapLocations[i].pos),
        origin("center"),
        color(mapLocations[i].unlocked ? GREEN : RED),
        z(1),
        "storyMenuElements",
      ]);
    }
    onKeyPress("enter", () => {
      mapLocations[i].unlocked
        ? (play("storySelect1", { volume: 1 }),
          destroyAll("storyMenuElements"),
          storyMenuSong.stop(),
          go("loadingScreen", {
            sceneFun: () => {
              go("storyBoard", {
                chapterNum: i,
                beforeBattle: true,
              });
            },
          }))
        : play("storySelect2");
    });
  });

  //story menu ends--
  //story board scene--
  scene("storyBoard", ({ chapterNum, beforeBattle }) => {
    console.log("story", chapterNum);
    const allChapters = [chapterOne];
    let c = beforeBattle
      ? allChapters[chapterNum].before
      : allChapters[chapterNum].after;
    const diagBox = add([
      rect(100 * vw, 30 * vh),
      pos(0, 100 * vh),
      origin("botleft"),
      color(RED),
      opacity(0),
    ]);
    const imgBox = add([
      rect(512, 70 * vh),
      pos(50 * vw, 0),
      origin("top"),
      color(GREEN),
      opacity(0),
    ]);
    const img = add([
      sprite(c.chapterImage),
      pos(50 * vw, 0),
      origin("top"),
      scale(Math.min(512 / c.size.w), (70 * vh) / c.size.h),
    ]);
    const dialog = add([
      text(``, {
        size: 1.6 * vw,
        letterSpacing: -2,
      }),
      pos(2 * vw, 72 * vh),
      origin("topleft"),
    ]);
    async function typeSentence(sentence, delay) {
      const l = sentence.split("");
      let i = 0;
      while (i < l.length) {
        await waitForMs(delay);
        dialog.text = `${dialog.text}` + `${l[i]}`;
        if (l[i] !== " " && "!" && "." && ":" && "," && "?" && '"' && "&") {
          play("keySound", { volume: 0.45 });
        }
        i++;
      }
      return;
    }

    function waitForMs(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function fun() {
      let i = 0;
      while (i < c.dialogs.length) {
        await waitForMs(i == 0 ? 0 : c.dialogs[i - 1].length * 60 + 3000);
        dialog.text = "";
        img.frame = i;
        typeSentence(c.dialogs[i], 50);
        i++;
        if (i == c.dialogs.length) {
          add([
            text("Enter to Continue", {
              size: 2 * vw,
              transform: () => ({
                scale: wave(1, 1.4, time() * 6),
              }),
            }),
            pos(90 * vw, 90 * vh),
            origin("botright"),
          ]);
          onKeyPress("enter", () => {
            beforeBattle
              ? go("pvpScene", {
                  p1: c.chapterProtag,
                  p2: c.chapterEnemy,
                  nextScene: () => {
                    go("game", {
                      p1: c.chapterProtag,
                      p2: c.chapterEnemy,
                      r: 1,
                      p1r: 0,
                      p2r: 0,
                      mode: "story",
                      chapter: chapterNum,
                      stageNum: beforeBattle ? c.stage : 0,
                    });
                  },
                })
              : go("loadingScreen", {
                  sceneFun: () => {
                    go("storyMenu");
                  },
                });
          });
        }
      }
      return;
    }
    fun(7500);
  });
}
export { story };
