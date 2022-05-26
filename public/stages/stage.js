import { beach, desert, jail, school, train } from "./allStage.js";
async function stage(stageNum) {
  const allStage = [desert, beach, train, school, jail];
  // const allStage = [
  //   {
  //     w: 514,
  //     h: 144,
  //     fun: beach,
  //   },
  //   {
  //     w: 639,
  //     h: 197,
  //     fun: desert,
  //   },
  //   {
  //     w: 848,
  //     h: 256,
  //     fun: jail,
  //   },
  //   {
  //     w: 768,
  //     h: 272,
  //     fun: school,
  //   },
  //   {
  //     w: 3200,
  //     h: 328,
  //     fun: train,
  //   },
  // ];
  // let coff = Math.max(
  //   width() / allStage[stageNum].w,
  //   height() / allStage[stageNum].h
  // );
  const platform = add([
    rect(100 * vw, 5 * vh),
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
  // const lb = add([
  //   rect(12, 100 * vh),
  //   area(),
  //   solid(),
  //   body(),
  //   pos(48, height()),
  //   origin("botright"),
  //   color(YELLOW),
  //   opacity(0),
  //   layer("effect"),
  // ]);
  // const rb = add([
  //   rect(16, 100 * vh),
  //   area(),
  //   solid(),
  //   body(),
  //   pos(100 * vw, height()),
  //   origin("botleft"),
  //   color(CYAN),
  //   opacity(0),
  //   layer("effect"),
  // ]);
  // onKeyDown("left", () => {
  //   if (
  //     Math.abs(lb.pos.x - p1.pos.x) < 2 * vw &&
  //     Math.abs(p2.pos.x - rb.pos.x) > 32
  //   ) {
  //     p1.move(-speed / 1.3, 0);
  //     lb.move(-speed / 1.3, 0);
  //   }
  //   rb.pos.x = lb.pos.x + 100 * vw;
  // });
  // onKeyDown("right", () => {
  //   if (
  //     Math.abs(rb.pos.x - p1.pos.x) < 64 &&
  //     Math.abs(rb.pos.x - right.pos.x) > 1.2 * vw
  //   ) {
  //     //   rb.move(800, 0);
  //     lb.move(speed, 0);
  //   }
  //   rb.pos.x = lb.pos.x + 100 * vw;
  // });
  // p1.onUpdate(() => {
  //   camPos(
  //     camPos().lerp(
  //       vec2(Math.abs(rb.pos.x - lb.pos.x) / 2 + lb.pos.x, 50 * vh),
  //       dt() * 5
  //     )
  //   );
  // });
  allStage[stageNum]();
}
export default stage;
