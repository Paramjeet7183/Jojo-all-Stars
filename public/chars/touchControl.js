loadSprite("A", "../assets/hud/A.png");
loadSprite("B", "../assets/hud/B.png");
loadSprite("X", "../assets/hud/X.png");
loadSprite("Y", "../assets/hud/Y.png");
loadSprite("L", "../assets/hud/left.png");
loadSprite("R", "../assets/hud/right.png");
loadSprite("D", "../assets/hud/down.png");
loadSprite("U", "../assets/hud/up.png");
loadSprite("standKey", "../assets/hud/stand.png");

async function touchControl({ player, stand, data }) {
  const left = add([
    sprite("L"),
    area(),
    pos(5 * vw, 80 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
    "buttonLeft",
  ]);
  const right = add([
    sprite("R"),
    area(),
    pos(15 * vw, 80 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
    "buttonRight",
  ]);
  const up = add([
    sprite("U"),
    area(),
    pos(10 * vw, 70 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
    "buttonUp",
  ]);
  const down = add([
    sprite("D"),
    area(),
    pos(10 * vw, 90 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
    "buttonDown",
  ]);
  const A = add([
    sprite("A"),
    area(),
    pos(80 * vw, 80 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
  ]);
  const B = add([
    sprite("B"),
    area(),
    pos(90 * vw, 80 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
  ]);
  const Y = add([
    sprite("Y"),
    area(),
    pos(85 * vw, 70 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
  ]);
  const X = add([
    sprite("X"),
    area(),
    pos(85 * vw, 90 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
  ]);
  const S = add([
    sprite("standKey"),
    area(),
    pos(95 * vw, 60 * vh),
    origin("center"),
    opacity(0.5),
    layer("pvp"),
  ]);
  let leftClicked = false;
  let rightClicked = false;
  let upClicked = false;
  let downClicked = false;
  let canAttack = true;
  let nKey = data.normalKey;
  let sKey = data.standKey;
  let SPEED = data.speed;
  let JUMP_FORCE = data.jumpForce;
  let isCrouched = false;
  let standDrawn = false;
  let soundPlayed = false;
  left.onClick(() => {
    leftClicked = true;
    left.opacity = 1;
  });
  right.onClick(() => {
    rightClicked = true;
    right.opacity = 1;
  });
  up.onClick(() => {
    upClicked = true;
    up.opacity = 1;
  });
  down.onClick(() => {
    downClicked = true;
    down.opacity = 1;
  });
  player.onGround(() => {
    if (!leftClicked) {
      player.play("idle");
      if (data.name !== "johnny") {
        stand.play("idle");
      }
    } else {
      player.play(player.flipX() ? "walkForward" : "walkBackward");
    }

    if (!rightClicked) {
      if (data.name !== "johnny") {
        stand.play("idle");
      }
      player.play("idle");
    } else {
      player.play(player.flipX() ? "walkBackward" : "walkForward");
    }
  });
  onUpdate(() => {
    //   left key
    if (leftClicked && !rightClicked && !upClicked && !downClicked) {
      //   left.opacity = 0.5;
      //   console.log("left clicked");
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
    }
    //right key
    if (!leftClicked && rightClicked && !upClicked && !downClicked) {
      //   right.opacity = 0.5;
      //   console.log("right clicked");
      if (!player.paused && matchStarted && !matchEnded && canAttack) {
        player.move(
          player.flipX()
            ? vec2(SPEED / 1.3, 0).lerp(player.pos, dt() * 8).x
            : vec2(SPEED, 0).lerp(player.pos, dt() * 8).x,
          0
        );
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
    }
    //up key
    if (!leftClicked && !rightClicked && upClicked && !downClicked) {
      //   up.opacity = 0.5;
      //   console.log("up clicked");
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
        player.jump(vec2(0, JUMP_FORCE).lerp(player.pos, dt() * 6).y);
      }
    }
    // down key
    if (!leftClicked && !rightClicked && !upClicked && downClicked) {
      //   console.log("down clicked");
      if (
        !player.paused &&
        matchStarted &&
        !matchEnded &&
        player.isGrounded()
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
    }
  });
  mouseRelease(() => {
    leftClicked = false;
    rightClicked = false;
    upClicked = false;
    downClicked = false;
    left.opacity = 0.5;
    right.opacity = 0.5;
    up.opacity = 0.5;
    down.opacity = 0.5;
    if (player.isGrounded() && !leftClicked && !rightClicked && !downClicked) {
      player.play("idle");
      if (data.name !== "johnny") {
        stand.play("idle");
      }
      isCrouched = false;
    }
  });
  onTouchStart((id, pos) => {
    if (S.hasPoint(pos)) {
      console.log("S touched");
      S.opacity = 1;
      if (matchStarted == true) {
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
                volume: charSound * 1.5,
              });
              play(`${data.name}StandAppear`, {
                volume: bgm / 1.5,
              });
              soundPlayed = true;
              wait(1.2, () => {
                soundPlayed = false;
              });
            }
            readd(stand);
            standDrawn = true;
          }
        }
      }
    }
    if (A.hasPoint(pos)) {
      console.log("A touched");
      A.opacity = 1;
      if (!player.paused && canAttack && matchStarted && !matchEnded) {
        if (upClicked && (standDrawn ? sKey.aUp.ex : nKey.aUp.ex)) {
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
          if (downClicked && (standDrawn ? sKey.aDown.ex : nKey.aDown.ex)) {
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
    }
    if (B.hasPoint(pos)) {
      console.log("B touched");
      B.opacity = 1;
      if (!player.paused && canAttack && matchStarted && !matchEnded) {
        if (upClicked && (standDrawn ? sKey.dUp.ex : nKey.dUp.ex)) {
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
          if (downClicked && (standDrawn ? sKey.dDown.ex : nKey.dDown.ex)) {
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
    }
    if (X.hasPoint(pos)) {
      console.log("X touched");
      X.opacity = 1;
      if (!player.paused && canAttack && matchStarted && !matchEnded) {
        if (upClicked && (standDrawn ? sKey.sUp.ex : nKey.sUp.ex)) {
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
          if (downClicked && (standDrawn ? sKey.sDown.ex : nKey.sDown.ex)) {
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
    }
    if (Y.hasPoint(pos)) {
      console.log("Y touched");
      Y.opacity = 1;
      if (!player.paused && canAttack && matchStarted && !matchEnded) {
        if (upClicked && (standDrawn ? sKey.wUp.ex : nKey.wUp.ex)) {
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
          if (downClicked && (standDrawn ? sKey.wDown.ex : nKey.wDown.ex)) {
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
    }
  });
  onTouchEnd(() => {
    A.opacity = 0.5;
    B.opacity = 0.5;
    X.opacity = 0.5;
    Y.opacity = 0.5;
    S.opacity = 0.5;
  });
}
export { touchControl };
