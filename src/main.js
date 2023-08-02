import data from './data/ghibli/ghibli.js';

const sectionHome = document.getElementById('index');
const sectionMovies = document.getElementById('movies');
const root = document.getElementById('root');
const enterButton = document.getElementById('action-enter');
const filter = document.getElementById('button-filter');

createFilms(data);

enterButton.addEventListener('click', function (event) {
    event.preventDefault();
    sectionHome.classList.remove('show');
    sectionHome.classList.add('hidden');
    sectionMovies.classList.remove('hidden');
    sectionMovies.classList.add('show');
    document.body.classList.remove('body-blue');
});



function createFilms(data) {
    root.innerHTML = '';
    for (let i = 0; i < data.films.length; i++) {
        root.innerHTML += `<figure class="poster">
        <div class="info">
            <p class="title-tooltip"><b>${data.films[i].title}</b></p> 
            <p><b>Rating<b/>: ⭐${data.films[i].rt_score} / <b>Año:</b> ${data.films[i].release_date}</p> 
            <p>${data.films[i].description}</p>
            <br>
            <p>Director: <b>${data.films[i].director}</b></p> 
            <p>Productor: <b>${data.films[i].producer}</b></p> 
        </div>
        <img src="${data.films[i].poster}" alt="${data.films[i].title}" />
        <figcaption>${data.films[i].title}</figcaption> 
        </figure>`;
    }
}
const dataGhibli = data.films;

const charactersRoot = document.getElementById("characters-small-container");

function printDataCharacters(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].people.length; j++) {
            //console.log(array[i].people.length);
            charactersRoot.innerHTML += `<div class="characters-each">
     
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