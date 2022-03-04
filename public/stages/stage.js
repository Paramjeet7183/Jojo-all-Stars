loadSprite("bg","../assets/sbr/bg.png")
loadSprite("bg1","../assets/sbr/bg1.png")
loadSprite("bg2","../assets/sbr/bg2.png")
loadSprite("bg3","../assets/sbr/bg3.png")
export default function stage() {
    const b = add([
        sprite("bg"),
        area(),
        pos(center()),
        origin("center"),
        layer("bg"),
        scale(Math.max(
            width()/2000,
            height()/375
        )),
    ])
    const b1 = add([
        sprite("bg1"),
        area(),
        pos(center()),
        origin("center"),
        layer("bg"),
        scale(Math.min(
            width()/955,
            height()/88
        )),
    ])
    const b3 = add([
        sprite("bg3"),
        area(),
        pos(center()),
        origin("center"),
        layer("bg"),
        scale(Math.min(
            width()/1389,
            height()/122
        )),
    ])
    
    const b2 = add([
        sprite("bg2"),
        area(),
        pos(center()),
        origin("center"),
        layer("bg"),
        scale(Math.max(
            width()/1475,
            height()/422
        )),
    ])
    const p = add([
        rect(width(),height()/10),
        area(),
        solid(),
        pos(0,height()-height()/10),
        color(RED)
    ])
    const l = add([
        rect(20,1024),
        area(),
        solid(),
        pos(0,height()),
        origin("bot"),
        color(RED),
    ])
    const r = add([
        rect(20,1024),
        area(),
        solid(),
        pos(width(),height()),
        origin("bot"),
        color(RED),
    ])
    console.log("hello")
}