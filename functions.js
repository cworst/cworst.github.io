        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

function circle(x,y){
    ctx.fillStyle = "LemonChiffon";
    ctx.beginPath();
    ctx.arc(x,y,25,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

circle(70,90)
circle(90,100)
circle(200,70)

