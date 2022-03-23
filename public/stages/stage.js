import allStage from "./allStage.js";
loadSprite("stageOneBg1", "../assets/stage 01/1.png");
loadSprite("stageOneBg2", "../assets/stage 01/2.png");

loadSprite("stageTwoBg1", "../assets/stage 02/1.png");
loadSprite("stageTwoBg2", "../assets/stage 02/2.png");
loadSprite("stageTwoBg3", "../assets/stage 02/3.png");
loadSprite("stageTwoBg4", "../assets/stage 02/4.png");

loadSprite("stageThreeBg1", "../assets/stage 03/1.png");
loadSprite("stageThreeBg2", "../assets/stage 03/2.png");

async function stage(stageNum) {
  const stageArray = [
    allStage.stageOne,
    allStage.stageTwo,
    allStage.stageThree,
  ];

  const left = add([
    rect(2, 100 * vh),
    area(),
    solid(),
    pos(0, height()),
    origin("botleft"),
    color(RED),
    opacity(0),
    layer("effect"),
  ]);
  const right = add([
    rect(2, 100 * vh),
    area(),
    solid(),
    pos(width(), height()),
    origin("botright"),
    opacity(0),
    color(RED),
    layer("effect"),
  ]);

  const platform = add([
    rect(100 * width(), 10 * vh),
    area(),
    solid(),
    pos(0, height()),
    color(RED),
    origin("botleft"),
    opacity(0.5),
    opacity(0),
    layer("effect"),
    "plat",
  ]);
  stageArray[stageNum](); //running stage function
}
export default stage;
