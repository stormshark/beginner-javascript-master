
const addButton =  document.querySelector('.shopping-list button[type="submit"]');
const enteredItemText =  document.querySelector('.listTextField');
const shoppingList =  document.querySelector('.list');
let itemList=[];

shoppingList.addEventListener('itemsChanged',display);
addButton.addEventListener('click',createList);
shoppingList.addEventListener('click',removeAnItem);
retrieveData();


function createList(event) {
    event.preventDefault();
    let itemName = enteredItemText.value;

    const item = {
        id:Date.now(),
        name: itemName,
        complete:false,
        }
    
    itemList.push(item);
    // display ()
    // replicateData();    
    enteredItemText.value ='';
    shoppingList.dispatchEvent(new CustomEvent("itemsChanged"));
} 

function display () {
    let cleanList= itemList.map(e => 
        `<li class="shopping-item">
            <input type="checkbox">
            <span class="itemName">${e.name}</span>
            <button class="closeButton" value=${e.id}>&times</button>   
        </li>`).join('');
    shoppingList.innerHTML = cleanList;
}

function retrieveData() {
    let retrievedData =  JSON.parse(localStorage.getItem("lsItems"));
    console.log("trst");
    if(retrievedData) 
    console.log("trst2");

        {itemList.push(...retrievedData);
         // display();
         debugger
         shoppingList.dispatchEvent(new CustomEvent("itemsChanged"));
        }
}


function removeAnItem(id) {
    id.preventDefault();
    selectedItem = id.target.value;
    if (selectedItem){
        let newList = itemList.filter(finder => finder.id != selectedItem);
        itemList=newList;
       // replicateData();
        shoppingList.dispatchEvent(new CustomEvent("itemsChanged")); 
 }

    //itemList.find(finder => finder.id === id );
}

shoppingList.addEventListener("itemsChanged",replicateData);
function replicateData(){
    localStorage.setItem("lsItems",JSON.stringify(itemList));
}
