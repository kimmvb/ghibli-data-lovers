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

filter.addEventListener('change', function (event) {
    if (event.target.value === 'personajes') {
        //const orderedData = data.films.sort();
        //createFilms(orderedData);
    }
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