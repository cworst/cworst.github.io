const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = 5;
let dy = 1;
let score = 0;
let gameRunning = true;

function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'SteelBlue';
    ctx.fillRect(x,y,50,50);
}

function sand(x,y) {
    ctx.fillStyle = 'LemonChiffon';
    ctx.fillRect(x,y,400,400);
}

const Trap = {
        //key:value pair
        x : 100,
        y : 200,
        speed: 3
};
const shell = {
        x : 300,
        y : 200,
        d : 2.9
};

const keys = {};

function drawTrap(){

    ctx.beginPath();
    ctx.moveTo(Trap.x, Trap.y);
    ctx.lineTo(Trap.x+40,Trap.y);
    ctx.lineTo(Trap.x+35,Trap.y+30);
    ctx.lineTo(Trap.x+5,Trap.y+30);
    ctx.lineTo(Trap.x,Trap.y);
    ctx.stroke();
    ctx.fillStyle = 'SteelBlue';
    ctx.fill();
}

function moveTrap(){
	console.log ("moving")
        if(keys['ArrowDown'] &&
                Trap.y < 373){
                Trap.y += Trap.speed;
        }
                if(keys['ArrowUp'] &&
                Trap.y > 0){
                Trap.y -= Trap.speed;
        }
                if(keys['ArrowLeft'] &&
                Trap.x > 0){
                Trap.x -= Trap.speed;
        }
                if(keys['ArrowRight'] &&
                Trap.x < 363){
                Trap.x += Trap.speed;
        }

}

const trash = {
        x : 200,
        y : 200,
        speed: 3
};

function drawtrash() {
    ctx.beginPath();
    ctx.moveTo(trash.x, trash.y);
    ctx.lineTo(trash.x+40,trash.y);
    ctx.lineTo(trash.x+35,trash.y+30);
    ctx.lineTo(trash.x+5,trash.y+30);
    ctx.lineTo(trash.x,trash.y);
    ctx.stroke();
    ctx.fillStyle = 'Red';
    ctx.fill();
}

function movetrash(){
        if(keys['s'] &&
                trash.y < 373){
                trash.y += trash.speed;
        }
                if(keys['w'] &&
                trash.y > 0){
                trash.y -= trash.speed;
        }
                if(keys['a'] &&
                trash.x > 0){
                trash.x -= trash.speed;
        }
                if(keys['d'] &&
                trash.x < 363){
                trash.x += trash.speed;
        }

}

function circ(x,y){
    ctx.strokeStyle = "PowderBlue";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'PowderBlue';
    ctx.fill();
}

function bub(x,y){
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'White';
    ctx.fill();
}

function bubs(x,y){
    bub(x,y);
    bub(x+30,y+10);
    bub(x+60,y+10);
    bub(x+90,y);
}

function wave(x,y){
    circ(x,y);
    circ(x+110,y);
    circ(x+220,y);
    circ(x+330,y);
    bubs(x-30,y+60);
    bubs(x+60,y+60);
    bubs(x+180,y+60);
    bubs(x+270,y+60);
}

function curve(x,y){
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.ellipse(x,y,13,7,0,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'White';
    ctx.fill();
}

function lon(x,y,d){
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.ellipse(x,y,8,14,d,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'White';
    ctx.fill();
}

function drawshell(x,y,d){
    lon(x-10,y-15,d);
    lon(x+10,y-15,-d);
    lon(x,y-20,d+.2);
    curve(x,y);
}

function rect(x,y) {
    ctx.fillStyle = 'Silver';
    ctx.fillRect(x,y,70,50);
}

function hol(x,y){
    ctx.strokeStyle = "Black";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 9, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'LemonChiffon';
    ctx.fill();
}

function gar(x,y){
    rect(x,y);
    hol(x+13,y+14);
    hol(x+35,y+14);
    hol(x+57,y+14);
    hol(x+57,y+35);
    hol(x+13,y+35);
    hol(x+35,y+35);
}

function drawScore(){
            ctx.font = "30px Arial";
            ctx.fillText(score, 10, 30);
}

function animate() {
    drawRect(6,100);
    sand(0,0);
    wave(40,10);
    shell(70,160,2.9);
    shell(140,140,2.9);
    gar(300,130);
    drawTrap();
    moveTrap();
    drawtrash();
    movetrash();
    checkCollision();
    drawScore();
    checkColl();
    if(gameRunning){
    if(score > 1000){
        gameRunning = false;
 }
        requestAnimationFrame(animate);
}
}

 function checkCollision(){
     let wave_min_x = x;
	 let wave_min_y = y;
	 let wave_max_x = x+400;
	 let wave_max_y = y+50; 
     let Trap_min_x = Trap.x - 20;
     let Trap_min_y = Trap.y - 20;
     let Trap_max_x = Trap.x + 20;
     let Trap_max_y = Trap.y + 20;
 
     if( Trap_max_y > wave_min_y &&
         Trap_min_y < wave_max_y &&
         Trap_max_x > wave_min_x && 
         Trap_min_x < wave_max_x){
            gameRunning = false;
     }

      let trash_min_x = trash.x - 20;
      let trash_min_y = trash.y - 20;
      let trash_max_x = trash.x + 20;
      let trash_max_y = trash.y + 20;
  
      if(wave_max_y > trash_min_y && wave_min_y < trash_max_y && wave_max_x > trash_min_x && wave_min_x < trash_max_x){
          gameRunning = false;
      }

}

function checkColl(){
     let shell_min_x = x-20;
     let shell_min_y = y-20;
     let shell_max_x = x+20;
     let shell_max_y = y+20; 
     let Trap_min_x = Trap.x - 20;
     let Trap_min_y = Trap.y - 20;
     let Trap_max_x = Trap.x + 20;
     let Trap_max_y = Trap.y + 20;
 
     if( Trap_max_y > shell_min_y &&
         Trap_min_y < shell_max_y &&
         Trap_max_x > shell_min_x && 
         Trap_min_x < shell_max_x){
        score += 1;
        console.log("hey idiot I am working");
    }

      let trash_min_x = trash.x - 20;
      let trash_min_y = trash.y - 20;
      let trash_max_x = trash.x + 20;
      let trash_max_y = trash.y + 20;
  
      if(shell_max_y > trash_min_y &&
         shell_min_y < trash_max_y && 
         shell_max_x > trash_min_x && 
         shell_min_x < trash_max_x){
        score += 1;
        console.log("hey idiot I am working");
      }

}


function handleKeyPress(e){
        //console.log(e.key);
        e.preventDefault();
        keys[e.key] = true;
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (e) => {
        //console.log(e.key + "up");
	e.preventDefault();
        keys[e.key] = false;
});


animate();
