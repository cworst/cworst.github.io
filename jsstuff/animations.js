const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x = 0;
let dx = 5;
let y = 0;
let dy = 1;
let score = 0;
let gameRunning = true;

//object
//access values in an object like this:
//player.x
const player = {
	//key:value pair
	x : 100,
	y : 100,
	color: '#FFabcc',
	speed: 3
};

//this is also an object 
//we access valiues from this kind of object like this:
//keys['ArrowUp"]
const keys = {};
 


//define functions
function drawRect(x,y) {
    //console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'SteelBlue';
    ctx.fillRect(x,y,50,50);
    //ctx.fill();
}

function drawPlayer(){
	ctx.fillStyle = player.color;
	ctx.beginPath();
	ctx.arc(
		player.x,
		player.y,
		20,
		0,
		2*Math.PI
	);
		ctx.fill();
}

function movePlayer(){
	//player.x = player.x + player.speed;
	//player.x += player.speed;
	if(keys['ArrowDown'] && 
		player.y < 400){
		player.y += player.speed;
	}
	        if(keys['ArrowUp'] &&
		player.y > 0){
                player.y -= player.speed;
        }
        	if(keys['ArrowLeft'] &&
		player.x > 0){
                player.x -= player.speed;
        }
	        if(keys['ArrowRight'] && 
		player.x < 400){
                player.x += player.speed;
        }

}

function drawScore(){
	ctx.font = "10px Arial";
	ctx.fillText(score, 10,10);
}


function animate() {
    x = x + dx;
    y = y + dy;
	score = score+1;
	//Game over???
	//gamestate=what part of the game are we in?
	if(gameRunning){
	score++;
	if(score > 1000){
                gameRunning = false;

}

    drawRect(x,y);
	drawScore();
    drawPlayer();
    movePlayer();
	checkCollision();
}
 

    // TODO: Add some code here 
    //  that will change the rectangle's position

	if(x>350){
		//x = x - 10;
		dx = dx * -1;
}
        if(x<0){
                //x = x - 10;
                dx = dx * -1;
}
        if(y>350){
               // x = x - 10;
                dy = dy * -1;
}
        if(y<0){
                //x = x - 10;
                dy = dy * -1;
}
	requestAnimationFrame(animate);
}
	

function checkCollision(){
	let box_min_x = x;
	let box_min_y = y;
	let box_max_x = x+50;
	let box_max_y = y+50;

	let player_min_x = player.x - 20;
	let player_min_y = player.y - 20;
	let player_max_x = player.x + 20;
	let player_max_y = player.y + 20;

	if(box_max_y > player_min_y &&
		box_min_y < player_max_y &&
		box_max_x > player_min_x &&
		box_min_x < player_max_x){
		gameRunning = false;
	}

}
	

function handleKeyPress(e){
	//console.log(e.key);
	keys[e.key] = true;
}

//2 inputs: what type of event, a function to call)
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (e) => {
	//console.log(e.key + "up");
	keys[e.key] = false;
});

//call our function
animate();
