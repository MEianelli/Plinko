var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;

var balls = [];
var plinkos = [];
var walls = [];


var groundWidth = 10;

var colWidth = 3;
var colHeight = 150;

var numCol = 20;
var numObsCol = 15;
var numObsLines = 8;

var ballSize = 6;
var sizeObs = 2;



function setup() {
	createCanvas(400, 600);  
	engine = Engine.create();
	world = engine.world;
	world.gravity.scale = 0.0005;
	Engine.run(engine);


	//criando obstaculos
	var spacing = width/numObsCol;
	for (var i = 0; i < numObsLines; i++) {
		for (var j = 0; j < numObsCol; j++) {
			let x = j * spacing
			if( i % 2 ==0){
				x += spacing / 2;
			}
			let y = 100 + spacing + i * spacing;
			let p = new Plinko(x,y,sizeObs);
			plinkos.push(p);			
		}
	}


	//criando todas as colunas embaixo
	for(let i = 0; i < numCol; i++){
		let x = i*width/numCol;
		let y = height-groundWidth;
		let wall = new Wall(x,y,colWidth,colHeight);
		walls.push(wall);
	}

	//criando o chao
	let ground = new Wall(width/2,height,width,groundWidth);
	walls.push(ground);
	let rightwall = new Wall(width,height/2,1,height);
	walls.push(rightwall);
	let leftwall = new Wall(0,height/2,1,height);
	walls.push(leftwall);


}


function mousePressed(){
	for(let i = 0; i < 10; i++){
		balls.push(new Ball(mouseX + random(-10,10),mouseY + random(0,50),ballSize));
	}
}


function draw() {
	background(51);

	if(frameCount % 60 == 0){
		balls.push(new Ball(width/2 + random(-10,10), 10 ,ballSize));
	}



	//desenha os obstaculos
	for (var i = 0; i < plinkos.length; i++) {


		//removedor de plinkos
		if (mouseIsPressed){
			fill(20,200,20);
			circle(mouseX,mouseY,20);
			fill(255);

			let v1 = createVector(plinkos[i].body.position.x, plinkos[i].body.position.y);
			let v2 = createVector(mouseX,mouseY);
			let d = p5.Vector.dist(v1,v2);

			if(d < 10){
				World.remove(world, plinkos[i].body);
				plinkos.splice(i,1);
				if(i == plinkos.length){
					i = 0;
				}
			}

		}		

		plinkos[i].show();
	}

	//desenha as bolinhas que caem
	for(let i = 0; i < balls.length; i++){
		balls[i].show();
	}
	
	//desenha as paredes	
	for(let i = 0; i < walls.length; i++){
		walls[i].show();
	}

}