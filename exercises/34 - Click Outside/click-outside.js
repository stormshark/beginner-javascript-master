console.log("it works");
const cardButtons= document.querySelectorAll('.card button');
const modalInner=document.querySelector('.modal-inner');
const modalOuter=document.querySelector('.modal-outer');


function handleCardButtonClick(event) {
  const button= event.currentTarget;
  const card = button.closest('.card');
  const cardImageSrc = card.querySelector('img').src;
  const cardDescription= card.dataset.description;

modalInner.innerHTML = `
<img src="${cardImageSrc.replace('200','600')}" alt="${cardDescription}">
<button onclick="closeModal()">close</button>
`;
modalOuter.classList.add('open'); 


} 

cardButtons.forEach(button => button.addEventListener('click',handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click',function(event) {

    const isOutside = ! event.target.closest('.modal-inner');
    console.log(isOutside);
    if (isOutside){
        closeModal();
    }
    // console.log(event);
    // console.log(event.target);
    // console.log(event.currentTarget);

});