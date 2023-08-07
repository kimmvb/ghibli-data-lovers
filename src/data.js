export const showTab = (tabName, tabContents) => {
  tabContents.forEach(function (tab) {
    tab.style.display = "none";
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = "block";
};

// Se crea la función showTab cuyos parámetros son tabName (nombre de la pestaña) y tabContent (contenido de la pestaña)
//Con la función forEach se itera por cada elemento del contenido de las pestañas, la acción que sucederá por la iteración es que por cada pestaña se ocultará, con un style.display.
//Luego se crea una variable que contiene un DOM que llama al nombre de la pestaña
//A la pestaña seleccionada se le cambiará el display a 'block' para mostrarlo


export function printDataCharacters(array, place) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].people.length; j++) {
      //console.log(array[i].people.length);
      place.innerHTML += `<figure class = "content">
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

const sortFunction = {

  sortAToZTitle: (data) => {
    data.films.sort((a, b) => (a.title < b.title ? -1 : 1));
  },
 
  
  sortZToATitle: (data) => {
    data.films.sort((a, b) => (a.title > b.title ? -1 : 1));
  },
  
  
  sortRDAsc: (data) => {
    data.films.sort((a, b) => a.release_date - b.release_date);
  },
  
  sortRDDesc: (data) => {
    data.films.sort((a, b) => b.release_date - a.release_date);
  },
  
}

export default sortFunction 
/*export const anotherExample = () => {
  return 'OMG';
}*/
