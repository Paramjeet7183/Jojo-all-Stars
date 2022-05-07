import { Player } from "../chars/Player.js";
import { jotaro } from "../chars/jotaro.js";
import { avdul } from "../chars/avdul.js";
import stage from "../stages/stage.js";
import { healthBar, chargeBar } from "../chars/hud.js";
import { ai } from "../chars/ai.js";
import { johnny } from "../chars/johnny.js";
import { control } from "../chars/control.js";
import { collisions } from "../chars/collisons.js";
async function Game() {
  const allPlayer = [
    johnny,
    jotaro,
    avdul,
    johnny,
    jotaro,
    avdul,
    johnny,
    jotaro,
    avdul,
  ];
  window.matchStarted = false;
  window.matchEnded = false;
  console.log("started", matchStarted);
  console.log("ended", matchEnded);
  //definfing game scene
  scene("game", ({ p1, p2, r, p1r, p2r, mode, chapter, wins, stageNum }) => {
    // z Order of sprites
    layers(["game", "bg", "players", "hud", "effect", "pvp"]);
    console.log("get value chapter", chapter);
    console.log("stageNum", stageNum);
    //stage
    stage(stageNum);
    if (mode == "test") {
      onKeyPress("v", () => {
        go("menu");
      });
    }
    const p = new Player({
      dataObj: allPlayer[p1],
      spawnPos: 12 * vw,
      tag: "player",
    });
    const e = new Player({
      dataObj: allPlayer[p2],
      spawnPos: 88 * vw,
      tag: "enemy",
    });
    const player = p.getPlayer();
    const enemy = e.getPlayer();
    const playerStand = p.getStand();
    const enemyStand = e.getStand();
    //enemyHealth Bar
    const enemyHealth = new healthBar({
      playerName: allPlayer[p2].name,
      displayName: allPlayer[p2].displayName,
      xFrame: -4 * vw,
      yFrame: -4 * vh,
      originFrame: "left",
      xBigBar: -24.5 * vw,
      yBigBar: 2.5 * vh,
      originBigBar: "topright",
      xSmallBar: -10.5 * vw,
      ySmallBar: 2.5 * vh,
      healthBarColor: rgb(255, 215, 0),
      xPlayerImage: -25 * vw,
      yPlayerImage: -2.5 * vh,
    });

    //playerHealth Bar
    const playerHealth = new healthBar({
      playerName: allPlayer[p1].name,
      displayName: allPlayer[p1].displayName,
      xFrame: 4 * vw,
      yFrame: -4 * vh,
      originFrame: "right",
      xBigBar: 24.5 * vw,
      yBigBar: 2.5 * vh,
      originBigBar: "topleft",
      xSmallBar: 10.5 * vw,
      ySmallBar: 2.5 * vh,
      healthBarColor: rgb(255, 223, 0),
      xPlayerImage: 25 * vw,
      yPlayerImage: -2.5 * vh,
    });

    //player power charge Bar
    const playerCharge = new chargeBar({
      xChargeFrame: 16 * vw,
      originFrame: "right",
      xCharge: 13 * vw,
      originCharge: "botleft",
    });

    //enemy power charge Bar
    const enemyCharge = new chargeBar({
      xChargeFrame: 84 * vw,
      originFrame: "left",
      xCharge: -13 * vw,
      originCharge: "botright",
    });

    //player controls
    control({
      player: player,
      data: allPlayer[p1],
      stand: playerStand,
      up: "up",
      down: "down",
      left: "left",
      right: "right",
      key1: "w",
      key2: "a",
      key3: "s",
      key4: "d",
      key5: "c",
    });
    // player control End

    //enemy controls
    control({
      player: enemy,
      data: allPlayer[p2],
      stand: enemyStand,
      up: "i",
      down: "k",
      left: "j",
      right: "l",
      key1: "5",
      key2: "1",
      key3: "2",
      key4: "3",
      key5: "4",
    });
    // enemy control End
    collisions({
      me: allPlayer[p1],
      opponent: enemy,
      opponentHealth: enemyHealth,
      opponentName: allPlayer[p2].name,
      opponentTag: "enemy",
    });
    collisions({
      me: allPlayer[p2],
      opponent: player,
      opponentHealth: playerHealth,
      opponentName: allPlayer[p1].name,
      opponentTag: "player",
    });
    //match time
    let time = 90;
    const timerBar = add([
      text(`${time}`, {
        size: 3.2 * vw,
        font: "apl386",
      }),
      pos(center().x, 8 * vh),
      origin("center"),
      color(YELLOW),
      layer("pvp"),
      fixed(),
    ]);

    // round dots and frame
    const p1r1 = add([
      sprite("round"),
      pos(45 * vw, 14 * vh),
      origin("center"),
      color(YELLOW),
      layer("pvp"),
      fixed(),
    ]);
    const p1r2 = add([
      sprite("round"),
      pos(42 * vw, 14 * vh),
      origin("center"),
      color(YELLOW),
      layer("pvp"),
      fixed(),
    ]);
    const p2r1 = add([
      sprite("round"),
      pos(55 * vw, 14 * vh),
      origin("center"),
      color(YELLOW),
      layer("pvp"),
      fixed(),
    ]);
    const p2r2 = add([
      sprite("round"),
      pos(58 * vw, 14 * vh),
      origin("center"),
      color(YELLOW),
      layer("pvp"),
      fixed(),
    ]);
    const p1d1 = add([
      rect(8, 8),
      pos(45 * vw, 14 * vh),
      origin("center"),
      color(RED),
      scale(0),
      layer("pvp"),
      fixed(),
    ]);
    const p1d2 = add([
      rect(8, 8),
      pos(42 * vw, 14 * vh),
      origin("center"),
      color(RED),
      scale(0),
      layer("pvp"),
      fixed(),
    ]);
    const p2d1 = add([
      rect(8, 8),
      pos(55 * vw, 14 * vh),
      origin("center"),
      color(RED),
      scale(0),
      layer("pvp"),
      fixed(),
    ]);
    const p2d2 = add([
      rect(8, 8),
      pos(58 * vw, 14 * vh),
      origin("center"),
      color(RED),
      scale(0),
      layer("pvp"),
      fixed(),
    ]);
    //setting dot if player won round
    if (p1r == 1) {
      p1d1.scale = 1;
    }
    if (p1r == 2) {
      p1d2.scale = 1;
      p1d1.scale = 1;
    }
    if (p2r == 1) {
      p2d1.scale = 1;
    }
    if (p2r == 2) {
      p2d2.scale = 1;
      p2d1.scale = 1;
    }
    // ENDS

    //adding fight effect and starting the match
    // play("johnnyTheme", { volume: bgm });
    wait(1, () => {
      play(`r${r}f`);
      wait(1.2, () => {
        play("fightSound");
        let f = add([
          sprite("fightLogo"),
          pos(center()),
          lifespan(0.8),
          origin("center"),
          layer("pvp"),
          scale(0.1),
        ]);
        let i = 0.1;
        f.onUpdate(() => {
          f.scaleTo((i += 0.02));
        });
        wait(1.5, () => {
          matchStarted = true;
          matchEnded = false;
        });
      });
    }); //END

    function enterToEnd(fun) {
      wait(4, () => {
        go("loadingScreen", { sceneFun: fun });
      });
    }

    function endRound({ winner }) {
      //ending the round
      // matchEnded = true;
      // wait for 3 sec
      // wait(3, () => {
      // check current round
      if (r == 1) {
        // if player wins then go the 2nd round
        if (winner == "p1") {
          go("game", {
            p1: p1,
            p2: p2,
            r: r + 1, //r+1=2 means moving to second round.
            p1r: p1r + 1, //it means that player one win this round
            p2r: p2r + 0,
            mode: mode, //passing the gamemode for next round
            stageNum: stageNum,
            chapter: chapter,
          });
          console.log("pushed value r1", chapter);
        }
        if (winner == "p2") {
          go("game", {
            p1: p1,
            p2: p2,
            r: r + 1,
            p1r: p1r + 0,
            p2r: p2r + 1, //measns player 2 wins this round
            chapter: chapter,
            mode: mode,
            stageNum: stageNum,
          });
        }
      }
      //round 2
      if (r == 2) {
        // p1 won this round and previous round
        if (winner == "p1" && p1r == 1 && p2r == 0) {
          //checking if game mode is story
          enterToEnd(() => {
            switch (mode) {
              case "story":
                //if it is story mode and player has won both rounds then go to the after cutscene of the chapter
                go("storyBoard", { chapterNum: chapter, beforeBattle: false });
                break;
              case "versus":
                //if it is versus mode then go back to menu
                go("playerOneSelectMenu", { mode: "versus" });
                break;
              case "survive":
                //in survival mode
                //if p2 becomes 8 means that player have already fought remainign players
                if (p2 == 8) {
                  //go to win scene
                  enterToEnd(() => {
                    go("winLose", { status: "win" });
                  });
                } else {
                  // if p2 is not 8
                  if (p2 < 8) {
                    //then continue fighting
                    go("pvpScene", {
                      p1: p1,
                      p2: p2 + 1,
                      nextScene: () => {
                        go("game", {
                          p1: p1,
                          p2: p2 + 1, //if player picks 0 player then enemy will be 1
                          r: 1,
                          p1r: 0,
                          p2r: 0,
                          mode: "survive",
                          wins: wins + 1, //adding wins if wins
                          stageNum: stageNum,
                        });
                      },
                    });
                  }
                }
                break;
              default:
                go("playerOneSelectMenu");
                break;
            }
          });
        }
        //p2 won this round and previous round
        if (winner == "p2" && p1r == 0 && p2r == 1) {
          enterToEnd(() => {
            switch (mode) {
              case "story":
                //in story mode is neccessary to win fight to continue story so if player lose then start fight scene again
                go("retry"); //again battle
                break;
              case "versus":
                go("playerOneSelectMenu", { mode: "versus" });
                break;
              case "survive":
                // in survival mode player cant even lose one game so if he does then go to lose scene
                go("winLose", { status: "lose", wins: wins });
                break;
              default:
                go("playerOneSelectMenu");
                break;
            }
          });
        }
        //p1 won this round but not the previous round
        if (winner == "p1" && p1r == 0 && p2r == 1) {
          go("game", {
            p1: p1,
            p2: p2,
            r: r + 1,
            p1r: p1r + 1,
            p2r: p2r + 0,
            chapter: chapter,
            mode: mode,
            stageNum: stageNum,
          });
        }
        //p2 won this round but not previous round
        if (winner == "p2" && p1r == 1 && p2r == 0) {
          go("game", {
            p1: p1,
            p2: p2,
            r: r + 1,
            p1r: p1r + 0,
            p2r: p2r + 1,
            chapter: chapter,
            mode: mode,
            stageNum: stageNum,
          });
        }
      }
      //--
      if (r == 3) {
        enterToEnd(() => {
          switch (mode) {
            case "story":
              winner == "p1"
                ? go("storyBoard", { chapterNum: chapter, beforeBattle: false })
                : go("retry"); //again battle
              break;
            case "versus":
              go("playerOneSelectMenu", { mode: "versus" });
              break;
            case "survive":
              if (winner == "p1") {
                if (p2 == 8) {
                  go("winLose", { status: "win", wins: wins });
                } else {
                  if (p2 < 8) {
                    go("pvpScene", {
                      p1: p1,
                      p2: p2 + 1,
                      nextScene: () => {
                        go("game", {
                          p1: p1,
                          p2: p2 + 1,
                          r: 1,
                          p1r: 0,
                          p2r: 0,
                          mode: "survival",
                          wins: wins + 1,
                          stageNum: stageNum,
                        });
                      },
                    });
                  }
                }
              } else {
                if (winner == "p2") {
                  go("winLose", { status: "lose", wins: wins });
                }
              }
              break;
            default:
              go("playerOneSelectMenu");
              break;
          }
        });
      }
      // });
    }
    //endRound func ends
    async function ending({ winner }) {
      matchEnded = true;
      let played = false;
      played ? () => {} : (play("retTbc"), (played = true));
      const l = add([
        sprite("loseLogo"),
        pos(center()),
        lifespan(0.8),
        origin("center"),
        layer("pvp"),
        scale(0.1),
      ]);
      let i = 0.1;
      l.onUpdate(() => {
        l.scaleTo((i += 0.02));
      });
      wait(1.5, () => {
        if (p1r + 1 == 2 || p2r + 1 == 2) {
          add([
            text(
              `${
                winner == "p1"
                  ? allPlayer[p1].displayName
                  : allPlayer[p2].displayName
              }`,
              {
                size: 5 * vw,
                letterSpacing: 8,
              }
            ),
            pos(50 * vw, 35 * vh),
            origin("center"),
            layer("pvp"),
            z(3),
          ]);
          const w = add([
            sprite("winLogo"),
            pos(50 * vw, 60 * vh),
            origin("center"),
            layer("pvp"),
            scale(2),
            z(3),
          ]);
          // let j = 0.1;
          // w.onUpdate(() => {
          //   if (j < 0) {
          //     w.scaleTo((j += 0.02));
          //   }
          // });
        }
      });
      // winner == "p1"
      //   ? (player.play("win", { loop: true }), enemy.play("fall"))
      //   : (enemy.play("win"), player.play("fall"));
      if (winner == "p1") {
        player.play("win", { loop: true });
      } else {
        if (winner == "p2") {
          enemy.play("win", { loop: true });
        }
      }
      wait(4, () => {
        endRound({ winner: winner });
      });
    }
    //updating match timer
    loop(1.2, () => {
      if (time > 0 && matchStarted) {
        time--;
        timerBar.text = time;
      }
    }); //loop ends
    //making sure player always face each other
    let fired = false;
    player.onUpdate(() => {
      if (player.pos.x - enemy.pos.x > 6 * vw) {
        if (enemy.curAnim() !== "jump") {
          enemy.flipX(false);
        }
        if (player.curAnim() !== "jump") {
          player.flipX(true);
        }
      } else {
        if (player.pos.x - enemy.pos.x < 6 * vw) {
          if (enemy.curAnim() !== "jump") {
            enemy.flipX(true);
          }
          if (player.curAnim() !== "jump") {
            player.flipX(false);
          }
        }
      }
      // checking winner after the time is up
      //checking if game mode is training it it is keep running dont go to endRound function
      if (time == 0) {
        if (playerHealth.getWidth() > enemyHealth.getWidth()) {
          mode == "test"
            ? () => {}
            : fired
            ? () => {}
            : ((fired = true), ending({ winner: "p1" }));
        }
        if (playerHealth.getWidth() < enemyHealth.getWidth()) {
          mode == "test"
            ? () => {}
            : fired
            ? () => {}
            : ((fired = true), ending({ winner: "p2" }));
        }
        if (playerHealth.getWidth() == enemyHealth.getWidth()) {
          mode == "test"
            ? () => {}
            : go("game", {
                p1: p1,
                p2: p2,
                r: r,
                p1r: p1r,
                p2r: p2r,
                mode: mode,
                chapter: chapter,
                wins: wins,
                stageNum: stageNum,
              });
        }
      }
      //checking winner before time is up
      if (time > 0) {
        if (playerHealth.getWidth() < 0) {
          mode == "test"
            ? () => {}
            : fired
            ? () => {}
            : ((fired = true), ending({ winner: "p2" }));
        }
        if (enemyHealth.getWidth() < 0) {
          mode == "test"
            ? () => {}
            : fired
            ? () => {}
            : ((fired = true), ending({ winner: "p1" }));
        }
      }
    });
    // onUpdate loop ends
  });
  //Scene End
}
//function End
export default Game;
