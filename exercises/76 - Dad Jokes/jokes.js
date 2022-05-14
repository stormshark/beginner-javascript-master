const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const paragraph = document.querySelector('.joke');
const baseEndpoint = 'https://icanhazdadjoke.com/';
let serviceResponseJoke = '';



const button= document.querySelector('.getJoke') ; 
button.addEventListener('click',getTheJoke);

async function getTheJoke () {
  const prom =  await fetch (baseEndpoint,{
    headers: {
      Accept: 'application/json',
    }
  }) 
  let serviceResponse = await prom.json();
  serviceResponseJoke = serviceResponse.joke;
  console.log("service log: " + serviceResponseJoke);
  button.dispatchEvent(new CustomEvent('itemsUpdated'));
}

button.addEventListener('itemsUpdated', setTheJoke);



function setTheJoke(e) {
  e.preventDefault();
  console.log("içeriye girdi");
  paragraph.textContent='';
  paragraph.textContent=serviceResponseJoke;
}
