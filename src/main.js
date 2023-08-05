import data from "./data/ghibli/ghibli.js";
import {showTab} from "./data.js"

//Pestaña a pestaña
document.querySelectorAll('a[data-tab]').forEach(link => {
  link.addEventListener("click",(event) => {
    event.preventDefault();
    const tabName = event.target.dataset.tab;
    const tabContents = document.querySelectorAll('.tab-content');
    showTab(tabName, tabContents)
  })
})
// Con un querySelectorAll se llaman a todos los elementos que cumplan con el atrubuto 'data-tab' en las etiquetas 'a'(enlace).
//Con la función .forEach() se iteran todos los elementos dentro de un array, tiene como parámetro 'link' y ese 'link' responderá a un event listener que se accionará con un click.
//El evento (conectado con una función de flechas, teniendo como parámetro 'event') que ocurrirá cuando se haga click es el siguiente: 
//1. Se utiliza .preventDefault() para eeevitar que el enlace realice su acción predeterminada de navegar a una nueva página.
//2. Se crea un variable que contiene el evento, con el target (representa el elemento HTML en el cual ocurrió el evento), dataset (propiedad especial del objeto target que nos permite acceder a los atributos de datos (atributos con el prefijo data-) del elemento HTML) y tab.
//3.Se accede a la clase 'tab-content' a través de un querySelectorAll.
//4. Se llama a la función "showTab" con los parámetros de las dos varibles anteriores.

//Index a home

const sectionHome = document.getElementById("index");
const sectionMovies = document.getElementById("movies");
const root = document.getElementById("root");
const enterButton = document.getElementById("action-enter");
const containerVehicles = document.getElementById("vehicles-small-container")
//const filter = document.getElementById("button-filter");
const dataGhibli = data.films;
const charactersRoot = document.getElementById("characters-small-container");
const locations = document.getElementById("locations-small-container");


createFilms(data);
createVehicles(data);
printDataCharacters(dataGhibli);
createLocations(data);


enterButton.addEventListener("click", function (event) {
    event.preventDefault();
    sectionHome.classList.remove("show");
    sectionHome.classList.add("hidden");
    sectionMovies.classList.remove("hidden");
    sectionMovies.classList.add("show");
    document.body.classList.remove("body-blue");
});

function createFilms(data) {
    root.innerHTML = "";
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
function createVehicles(data) {
    for (let i = 0; i < data.films.length; i++) {
        for (let v = 0; v < data.films[i].vehicles.length; v++) {
            containerVehicles.innerHTML += `<figure class="vehicles-poster">
            <img src="${data.films[i].vehicles[v].img}" alt="${data.films[i].vehicles[v].id}" />
             <figcaption>"${data.films[i].vehicles[v].name}"</figcaption>
             <p>"${data.films[i].vehicles[v].description}"</p>
        </figure>`;

        }
    }

}

function createLocations(data) {
    for (let i = 0; i < data.films.length; i++) {
        for (let l = 0; l < data.films[i].locations.length; v++) {
            locations.innerHTML += `<figure class="locations-poster">
            <img src="${data.films[i].locations[v].img}" alt="${data.films[i].locations[v].id}" />
             <figcaption>"${data.films[i].vehicles[v].name}"</figcaption>
             <p>"${data.films[i].vehicles[v].description}"</p>
        </figure>`;

        }
    }

}


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












//función-->filtro-->data

function sortAToZTitle (data) {
  data.sort((a,b) => a.title < b.title ? -1 : 1);
}
sortAToZTitle(dataGhibli)

//console.log(dataGhibli.sort((a,b) => a.title < b.title ? -1 : 1))

function sortZToATitle (data) {
  data.sort((a,b) => a.title > b.title ? -1 : 1)
}
sortZToATitle(dataGhibli)

//console.log(dataGhibli.sort((a,b) => a.title > b.title ? -1 : 1))

function sortRDAsc (data) {
  data.sort((a,b) => a.release_date - b.release_date)
}
sortRDAsc(dataGhibli)

//console.log(dataGhibli.sort((a,b) => a.release_date - b.release_date))

function sortRDDesc (data) {
  data.sort((a,b) => b.release_date - a.release_date)
}
sortRDDesc(dataGhibli)

//console.log(dataGhibli.sort((a,b) => b.release_date - a.release_date))








