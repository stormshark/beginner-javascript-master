
const addButton =  document.querySelector('.shopping-list button[type="submit"]');
const enteredItemText =  document.querySelector('.listTextField');
const shoppingList =  document.querySelector('.list');
let itemList=[];


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
    display ()
    replicateData();    
    enteredItemText.value ='';
} 

function display () {
    console.log("buraya geldi")
    let cleanList= itemList.map(e => 
        `<li class="shopping-item">
            <input type="checkbox">
            <span class="itemName">${e.name}</span>
            <button class="closeButton">&times</button>   
        </li>`).join('');
    shoppingList.innerHTML = cleanList;
}

function retrieveData() {
    let retrievedData =  JSON.parse(localStorage.getItem("lsItems"));
    if(retrievedData) 
        {itemList.push(...retrievedData);
          display();
        }
}

function removeAnItem(id) {
    id.preventDefault();
    console.log("yeni ekleleneşeş g,rd,");
    id

    //itemList.find(finder => finder.id === id );
}

function replicateData(){
    localStorage.setItem("lsItems",JSON.stringify(itemList));
}