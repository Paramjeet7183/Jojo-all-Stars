loadSprite("menuBg2","../assets/menu/bg2.png")
loadSprite("frame","../assets/menu/frame.png")
loadSprite("johnnyMiniFace","../assets/menuFaces/johnnyMiniFace.png")
loadSprite("jotaroMiniFace","../assets/menuFaces/jotaroMiniFace.png")
loadSprite("johnnySelectFace","../assets/menuFaces/johnnySelectFace.png")
loadSprite("jotaroSelectFace","../assets/menuFaces/jotaroSelectFace.png")

// loadSprite("menuBg","../assets/menu/bg.png")
// loadSprite("menuBg1","../assets/menu/bg1.png")
// loadSprite("menuFg","../assets/menu/fg.png")
// loadSprite("cover","../assets/menu/cover.png")
// loadSprite("arrow","../assets/menu/arrow.png")
// loadSprite("sel","../assets/menu/sel.png")

function Intro(){
	//cover of the game
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
		])
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
		])
		onKeyPress("enter",()=>{
			go("menu")
		})
		onClick("coverObj",()=>{
			go("menu")
		})

	})

	//select menu 
	scene("menu",()=>{
		console.log("menu scene is running")
		//background
		const bg = add([
			sprite("menuBg",{width:width()*64,tiled:true}),
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
		const inv = (a)=>{
			return !a
		}
			let a = true;
			bg.onUpdate(()=>{
				if(!a){
					bg.move(-64,0)
				}
				if(a){
					bg.move(64,0)
				}
			})

			loop(20,()=>{
				a = inv(a);
			})

		//jotaro foreground
		const fg = add([
			sprite("menuFg"),
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

		//vs Cpu option
		const button1 = add([
			text("vs CPU",{
				size:12*width()/height(),
				font:"sinko",
			}),
			area(),
			pos(width()/1.5,height()/3),
			origin("left"),
			z(1)
		])

		const button2 = add([
			text("vs Freind",{
				size:12*width()/height(),
				font:"sinko",
			}),
			area(),
			pos(width()/1.5,button1.pos.y+64),
			origin("left"),
			z(1)
		])

		const button3 = add([
			text("settings",{
				size:12*width()/height(),
				font:"sinko",
			}),
			area(),
			pos(width()/1.5,button2.pos.y+64),
			origin("left"),
			z(1)
		])

		const button4 = add([
			text("Gallery",{
				size:12*width()/height(),
				font:"sinko",
			}),
			area(),
			pos(width()/1.5,button3.pos.y+64),
			origin("left"),
			z(1)
		])

		onKeyPress("enter",()=>{
			go("playerSelect")
		})
	})

	// player select menu
	scene("playerSelect",()=>{
		//background
		const menuBg2 = add([
			sprite("menuBg2"),
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
		])

		//selected player frame 
		const frame = add([
			sprite("frame"),
			area(),
			pos(width()/10,height()*2/10),
			origin("center"),
		])
		
		//
		const johnnySelectFace = add([
			sprite("jotaroSelectFace"),
			area(),
			pos(frame.pos),
			origin("center")
		])
	})

	go("playerSelect")

}

export default Intro