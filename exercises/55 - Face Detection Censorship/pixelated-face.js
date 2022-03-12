const video= document.querySelector('.webcam');
const mainCanvas= document.querySelector('.video');
const ctx = mainCanvas.getContext('2d');

const faceCanvas= document.querySelector('.face');
const faceCtx= faceCanvas.getContext('2d');

const pixelPickSize= 10;

// maybe I need to add window.FaceDetector 
const faceDetector = new FaceDetector();
//console.log(video,mainCanvas,faceDetector);

async function populateVideo() {
     const stream = await navigator.mediaDevices.getUserMedia(
         {video: {width:1280, height:720} }
     );

     video.srcObject = stream;
     await video.play();

     mainCanvas.width= video.videoWidth;
     mainCanvas.height= video.videoHeight;

     faceCanvas.width=  video.videoWidth;
     faceCanvas.height= video.videoHeight;


 }

async function detect() {
    const faces = await faceDetector.detect(video);
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect);

}

function drawFace(face) {
    const {width,height,top,left,x,y} = face.boundingBox;
    ctx.clearRect(0,0,mainCanvas.width,mainCanvas.height)
    ctx.strokeStyle= '#ff0000';
    ctx.lineWidth=1;
    ctx.strokeRect(x,y,width,height);
}

function censor ({boundingBox:face}) {
// draw small face

faceCtx.imageSmoothingEnabled=false;
faceCtx.clearRect(0,0,faceCanvas.width,faceCanvas.height);
faceCtx.drawImage(    
    video,
    face.x,
    face.y,
    face.width,
    face.height,
    face.x,
    face.y,
    pixelPickSize,
    pixelPickSize
    );
// take that face mask and draw it back normal size

faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    pixelPickSize,
    pixelPickSize,
    face.x,
    face.y,
    face.width,
    face.height
    );

}

populateVideo().then(detect);