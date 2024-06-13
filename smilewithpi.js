const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(320,320,100,0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();


ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(50,250);
ctx.fillStyle = 'black'
ctx.arc(300,250,40,0,2*Math.PI);


ctx.moveTo(150,250);
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();


const str = "Pi makes me Smile!";
ctx.font = ' italic 50px Comic';
ctx.fillStyle = 'blue';
ctx.textAlign = 'center';
ctx.fillText(str,100,100);

tx.fillStyle = colorz;
ctx.fillRect(100,100,300,300);

ctx.strokeStyle = colorz;
ctx.lineWidth = 10;
ctx.moveTo(10,0);
ctx.lineTo(10,500);
ctx.strokeStyle();

const colorz = ctx.createLinearGradient(0,0,400,400);
colorz.addColorStop(0, '#00ff00');
colorz.addColorStop(0.5, '#ff0000');
colorz.addColorStop(1, '#0000ff');
const colorz2 = ctx.createRadialGradient(300,300,0,300,300, 200);
colorz.addColorStop(0,'#00ff00');
colorz.addColorStop(0,'#00ff00');
colorz.addColorStop(1,'#0000ff');

ctx.fillStyle = colorz2;
ctx.fillRect(100,100,500,500);

ctx.strokeStyle = colorz2;
ctx.lineWidth = 10;
ctx.moveTo(10,0);
ctx.lineTo(10,500);
ctx.strokeStyle();

