loadSprite("timer", "../assets/hud/timer.png");
loadSprite("healthBar", "../assets/hud/health.png");
loadSprite("charge", "../assets/hud/charge.png");
loadSprite("johnnyIcon", "../assets/hud/johnny.png");
loadSprite("jotaroIcon", "../assets/hud/jotaro.png");
loadSprite("gioronoIcon", "../assets/hud/giorono.png");
class healthBar {
  constructor({
    playerName,
    displayName,
    xFrame,
    yFrame,
    originFrame,
    xBigBar,
    yBigBar,
    originBigBar,
    xSmallBar,
    ySmallBar,
    healthBarColor,
    xPlayerImage,
    yPlayerImage,
  }) {
    this.timerFrame = add([
      sprite("timer", { width: 6 * vw, height: 6 * vw }),
      pos(center().x, 8 * vh),
      origin("center"),
      layer("hud"),
      fixed(),
      z(0),
      "timerFrame",
    ]);
    this.healthFrame = add([
      sprite("healthBar", { width: 32 * vw, height: 6 * vh }),
      pos(this.timerFrame.pos.sub(xFrame, yFrame)),
      origin(originFrame),
      layer("hud"),
      fixed(),
      z(1),
    ]);
    this.bigHealthBar = add([
      rect(14 * vw, 3 * vh),
      pos(this.healthFrame.pos.sub(xBigBar, yBigBar)),
      color(healthBarColor),
      origin(originBigBar),
      layer("hud"),
      fixed(),
      z(0),
    ]);
    this.smallHealthBar = add([
      rect(9.5 * vw, 2 * vh),
      pos(this.healthFrame.pos.sub(xSmallBar, ySmallBar)),
      origin(originBigBar),
      color(healthBarColor),
      layer("hud"),
      fixed(),
      z(0),
    ]);
    this.playerImage = add([
      sprite(`${playerName}Icon`, { width: 12 * vw, height: 9 * vw }),
      pos(this.healthFrame.pos.sub(xPlayerImage, yPlayerImage)),
      origin(`bot${originFrame}`),
      layer("hud"),
      fixed(),
      z(0),
    ]);
    this.playerNameFrame = add([
      text(`${displayName}`, {
        size: 2 * vw,
        font: "apl386",
      }),
      pos(this.healthFrame.pos.sub(0, 4 * vh)),
      origin(`bot${originFrame}`),
      layer("hud"),
      fixed(),
      z(1),
    ]);
    if (originFrame == "right") {
      this.healthFrame.flipX(false);
      this.playerImage.flipX(false);
    }
    if (originFrame == "left") {
      this.healthFrame.flipX(true);
      this.playerImage.flipX(true);
    }
    onUpdate(() => {
      this.smallHealthBar.width = this.smallHealthBar.width;
      this.bigHealthBar.width = this.bigHealthBar.width;
    });
    this.healthUnit = 0.01 * 23.5 * vw; //one unit (1 %) of health
  }
  hurt(damage) {
    if (this.smallHealthBar.width > 0) {
      this.smallHealthBar.width -= damage * this.healthUnit;
    }
    if (this.smallHealthBar.width < 0 && this.bigHealthBar.width > 0) {
      this.bigHealthBar.width -= damage * this.healthUnit;
    }
  }
  heal(healPoint) {
    if (
      this.smallHealthBar.width < 9.5 * vw &&
      this.bigHealthBar.width == 14 * vw
    ) {
      this.smallHealthBar.width += healPoint * this.healthUnit;
    }
    if (this.smallHealthBar.width <= 0 && this.bigHealthBar.width < 14 * vw) {
      this.bigHealthBar.width += healPoint * this.healthUnit;
    }
  }
  getWidth() {
    return this.smallHealthBar.width + this.bigHealthBar.width;
  }
}

class chargeBar {
  constructor({ xChargeFrame, originFrame, xCharge, originCharge }) {
    this.chargeFrame = add([
      sprite("charge", { width: 16 * vw, height: 6 * vh }),
      pos(xChargeFrame, 100 * vh),
      origin(`bot${originFrame}`),
      layer("hud"),
      fixed(),
      z(1),
    ]);
    this.chargeBigBar = add([
      rect(12 * vw, 3 * vh),
      pos(this.chargeFrame.pos.sub(xCharge, 0)),
      origin(originCharge),
      color(BLUE),
      layer("hud"),
      fixed(),
      z(0),
    ]);
    if (originFrame == "right") {
      this.chargeFrame.flipX(false);
    }
    if (originFrame == "left") {
      this.chargeFrame.flipX(true);
    }
    this.chargeUnit = 0.01 * 12 * vw;
    onUpdate(() => {
      this.chargeBigBar.width = this.chargeBigBar.width;
    });
  }
  discharge(dischargePoint) {
    if (this.chargeBigBar.width > 0) {
      this.chargeBigBar.width -= dischargePoint * this.chargeUnit;
    }
  }
  charge(chargePoint) {
    if (this.chargeBigBar.width < 12 * vw) {
      this.chargeBigBar.width += chargePoint * this.chargeUnit;
    }
  }
  getWidth() {
    return this.chargeBigBar.width;
  }
}
export { healthBar, chargeBar };

/*

//xFrame,yFrame,originFrame,xBigBar,yBigBar,originBigBar,xSmallBar,ySmallBar,healthBarColor
const playerOneHealthBar = new healthBar("johnny",4*vw,-4*vh,"right", 24.5*vw,2.5*vh,"topleft", 10.5*vw,2.5*vh,RED,25*vw,-2.5*vh);
const playerTwoHealthBar = new healthBar("johnny",-4*vw,-4*vh,"left", -24.5*vw,2.5*vh,"topright", -10.5*vw,2.5*vh,RED,-25*vw,-2.5*vh);
//xChargeFrame,yChargeFrame,originCharge,xCharge,yCharge
const playerOneCharge = new chargeBar(20*vw,90*vh,"right", 13*vw,0*vh,"botleft");
const playerTwoCharge = new chargeBar(80*vw,90*vh,"left", -13*vw,0*vh,"botright");

*/
