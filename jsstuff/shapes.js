const canvas =
        document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "white";
ctx.fillRect(0,0,400,400);


function ya(x,y){
ctx.fillStyle = "LemonChiffon";
ctx.fillRect(x,y,100,100);
}

function stack(x,y){
ya(x,y,10);
ya(x+20,y+80,40);
ya(x+30,y+150,55);
}

stack(20,100);
stack(220,140);
stack(130,80);      
