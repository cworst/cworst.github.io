const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x = 0;
let dx = 5;
let y = 0;
let dy = 1;

//object
//access values in an object like this:
//player.x
const player = {
	//key:value pair
	x : 0,
	y : 0,
	color: 'green',
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
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
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
	if(keys['ArrowDown']){
		player.y += player.speed;
	}
	        if(keys['ArrowUp']){
                player.y -= player.speed;
        }
        	if(keys['ArrowLeft']){
                player.x -= player.speed;
        }
	        if(keys['ArrowRight']){
                player.x += player.speed;
        }
}




function animate() {
    x = x + dx;
    y = y + dy;
    drawRect(x,y);
    drawPlayer();
    movePlayer();

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
