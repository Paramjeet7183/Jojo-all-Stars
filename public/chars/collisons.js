import {
  addBlood,
  addEff1,
  addEff2,
  addEff3,
  addEff4,
  addEff5,
  addFire,
  addSpin,
} from "./effects.js";
async function collisions({
  opponentTag,
  me,
  opponent,
  opponentName,
  opponentHealth,
}) {
  const H = `${opponentTag}HurtBox`;
  const H1 = `${opponentTag}HurtBoxOne`;
  const H2 = `${opponentTag}HurtBoxTwo`;
  const cData = me.collisionData;
  let collided = false;
  let played = false;
  async function pushBack(p, disX, disY) {
    const a = add([rect(0.2, 0.2), pos(p.pos), lifespan(0.3)]);
    a.onUpdate(() => {
      p.move(p.flipX() ? disX : -disX, -disY);
    });
  }
  const ef = [
    addEff1,
    addEff2,
    addEff3,
    addEff4,
    addEff5,
    addBlood,
    addSpin,
    addFire,
  ];
  const collisionEffect = ({
    collideSound,
    pauseTimeOut,
    soundTimeOut,
    collisionTimeOut,
    attackDamage,
  }) => {
    if (!collided) {
      collided = true;
      play(collideSound, {
        volume: punchSound,
      });
      opponent.paused = true;
      wait(pauseTimeOut, () => {
        opponent.paused = false;
      });
      if (!played) {
        played = true;
        play(
          choose([
            `${opponentName}Hurt1`,
            `${opponentName}Hurt2`,
            `${opponentName}Hurt3`,
          ]),
          {
            volume: charSound,
          }
        );
        wait(soundTimeOut, () => {
          played = false;
        });
      }
      opponentHealth.hurt(attackDamage);
      wait(collisionTimeOut, () => {
        collided = false;
      });
    }
  };
  for (let i = 0; i <= cData.length - 1; i++) {
    if (cData[i].entities[1] == "H1") {
      onCollide(cData[i].entities[0], H1, (e) => {
        if (cData[i].effect.length > 0) {
          for (let j = 0; j <= cData[i].effect.length - 1; j++) {
            ef[cData[i].effect[j] - 1](e.pos);
          }
        }
        shake(cData[i].shake);
        opponent.play("upperHurt");
        collisionEffect({
          collideSound: cData[i].collideSound,
          collisionTimeOut: cData[i].collisionTimeOut,
          pauseTimeOut: cData[i].pauseTimeOut,
          soundTimeOut: cData[i].soundTimeOut,
          attackDamage: cData[i].attackDamage,
        });
        pushBack(opponent, cData[i].pushX, cData[i].pushY);
      });
    }
    if (cData[i].entities[1] == "H2") {
      onCollide(cData[i].entities[0], H2, (e) => {
        if (cData[i].effect.length > 0) {
          for (let j = 0; j <= cData[i].effect.length - 1; j++) {
            ef[cData[i].effect[j] - 1](e.pos);
          }
        }
        opponent.play("lowerHurt");
        collisionEffect({
          collideSound: cData[i].collideSound,
          collisionTimeOut: cData[i].collisionTimeOut,
          pauseTimeOut: cData[i].pauseTimeOut,
          soundTimeOut: cData[i].soundTimeOut,
          attackDamage: cData[i].attackDamage,
        });
        shake(cData[i].shake);
        pushBack(opponent, cData[i].pushX, cData[i].pushY);
      });
    }
  }
}
export { collisions };
