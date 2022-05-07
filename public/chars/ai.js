async function ai({ player, data, enemy, chargeMeter }) {
  let canAttack = true;
  let dir = Math.round(enemy.pos.sub(player.pos).unit().x);
  let dist = player.pos.dist(enemy.pos);
  player.onStateEnter("idle", () => {
    player.play("idle");
  });
  //
  player.onStateUpdate("run", () => {
    player.move(dir * data.speed, 0);
    if (player.curAnim() !== "walkForward") {
      player.play("walkForward");
    }
    if (dist < 12 * vw) {
      player.enterState("attack");
    }
  });
  //
  player.onStateUpdate("attack", () => {
    if (canAttack) {
      player.play(choose(["punch", "kick", "stand1"]), {
        onEnd: () => {
          player.enterState("idle");
          canAttack = true;
        },
      });
      canAttack = false;
    }
  });
  // player.enterState("run");
  player.onUpdate(() => {
    dir = Math.round(enemy.pos.sub(player.pos).unit().x);
    dist = player.pos.dist(enemy.pos);
    if (dir > 0) {
      player.flipX(false);
    }
    if (dir < 0) {
      player.flipX(true);
    }
    switch (randi(0, 50)) {
      case 1:
        if (
          player.state !== "walkForward" &&
          player.state !== "attack" &&
          dist > 12 * vw
        ) {
          player.enterState("run");
        }
        break;
      case 2:
        if (player.state !== "walkForward" && player.state !== "attack") {
          player.enterState("attack");
        }
      default:
        break;
    }
  });
}
export { ai };
