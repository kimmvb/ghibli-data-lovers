import data from "./data/ghibli/ghibli.js";

const sectionHome = document.getElementById("index");
const sectionMovies = document.getElementById("movies");
const root = document.getElementById("root");
const enterButton = document.getElementById("action-enter");
const containerVehicles = document.getElementById("vehicles-small-container")
const dataGhibli = data.films;
const charactersRoot = document.getElementById("characters-small-container");
const locations = document.getElementById("locations-small-container");
// const producers = document.getElementById("producers-small-container")


// const filter = document.getElementById("button-filter");
const filterProducer = document.getElementById('button-filter-producer');


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

filterProducer.addEventListener('change', function (event) {
    filterForProducers(data, event.target.value);
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
            containerVehicles.innerHTML += `<figure class = "content">
            <img src="${data.films[i].vehicles[v].img}" alt="${data.films[i].vehicles[v].id}" />
             <figcaption>"${data.films[i].vehicles[v].name}"</figcaption>
             <p>"${data.films[i].vehicles[v].description}"</p>
        </figure>`;

        }
    }

}

function createLocations(data) {
    for (let i = 0; i < data.films.length; i++) {
        for (let l = 0; l < data.films[i].locations.length; l++) {
            locations.innerHTML += `<figure class = "content">
            <img src="${data.films[i].locations[l].img}" alt="${data.films[i].locations[l].id}" />
             <figcaption>"${data.films[i].locations[l].name}"</figcaption>
             <p>"${data.films[i].locations[l].description}"</p>
        </figure>`;

        }
    }

}

function printDataCharacters(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].people.length; j++) {
            //console.log(array[i].people.length);
            charactersRoot.innerHTML += `<figure class = "content">
         <img src="${array[i].people[j].img}" alt="${array[i].people[j].id}" />
         <figcaption>"${array[i].people[j].name}"</figcaption>
         <hr>
            <p><strong>Age</strong>:  ${array[i].people[j].age}</p>
            <p><strong>Specie</strong>: ${array[i].people[j].specie}</p>
            <p><strong>Gender</strong>: ${array[i].people[j].gender}</p>
        </figure>`;
        }
    }
}


// filtrar por productor
function filterForProducers(data, producerName) {
    if (producerName === 'todos') {
        createFilms(data);
    } else {
        const dataFiltered = data.films.filter(function (film) {
            return film.producer === producerName
        });
        createFilms({ films: dataFiltered });
    }
}



//función alfabéticamente ascendente
function aToZ(array) {
    const titles = [];
    for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title);
    }
    console.log(titles.sort());
}
aToZ(dataGhibli);

//función alfabéticamente descendente
function zToa(array) {
    const titles = [];
    for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title);
    }
    console.log(titles.reverse());
}
zToa(dataGhibli);

//función años descendente
function yearsDown(array) {
    const yearsMovies = [];
    for (let i = 0; i < array.length; i++) {
        yearsMovies.push(array[i].release_date);
    }
    console.log(
        yearsMovies.sort(function (a, b) {
            return a - b;
        }),
    );
}
yearsDown(dataGhibli);

//función años ascendente
function yearsUp(array) {
    const yearsMovies = [];
    for (let i = 0; i < array.length; i++) {
        yearsMovies.push(array[i].release_date);
    }
    console.log(
        yearsMovies.sort(function (a, b) {
            return b - a;
        }),
    );
}
yearsUp(dataGhibli);

//https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
