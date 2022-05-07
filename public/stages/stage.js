import { beach, desert, jail, school, train } from "./allStage.js";
async function stage(stageNum) {
  const platform = add([
    rect(100 * vw, 10 * vh),
    area(),
    solid(),
    pos(0, height()),
    color(RED),
    origin("botleft"),
    opacity(0),
    layer("effect"),
    "plat",
  ]);
  const left = add([
    rect(16, 100 * vh),
    area(),
    solid(),
    pos(0, height()),
    origin("botright"),
    color(RED),
    opacity(0.6),
    layer("effect"),
  ]);
  const right = add([
    rect(16, 100 * vh),
    area(),
    solid(),
    pos(platform.width, height()),
    origin("botleft"),
    color(BLUE),
    opacity(0.6),
    layer("effect"),
  ]);
  const allStage = [desert, beach, train, school, jail];
  allStage[stageNum]();
}
export default stage;
