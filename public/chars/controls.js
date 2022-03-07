function controls(player, data, enemyPos) {
  let speed = data.speed;
  let jumpForce = data.jumpForce;
  let isFlip = false;
  let chargeMeter = 20;
  player.onGround(() => {
    if (!isKeyDown("left") && !isKeyDown("right")) {
      player.play("idle");
    } else {
      player.play("run");
    }
  });

  onKeyDown("up", () => {
    if (player.curAnim() !== "charge" && player.isGrounded() && jumpForce > 1) {
      player.play("jump");
      player.jump(jumpForce);
    }
  });

  onKeyDown("left", () => {
    player.flipX(true);
    isFlip = true;
    if (
      !isKeyDown("d") &&
      !isKeyPressed("d") &&
      !isKeyDown("a") &&
      !isKeyPressed("a") &&
      !isKeyDown("s") &&
      !isKeyPressed("s") &&
      !isKeyDown("w") &&
      !isKeyPressed("w")
    ) {
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        player.move(-speed, 0);
        if (player.isGrounded() && player.curAnim() !== "run") {
          player.play("run");
        }
      }
    }
  });

  onKeyDown("right", () => {
    player.flipX(false);
    isFlip = false;
    if (
      !isKeyDown("d") &&
      !isKeyPressed("d") &&
      !isKeyDown("a") &&
      !isKeyPressed("a") &&
      !isKeyDown("s") &&
      !isKeyPressed("s") &&
      !isKeyDown("w") &&
      !isKeyPressed("w")
    ) {
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        player.move(speed, 0);
        if (player.isGrounded() && player.curAnim() !== "run") {
          player.play("run");
        }
      }
    }
  });
  onKeyDown("down", () => {
    if (
      !isKeyDown("d") &&
      !isKeyPressed("d") &&
      !isKeyDown("a") &&
      !isKeyPressed("a") &&
      !isKeyDown("s") &&
      !isKeyPressed("s")
    ) {
      player.play("crouch");
    }
  });

  onKeyRelease(["left", "right", "down"], () => {
    if (
      player.isGrounded() &&
      !isKeyDown("left") &&
      !isKeyDown("right") &&
      !isKeyDown("down")
    ) {
      player.play("idle");
    }
  });

  onKeyPress("d", () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_D(player, enemyPos, isFlip); //isFlip is always going to be in the end
    }
  });
  onKeyPress("s", () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_S(player, enemyPos, isFlip); //isFlip is always going to be in the end
    }
  });
  onKeyPress("a", () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_A(player, isFlip); //isFlip is always going to be in the end
    }
  });
  onKeyPress("w", () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_W(player, enemyPos, isFlip); //isFlip is always going to be in the end
    }
  });

  onKeyDown("c", () => {
    data.attacks.charge(player, chargeMeter);
  });
  const bar = add([rect(20, 20), area(), color(RED), pos(50, 50)]);
  bar.onUpdate(() => {
    bar.width = chargeMeter;
  });
}

export default controls;
