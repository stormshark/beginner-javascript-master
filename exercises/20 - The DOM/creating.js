console.log('it wroks fineeeeeeeee');


const myParagraph = document.createElement('p');
console.log(myParagraph);

myParagraph.innerText= "Lorem ipsum asdasdasdasd";
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src='https://source.unsplash.com/random/200x200';
myImage.alt='random image';

const createdDiv = document.createElement('div');
createdDiv.classList.add('mainDiv');

createdDiv.appendChild(myParagraph);
createdDiv.appendChild(myImage);

document.body.appendChild(createdDiv);