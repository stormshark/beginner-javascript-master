import {generateOptions} from './utils.js';
import {currencies} from "./curriencies.js";
import {handleInput} from "./handlers.js";
import {fromSelect,    fromInput,    toSelect,    toEl,    form} from "./elements.js";







const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
