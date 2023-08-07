import data from "./data/ghibli/ghibli.js";
import { showTab, filterImport, orderImport, actives } from "./data.js"

const sectionHome = document.getElementById("index");
const sectionMovies = document.getElementById("movies");
const root = document.getElementById("root");
const enterButton = document.getElementById("action-enter");
const containerVehicles = document.getElementById("vehicles-small-container")
const charactersRoot = document.getElementById("characters-small-container");
const locationsRoot = document.getElementById("locations-small-container");
const filter = document.getElementById("button-filter");
const filterProducer = document.getElementById('button-filter-producer');

const filmsData = data.films;
const peopleData = [];
data.films.forEach(element => {
    element.people.forEach(row => {
        peopleData.push(row);
    });
});

const vehiclesData = [];
data.films.forEach(element => {
    element.vehicles.forEach(row => {
        vehiclesData.push(row);
    });
});

const locationsData = [];
data.films.forEach(element => {
    element.locations.forEach(row => {
        locationsData.push(row);
    });
});

//Pestaña a pestaña
document.querySelectorAll('a[data-tab]').forEach(link => {
    link.addEventListener("click", (event) => {
        document.getElementById("button-filter").value = '';
        event.preventDefault();
        actives.removerActives();
        event.target.classList.add('active');
        const tabName = event.target.dataset.tab;
        const tabContents = document.querySelectorAll('.tab-content');
        showTab(tabName, tabContents);
    });
});

// Con un querySelectorAll se llaman a todos los elementos que cumplan con el atrubuto 'data-tab' en las etiquetas 'a'(enlace).
//Con la función .forEach() se iteran todos los elementos dentro de un array, tiene como parámetro 'link' y ese 'link' responderá a un event listener que se accionará con un click.
//El evento (conectado con una función de flechas, teniendo como parámetro 'event') que ocurrirá cuando se haga click es el siguiente: 
//1. Se utiliza .preventDefault() para eeevitar que el enlace realice su acción predeterminada de navegar a una nueva página.
//2. Se crea un variable que contiene el evento, con el target (representa el elemento HTML en el cual ocurrió el evento), dataset (propiedad especial del objeto target que nos permite acceder a los atributos de datos (atributos con el prefijo data-) del elemento HTML) y tab.
//3.Se accede a la clase 'tab-content' a través de un querySelectorAll.
//4. Se llama a la función "showTab" con los parámetros de las dos varibles anteriores.

//Index a home

createFilms(filmsData);
createVehicles(vehiclesData);
printDataCharacters(peopleData);
createLocations(locationsData);

enterButton.addEventListener("click", function (event) {
    event.preventDefault();
    sectionHome.classList.remove("show");
    sectionHome.classList.add("hidden");
    sectionMovies.classList.remove("hidden");
    sectionMovies.classList.add("show");
    document.body.classList.remove("body-blue");
});

filterProducer.addEventListener('change', function (event) {
    createFilms(filterImport.filterForProducers(filmsData, event.target.value));
});

//se dedeclara metodo para escuchar el evento change del selector ordenamiento (select)
// se crea una constante para detectar el tabactivo, (es decir que menu estoy viendo)
// innertext capturo el texto de cada data-tab que tenga la clase active
// Se hace un if de acuerdo al valor seleccionado, event (hace referencia a lo que se escucha en html) select
// Target es atributo de select al igual que value, los que capturan el valor

filter.addEventListener('change', function (event) {
    const tabActive = document.querySelectorAll('a[data-tab].active')[0].innerText;
    if (event.target.value === '') {
        // si el valor que obtengo es "nada" 
        // validar que debemos hacer cuando no seleccione nada
    }
    if (event.target.value === 'a-z') { // si el valor es igual a "a-z" 
        callOrderAZ(tabActive); //llama a funcion calloderaz
        return;
    }
    if (event.target.value === 'z-a') {
        callOrderZA(tabActive);
        return;
    }
    if (event.target.value === 'o-n') {
        // llamar  una funcion
        return;
    }
    if (event.target.value === 'n-o') {
        // llamar  una funcion
        return; // estos return para no hacer tanto else if else if else if else 
        // se llama a una RETURN para detener el flujo de js: nombre técnico es EARLY RETURN;
    }
});

// se crean estas 2 funciones para desacoplar el listener del selector 
// y para saber en que pestaña se encuentra el usuario.
function callOrderAZ(tabActive) {
    if (tabActive === 'Movies') {
        createFilms(orderImport.sortAToZTitle(filmsData, tabActive));
    } else if (tabActive === 'Characters') {
        printDataCharacters(orderImport.sortAToZTitle(peopleData, tabActive));
    } else if (tabActive === 'Vehicles') {
        createVehicles(orderImport.sortAToZTitle(vehiclesData, tabActive));
    } else {
        createLocations(orderImport.sortAToZTitle(locationsData, tabActive));
    }
}

function callOrderZA(tabActive) {
    if (tabActive === 'Movies') {
        createFilms(orderImport.sortZToATitle(filmsData, tabActive));
    } else if (tabActive === 'Characters') {
        printDataCharacters(orderImport.sortZToATitle(peopleData, tabActive));
    } else if (tabActive === 'Vehicles') {
        createVehicles(orderImport.sortZToATitle(vehiclesData, tabActive));
    } else {
        createLocations(orderImport.sortZToATitle(locationsData, tabActive));
    }
}


// 
function createFilms(films) {
    root.innerHTML = "";
    for (let i = 0; i < films.length; i++) {
        root.innerHTML += `<figure class="poster">
        <div class="info">
            <p><b>Rating<b/>: ⭐${films[i].rt_score} / <b>Año:</b> ${films[i].release_date}</p> 
            <p>${films[i].description}</p>
            <br>
            <p>Director: <b>${films[i].director}</b></p> 
            <p>Productor: <b>${films[i].producer}</b></p> 
        </div>
        <img src="${films[i].poster}" alt="${films[i].title}" />
        <figcaption>${films[i].title}</figcaption> 
        </figure>`;
    }
}
function createVehicles(vehicles) {
    containerVehicles.innerHTML = "";
    for (let i = 0; i < vehicles.length; i++) {
        containerVehicles.innerHTML += `<figure class = "content">
        <img src="${vehicles[i].img}" alt="${vehicles[i].id}" />
            <figcaption>${vehicles[i].name}</figcaption>
            <p>"${vehicles[i].description}"</p>
    </figure>`;

    }
}


function createLocations(locations) {
    locationsRoot.innerHTML = "";
    for (let i = 0; i < locations.length; i++) {
        locationsRoot.innerHTML += `<figure class = "content">
        <img src="${locations[i].img}" alt="${locations[i].id}" />
            <figcaption>${locations[i].name}</figcaption>
            <p>This area has a climate ${locations[i].climate}</p>
            <p>and a piece of land of ${locations[i].terrain}</p>
            <p>It has a water surface of ${locations[i].surface_water}</p>
        </figure>`;
    }
}

function printDataCharacters(people) {
    charactersRoot.innerHTML = "";
    for (let i = 0; i < people.length; i++) {
        charactersRoot.innerHTML += `<figure class = "content">
        <img src="${people[i].img}" alt="${people[i].id}" />
        <figcaption>${people[i].name}</figcaption>
        <hr>
        <p><strong>Age</strong>:  ${people[i].age}</p>
        <p><strong>Specie</strong>: ${people[i].specie}</p>
        <p><strong>Gender</strong>: ${people[i].gender}</p>
        </figure>`;
    }
}

// validar si estas dos funciones se van a utilizar
//console.log(dataGhibli.sort((a,b) => a.title > b.title ? -1 : 1))

function sortRDAsc(data) {
    data.sort((a, b) => a.release_date - b.release_date)
}

//console.log(dataGhibli.sort((a,b) => a.release_date - b.release_date))

function sortRDDesc(data) {
    data.sort((a, b) => b.release_date - a.release_date)
}

//console.log(dataGhibli.sort((a,b) => b.release_date - a.release_date))








