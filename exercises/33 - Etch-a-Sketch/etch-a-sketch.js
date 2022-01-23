const canvas = document.querySelector ('#etch-a-sketch');
const context= canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');


// check linejoin, lineCap
// Putting a dot in canvas
context.lineJoin='round';
context.lineCap='round';
context.lineWidth= 10;
context.beginPath();
context.moveTo(200,200);
context.lineTo(200,200);
context.stroke();