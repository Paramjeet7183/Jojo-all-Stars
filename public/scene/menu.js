const menu = {

	allPlayers:["johnny","jotaro"],

	loadAsset:async function(){
		// all the backgrounds and stuff
		loadSprite("cover","../assets/menu/cover.png");
		loadSprite("greenBg","../assets/menu/bg.png");
		loadSprite("purpleBg","../assets/menu/bg1.png");
		loadSprite("jotaroBg","../assets/menu/fg.png");
		loadSprite("arrow","../assets/menu/arrow.png");

		//all the mini and big faces of players
		for(let i=0;i<=allPlayers.length-1;i++){
			loadSprite(`${allPlayers[i]}MiniFace`,`../assets/menuFaces/${allPlayers[i]}MiniFace.png`);
			loadSprite(`${allPlayers[i]}BigFace`,`../assets/menuFaces/${allPlayers[i]}BigFace.png`);
			loadSprite(`${allPlayers[i]}BarFace`,`../assets/menuFaces/${allPlayers[i]}BarFace.png`);
		}
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

		//for playing intro scene
		go("intro");

	}, //intoScene function ends here

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
		
		scene("playerSelect",()=>{
			
			//background
			const purpleBg = add([
				sprite("purpleBg"),
				area(),
				pos(center()),
				origin("center"),
				outview(),
				cleanup(),
				scale(Math.max(
					width()/2560,
					height()/1440
				)),
				z(0),
			]);

		});

	},
}

export default menu;