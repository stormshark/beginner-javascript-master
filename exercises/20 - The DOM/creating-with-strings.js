console.log('it works');

const item = document.querySelector('.item');
console.log(item.innerHTML);
 
const param= 'asdasd';
const description='description';

const myHTML= 
`
<div>
    <h1> Hi I'added from JS ${param} </h1> 
    <h2>Cute ${description} </h2>
    <img src="https://source.unsplash.com/random/400x300" alt="${description}" />
</div>
`; 


// turn into dom

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);
document.body.appendChild(myFragment);