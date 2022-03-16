const gottenText = document.querySelector('.textarea').textContent;
//console.log(gottenText.textContent);

const radioButtons= document.querySelectorAll('[name="filter"]');
radioButtons.forEach((button) => button.addEventListener('change', whoIsClicked))
//console.log(radioButtons);

function whoIsClicked (){
    let target = this;
  //  console.log(target);
  //  console.log(target.defaultValue);
    switch (target.defaultValue) {
        case 'sarcastic': sarcasticTextConverter();
        break;
        
        case 'funky': funkyTextConverter();
        break;

        case 'unable': unableTextConverter();
        break;        
    }
              
}



const newParagraph = document.querySelector('.result');

function sarcasticTextConverter() 
{console.log('s');}
function funkyTextConverter() 
{console.log('f');}
function unableTextConverter() 
{
    newParagraph.textContent ="";
    const finalText= gottenText.replace(/\s+/g, "...");
    newParagraph.textContent = finalText;
}

