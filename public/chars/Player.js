class Player{
    constructor(charObj,x,y,playerTag,isFlipped){
        this.playerObj = add([
            sprite(charObj.name,{anim:"idle"}),
            area({
                width:0,
                height:0
            }),
            body(),
            pos(x,y),
            origin(vec2(0,1)),
            scale(3),
            layer("players"),
            `${playerTag}`,//player One,teg
            `${charObj.tag}`,// charatcer specific tag
            "char"
        ])
        this.playerObj.flipX(isFlipped);
        // charObj.setHitBox(this.playerObj);
        // charObj.setHurtBox(this.playerObj);
        for(let i=0;i<=charObj.allAnim.length-1;i++){
            this.playerObj.onAnimEnd(charObj.allAnim[i],()=>{
                this.playerObj.play("idle")
            })
        }
    }
    getPos(){
       return this.playerObj.pos
    }
    getObj(){
        return this.playerObj
    }
}

export default Player