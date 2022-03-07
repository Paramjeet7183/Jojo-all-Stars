import Game from "./game.js";
async function playerSelectMenu() {
  scene("playerOneSelectMenu", () => {
    const allPlayers = [
      "johnny",
      "jotaro",
      "johnny",
      "jotaro",
      "johnny",
      "jotaro",
      "johnny",
      "jotaro",
      "johnny",
    ];
    const purpleBg = add([
      sprite("purpleBg", { height: height() * 64, tiled: true }),
      area(),
      pos(center()),
      origin("center"),
      outview(),
      cleanup(),
      stay(),
      z(0),
      "purpleMenuBg",
    ]);
    const inv = (a) => {
      return !a;
    };
    let a = true;
    purpleBg.onUpdate(() => {
      if (!a) {
        purpleBg.move(0, -64);
      }
      if (a) {
        purpleBg.move(0, 64);
      }
    });
    loop(20, () => {
      a = inv(a);
    });

    //view port
    let vw = 0.01 * width();
    let vh = 0.01 * height();

    const cellContainer = add([
      rect(50 * vw, 50 * vh),
      area(),
      pos(center()),
      origin("center"),
      color(RED),
      opacity(0.5),
      stay(),
      z(2),
      "cellContainer",
    ]);
    // relative view port to cellContainer
    let rvw = 0.01 * cellContainer.width;
    let rvh = 0.01 * cellContainer.height;

    let cellPosArray = [
      {
        //(1,1)
        pos: vec2(
          cellContainer.pos.x - 50 * rvw,
          cellContainer.pos.y - 50 * rvh
        ),
        origin: "topleft",
      },
      {
        //(1,2)
        pos: vec2(
          cellContainer.pos.x - 0 * rvw,
          cellContainer.pos.y - 50 * rvh
        ),
        origin: "top",
      },
      {
        //(1,3)
        pos: vec2(
          cellContainer.pos.x + 50 * rvw,
          cellContainer.pos.y - 50 * rvh
        ),
        origin: "topright",
      },
      {
        //(2,1)
        pos: vec2(
          cellContainer.pos.x - 50 * rvw,
          cellContainer.pos.y - 0 * rvh
        ),
        origin: "left",
      },
      {
        //(2,2) => center
        pos: vec2(cellContainer.pos.x - 0 * rvw, cellContainer.pos.y - 0 * rvh),
        origin: "center",
      },
      {
        //(2,3)
        pos: vec2(
          cellContainer.pos.x + 50 * rvw,
          cellContainer.pos.y - 0 * rvh
        ),
        origin: "right",
      },
      {
        //(3,1)
        pos: vec2(
          cellContainer.pos.x - 50 * rvw,
          cellContainer.pos.y + 50 * rvh
        ),
        origin: "botleft",
      },
      {
        //(3,2)
        pos: vec2(
          cellContainer.pos.x - 0 * rvw,
          cellContainer.pos.y + 50 * rvh
        ),
        origin: "bot",
      },
      {
        //(3,3)
        pos: vec2(
          cellContainer.pos.x + 50 * rvw,
          cellContainer.pos.y + 50 * rvh
        ),
        origin: "botright",
      },
    ];

    // creating green cells
    for (let i = 0; i <= cellPosArray.length - 1; i++) {
      const cell = add([
        rect(33 * rvw, 33 * rvh),
        area(),
        pos(cellPosArray[i].pos),
        origin(cellPosArray[i].origin),
        color(GREEN),
        opacity(0.5),
        stay(),
        `cell${i}`,
      ]);
    }
    //created an empty array to store position of each cell;
    let getAllCell = [];
    for (let i = 0; i <= cellPosArray.length - 1; i++) {
      //get every cell by tag
      every(`cell${i}`, (e) => {
        getAllCell[i] = {
          pos: e.pos,
          width: e.width,
          height: e.height,
        };
      });
    }
    // get all center position of cells
    let allCellCenter = [
      vec2(
        getAllCell[0].pos.add(
          (getAllCell[0].width * 1) / 2,
          (getAllCell[0].height * 1) / 2
        )
      ),
      vec2(
        getAllCell[1].pos.add(
          getAllCell[1].width * 0,
          (getAllCell[1].height * 1) / 2
        )
      ),
      vec2(
        getAllCell[2].pos.add(
          (-getAllCell[2].width * 1) / 2,
          (getAllCell[2].height * 1) / 2
        )
      ),

      vec2(
        getAllCell[3].pos.add(
          (getAllCell[3].width * 1) / 2,
          getAllCell[3].height * 0
        )
      ),
      vec2(
        getAllCell[4].pos.add(getAllCell[4].width * 0, getAllCell[4].height * 0)
      ),
      vec2(
        getAllCell[5].pos.add(
          (-getAllCell[5].width * 1) / 2,
          getAllCell[5].height * 0
        )
      ),

      vec2(
        getAllCell[6].pos.add(
          (getAllCell[6].width * 1) / 2,
          (-getAllCell[6].height * 1) / 2
        )
      ),
      vec2(
        getAllCell[7].pos.add(
          getAllCell[7].width * 0,
          (-getAllCell[7].height * 1) / 2
        )
      ),
      vec2(
        getAllCell[8].pos.add(
          (-getAllCell[8].width * 1) / 2,
          (-getAllCell[8].height * 1) / 2
        )
      ),
    ];
    //adding player mini face at center of each cell
    for (let i = 0; i <= allPlayers.length - 1; i++) {
      const playerCell = add([
        sprite(`${allPlayers[i]}MiniFace`, {
          width: getAllCell[i].width * 0.6,
          height: getAllCell[i].height * 0.8,
        }),
        area(),
        pos(allCellCenter[i]),
        scale(1),
        stay(),
        origin("center"),
        z(2),
        `${allPlayers[i]}Cell`,
      ]);
    }
    let j = 0;

    const playerOneBigFace = (j) => {
      add([
        sprite(`${allPlayers[j]}BigFace`),
        area(),
        pos(0, height()),
        origin("botleft"),
        stay(),
        scale(Math.min(width() / 1280, height() / 720)),
        z(1),
        "pOneBig",
      ]);
    };
    const p1 = add([
      sprite("p1", {
        width: getAllCell[j].width * 0.6,
        height: getAllCell[j].height * 0.8,
      }),
      area(),
      pos(allCellCenter[j]),
      scale(1),
      origin("center"),
      z(2),
    ]);

    const addSel = (p1) => {
      const p1s = add([
        sprite("p1s", {
          width: getAllCell[j].width * 0.6,
          height: getAllCell[j].height * 0.8,
        }),
        area(),
        stay(),
        pos(allCellCenter[j]),
        scale(1),
        origin("center"),
        z(3),
        "p1Sel",
      ]);
    };

    playerOneBigFace(j);

    onKeyPress("right", () => {
      if (j < 8) {
        ++j;
        p1.moveTo(allCellCenter[j]),
          every("pOneBig", (e) => {
            e.destroy();
            playerOneBigFace(j);
          });
      }
    });

    onKeyPress("left", () => {
      if (j > 0) {
        --j;
        p1.moveTo(allCellCenter[j]),
          every("pOneBig", (e) => {
            e.destroy();
            playerOneBigFace(j);
          });
      }
    });
    onKeyPress("enter", () => {
      p1.destroy();
      addSel(j);
      go("playerTwoSelectMenu", j);
    });
    /*--------------------------------------------------------------------------------*/
    scene("playerTwoSelectMenu", (j) => {
      let k = 0;

      const playerTwoBigFace = (k) => {
        const p2f = add([
          sprite(`${allPlayers[k]}BigFace`),
          area(),
          pos(width(), height()),
          origin("botright"),
          scale(Math.min(width() / 1280, height() / 720)),
          "pTwoBig",
        ]);
        p2f.flipX(true);
      };
      const p2 = add([
        sprite("p2", {
          width: getAllCell[k].width * 0.6,
          height: getAllCell[k].height * 0.8,
        }),
        area(),
        pos(allCellCenter[k]),
        scale(1),
        origin("center"),
        z(3),
      ]);

      playerTwoBigFace(k);

      onKeyPress("right", () => {
        if (k < 8) {
          ++k;
          p2.moveTo(allCellCenter[k]),
            every("pTwoBig", (e) => {
              e.destroy();
              playerTwoBigFace(k);
            });
        }
      });

      onKeyPress("left", () => {
        if (k > 0) {
          --k;
          p2.moveTo(allCellCenter[k]),
            every("pTwoBig", (e) => {
              e.destroy();
              playerTwoBigFace(k);
            });
        }
      });
      onKeyPress("enter", () => {
        every("pTwoBig", (e) => {
          e.destroy();
        });
        every("pOneBig", (e) => {
          e.destroy();
        });
        every("purpleMenuBg", (e) => {
          e.destroy();
        });
        for (let i = 0; i <= 8; i++) {
          every(`${allPlayers[i]}Cell`, (e) => {
            e.destroy();
          });
          every(`cell${i}`, (e) => {
            e.destroy();
          });
        }
        every("cellContainer", (e) => {
          e.destroy();
        });
        every("p1Sel", (e) => {
          e.destroy();
        });
        p2.destroy();
        go("game", j, k);
      });

      onKeyPress("d", () => {
        every("pTwoBig", (e) => {
          e.destroy();
        });
        every("purpleMenuBg", (e) => {
          e.destroy();
        });
        for (let i = 0; i <= 8; i++) {
          every(`${allPlayers[i]}Cell`, (e) => {
            e.destroy();
          });
          every(`cell${i}`, (e) => {
            e.destroy();
          });
        }
        every("cellContainer", (e) => {
          e.destroy();
        });
        every("p1Sel", (e) => {
          e.destroy();
        });
        go("playerOneSelectMenu");
      });
    });
  });
}

export default playerSelectMenu;
