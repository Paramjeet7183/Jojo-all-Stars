async function controls({
  player,
  enemy,
  data,
  keys: { up, down, left, right, key_1, key_2, key_3, key_4, key_5 },
}) {
  let speed = data.speed;
  let jumpForce = data.jumpForce;
  let chargeMeter;

  player.onGround(() => {
    if (!isKeyDown(left) && !isKeyDown(right)) {
      player.play("idle");
    } else {
      player.play("run");
    }
  });

  onKeyDown(up, () => {
    if (player.curAnim() !== "charge" && player.isGrounded() && jumpForce > 1) {
      player.play("jump");
      player.jump(jumpForce);
    }
  });

  onKeyDown(left, () => {
    player.flipX(true);
    if (
      !isKeyDown(key_3) &&
      !isKeyPressed(key_3) &&
      !isKeyDown(key_1) &&
      !isKeyPressed(key_1) &&
      !isKeyDown(key_2) &&
      !isKeyPressed(key_2) &&
      !isKeyDown(key_4) &&
      !isKeyPressed(key_4)
    ) {
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        player.move(-speed, 0);
        if (player.isGrounded() && player.curAnim() !== "run") {
          player.play("run");
        }
      }
    }
  });

  onKeyDown(right, () => {
    player.flipX(false);
    if (
      !isKeyDown(key_3) &&
      !isKeyPressed(key_3) &&
      !isKeyDown(key_1) &&
      !isKeyPressed(key_1) &&
      !isKeyDown(key_2) &&
      !isKeyPressed(key_2) &&
      !isKeyDown(key_4) &&
      !isKeyPressed(key_4)
    ) {
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        player.move(speed, 0);
        if (player.isGrounded() && player.curAnim() !== "run") {
          player.play("run");
        }
      }
    }
  });
  onKeyDown(down, () => {
    if (
      !isKeyDown(key_3) &&
      !isKeyPressed(key_3) &&
      !isKeyDown(key_1) &&
      !isKeyPressed(key_1) &&
      !isKeyDown(key_2) &&
      !isKeyPressed(key_2) &&
      !isKeyDown(key_4) &&
      !isKeyPressed(key_4)
    ) {
      player.play("crouch");
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
    }
  });

  onKeyPress(key_3, () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_D({ player: player, enemy: enemy });
    }
  });
  onKeyPress(key_2, () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_S({ player: player, enemy: enemy });
    }
  });
  onKeyPress(key_1, () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_A({ player: player, enemy: enemy });
    }
  });
  onKeyPress(key_4, () => {
    if (player.curAnim() !== "charge") {
      data.attacks.attack_W({ player: player, enemy: enemy });
    }
  });

  // onKeyDown(key_5, () => {
  //   player.play("charge");
  //   shake(2);
  // });
}

export default controls;
