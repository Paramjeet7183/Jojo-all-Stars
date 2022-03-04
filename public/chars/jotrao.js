const jotaro = {
    name:"jotaro",
    displayName:"jotaro kujo",
    speed:600,
    jumpForce:900,
    attackDamage:{
        //TODO set attacks damages
    },
    tag:"jotaroKujo",
    loadAsset:function(){
        loadSpriteAtlas("../assets/jotaro/jotaro.png",{
            "jotaro":{
                    "x":0,
                    "y":0,
                    "width":686,
                    "height":574,
                    "sliceX":7,
                    "sliceY":7,
                    "anims":{
                        "idle":{"from":0,"to":5,"speed":8,"loop":true},
                        "run":{"from":6,"to":13,"speed":12,"loop":true},
                        "crouch":{"from":15,"to":15,"speed":8},
                        "jump":{"from":16,"to":19,"speed":16},
                        "punch":{"from":20,"to":22,"speed":12},
                        "kick":{"from":23,"to":28,"speed":12},
                        "kick2":{"from":29,"to":33,"speed":12},
                        "pose1":{"from":34,"to":37,"speed":12},
                        "pose2":{"from":38,"to":41,"speed":12},
                        "hurt":{"from":42,"to":44,"speed":8},
                        "fall":{"from":45,"to":48,"speed":8},
                    }
            }
        })
        loadSpriteAtlas("../assets/jotaro/star platinum.png",{
            "starPlatinum":{
                "x":0,
                "y":0,
                "width":1314,
                "height":1168,
                "sliceX":9,
                "sliceY":8,
                "anims":{
                    "block":{"from":0,"to":1,"speed":8},
                    "punch":{"from":2,"to":8,"speed":16},
                    "punch2":{"from":9,"to":17,"speed":16,"loop":true},
                    "punchUp":{"from":18,"to":24,"speed":8,"loop":true},
                    "jumpPunchDown":{"from":27,"to":29,"speed":8},
                    "jumpPunchDown2":{"from":30,"to":35,"speed":16,"loop":true},
                    "oraora":{"from":41,"to":66,"speed":8},
                    "punchDown":{"from":67,"to":70,"speed":16}
                }
            }
        })
        loadSound("punch","../assets/jotaro/ooh.wav");
        loadSound("kuraina","../assets/jotaro/kuraina.wav");
        loadSound("justice","../assets/jotaro/justice.wav");
        loadSound("oraQuick","../assets/jotaro/ora quick.wav");
        loadSound("oraHeavy","../assets/jotaro/ora heavy.wav");
        loadSound("oraShort","../assets/jotaro/short oraora.wav");
        loadSound("oraShort2","../assets/jotaro/oraE.wav");
        loadSound("oraLong","../assets/jotaro/long oraora.wav");
        loadSound("oraLongEnding","../assets/jotaro/long oraora ending.wav");

    },//loadAssets end here

    //--------------------------------------------------------

    attacks:{
        canAttack:true, //can player attack
        keyCount:0, //for counting key counts when pressing repeatedly
        fired:false,
       
        stand:function(timeOut,anim,position,dir,moveSpeed,flip){
            const starPlatinum = add([
                sprite("starPlatinum",anim),
                area({width:0,height:0}),
                lifespan(timeOut),
                pos(position),
                scale(3),
                move(dir,moveSpeed),
                origin("center"),
                layer("effect"),
                "stand"
            ])
            starPlatinum.flipX(flip)
        },
        //------------------------------------------------------------

        attack_A:function(player,isFlip){
            if(this.canAttack){
                play("oraQuick")
                if(isFlip){
                this.stand(0.6,{anim:"punch"},player.pos.add(-128,-128),0,0,isFlip)
                }else{
                this.stand(0.6,{anim:"punch"},player.pos.add(128,-128),0,0,isFlip)
                }
                this.canAttack = false    
                }else{
                    console.log("cannot attack")
                }
                wait(0.5,()=>{
                    this.canAttack = true;
                })
        },
        
        //------------------------------------------------------------
        
        attack_S:function(player,enemyPos,isFlip){
            if(isKeyDown("up")&& this.canAttack){
                console.log("up key is pressed")
                if(isFlip){
                this.stand(0.5,{anim:"jumpPunchDown"},player.pos.add(-128,-32),0,0,isFlip)
                }else{
                this.stand(0.5,{anim:"jumpPunchDown"},player.pos.add(128,-32),0,0,isFlip)
                }
                play("oraQuick")
                this.canAttack = false;
                wait(0.5,()=>{
                    this.canAttack = true;
                })
            }else{
                if(this.canAttack){
                    //playing single punch animation
                    player.play("punch");
                    play("punch");
                    this.canAttack=false;
                    wait(0.4,()=>{
                        this.canAttack = true;
                    })
                }else{
                    console.log("cannot attack");
                }
            }
        },

        //------------------------------------------------------------

        attack_D:function(player,enemyPos,isFlip){
            //check if "down" key is being pressed AND is johnny stand is Evolved because this attack will only activate in act 2
            if(isKeyDown("down")&& this.canAttack){
                if(isFlip){
                this.stand(0.4,{anim:"punchDown"},player.pos.add(-128,-128),0,0,isFlip)
                }else{
                this.stand(0.4,{anim:"punchDown"},player.pos.add(128,-128),0,0,isFlip)
                }
                this.canAttack = false;
                play("oraHeavy");
                wait(0.4,()=>{
                    this.canAttack = true;
                })

            }else{
            // checking for "up" key being pressed
            if(isKeyDown("up") && this.canAttack){
                this.canAttack = false;
                if(isFlip){
                this.stand(3.5,{anim:"jumpPunchDown2"},player.pos.add(-128,-128),vec2(-1,0),0,isFlip);
                }else{
                this.stand(3.5,{anim:"jumpPunchDown2"},player.pos.add(128,-128),vec2(1,0),0,isFlip);
                }
                play("oraShort2")
                wait(3.5,()=>{
                    this.canAttack = true;
                })
                
            }else{
                //checking if player can attack or not
                if(this.canAttack){
                    player.play("pose2")
                    this.canAttack = false
                    if(Math.abs(player.pos.y - enemyPos.y >= 128)){
                        if(isFlip){
                            //if player is fliped then flip the stand and spwan him at left side of player
                            this.stand(3.5,{anim:"punchUp"},player.pos.add(-128,-96),vec2(-1,0),64,isFlip);
                            play("oraShort2");
                        }else{
                            this.stand(3.5,{anim:"punchUp"},player.pos.add(128,-96),vec2(1,0),64,isFlip);
                            play("oraShort2");
                        }
                    }else{
                        if(isFlip){
                            //if player is fliped then flip the stand and spwan him at left side of player
                            this.stand(3.5,{anim:"punch2"},player.pos.add(-128,-96),vec2(-1,0),64,isFlip);
                            play("oraShort2");
                        }else{
                            this.stand(3.5,{anim:"punch2"},player.pos.add(128,-96),vec2(1,0),64,isFlip);
                            play("oraShort2");
                        }
                    }
                        wait(3.5,()=>{
                            player.play("idle"),
                            this.canAttack = true;
                        })    
                }else{
                    console.log("cannot attack")
                }
            }}
        },

        //------------------------------------------------------------

        attack_W:function(player,enemyPos,isFlip){
            //Za wardo move
            console.log("w")
        },

        //---------------------------------------------------------------
        
        charge:function(player){
           console.log("charge")
        }

    }, //main function ends
    allAnim:["punch","punch2","kick","kick2","hurt"],
}

export default jotaro