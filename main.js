import k from "./kaboom.js";
import Game from "./public/scene/game.js";
import menu from "./public/scene/menu.js";
import playerSelectMenu from "./public/scene/playerSelectMenu.js";

menu.loadAsset();
menu.introScene();
menu.menuScene();
playerSelectMenu();
Game();
go("intro");

onKeyPress("v", () => {
  play("tusk");
});
