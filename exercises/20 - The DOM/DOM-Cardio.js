// Make a div
createdFirstDiv = document.createElement('div');

// add a class of wrapper to it
createdFirstDiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(createdFirstDiv);


// make an unordered list
createdList= document.createElement('ul');
document.body.appendChild(createdList);

// add three list items with the words "one, two, three" in them -ok
const listItems = `
<li>one</li>
<li>two</li>
<li>three</li>
`;

 const unorderedList= document.querySelector('ul');
 unorderedList.insertAdjacentHTML('afterbegin',listItems);


// put that list into the above wrapper - ok
const underWrapper = document.querySelector('.wrapper');
console.log(underWrapper);
underWrapper.appendChild(createdList);

// create an image -ok
// set the source to an image - ok
// set the width to 250 -ok
// add a class of cute -ok
// add an alt of Cute Puppy -ok
// Append that image to the wrapper- ok
createdImage=  document.createElement('img');
createdImage.src ="https://picsum.photos/250";
createdImage.width= 250;
createdImage.alt="Cute Puppy";
createdImage.classList.add("cute");
underWrapper.appendChild(createdImage);



// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString= `<div> 
<p> Lorem ipsum dolor sit </p>
<p> 2 lorem ipsum text is here </p>
</div> `;

unorderedList.insertAdjacentHTML('beforebegin',htmlString);

// add a class to the second paragraph called warning
// remove the first paragraph
const secondparagh = document.querySelector('p:nth-child(2)');
secondparagh.classList.add("warning");
const firstparagh = document.querySelector('p');
firstparagh.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name , age , height){

const returnedHtml = 
`<div class="playerCard">
<h2>${name} — ${age}</h2>
 <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*15}. That would be a tall dog!</p>
 <button class="deleteButton favorite styled" type="button">delete</button>
 </div>`;

return returnedHtml;
    
}



// make a new div with a class of cards

const cardsDiv= document.createElement('div');
cardsDiv.classList.add('cards');
document.body.appendChild(cardsDiv);

const wrapperClass = document.querySelector('.wrapper');
// make 4 player cards using generatePlayerCard

for (let index = 0; index < 4; index++) {

    const cards= generatePlayerCard(name+index,12+index, 130+index );    
    wrapperClass.insertAdjacentHTML('afterbegin',cards);

}


// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed






// select all the buttons!
const deleteButtons= document.querySelectorAll('.deleteButton')

deleteButtons.forEach(clickedone =>clickedone.addEventListener("click",removeCard) );


// make out delete function
function removeCard(event){
    event.currentTarget;
    console.log(event.currentTarget);
    console.log(event.currentTarget);
    event.currentTarget.closest('.playerCard').remove();
}

// loop over them and attach a listener
