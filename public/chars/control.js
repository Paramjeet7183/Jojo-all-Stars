function control({
  player,
  stand,
  data,
  left,
  right,
  up,
  down,
  key1,
  key2,
  key3,
  key4,
  key5,
}) {
  let canAttack = true;
  let nKey = data.normalKey;
  let sKey = data.standKey;
  let SPEED = data.speed;
  let JUMP_FORCE = data.jumpForce;
  let isCrouched = false;
  let standDrawn = false;
  let soundPlayed = false;
  // player.onUpdate(() => {
  //   if (player.curAnim() == "idle" && !canAttack) {
  //     canAttack = true;
  //   }
  // });
  //draw stand
  onKeyPress(key5, () => {
    // standDrawn
    if (matchStarted == true) {
      play(`${data.name}StandAppear`, {
        volume: bgm,
      });
      if (standDrawn) {
        if (stand.curAnim() == "idle" && data.name !== "johnny") {
          destroy(stand);
          standDrawn = false;
        }
        if (data.name == "johnny") {
          destroy(stand);
          standDrawn = false;
        }
      } else {
        if (!standDrawn) {
          if (!soundPlayed) {
            play(`${data.name}Stand`, {
              volume: charSound,
            });
            soundPlayed = true;
            wait(1, () => {
              soundPlayed = false;
            });
          }
          readd(stand);
          standDrawn = true;
        }
      }
    }
  });
  //
  player.onGround(() => {
    if (!isKeyDown(left)) {
      player.play("idle");
      if (data.name !== "johnny") {
        stand.play("idle");
      }
    } else {
      player.play(player.flipX() ? "walkForward" : "walkBackward");
    }

    if (!isKeyDown(right)) {
      if (data.name !== "johnny") {
        stand.play("idle");
      }
      player.play("idle");
    } else {
      player.play(player.flipX() ? "walkBackward" : "walkForward");
    }
  });

  onKeyDown(right, () => {
    if (
      !player.paused &&
      matchStarted &&
      !matchEnded &&
      canAttack &&
      !isKeyDown(key1) &&
      !isKeyPressed(key1) &&
      !isKeyDown(key2) &&
      !isKeyPressed(key2) &&
      !isKeyDown(key3) &&
      !isKeyPressed(key3) &&
      !isKeyDown(key4) &&
      !isKeyPressed(key4) &&
      !isKeyPressed(left) &&
      !isKeyDown(down)
    ) {
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
  });
  onKeyDown(left, () => {
    if (
      !player.paused &&
      matchStarted &&
      !matchEnded &&
      canAttack &&
      !isKeyDown(key1) &&
      !isKeyPressed(key1) &&
      !isKeyDown(key2) &&
      !isKeyPressed(key2) &&
      !isKeyDown(key3) &&
      !isKeyPressed(key4) &&
      !isKeyDown(key4) &&
      !isKeyPressed(key4) &&
      !isKeyPressed(right) &&
      !isKeyDown(down)
    ) {
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
  });

  onKeyDown(up, () => {
    if (
      !player.paused &&
      matchStarted &&
      !matchEnded &&
      canAttack &&
      player.curAnim() !== "charge" &&
      player.isGrounded() &&
      JUMP_FORCE > 1
    ) {
      player.play("jump");
      stand.play("jump");
      player.jump(JUMP_FORCE);
    }
  });
  onKeyDown(down, () => {
    if (
      !player.paused &&
      matchStarted &&
      !matchEnded &&
      player.isGrounded() &&
      !isKeyDown(key1) &&
      !isKeyPressed(key1) &&
      !isKeyDown(key2) &&
      !isKeyPressed(key2) &&
      !isKeyDown(key3) &&
      !isKeyPressed(key3) &&
      !isKeyDown(key4) &&
      !isKeyPressed(key4)
    ) {
      if (
        player.curAnim() !== "crouch" &&
        !isCrouched &&
        canAttack &&
        player.curAnim() == "idle"
      ) {
        player.play("crouch", {
          onEnd: () => {
            isCrouched = true;
          },
        });
      }
    }
  });
  onKeyRelease([left, right, down], () => {
    if (
      player.isGrounded() &&
      !isKeyDown(left) &&
      !isKeyDown(right) &&
      !isKeyDown(down)
    ) {
      player.play("idle");
      if (data.name !== "johnny") {
        stand.play("idle");
      }
      isCrouched = false;
    }
  });
  // onKeyRelease("down", () => {
  //   if (player.isGrounded() && isCrouched) {
  //     if (player.curAnim() == "crouch") {
  //       player.play("idle");
  //     }
  //     isCrouched = false;
  //   }
  // });

  //all attacks and combo;
  onKeyPress(key1, () => {
    if (!player.paused && canAttack && matchStarted && !matchEnded) {
      if (isKeyDown(up) && (standDrawn ? sKey.wUp.ex : nKey.wUp.ex)) {
        player.play(standDrawn ? sKey.wUp.anim : nKey.wUp.anim);
        (standDrawn ? sKey.wUp : nKey.wUp).fun({
          player: player,
          stand: stand,
        });
        canAttack = false;
        wait(standDrawn ? sKey.wUp.timeOut : nKey.wUp.timeOut, () => {
          canAttack = true;
        });
      } else {
        if (isKeyDown(down) && (standDrawn ? sKey.wDown.ex : nKey.wDown.ex)) {
          player.play(standDrawn ? sKey.wDown.anim : nKey.wDown.anim);
          canAttack = false;
          wait(standDrawn ? sKey.wDown.timeOut : nKey.wDown.timeOut, () => {
            canAttack = true;
          });
          (standDrawn ? sKey.wDown : nKey.wDown).fun({
            player: player,
            stand: stand,
          });
        } else {
          if (player.isGrounded() && (standDrawn ? sKey.w.ex : nKey.w.ex)) {
            player.play(standDrawn ? sKey.w.anim : nKey.w.anim);
            canAttack = false;
            wait(standDrawn ? sKey.w.timeOut : nKey.w.timeOut, () => {
              canAttack = true;
            });
            (standDrawn ? sKey.w : nKey.w).fun({
              player: player,
              stand: stand,
            });
          }
        }
      }
    }
  });
  onKeyPress(key2, () => {
    if (!player.paused && canAttack && matchStarted && !matchEnded) {
      if (isKeyDown(up) && (standDrawn ? sKey.aUp.ex : nKey.aUp.ex)) {
        player.play(standDrawn ? sKey.aUp.anim : nKey.aUp.anim);
        canAttack = false;
        wait(standDrawn ? sKey.aUp.timeOut : nKey.aUp.timeOut, () => {
          canAttack = true;
        });
        (standDrawn ? sKey.aUp : nKey.aUp).fun({
          player: player,
          stand: stand,
        });
      } else {
        if (isKeyDown(down) && (standDrawn ? sKey.aDown.ex : nKey.aDown.ex)) {
          player.play(standDrawn ? sKey.aDown.anim : nKey.aDown.anim);
          canAttack = false;
          wait(standDrawn ? sKey.aDown.timeOut : nKey.aDown.timeOut, () => {
            canAttack = true;
          });
          (standDrawn ? sKey.aDown : nKey.aDown).fun({
            player: player,
            stand: stand,
          });
        } else {
          if (player.isGrounded() && (standDrawn ? sKey.a.ex : nKey.a.ex)) {
            player.play(standDrawn ? sKey.a.anim : nKey.a.anim);
            canAttack = false;
            wait(standDrawn ? sKey.a.timeOut : nKey.a.timeOut, () => {
              canAttack = true;
            });
            (standDrawn ? sKey.a : nKey.a).fun({
              player: player,
              stand: stand,
            });
          }
        }
      }
    }
  });
  onKeyPress(key3, () => {
    if (!player.paused && canAttack && matchStarted && !matchEnded) {
      if (isKeyDown(up) && (standDrawn ? sKey.sUp.ex : nKey.sUp.ex)) {
        player.play(standDrawn ? sKey.sUp.anim : nKey.sUp.anim);
        canAttack = false;
        wait(standDrawn ? sKey.sUp.timeOut : nKey.sUp.timeOut, () => {
          canAttack = true;
        });
        (standDrawn ? sKey.sUp : nKey.sUp).fun({
          player: player,
          stand: stand,
        });
      } else {
        if (isKeyDown(down) && (standDrawn ? sKey.sDown.ex : nKey.sDown.ex)) {
          player.play(standDrawn ? sKey.sDown.anim : nKey.sDown.anim);
          canAttack = false;
          wait(standDrawn ? sKey.sDown.timeOut : nKey.sDown.timeOut, () => {
            canAttack = true;
          });
          (standDrawn ? sKey.sDown : nKey.sDown).fun({
            player: player,
            stand: stand,
          });
        } else {
          if (player.isGrounded() && (standDrawn ? sKey.s.ex : nKey.s.ex)) {
            player.play(standDrawn ? sKey.s.anim : nKey.s.anim);
            canAttack = false;
            wait(standDrawn ? sKey.s.timeOut : nKey.s.timeOut, () => {
              canAttack = true;
            });
            (standDrawn ? sKey.s : nKey.s).fun({
              player: player,
              stand: stand,
            });
          }
        }
      }
    }
  });
  onKeyPress(key4, () => {
    if (!player.paused && canAttack && matchStarted && !matchEnded) {
      if (isKeyDown(up) && (standDrawn ? sKey.dUp.ex : nKey.dUp.ex)) {
        player.play(standDrawn ? sKey.dUp.anim : nKey.dUp.anim);
        canAttack = false;
        wait(standDrawn ? sKey.dUp.timeOut : nKey.dUp.timeOut, () => {
          canAttack = true;
        });
        (standDrawn ? sKey.dUp : nKey.dUp).fun({
          player: player,
          stand: stand,
        });
      } else {
        if (isKeyDown(down) && (standDrawn ? sKey.dDown.ex : nKey.dDown.ex)) {
          player.play(standDrawn ? sKey.dDown.anim : nKey.dDown.anim);
          canAttack = false;
          wait(standDrawn ? sKey.dDown.timeOut : nKey.dDown.timeOut, () => {
            canAttack = true;
          });
          (standDrawn ? sKey.dDown : nKey.dDown).fun({
            player: player,
            stand: stand,
          });
        } else {
          if (player.isGrounded() && (standDrawn ? sKey.d.ex : nKey.d.ex)) {
            player.play(standDrawn ? sKey.d.anim : nKey.d.anim);
            canAttack = false;
            wait(standDrawn ? sKey.d.timeOut : nKey.d.timeOut, () => {
              canAttack = true;
            });
            (standDrawn ? sKey.d : nKey.d).fun({
              player: player,
              stand: stand,
            });
          }
        }
      }
    }
  });
}
export { control };
