
const butts= document.querySelector('.butts');


function myFunction() {
    console.log("it clicked.....");
}

butts.addEventListener('click', myFunction);

const buyButtons = document.querySelectorAll('.buy');

function buyItem(){
    console.log('buying items');
}

// this one does not work because buyButtons does not have addEventListener method.
// buyButtons.addEventListener('click',buyItem);

// anonymous function based Eventlistener
buyButtons.forEach(function(bubbububu){
    console.log("HERBİTİ GELDİİİİİİİİ");
    console.log(bubbububu);
    addEventListener('click',buyItem);

});

// seperated function based Event listener 
function attachListener(anyNameIWant) {
    anyNameIWant.addEventListener('click',buyItem);
}

buyButtons.forEach(attachListener);


// Arrow functi on based event listener
buyButtons.forEach((button) => {
    addEventListener('click',() => {
        console.log("arrow function eventlistener")
    })
})
