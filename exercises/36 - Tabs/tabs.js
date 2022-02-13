const tabs = document.querySelector('.tabs');
const tabButtons= tabs.querySelectorAll('[role="tab"]');
const tabPanels= Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick (event) {
    console.log(event.currentTarget); 
    // hide the others
    tabPanels.forEach( panel => {   
        panel.hidden=true;
    });

    // mark other unselected
    tabButtons.forEach(tab => tab.setAttribute('aria-selected',false));

    // mark this selected
    event.currentTarget.setAttribute('aria-selected',true);

    // show the related panel
    const id = event.currentTarget.id;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby')===id);
    console.log(tabPanel);
    tabPanel.hidden=false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick)); 