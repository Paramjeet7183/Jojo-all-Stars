const jojo = {
    name:"jojo", //sprite name
    displayName:"johnny Joestar",
    speed:256, // how fast can he run
    jumpForce:1, //how high can he jump
    attackDamage:{ // damages of different attacks
        punches:5,
        shootAct1:10,
        shootAct2:16
    },
    tag:"johnny",// tag of player for seperting him from another players
    
    //loading assets of player
    loadAsset:function(){
        loadSpriteAtlas("../assets/jhonny/jhonny-Recovered.png",{
            "jojo":{
                "x":0,
                "y":0,
                "width":873, //width of sprite sheet
                "height":639, //height of sprite sheet
                "sliceX":9, // how many frames is in X axis of sprite sheet
                "sliceY":9, //how many frames is in Y axis of sprite sheet
                "anims":{ // defining animations : "from" = starting frame "to" = final frame of animations
                    "idle":{"from":0,"to":2,"speed":8,"loop":true},
                    "crouch":{"from":3,"to":3,"speed":1},
                    "run":{"from":4,"to":6,"speed":8,"loop":true},
                    "punch":{"from":7,"to":10,"speed":12},
                    "punch2":{"from":11,"to":14,"speed":12},
                    "shootAct1_1":{"from":15,"to":20,"speed":12},
                    "shootAct1_2":{"from":21,"to":26,"speed":12},
                    "shootAct1_UP":{"from":27,"to":31,"speed":12},
                    "shootAct2_1":{"from":32,"to":43,"speed":12},
                    "fromPortal":{"from":44,"to":46,"speed":8},
                    "charge":{"from":47,"to":49,"speed":12},
                    "hurt":{"from":50,"to":52,"speed":8},
                    "fall":{"from":53,"to":56,"speed":8},
                    "pickSteelBall":{"from":57,"to":62,"speed":8},
                    "throwSteelBall":{"from":63,"to":67,"speed":8},
                    "punch3":{"from":68,"to":70,"speed":12},
                    "punch4":{"from":71,"to":75,"speed":12},
                    "shootAct2_DOWN":{"from":76,"to":78,"speed":8}
                }
            }
        })
        loadSpriteAtlas("../assets/jhonny/bullet.png",{
            "ActOneBullet":{
                "x":0,
                "y":0,
                "width":188,
                "height":32,
                "sliceX":5,
                "anims":{
                    "spin":{"from":0,"to":4,"speed":12,"loop":true}
                }
            }
        })
        loadSpriteAtlas("../assets/jhonny/bulletTrail.png",{
            "bulletTrail":{
                "x":0,
                "y":0,
                "width":75,
                "height":32,
                "sliceX":9,
                "anims":{
                    "spin":{"from":0,"to":8,"speed":24,"loop":true}
                }
            }
        })
        loadSpriteAtlas("../assets/jhonny/shootingCloud.png",{
            "shootingCloud":{
                "x":0,
                "y":0,
                "width":3135,
                "height":438,
                "sliceX":15,
                "anims":{
                    "idle":{"from":0,"to":14,"speed":16}
                }
            }
        })
        loadSpriteAtlas("../assets/jhonny/portal.png",{
            "portal":{
                "x":0,
                "y":0,
                "width":1512,
                "height":186,
                "sliceX":9,
                "anims":{
                    "open":{"from":8,"to":0,"speed":15},
                    "close":{"from":0,"to":8,"speed":15},
                }
            }
        })
        loadSpriteAtlas("../assets/jhonny/act3 Down.png",{
            "portalDown":{
                "x":0,
                "y":0,
                "width":678,
                "height":35,
                "sliceX":6,
                "anims":{
                    "idle":{"from":0,"to":5,"speed":16,"loop":true},
                }
            }
        })
        // loadSound("theme","../assets/jhonny/theme.mp3")
        loadSound("kaiten","../assets/jhonny/kaiten.wav")
        loadSound("tusk","../assets/jhonny/tusk.wav")
        loadSound("charge1","../assets/jhonny/charge (1).wav")
        loadSound("charge2","../assets/jhonny/charge (2).wav")
        loadSound("bulletSound","../assets/jhonny/bulletSound.wav")
        loadSound("bulletSound2","../assets/jhonny/bulletSound2.wav")
        loadSound("bulletActivate","../assets/jhonny/bulletActivate.wav")
        // loadSound("attack1","../assets/jhonny/attack (1).wav")
        loadSound("attack2","../assets/jhonny/attack (2).wav")
        loadSound("attack3","../assets/jhonny/attack (3).wav")
        loadSound("attack4","../assets/jhonny/attack (4).wav")
        // loadSound("attack5","../assets/jhonny/attack (5).wav")
        loadSound("attack6","../assets/jhonny/attack (6).wav")
        // loadSound("attack7","../assets/jhonny/attack (7).wav")
    },

    // all attacks of players
    attacks:{
        canAttack:true, //can player attack
        keyCount:0, //for counting key counts when pressing repeatedly
        stand:2, //for counting evolution of johnnys stand
        fired:false,
        //------------------------------------------------------------
        bullet:function(player,direction,bulletX,bulletY,angleBullet,trailX,trailY,angleTrail){
            //bullet
            const bulletObj = add([
                sprite("ActOneBullet",{anim:"spin"}),
                area(),
                origin("center"),
                cleanup(),//for destroying after its not in view
                outview({hide:true}),
                scale(1),
                layer("effect"),
                rotate(angleBullet),
                pos(player.pos.add(bulletX,bulletY)),
                move(direction,2000),
                "bullet"
            ])
            wait(0.04,()=>{
                bulletObj.onUpdate(()=>{
                    //trail that will follow the bullet
                    const trail = add([
                        sprite("bulletTrail",{anim:"spin"}),
                        area(),
                        origin("center"),
                        pos(bulletObj.pos.sub(trailX,trailY)),
                        cleanup(),
                        layer("effect"),
                        rotate(angleTrail),
                        outview(),
                        scale(1),
                        "trail"
                    ])
                    //if bullet is outofView destroy the trail
                    if(bulletObj.isOutOfView()){
                        revery("trail",(e)=>{
                            e.destroy()
                        })
                    }
            })
            })
            
        },
        //------------------------------------------------------------
        //
        bulletCloud:function(player,x,y,angle){
            const cloudObj = add([
                sprite("shootingCloud",{anim:"idle"}),
                area(),
                scale(0.3),
                layer("effect"),
                origin("center"),
                rotate(angle),
                pos(player.pos.add(x,y))
            ])
            wait(0.4,()=>{
                destroy(cloudObj)
            })
        },
        //------------------------------------------------------------
        //
        portal:function(x,y){
           const portalObj =  add([
                sprite("portal",{anim:"open"}),
                area(),
                origin("bot"),
                layer("effect"),
                scale(3),
                pos(x,y),
                "por"
            ])
            portalObj.onAnimEnd("open",()=>{
                portalObj.play("close")
            })
        },
        //------------------------------------------------------------
        portalDown:function(player,faceDir){
            const portalDownObj = add([
                sprite("portalDown",{anim:"idle"}),
                area(),
                origin("bot"),
                layer("effect"),
                scale(1),
                pos(player.pos.sub(0,32)),
                move(faceDir,512)
            ])
        },
        //------------------------------------------------------------
        // attack_A means a attack which will be assigned to key "A"
        attack_A:function(player){
            if(this.canAttack){
            player.play("punch4")
            play("attack6")
            this.canAttack = false    
            }
            wait(0.5,()=>{
                this.canAttack = true;
            })
        },
        
        //------------------------------------------------------------
        attack_S:function(player,enemyPos,faceDir){
            //only run this if player canAttack == true
            if(this.canAttack){
                //playing single punch animation
                player.play("punch")
                play("attack2")
                this.canAttack=false
                wait(0.4,()=>{
                    this.canAttack = true;
                })
                //only hit 3 punch when near the opponent
                if(Math.abs(player.pos.x - enemyPos.x) <=64 ){
                    if(isKeyPressedRepeat("s")){
                        player.play("punch")
                        //count number of times key is pressed
                        this.keyCount++
                    }
                    //if key is pressed 3 times
                    if(this.keyCount == 3){
                        //set canAttack to false so player can only attack when one attack is finished
                        this.canAttack = false;
                        //play punch attack
                        player.play("punch")
                        //wait 0.4 sec for first attack to finish
                        wait(0.4,()=>{
                            player.play("punch2")
                            play("attack3")
                            //wait 0.5 sec for second attack to finish
                            wait(0.5,()=>{
                                //stop previous attack and begin the next attack
                                player.stop("punch2")
                                player.play("punch3")
                                play("attack4")
                                //set canAttack to TRUE so player can attack after this ends
                                this.canAttack = true;
                                //set keyCount to ZERO so player can again hit 3 punches
                                this.keyCount = 0;
                            })
                        })
                    }
                }
            }
        },

        //------------------------------------------------------------

        attack_D:function(player,isFlip){
            let faceDir;
            if(isFlip){faceDir = LEFT}else{
                if(!isFlip){faceDir = RIGHT}
            }
            //check if "down" key is being pressed AND is johnny stand is Evolved because this attack will only activate in act 2
            if(isKeyDown("down")&& this.canAttack){
                player.play("shootAct2_DOWN")
                wait(0.2,()=>{this.portalDown(player,faceDir);})

            }else{
            // checking for "up" key being pressed
            if(isKeyDown("up") && this.canAttack){
                //playing shooting up animation
                player.play("shootAct1_UP")
                //play kaiten sound
                play("kaiten")
                //waiting for animation to rech final frame
                wait(0.43,()=>{
                    //spawing bullet obj,direction,bulletX,bulletY,bulletAngle,trailX,trailY,trailAngle
                    if(faceDir==RIGHT){
                        this.bullet(player,vec2(1,-0.75),32,-200,-45,28,-28,-45)
                        this.bulletCloud(player,32,-186,-45)
                    }
                    if(faceDir==LEFT){
                        this.bullet(player,vec2(-1,-0.75),-32,-200,-135,-28,-28,45)
                        this.bulletCloud(player,-32,-186,-135)
                    }
                    // playing bullet firing sound
                    play("bulletSound")
                })
                //setting can attack to false after shooting UP
                this.canAttack = false;
                wait(0.6,()=>{
                    // setting canAttack to true after animation ends
                    this.canAttack = true;
                })
                
            }else{
                //checking if player can attack or not
                if(this.canAttack){
                    //playing shooting animation
                    player.play("shootAct1_1")
                    //playing taski sound
                    play("tusk")
                    play("bulletActivate")
                    //waiting to reach final frame
                    wait(0.43,()=>{
                        //shoot in face Direction
                       if(faceDir==RIGHT){
                        //spawning bullet obj,direction,bulletX,bulletY,bulletAngle,trailX,trailY,trailAngle
                        this.bullet(player,vec2(1,0),100,-180,0,96,0,0)
                        this.bulletCloud(player,100,-180,0)
                       }
                       if(faceDir==LEFT){
                        this.bullet(player,vec2(-1,0),-100,-180,0,-96,0,0)
                        this.bulletCloud(player,-100,-180,-180)
                       }
                        //playing bullet firing sound
                        play("bulletSound2")
                    })
                    //setting can Attack to false to prevent interference between attacks
                    this.canAttack = false;
                    wait(0.6,()=>{
                        //setting attack to true so player can attack after one attack is finished
                        this.canAttack = true
                    })
                }
            }}
        },

        //------------------------------------------------------------

        attack_W:function(player,enemyPos,faceDir){
            if(this.canAttack){
                this.canAttack = false;
                //play shooting himself animation
                player.play("shootAct2_1")
                
                //TODO:- implement stand evolution login when charge is full
                /*
                if(charge==100){
                    this.stand++;
                }
                */

                // open portal at player position
                this.portal(player.pos.x-64,player.pos.y-32)
                // wait for animation to end and destroy portal
                wait(1,()=>{
                    every("por",(e)=>{e.destroy()})
                    //open portal at which position you are moving
                    this.portal(2000-64,player.pos.y-32)
                    //wait for portal animation to start
                    wait(0.3,()=>{
                        player.moveTo(2000,player.pos.y);
                        player.play("fromPortal");
                        wait(1.3,()=>{every("por",(e)=>{
                            e.destroy()
                            this.canAttack = true;
                        })})
                    })

                })
            }
        },

        //---------------------------------------------------------------
        
        charge:function(player){
            player.play("charge")
            if(!this.fired){
                this.fired = true
                play("charge1")
                wait(1.5,()=>{
                    this.fired = false;
                })
            }
        }

    }, //main function ends
    allAnim:["punch","punch2","punch3","punch4","shootAct1_1","shootAct1_2","shootAct1_UP","shootAct2_1","shootAct2_DOWN","hurt","charge"],
    allHitBox:[
        {anim:"punch",pos:{x:0,y:-186,},timeOut:0.3,wait:0.2,w:128,h:20,tag:"jojoPunchTag"},
        {anim:"punch2",pos:{x:0,y:-186,},timeOut:0.3,wait:0.2,w:128,h:20,tag:"jojoPunch2Tag"},
        {anim:"punch3",pos:{x:0,y:-186,},timeOut:0.3,wait:0.2,w:128,h:20,tag:"jojoPunch3Tag"},
        {anim:"punch4",pos:{x:0,y:-64,},timeOut:0.3,wait:0.2,w:400,h:20,tag:"jojoPunch4Tag"},
    ],
    setHitBox:function(player){
        for(let i=0;i<=this.allHitBox.length-1;i++){
            player.onAnimStart(this.allHitBox[i].anim,()=>{
                wait(this.allHitBox[i].wait,()=>{
                    add([
                        rect(this.allHitBox[i].w,this.allHitBox[i].h),
                        area(),
                        layer("effect"),
                        lifespan(this.allHitBox[i].timeOut),
                        origin("center"),
                        color(RED),
                        pos(player.pos.add(this.allHitBox[i].pos.x , this.allHitBox[i].pos.y)),
                        this.allHitBox[i].tag
                    ])
                })
            })
        }
    },
    setHurtBox:function(player){
        const hurt = add([
            rect(32,64),
            area(),
            pos(player.pos),
            color(CYAN),
            origin(vec2(-0.1,-1)),
            layer("effect"),
            follow(player,vec2(0,-216)),
            "hurtBoxUpper"
        ])
        const hurtbox2 = add([
            rect(16,64),
            area(),
            pos(player.pos),
            color(CYAN),
            origin(vec2(0,1)),
            layer("effect"),
            follow(player,vec2(0,-64)),
            "hurtBoxMid"
        ])
    }
}

export default jojo