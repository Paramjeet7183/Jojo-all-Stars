import Player from "../chars/Player.js";
import jojo from "../chars/jojo.js";
import jotaro from "../chars/jotrao.js";
import controls from "../chars/controls.js";
import stage from "../stages/stage.js";
import menu from "./menu.js";

function Game(){
    scene("game",(p1,p2)=>{
        let playerObjArray = [jojo,jotaro,jojo,jotaro,jojo,jotaro,jojo,jotaro,jojo];
        console.log(p1,p2)
        layers([
            "game",
            "bg",
            "players",
            "effect",
         ])
        let pOne = new Player(playerObjArray[p1],256,0,"playerOne");
        let pTwo = new Player(playerObjArray[p2],width()-512,0,"playerTwo",true);
        controls(pOne.getObj(), playerObjArray[p1],pTwo.getPos());
        stage();
        gravity(2048);
   })
    jojo.loadAsset();
    jotaro.loadAsset()
   volume(0.25)
}
export default Game