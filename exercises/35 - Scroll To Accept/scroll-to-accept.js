 const terms = document.querySelector('.terms-and-conditions');
 const acceptButton = document.querySelector('.accept');

// terms.addEventListener('scroll',function(e) {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);

// } )

const watch = document.querySelector('.watch');

function obCallback(payload){
    if  (payload[0].intersectionRatio === 1){
        acceptButton.disabled=false;
        ob.unobserve(terms.lastElementChild);
    };
}

const ob = new IntersectionObserver(obCallback, 
    {root:terms,threshold:1} 
    );
//ob.observe(watch);

ob.observe(terms.lastElementChild);