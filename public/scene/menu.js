const menu = {

	allPlayers:["johnny","jotaro","johnny","jotaro","johnny","jotaro","johnny","jotaro","johnny"],

	loadAsset:async function(){
		// all the backgrounds and stuff
		loadSprite("cover","../assets/menu/cover.png");
		loadSprite("greenBg","../assets/menu/bg.png");
		loadSprite("purpleBg","../assets/menu/bg2.png");
		loadSprite("jotaroBg","../assets/menu/fg.png");
		loadSprite("arrow","../assets/menu/arrow.png");

		loadSprite(`johnnyMiniFace`,`../assets/menuFaces/johnnyMiniFace.png`);
		loadSprite(`jotaroMiniFace`,`../assets/menuFaces/jotaroMiniFace.png`);
		loadSprite(`johnnyBarFace`,`../assets/menuFaces/johnnyBarFace.png`);
		loadSprite(`jotaroBarFace`,`../assets/menuFaces/jotaroBarFace.png`);
		loadSprite(`johnnyBigFace`,`../assets/menuFaces/johnnyBigFace.png`);
		loadSprite(`jotaroBigFace`,`../assets/menuFaces/jotaroBigFace.png`);

		loadSprite("p1","../assets/menu/p1.png");
		loadSprite("p1s","../assets/menu/p1s.png");
		loadSprite("p2","../assets/menu/p2.png");
		loadSprite("p2s","../assets/menu/p2s.png");
	},

	introScene:async function(){

		scene("intro",()=>{

			console.log("intro scene is running")
		
			//intro cover with game title
			const cover = add([
				sprite("cover"),
				area(),
				pos(center()),
				outview(),
				cleanup(),
				scale(Math.max(
					width()/1280,
					height()/720
				)),
				origin("center"),
				z(0),
				"coverObj",
			]);

			const txt = add([
				text("Press ENTER to continue",{
					font:"sinko",
					size:16*width()/height(),
					transform:()=>({
						scale: wave(1, 1.4, time() * 6 ),
					})
				}),
				area(),
				pos(width()/2,height()-64),
				origin("center"),
				z(1),
			]);

			onKeyPress("enter",()=>{
				go("menu")
			});

			onClick("coverObj",()=>{
				go("menu")
			});

		});

	}, //introScene function ends here

	menuScene:async function(){
		scene("menu",()=>{
			console.log("menu scene is running")
			//moving green background
			const greenBg = add([
				sprite("greenBg",{width:width()*64,tiled:true}),
				area(),
				pos(center()),
				origin("left"),
				outview(),
				cleanup(),
				scale(Math.max(
					width()/2560,
					height()/1440
				)),
				origin("center"),
				z(0),
			]);

			//for changing the direction of background image movement
			const inv = (a)=>{
				return !a
			};
			
			let a = true;
			
			greenBg.onUpdate(()=>{
				if(!a){
					//background image move 64px Left.
					greenBg.move(-64,0)
				};
				if(a){
					//background image move 64px Right.
					greenBg.move(64,0)
				};
			});

			//chnage direction of background movement every 20 seconds.
			loop(20,()=>{
				a = inv(a);
			});

			//jotaro foreground
			const jotaroBg = add([
				sprite("jotaroBg"),
				area(),
				pos(0,height()),
				outview(),
				origin("botleft"),
				cleanup(),
				scale(Math.min(
					width()/1280,
					height()/720
				)),
				z(1),
			]);

			//arrow at the bootm with select and esc instruction
			const arrow = add([
				sprite("arrow"),
				area(),
				pos(width(),height()-height()/9),
				origin("botright"),
				outview(),
				scale(Math.min(
					(width()*1/3) / 512,
					(height()-57) /57
				)),
				z(1),
			]);

		});
	}, //menuScene function Ends Here

	playerSelectMenu:async function(){
		
		scene("playerOneSelect",()=>{
			
			//background
			const purpleBg = add([
				sprite("purpleBg",{height:height()*64,tiled:true}),
				area(),
				pos(center()),
				origin("center"),
				outview(),
				stay(),
				cleanup(),
				scale(Math.max(
					width()/2560,
					height()/1440
				)),
				z(0),
			]);

			const inv = (a)=>{
				return !a
			};
			
			let a = true;
			
			purpleBg.onUpdate(()=>{
				if(!a){
					//background image move 64px Left.
					purpleBg.move(0,-64)
				};
				if(a){
					//background image move 64px Right.
					purpleBg.move(0,64)
				};
			});

			//chnage direction of background movement every 20 seconds.
			loop(20,()=>{
				a = inv(a);
			});

			//view port
			let vw = 0.01*width();
			let vh = 0.01*height();

			const playerIcons = add([
				rect(50*vw,50*vh),
				area(),
				pos(center()),
				origin("center"),
				color(RED),
				opacity(0.3),
				z(2)
			]);

			// rvw,rvh = relative view port to playerIcon rectangle
			let rvw = 0.01*playerIcons.width;
			let rvh = 0.01*playerIcons.height;

			// where to position cell and its origin
			let cellArray = [
				{	//(1,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y-50*rvh),
					origin:"topleft",
				},
				{	//(1,2)
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y-50*rvh),
					origin:"top"
				},
				{	//(1,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y-50*rvh),
					origin:"topright"
				},
				{	//(2,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y-0*rvh),
					origin:"left"
				},
				{	//(2,2) => center
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y-0*rvh),
					origin:"center"
				},
				{	//(2,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y-0*rvh),
					origin:"right"
				},
				{	//(3,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y+50*rvh),
					origin:"botleft"
				},
				{	//(3,2)
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y+50*rvh),
					origin:"bot"
				},
				{	//(3,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y+50*rvh),
					origin:"botright"
				}
			];

			// add cells to respective postions and with origin
			for(let i=0;i<=cellArray.length-1;i++){
				const cell = add([
					rect(33*rvw,33*rvh),
					area(),
					pos(cellArray[i].pos),
					color(GREEN),
					stay(),
					origin(cellArray[i].origin),
					opacity(0.5),
					z(2),
					`cell${i}`,
				]);
			};

			//created empty array to store data of each cell (getting obj by tag)
			let getAllCell = [];
			
			for(let i=0;i<=cellArray.length-1;i++){
				//get every cell by tag
				every(`cell${i}`,(e)=>{
					getAllCell[i] = {
						pos:e.pos,
						width:e.width,
						height:e.height,
					}
				});
			};

			//get all centers of all cells
			let allCellCenter = [

			vec2(getAllCell[0].pos.add( getAllCell[0].width*1/2 ,  getAllCell[0].height*1/2)),
			vec2(getAllCell[1].pos.add( getAllCell[1].width*0   ,  getAllCell[1].height*1/2)),
			vec2(getAllCell[2].pos.add(-getAllCell[2].width*1/2 ,  getAllCell[2].height*1/2)),

			vec2(getAllCell[3].pos.add( getAllCell[3].width*1/2 ,  getAllCell[3].height*0)),
			vec2(getAllCell[4].pos.add( getAllCell[4].width*0   ,  getAllCell[4].height*0)),
			vec2(getAllCell[5].pos.add(-getAllCell[5].width*1/2 ,  getAllCell[5].height*0)),
			
			vec2(getAllCell[6].pos.add( getAllCell[6].width*1/2 , -getAllCell[6].height*1/2)),
			vec2(getAllCell[7].pos.add( getAllCell[7].width*0   , -getAllCell[7].height*1/2)),
			vec2(getAllCell[8].pos.add(-getAllCell[8].width*1/2 , -getAllCell[8].height*1/2))

			];

			//adding player mini face at center of each cell
			for(let i=0;i<=this.allPlayers.length-1;i++){
				const playerCell = add([
					sprite(`${this.allPlayers[i]}MiniFace`,{
						width:getAllCell[i].width * 0.60,
						height:getAllCell[i].height * 0.80
					}),
					area(),
					pos(allCellCenter[i]),
					scale(1),
					stay(),
					origin("center"),
					z(2),
					`${this.allPlayers[i]}Cell`
				]);
			};
				let j = 0;

			const playerOneBigFace = (j) => {
				add([
					sprite(`${this.allPlayers[j]}BigFace`),
					area(),
					pos(0,height()),
					origin("botleft"),
					stay(),
					scale(Math.min(
						width()/1280,
						height()/720,
					)),
					z(1),
					"pOneBig"
				]);
			}

				const p1 = add([
					sprite("p1",{
						width:getAllCell[j].width * 0.60,
						height:getAllCell[j].height * 0.80
					}),
					area(),
					pos(allCellCenter[j]),
					scale(1),
					origin("center"),
					z(2),
				]);

				const addSel = (p1) => {
					const p1s = add([
						sprite("p1s",{
							width:getAllCell[j].width * 0.60,
							height:getAllCell[j].height * 0.80
						}),
						area(),
						stay(),
						pos(allCellCenter[j]),
						scale(1),
						origin("center"),
						z(2),
					]);
				}

				playerOneBigFace(j);

				onKeyPress("right",()=>{
					if(j<8){
						++j;
						p1.moveTo(allCellCenter[j]),
						every("pOneBig",(e)=>{
							e.destroy();
							playerOneBigFace(j);
						})
					}
				})

				onKeyPress("left",()=>{
					if(j>0){
						--j;
						p1.moveTo(allCellCenter[j]),
						every("pOneBig",(e)=>{
							e.destroy();
							playerOneBigFace(j);
						})
					}
				})

				onKeyPress("enter",()=>{
					addSel(p1.pos);
					p1.destroy()
					go("playerTwoSelect",j)
				})

			for(let i=0;i<=this.allPlayers.length-1;i++){
				onClick(`${this.allPlayers[i]}Cell`,()=>{
					console.log(`${this.allPlayers[i]}Cell`);
				})
			}

		});// scene ends here
	/*-----------------------------------------------------------------------------------------*/
		scene("playerTwoSelect",(a)=>{
			let vw = 0.01*width();
			let vh = 0.01*height();

			const playerIcons = add([
				rect(50*vw,50*vh),
				area(),
				pos(center()),
				origin("center"),
				color(RED),
				opacity(0.3),
				z(1)
			]);
			
			let rvw = 0.01*playerIcons.width;
			let rvh = 0.01*playerIcons.height;

			// where to position cell and its origin
			let cellArray = [
				{	//(1,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y-50*rvh),
					origin:"topleft",
				},
				{	//(1,2)
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y-50*rvh),
					origin:"top"
				},
				{	//(1,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y-50*rvh),
					origin:"topright"
				},
				{	//(2,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y-0*rvh),
					origin:"left"
				},
				{	//(2,2) => center
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y-0*rvh),
					origin:"center"
				},
				{	//(2,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y-0*rvh),
					origin:"right"
				},
				{	//(3,1)
					pos:vec2(playerIcons.pos.x-50*rvw , playerIcons.pos.y+50*rvh),
					origin:"botleft"
				},
				{	//(3,2)
					pos:vec2(playerIcons.pos.x-0*rvw  , playerIcons.pos.y+50*rvh),
					origin:"bot"
				},
				{	//(3,3)
					pos:vec2(playerIcons.pos.x+50*rvw , playerIcons.pos.y+50*rvh),
					origin:"botright"
				}
			];

			let getAllCell = [];

			for(let i=0;i<=cellArray.length-1;i++){
				//get every cell by tag
				every(`cell${i}`,(e)=>{
					getAllCell[i] = {
						pos:e.pos,
						width:e.width,
						height:e.height,
					}
				});
			};

			let allCellCenter = [

			vec2(getAllCell[0].pos.add( getAllCell[0].width*1/2 ,  getAllCell[0].height*1/2)),
			vec2(getAllCell[1].pos.add( getAllCell[1].width*0   ,  getAllCell[1].height*1/2)),
			vec2(getAllCell[2].pos.add(-getAllCell[2].width*1/2 ,  getAllCell[2].height*1/2)),

			vec2(getAllCell[3].pos.add( getAllCell[3].width*1/2 ,  getAllCell[3].height*0)),
			vec2(getAllCell[4].pos.add( getAllCell[4].width*0   ,  getAllCell[4].height*0)),
			vec2(getAllCell[5].pos.add(-getAllCell[5].width*1/2 ,  getAllCell[5].height*0)),
			
			vec2(getAllCell[6].pos.add( getAllCell[6].width*1/2 , -getAllCell[6].height*1/2)),
			vec2(getAllCell[7].pos.add( getAllCell[7].width*0   , -getAllCell[7].height*1/2)),
			vec2(getAllCell[8].pos.add(-getAllCell[8].width*1/2 , -getAllCell[8].height*1/2))

			];

			let k = 0;

			const playerTwoBigFace = (k) => {
				const p2 =  add([
					sprite(`${this.allPlayers[k]}BigFace`),
					area(),
					pos(width(),height()),
					origin("botright"),
					scale(Math.min(
					width()/1280,
					height()/720,
					)),
					z(1),
					"pTwoBig"
				]);
				p2.flipX(true);
			}

			playerTwoBigFace(0);

				const p2 = add([
						sprite("p2",{
							width:getAllCell[k].width * 0.60,
							height:getAllCell[k].height * 0.80
						}),
						area(),
						pos(allCellCenter[k]),
						scale(1),
						origin("center"),
						z(2),
				]);

				onKeyPress("right",()=>{
					if(k<8){
						++k;
						p2.moveTo(allCellCenter[k]),
						every("pTwoBig",(e)=>{
							e.destroy();
							playerTwoBigFace(k);
						})
					}
				})

				onKeyPress("left",()=>{
					if(k>0){
						--k;
						p2.moveTo(allCellCenter[k]),
						every("pTwoBig",(e)=>{
							e.destroy();
							playerTwoBigFace(k);
						})
					}
				})
				onKeyPress("enter",()=>{
					go("game",a,k);
				})

		})

	},//player select function ends here
}

export default menu;