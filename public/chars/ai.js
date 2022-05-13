async function ai({ player, stand, enemy, data, health, charge }) {
  let canAttack = true;
  // let nKey = data.normalKey;
  // let sKey = data.standKey;
  let SPEED = data.speed;
  let JUMP_FORCE = data.jumpForce;
  let isCrouched = false;
  let standDrawn = false;
  let soundPlayed = false;
  let dist = Math.abs(player.pos.x - enemy.pos.x);
  //keys
  let left = false;
  let right = false;
  let nAttack = [
    data.normalKey.w,
    data.normalKey.a,
    data.normalKey.s,
    data.normalKey.d,
    data.normalKey.wUp,
    data.normalKey.aUp,
    data.normalKey.sUp,
    data.normalKey.dUp,
    data.normalKey.wDown,
    data.normalKey.aDown,
    data.normalKey.sDown,
    data.normalKey.dDown,
  ];
  let sAttack = [
    data.standKey.w,
    data.standKey.a,
    data.standKey.s,
    data.standKey.d,
    data.standKey.wUp,
    data.standKey.aUp,
    data.standKey.sUp,
    data.standKey.dUp,
    data.standKey.wDown,
    data.standKey.aDown,
    data.standKey.sDown,
    data.standKey.dDown,
  ];
  player.onGround(() => {
    if (!left) {
      player.play("idle");
      if (data.name !== "johnny") {
        stand.play("idle");
      }
    } else {
      player.play(player.flipX() ? "walkForward" : "walkBackward");
    }

    if (!right) {
      if (data.name !== "johnny") {
        stand.play("idle");
      }
      player.play("idle");
    } else {
      player.play(player.flipX() ? "walkBackward" : "walkForward");
    }
    return;
  });
  async function drawStand() {
    if (matchStarted == true) {
      if (standDrawn) {
        destroy(stand);
        standDrawn = false;
      } else {
        if (!standDrawn) {
          readd(stand);
          standDrawn = true;
        }
      }
    }
    return;
  } //draw stand end
  //sim right
  async function simRight() {
    if (!player.paused && matchStarted && !matchEnded && canAttack) {
      player.move(player.flipX() ? SPEED / 1.5 : SPEED, 0);
      if (
        player.isGrounded() &&
        player.curAnim() !== "walkForward" &&
        player.curAnim() !== "walkBackward"
      ) {
        if (data.name !== "johnny") {
          stand.play(stand.flipX() ? "walkBackward" : "walkForward");
        }
        player.play(player.flipX() ? "walkBackward" : "walkForward");
      }
    }
    return;
  }
  //sim right end
  //sim left
  async function simLeft() {
    if (!player.paused && matchStarted && !matchEnded && canAttack) {
      player.move(player.flipX() ? -SPEED : -SPEED / 1.5, 0);
      if (
        player.isGrounded() &&
        player.curAnim() !== "walkForward" &&
        player.curAnim() !== "walkBackward"
      ) {
        if (data.name !== "johnny") {
          stand.play(stand.flipX() ? "walkForward" : "walkBackward");
        }
        player.play(player.flipX() ? "walkForward" : "walkBackward");
      }
    }
    return;
  }
  //sim left end
  player.onStateUpdate("runForward", () => {
    dist = Math.abs(player.pos.x - enemy.pos.x);
    player.flipX() ? simLeft() : simRight();
    if (dist < 20 * vw) {
      // player.enterState("idle", { waitTime: 3, nextState: "runBackward" });
      player.enterState("attack");
      return;
    }
  });
  // player.onStateUpdate("runBackward", () => {
  //   dist = Math.abs(player.pos.x - enemy.pos.x);
  //   player.flipX() ? simRight() : simLeft();
  //   if (dist > 70 * vw) {
  //     player.enterState("idle", { waitTime: 2, nextState: "runForward" });
  //     return;
  //   }
  // });
  player.onStateEnter("idle", ({ waitTime, nextState }) => {
    player.play("idle");
    wait(waitTime, () => {
      player.enterState(nextState);
    });
  });
  player.onStateUpdate("attack", () => {
    dist = Math.abs(player.pos.x - enemy.pos.x);
    let k = randi(1, sAttack.length);
    if (randi(1, 32) == 16) {
      drawStand();
    }
    if (
      dist < 20 * vw &&
      !player.paused &&
      canAttack &&
      matchStarted &&
      !matchEnded &&
      (standDrawn ? sAttack[k].ex : nAttack[k].ex)
    ) {
      player.play(standDrawn ? sAttack[k].anim : nAttack[k].anim);
      (standDrawn ? sAttack[k] : nAttack[k]).fun({
        player: player,
        stand: stand,
      });
      canAttack = false;
      wait(standDrawn ? sAttack[k].timeOut : nAttack[k].timeOut, () => {
        canAttack = true;
      });
    } else {
      if (dist > 20 * vw) {
        player.enterState("runForward");
      }
    }
    return;
  });
  player.enterState("idle", { waitTime: 3, nextState: "runForward" });
}
export { ai };
