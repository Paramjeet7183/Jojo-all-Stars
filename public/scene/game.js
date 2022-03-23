import Player from "../chars/Player.js";
import jojo from "../chars/jojo.js";
import jotaro from "../chars/jotaro.js";
import controls from "../chars/controls.js";
import stage from "../stages/stage.js";
import { healthBar, chargeBar } from "../chars/hud.js";
import setPlayerHurtBox from "../chars/hurtBox.js";
import soundEffects from "../chars/soundEffects.js";

async function Game() {
  jojo.loadAsset();
  jotaro.loadAsset();
  scene("game", (p1, p2) => {
    soundEffects();
    layers(["game", "bg", "players", "hud", "effect"]);
    stage(1);
    const playerTwoHealthBar = new healthBar({
      playerName: "jotaro",
      displayName: "KUJO JOTARO",
      xFrame: -4 * vw,
      yFrame: -4 * vh,
      originFrame: "left",
      xBigBar: -24.5 * vw,
      yBigBar: 2.5 * vh,
      originBigBar: "topright",
      xSmallBar: -10.5 * vw,
      ySmallBar: 2.5 * vh,
      healthBarColor: RED,
      xPlayerImage: -25 * vw,
      yPlayerImage: -2.5 * vh,
    });
    const playerOneHealthBar = new healthBar({
      playerName: "johnny",
      displayName: "JOHNNY JOESTAR",
      xFrame: 4 * vw,
      yFrame: -4 * vh,
      originFrame: "right",
      xBigBar: 24.5 * vw,
      yBigBar: 2.5 * vh,
      originBigBar: "topleft",
      xSmallBar: 10.5 * vw,
      ySmallBar: 2.5 * vh,
      healthBarColor: RED,
      xPlayerImage: 25 * vw,
      yPlayerImage: -2.5 * vh,
    });
    const playerOneCharge = new chargeBar({
      xChargeFrame: 20 * vw,
      originFrame: "right",
      xCharge: 13 * vw,
      originCharge: "botleft",
    });
    const playerTwoCharge = new chargeBar({
      xChargeFrame: 80 * vw,
      originFrame: "left",
      xCharge: -13 * vw,
      originCharge: "botright",
    });

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
      chargeMeter: playerOneCharge,
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
      chargeMeter: playerTwoCharge,
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
    jojo.attacks.collisons({
      enemy: player2.get(),
      enemyTag: "playerTwo",
      enemyHealth: playerTwoHealthBar,
    });
    jotaro.collisons({
      enemy: player.get(),
      enemyTag: "playerOne",
      enemyHealth: playerOneHealthBar,
    });
    volume(0.5);
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
