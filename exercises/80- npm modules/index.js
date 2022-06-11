import wait from 'waait';
import faker from 'faker';
import {formatDistanceToNow} from 'date-fns' ;
import axios from 'axios';  
import { intersection } from 'lodash';
import to from 'await-to-js';

//console.log(faker);

const randomNameList= Array.from({length : 10},() => faker.name.firstName());

//console.log(randomNameList);

const up2Date = formatDistanceToNow( new Date(1983, 8, 1, 11, 32, 0) ) ;
//console.log("you have been in this world: " + up2Date);

//console.log(faker.name.firstName()+ " " + faker.name.lastName());
async function go () {
    //console.log("inside function");
    await wait(5000);
   // console.log("2. aşama");
}

async function getJoke() {
    const res= await axios.get('https://icanhazdadjoke.com',{
        headers: {
           Accept: 'application/json' 
        }
    });
  //  console.log(res);
}

const a = [1,2,3,4,4,5,6,7,8];
const b = [2,4,999,087,443,23,1,5];

const commonValuesForArray= intersection(a,b);
//console.log(commonValuesForArray); 

getJoke();
//go();


function checkNameIsCool(name){
    return new Promise(function(resolve,reject)
    {
        if(name === 'YGY') {
            resolve('Cool Nameeeeeeee'); 
            return;
        } 
        reject(new Error('Bad Name'));
    })
}

async function nameChecker() {
    const [errorResponse,succesfulResponse] = await to(checkNameIsCool('YGY'));
    // console.log(errorResponse);
    // if (errorResponse) {
    //     console.log("hata varrrrrrrrr");
    // }
    errorResponse ?  console.log('error' + errorResponse) : console.log('success ' + succesfulResponse) ;
   
    ;
}

nameChecker();