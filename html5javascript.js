
const canvas = document.querySelector('#canvas');
const ctx = canvas.getontext('2d');

ctx.fillstyle = "red";
ctx.fillRect (100, 100, 500, 300);
ctx.strokeRect(90, 90, 520, 320);
ctx.clearRect(150,150,400,200);

ctx.fillstyle = "#0000ff";
ctx.fillRect(40,40,100,100);


ctx.fillStyle = "#0f0"
ctx.fillRect(80,80,100,100);

tx.fillStyle = "rgb(255,0,255)";
ctx.fillRect(120,120,100,100);

tx.fillStyle = "rgb(255,0,255)"; 
ctx.fillRect(80,80,100,100);

ctx.fillStyle = "rgba(255,0,255,1)";
ctx.fillRect(160,20,400,400);

ctx.fillStyle = 'red';
ctx.strokeStyle = "blue";
ctx.rect(100,100,200,100);
ctx.fillStyle();
ctx.strokeStyle();
ctx.strokeRect(200,200,200,100);

ctx.beginPath(300,300);
ctx.moveTo(50,400);//move pen
ctx.lineTo(50,100);//draws a line
ctx.lineTo(500,400);//draws a line
ctx.lineTo(500,400);//draws a line
ctx.fillStyle();
ctx.stroke(); //applies the shape by drawing it
ctx.closePath();
ctx.fillStyle = "purple";
ctx.strokeStyle = "purple";
ctx.beginPath(320,50);
ctx.moveTo(320,50);
ctx.lineTo(520,250);
ctx.lineTo(120,250);
ctx.lineTo(320,50);
