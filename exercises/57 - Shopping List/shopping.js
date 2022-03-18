
const addButton =  document.querySelector('.shopping-list button[type="submit"]');
const enteredItemText =  document.querySelector('.listTextField');
const shoppingList =  document.querySelector('.list');
let itemList=[];

addButton.addEventListener('click',createList);

function createList(event) {
    
    event.preventDefault();
    let itemName = enteredItemText.value;
    
    const item = {
    id:Date.now(),
    name: itemName,
    complete:false,
    }
    
    itemList.push(item);

    let cleanlist= itemList.map(e => 

        `<li class="shopping-item">
            <input type="checkbox">
            <span class="itemName">${e.name}</span>
            <button class="closeButton">&times</button>   
        </li>`).join('');

    shoppingList.innerHTML = cleanlist;
    enteredItemText.value ='';

} 