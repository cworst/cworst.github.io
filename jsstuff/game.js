const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let d = 0;
let score = 0;
let gameRunning = true;
let drawShell = true;
let drawGar = false;
let frame = 0;

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
        y : 370,
        speed: 4
};
const trash = {
        x : 200,
        y : 370,
        speed: 4
};
const shell = {
        x : (Math.random() * 340) + 30,
        y : (Math.random() * 150) + 150,
        //x : 200,
        //y : 200,
        d : 2.9 
};

const wave = {
        y : 0,
        x : 0,
        speed : 3
};

const gar = {
        x : (Math.random() * 340) + 30,
        y : (Math.random() * 150) + 50,
        //x : 300,
        //y : 200,
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

function circl(x,y){
    ctx.strokeStyle = "PowderBlue";                                                     
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
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

function drawwave(){
    circ(wave.x,wave.y);
    circ(wave.x+120,wave.y);
    circ(wave.x+230,wave.y);
    circ(wave.x+350,wave.y);
    circl(wave.x,wave.y-135);
    circl(wave.x+120,wave.y-135);
    circl(wave.x+230,wave.y-135);
    circl(wave.x+350,wave.y-135);
    bubs(wave.x+10,wave.y+60);
    bubs(wave.x+100,wave.y+60);
    bubs(wave.x+220,wave.y+60);
    bubs(wave.x+310,wave.y+60);
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


function drawshell(){
    lon(shell.x-10,shell.y-15,shell.d);
    lon(shell.x+10,shell.y-15,-shell.d);
    lon(shell.x,shell.y-20,shell.d+.2);
    curve(shell.x,shell.y);
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

function drawgar(){
    rect(gar.x,gar.y);
    hol(gar.x+13,gar.y+14);
    hol(gar.x+35,gar.y+14);
    hol(gar.x+57,gar.y+14);
    hol(gar.x+57,gar.y+35);
    hol(gar.x+13,gar.y+35);
    hol(gar.x+35,gar.y+35);
}

function drawScore(){
            ctx.font = "30px Arial";
            ctx.fillText(score, 10, 30);
}

function animate() {
    drawRect(6,100);
    sand(0,0);
    drawTrap();
    moveTrap();
    drawtrash();
    movetrash();
    checkCollision();
    checkColl();
    if(gameRunning){
        if(score > 1000){
            gameRunning = false;
        }
        requestAnimationFrame(animate);
    }

      trash["minX"] = trash.x;
      trash["minY"] = trash.y;
      trash["maxX"] = trash.x + 15;
      trash["maxY"] = trash.y + 10;

     shell ["minX"] = shell.x - 30;
     shell ["minY"] = shell.y - 40;
     shell ["maxX"] = shell.x + 10;
     shell ["maxY"] = shell.y + 5;
    if (drawShell) {
        drawshell();
    }

       Trap["minX"] = Trap.x;
       Trap["minY"] = Trap.y;
       Trap["maxX"] = Trap.x + 15;
       Trap["maxY"] = Trap.y + 10;

      gar ["minX"] = gar.x-20;
      gar ["minY"] = gar.y-20;
      gar ["maxX"] = gar.x+80;
      gar ["maxY"] = gar.y+40;

     if (drawGar) {
         drawgar();
     }

     spawn();
     drawwave(0,0);
     wavem();
     drawScore();
}






 function checkCollision(){
    
	 let waveMinY = wave.y - 80;
     let waveMaxY = wave.y + 90;

     if( Trap.maxY > waveMinY &&
         Trap.minY < waveMaxY)
     {
            gameRunning = false;
     }

      trash["minX"] = trash.x;
      trash["minY"] = trash.y;
      trash["maxX"] = trash.x + 15;
      trash["maxY"] = trash.y + 10;

      Trap["minX"] = Trap.x;
      Trap["minY"] = Trap.y;
      Trap["maxX"] = Trap.x + 15;
      Trap["maxY"] = Trap.y + 10;

      if(wave.maxY > trash.minY && wave.minY < trash.maxY){
          gameRunning = false;
      }

}



function checkColl(){

     shell ["minX"] = shell.x - 30;
     shell ["minY"] = shell.y - 40;
     shell ["maxX"] = shell.x + 10;
     shell ["maxY"] = shell.y +5;

     gar ["minX"] = gar.x-20;
     gar ["minY"] = gar.y-20;
     gar ["maxX"] = gar.x+80;
     gar ["maxY"] = gar.y+40;

     

     if( shell.maxY > Trap.minY &&
         shell.minY < Trap.maxY &&
         shell.maxX > Trap.minX && 
         shell.minX < Trap.maxX && drawShell){
            score++;
            drawShell = false;
    }
  
      if(shell.maxY > trash.minY &&
         shell.minY < trash.maxY && 
         shell.maxX > trash.minX && 
         shell.minX < trash.maxX && drawShell){
          score--;
              drawShell = false;
      }

     if( gar.maxY > Trap.minY &&
         gar.minY < Trap.maxY &&
         gar.maxX > Trap.minX && 
         gar.minX < Trap.maxX && drawGar){
            score--;
             drawGar = false;
    }
  
      if(gar.maxY > trash.minY &&
         gar.minY < trash.maxY && 
         gar.maxX > trash.minX && 
         gar.minX < trash.maxX && drawGar){
          score++;
              drawGar = false;
      }

	}


function wavem(){

        wave.y += wave.speed;
        let waveBottom = wave.y + 90;

         if(waveBottom < 0){
            wave.speed = 2;
         }
         if (waveBottom > 300){
            wave.speed = -2;
         }

}

function spawn(){
        let waveBottom = wave.y + 90;

          if (
                  drawGar === false && 
                  waveBottom > 300){
            drawGar = true;
            gar.x = (Math.random() * 340) + 30,
            gar.y = (Math.random() * 150) + 150
                  
          }

          if (
                  drawShell === false &&
                  waveBottom > 300){
            drawShell = true;
            shell.x = (Math.random() * 340) + 30,
            shell.y = (Math.random() * 150) + 150

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
