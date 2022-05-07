async function desert() {
  const ob1 = add([
    sprite("desertSky"),
    pos(50 * vw, 25 * vh),
    origin("center"),
    scale(Math.min(width() / 960, height() / 320)),
    z(0),
  ]);
  const ob2 = add([
    sprite("desertSandBg"),
    pos(50 * vw, 75 * vh),
    origin("center"),
    scale(Math.min(width() / 384, height() / 75)),
    z(1),
  ]);
  const ob3 = add([
    sprite("desertSand"),
    pos(-20 * vw, 100 * vh),
    origin("botleft"),
    scale(Math.max(width() / 639, height() / 197)),
    z(2),
  ]);
  const ob4 = add([
    sprite("desertWheel", { anim: "idle" }),
    pos(100 * vw, 41 * vh),
    origin("botright"),
    scale(3),
    z(3),
  ]);
}

async function train() {
  const ob1 = add([
    sprite("trainBg"),
    pos(center()),
    origin("center"),
    scale(1),
    z(0),
  ]);
  const ob2 = add([
    sprite("trainGround"),
    pos(0, 100 * vh),
    origin("botleft"),
    scale(0.5),
    z(1),
  ]);
}
async function beach() {
  const ob1 = add([
    sprite("beachSky"),
    pos(0, 50 * vh),
    origin("botleft"),
    scale(1.8),
    z(0),
  ]);
  const ob2 = add([
    sprite("beachBush"),
    pos(0, 100 * vh),
    origin("botleft"),
    scale(Math.max(width() / 514, height() / 144)),
    z(2),
  ]);
  const ob3 = add([
    sprite("beachWater", { anim: "idle" }),
    pos(0, 39 * vh),
    origin("topleft"),
    scale(4.590277777777778),
    z(3),
  ]);
}

async function school() {
  const ob1 = add([
    sprite("school"),
    pos(0, 100 * vh),
    origin("botleft"),
    scale(Math.max(width() / 768, height() / 262)),
    z(0),
  ]);
  const ob2 = add([
    sprite("injured", { anim: "idle" }),
    pos(10 * vw, 67 * vh),
    origin("botleft"),
    scale(2.4),
    z(1),
  ]);
}
async function jail() {
  const ob1 = add([
    sprite("jail"),
    pos(-30 * vw, 100 * vh),
    origin("botleft"),
    scale(Math.max(width() / 848, height() / 256)),
    z(0),
  ]);
}
export { desert, train, beach, school, jail };
