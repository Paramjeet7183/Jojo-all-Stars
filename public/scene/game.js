import Player from "../chars/Player.js";
import jojo from "../chars/jojo.js";
import jotaro from "../chars/jotaro.js";
import controls from "../chars/controls.js";
import stage from "../stages/stage.js";
import { healthBar, chargeBar } from "../chars/hud.js";
import setPlayerHurtBox from "../chars/hurtBox.js";

async function Game() {
  jojo.loadAsset();
  jotaro.loadAsset();
  scene("game", (p1, p2) => {
    layers(["game", "bg", "players", "hud", "effect"]);
    stage(1);
    const playerTwoHealthBar = new healthBar(
      "johnny",
      -4 * vw,
      -4 * vh,
      "left",
      -24.5 * vw,
      2.5 * vh,
      "topright",
      -10.5 * vw,
      2.5 * vh,
      RED,
      -25 * vw,
      -2.5 * vh
    );
    const playerOneHealthBar = new healthBar(
      "johnny",
      4 * vw,
      -4 * vh,
      "right",
      24.5 * vw,
      2.5 * vh,
      "topleft",
      10.5 * vw,
      2.5 * vh,
      RED,
      25 * vw,
      -2.5 * vh
    );
    const player = new Player({
      dataObj: jojo,
      spawnPos: 12 * vw,
      flip: false,
      tag: "playerOne",
    });
    const player2 = new Player({
      dataObj: jotaro,
      spawnPos: 80 * vw,
      flip: true,
      tag: "playerTwo",
    });
    controls({
      player: player.get(),
      enemy: player2.get(),
      data: jojo,
      keys: {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
        key_1: "a",
        key_2: "s",
        key_3: "d",
        key_4: "w",
        key_5: "c",
      },
    });
    controls({
      player: player2.get(),
      enemy: player.get(),
      data: jotaro,
      keys: {
        up: "i",
        down: "k",
        left: "j",
        right: "l",
        key_1: "1",
        key_2: "2",
        key_3: "3",
        key_4: "5",
        key_5: "m",
      },
    });
    jojo.collisons({
      enemy: player2.get(),
      enemyTag: "playerTwo",
      enemyHealth: playerTwoHealthBar,
    });
    jotaro.collisons({
      enemy: player.get(),
      enemyTag: "playerOne",
      enemyHealth: playerOneHealthBar,
    });
    volume(0.6);
    const h1 = new setPlayerHurtBox({
      player: player.get(),
      obj: jojo,
      tag: "playerOne",
    });
    const h2 = new setPlayerHurtBox({
      player: player2.get(),
      obj: jotaro,
      tag: "playerTwo",
    });
  });
}
export default Game;
