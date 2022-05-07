import k from "./public/modules/kaboom.js";
import menu from "./public/scene/menu.js";
import Game from "./public/scene/game.js";
import playerSelectMenu from "./public/scene/playerSelectMenu.js";
import { loadAssets } from "./public/chars/loadAssets.js";
import { story } from "./public/scene/story.js";
import { loading } from "./public/scene/loading.js";
import { pvp } from "./public/scene/pvp.js";
loading();
loadAssets();
menu.loadAsset();
menu.introScene();
menu.menuScene();
playerSelectMenu();
Game();
pvp();
story();
//---
// go("loadingScreen", { nextScene: "intro" });
go("intro");
// go("storyBoard", { chapterNum: 0, beforeBattle: false });
// go("game", {
//   p1: 0,
//   p2: 1,
//   r: 1,
//   p1r: 1,
//   p2r: 0,
//   mode: "test",
//   chapter: 0,
//   stageNum: 2,
// });
// go("pvpScene", { p1: 0, p2: 1 });
