const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'SteelBlue';
    ctx.fillRect(x,y,50,50);
}

function sand(x,y) {
    ctx.fillStyle = 'LemonChiffon';
    ctx.fillRect(x,y,400,400);
}


function Trap(x,y) {

    ctx.beginPath();
    ctx.moveTo(x+110, y+70);
    ctx.lineTo(x+150,y+70);
    ctx.lineTo(x+145,y+100);
    ctx.lineTo(x+115,y+100);
    ctx.lineTo(x+110,y+70);
    ctx.stroke();
    ctx.fillStyle = 'SteelBlue';
    ctx.fill();
}

function trash(x,y) {

    ctx.beginPath();
    ctx.moveTo(x+110, y+70);
    ctx.lineTo(x+150,y+70);
    ctx.lineTo(x+145,y+100);
    ctx.lineTo(x+115,y+100);
    ctx.lineTo(x+110,y+70);
    ctx.stroke();
    ctx.fillStyle = 'Red';
    ctx.fill();
}

function trap(){
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 5;
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(100,20);
    ctx.lineTo(175,100);
    ctx.lineTo(20,100);
    ctx.lineTo(20,20);
    ctx.stroke();
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

function shell(x,y,d){
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


drawRect(6,100);
sand(0,0);
//trap();
//circ(50,40);
bubs(50,40);
Trap(2,100);
trash(180,120);
wave(40,10);
//bub(200,200);
//curve(300,300);
//lon(300,300,3);
shell(70,160,2.9);
shell(140,140,2.9);
//rect(100,180);
//hol(300,300);
gar(300,130);
