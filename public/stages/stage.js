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
  let vw = 0.01 * width();
  let vh = 0.01 * height();

  const left = add([
    rect(2, 100 * vh),
    area(),
    solid(),
    pos(0, height()),
    origin("botleft"),
    color(RED),
    layer("effect"),
  ]);
  const right = add([
    rect(2, 100 * vh),
    area(),
    solid(),
    pos(width(), height()),
    origin("botright"),
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
    layer("effect"),
  ]);
  stageArray[stageNum]();
}
export default stage;
