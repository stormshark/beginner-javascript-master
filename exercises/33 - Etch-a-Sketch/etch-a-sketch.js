const canvas = document.querySelector ('#etch-a-sketch');
const context= canvas.getContext('2d');
const SPEED= 10;
let hue= 0;

context.lineJoin='round';
context.lineCap='round';
context.lineWidth= 20;

const width = canvas.width;
const height = canvas.height;
let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

context.beginPath();
context.moveTo(x,y);
context.lineTo(x,y);

context.stroke();

window.addEventListener('keydown',handleKey);

function draw({key}) {
    hue +=10;
    context.strokeStyle= `hsl(${hue},100%,50%)`;

    context.beginPath();
    context.moveTo(x,y);

    switch (key) {
        case 'ArrowUp':
            y -= SPEED;
            break;

        case 'ArrowDown':
            y += SPEED;
            break;

        case 'ArrowLeft':
            x -= SPEED;
            break;

        case 'ArrowRight':
            x += SPEED;
            break;


    }   

    context.lineTo(x,y);
    context.stroke();
    }

function handleKey(e) {
        e.preventDefault();
        if(e.key.includes('Arrow')) 
        {
            draw({key:e.key});
    
        }
    }

function clearCanvas() {
        canvas.classList.add('shake');
        canvas.addEventListener('animationend',function(){canvas.classList.remove('shake');},{once:true})
        context.clearRect(0,0,width,height);
    }

const shakeBtn = document.querySelector('.shake');
shakeBtn.addEventListener('click',clearCanvas);