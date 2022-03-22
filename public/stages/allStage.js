const allStage = {
  //-----------------------------------------------------------
  stageOne: async function () {
    const stageOneBg1 = add([
      sprite("stageOneBg1"),
      pos(center()),
      origin("bot"),
      scale(Math.max(width() / 2398, height() / 1200)),
      z(0),
    ]);
    const stageOneBg2 = add([
      sprite("stageOneBg2"),
      pos(0, height()),
      origin("botleft"),
      scale(Math.max(width() / 1280, height() / 720)),
      z(1),
    ]);
  },
  //----------------------------------------------------------------------
  stageTwo: async function () {
    const stageTwoBg1 = add([
      sprite("stageTwoBg1"),
      pos(center()),
      origin("bot"),
      scale(Math.max(width() / 2000, height() / 375)),
      z(0),
    ]);
    const stageTwoBg2 = add([
      sprite("stageTwoBg2"),
      pos(0, height()),
      origin("bot"),
      scale(Math.max(width() / 955, height() / 88)),
      z(1),
    ]);
    const stageTwoBg3 = add([
      sprite("stageTwoBg3"),
      pos(0, height()),
      origin("bot"),
      scale(Math.max(width() / 1389, height() / 122)),
      z(2),
    ]);
    const stageTwoBg4 = add([
      sprite("stageTwoBg4"),
      pos(center().x, height()),
      origin("bot"),
      scale(Math.max(width() / 1475, height() / 422)),
      z(3),
    ]);
  },
  //------------------------------------------------------------
  stageThree: async function () {
    const stageThreeBg1 = add([
      sprite("stageThreeBg1"),
      pos(center()),
      origin("bot"),
      scale(Math.max(width() / 1604, height() / 217)),
      z(0),
    ]);
    const stageThreeBg2 = add([
      sprite("stageThreeBg2"),
      pos(0, height()),
      origin("botleft"),
      fixed(),
      scale(Math.max(width() / 1040, height() / 585)),
      z(1),
    ]);
  },
};
export default allStage;
