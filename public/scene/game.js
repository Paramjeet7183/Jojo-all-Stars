import Player from "../chars/Player.js";
import jojo from "../chars/jojo.js";
import jotaro from "../chars/jotrao.js";
import controls from "../chars/controls.js";
import stage from "../stages/stage.js";

function Game(){
    scene("game",()=>{
        layers([
            "game",
            "bg",
            "players",
            "effect",
         ])
        let pOne = new Player(jotaro,256,0,"playerOne");
        let pTwo = new Player(jotaro,width()-512,0,"playerTwo",true);
        controls(pOne.getObj(), jotaro,pTwo.getPos());
        stage();
        gravity(2048);
   })
//    jojo.loadAsset();
   jotaro.loadAsset()
   volume(0.25)
   go("game")
}
export default Game