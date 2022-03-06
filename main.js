import k from "./kaboom.js";
import Game from "./public/scene/game.js";
import menu from "./public/scene/menu.js";

menu.loadAsset();
menu.introScene();
menu.menuScene();
menu.playerSelectMenu();
Game();
go("playerOneSelect");