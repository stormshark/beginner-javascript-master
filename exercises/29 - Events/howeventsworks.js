
const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(someName) {  
    console.log('you bought it');
    console.log(someName.target.dataset.price);

    console.log("Target:");
    console.log(someName.target);

    console.log("currentTarget:");
    console.log(someName.currentTarget);
    someName.stopPropagation();

}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click',handleBuyButtonClick)
} );