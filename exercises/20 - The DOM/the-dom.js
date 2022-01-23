const p = document.querySelector('p') ;
const divs = document.querySelectorAll('div') ;
const items = document.querySelectorAll('.items');
let images = items[0].querySelector('p');

// selecting sub child
const imgs = document.querySelectorAll('.item img') ;

// do not use queryselectorALL for a single response
const imgs2 = document.querySelector('.item img:nth-child(2)') ;
const heading = document.querySelector('h2');
heading.textContent= 'YGY is awesommmmmeeeeee';
heading.innerText = 'YGY is awesommmmmeeeeee';
heading.ins

//const img2 = imgs.querySelectorAll('img');



//const img2 = imgs.querySelector('.img');

/*
console.log(images);
console.dir(heading.textContent);
console.log(p);
console.log(divs);
console.log(items); 
console.log(imgs); 
console.log(imgs2);
*/
   
/*
function init() {
console.log("script run before body loads"); 
}

 
document.addEventListener('DOMContentLoaded',init)
*/
 

// classes 
const pict = document.querySelector('.nice');
pict.classList.add('open');
//pict.classList.add('round');
pict.classList.toggle('round'); 
pict.classList.remove('cool');

pict.alt ='cute pop';
pict.width=200;
console.log(pict.naturalWidth);

console.log(pict.classList);

window.addEventListener('load',function () {
    console.log(pict.naturalWidth);
})
