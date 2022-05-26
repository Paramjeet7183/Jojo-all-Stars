async function addEff1(position) {
  const eff1 = add([
    sprite("eff1", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2.5),
    layer("pvp"),
    lifespan(0.2),
  ]);
}
async function addEff2(position) {
  const eff2 = add([
    sprite("eff2", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2),
    layer("pvp"),
    lifespan(0.5),
  ]);
}
async function addEff3(position) {
  const eff3 = add([
    sprite("eff3", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2),
    layer("pvp"),
    lifespan(0.24),
  ]);
}
async function addEff4(position) {
  const eff4 = add([
    sprite("eff4", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2),
    layer("pvp"),
    lifespan(0.24),
  ]);
}
async function addEff5(position) {
  const eff5 = add([
    sprite("eff5", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2),
    layer("pvp"),
    lifespan(0.5),
  ]);
}
async function addBlood(position) {
  const eff5 = add([
    sprite("bloodEffect", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(2),
    layer("pvp"),
    lifespan(0.1),
  ]);
}
async function addSpin(position) {
  const eff5 = add([
    sprite("spinEffect", { anim: "idle" }),
    pos(position),
    origin("center"),
    scale(1.4),
    layer("effect"),
    lifespan(0.5),
  ]);
}
async function addFire(position) {
  const fire = add([
    sprite("fireEffect", { anim: "idle" }),
    pos(position),
    origin("bot"),
    scale(3),
    lifespan(0.7),
    layer("effect"),
  ]);
}
async function addLightning(position, s) {
  const fire = add([
    sprite("lightning", { anim: "idle" }),
    pos(position),
    origin("bot"),
    scale(s),
    lifespan(0.7),
    layer("effect"),
  ]);
}
export {
  addEff1,
  addEff2,
  addEff3,
  addEff4,
  addEff5,
  addFire,
  addBlood,
  addSpin,
  addLightning,
};
