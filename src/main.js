//archivos del DOM
import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/ghibli/ghibli.js";
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.films, data);
const dataGhibli = data.films;

const root = document.getElementById("characters-small-container");

function printDataCharacters(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].people.length; j++) {
      //console.log(array[i].people.length);
      root.innerHTML += `<div class="characters-each">
     
       <img src="${array[i].people[j].img}" class="poster-ch">

         <h3>${array[i].people[j].name}</h3> 
         <hr>
         <p><strong>Age</strong>:  ${array[i].people[j].age}</p>
         <p><strong>Specie</strong>: ${array[i].people[j].specie}</p>
         <p><strong>Gender</strong>: ${array[i].people[j].gender}</p>
        </div>`;
    }
  }
}
printDataCharacters(dataGhibli);


