class setPlayerHurtBox {
  constructor({ player, obj, tag }) {
    this.h1 = {
      width: 0,
      height: 0,
      offset: vec2(0, 0),
    };
    this.h2 = {
      width: 0,
      height: 0,
      offset: vec2(0, 0),
    };
    obj.hurtBoxData.setHurtBox(player, this.h1, this.h2);
    const hurtBoxOne = add([
      rect(this.h1.width, this.h1.height),
      area(),
      pos(),
      follow(player, this.h1.offset),
      origin("botright"),
      color(RED),
      // outline(4, GREEN),
      opacity(0),
      "HurtBox",
      `${tag}HurtBox`,
      `${tag}HurtBoxOne`,
    ]);
    const hurtBoxTwo = add([
      rect(this.h2.width, this.h2.width),
      area(),
      pos(),
      follow(player, this.h2.offset),
      origin("botright"),
      color(RED),
      // outline(4, RED),
      opacity(0),
      "HurtBox",
      `${tag}HurtBox`,
      `${tag}HurtBoxTwo`,
    ]);
    onUpdate(() => {
      hurtBoxOne.width = this.h1.width;
      hurtBoxOne.height = this.h1.height;
      hurtBoxOne.follow.offset.y = this.h1.offset.y;
      hurtBoxTwo.width = this.h2.width;
      hurtBoxTwo.height = this.h2.height;
      hurtBoxTwo.follow.offset.y = this.h2.offset.y;
      if (player.flipX()) {
        hurtBoxOne.origin = "botleft";
        hurtBoxTwo.origin = "botleft";
        hurtBoxOne.follow.offset.x = -this.h1.offset.x;
        hurtBoxTwo.follow.offset.x = -this.h2.offset.x;
      } else {
        hurtBoxOne.origin = "botright";
        hurtBoxTwo.origin = "botright";
        hurtBoxOne.follow.offset.x = this.h1.offset.x;
        hurtBoxTwo.follow.offset.x = this.h2.offset.x;
      }
    });
  }
}
export default setPlayerHurtBox;
