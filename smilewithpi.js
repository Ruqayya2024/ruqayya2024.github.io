const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(320,320,100,0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();


ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(200,250);
ctx.fillStyle = 'black'
ctx.arc(200,250,40,0,2*Math.PI);


ctx.moveTo(440,250);
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

