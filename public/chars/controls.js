function controls({
  player,
  enemy,
  data,
  chargeMeter,
  keys: { up, down, left, right, key_1, key_2, key_3, key_4, key_5 },
}) {
  let speed = data.speed;
  let jumpForce = data.jumpForce;
  let fired = false;
  let fired2 = false; //have to create new variable for jump animation so run and jump sound dont interfere.
  let val = 2;
  let keys = { up, down, left, right, key_1, key_2, key_3, key_4, key_5 };
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
      if (!fired2) {
        fired2 = true;
        play("jumpLandingSound");
        stop("footSound");
        wait(0.7, () => {
          fired2 = false;
        });
      }
      if (player.curAnim() == "jump") {
        val = 0;
      }
      player.jump(jumpForce);
      player.onCollide("plat", () => {
        val++;
        if (val == 1) {
          play("footSound");
        }
      });
    }
  });

  onKeyDown(left, () => {
    if (
      !isKeyDown(key_3) &&
      !isKeyPressed(key_3) &&
      !isKeyDown(key_1) &&
      !isKeyPressed(key_1) &&
      !isKeyDown(key_2) &&
      !isKeyPressed(key_2) &&
      !isKeyDown(key_4) &&
      !isKeyPressed(key_4) &&
      !player.paused
    ) {
      player.flipX(true);
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        if (player.isGrounded()) {
          player.move(-speed, 0);
          if (!fired && data.name !== "johnny") {
            fired = true;
            play("footSound");
            wait(0.27, () => {
              fired = false;
            });
          }
        }
        if (player.isGrounded() && player.curAnim() !== "run") {
          player.play("run");
        }
      }
    }
  });

  onKeyDown(right, () => {
    if (
      !isKeyDown(key_3) &&
      !isKeyPressed(key_3) &&
      !isKeyDown(key_1) &&
      !isKeyPressed(key_1) &&
      !isKeyDown(key_2) &&
      !isKeyPressed(key_2) &&
      !isKeyDown(key_4) &&
      !isKeyPressed(key_4) &&
      !player.paused
    ) {
      player.flipX(false);
      if (player.curAnim() !== "crouch" && player.curAnim() !== "charge") {
        if (player.isGrounded() && !player.paused) {
          player.move(speed, 0);
          if (!fired && data.name !== "johnny") {
            fired = true;
            play("footSound");
            wait(0.27, () => {
              fired = false;
            });
          }
        }
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
      !isKeyPressed(key_4) &&
      !player.paused
    ) {
      if (player.isGrounded()) {
        player.play("crouch");
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
    }
  });

  onKeyPress(key_3, () => {
    if (player.curAnim() !== "charge" && !player.paused) {
      data.attacks.attack_D({
        player: player,
        enemy: enemy,
        keys: keys,
        chargeMeter: chargeMeter,
      });
    }
  });
  onKeyPress(key_2, () => {
    if (player.curAnim() !== "charge" && !player.paused) {
      data.attacks.attack_S({
        player: player,
        enemy: enemy,
        keys: keys,
        chargeMeter: chargeMeter,
      });
    }
  });
  onKeyPress(key_1, () => {
    if (player.curAnim() !== "charge" && !player.paused) {
      data.attacks.attack_A({
        player: player,
        enemy: enemy,
        keys: keys,
        chargeMeter: chargeMeter,
      });
    }
  });
  onKeyPress(key_4, () => {
    if (player.curAnim() !== "charge" && !player.paused) {
      data.attacks.attack_W({
        player: player,
        enemy: enemy,
        keys: keys,
        chargeMeter: chargeMeter,
      });
    }
  });

  onKeyDown(key_5, () => {
    if (!player.paused) {
      data.attacks.charge({ player: player, chargeMeter: chargeMeter });
    }
  });
}

export default controls;

// if (!this.fired) {
//   this.fired = true;
//   play("charge1");
//   wait(1.5, () => {
//     this.fired = false;
//   });}
