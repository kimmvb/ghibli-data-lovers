export const showTab = (tabName, tabContents) => {
  tabContents.forEach(function (tab) {
    tab.style.display = "none";
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = "block";
};

export const actives = {
  removerActives: () => {
    document.querySelectorAll('a[data-tab]').forEach(link => {
      link.classList.remove('active');
    });
  }
}
//se declara una constante como objeto para que este tenga muchas funciones dentro
export const filterImport = {
  // Se crea funcion para recibir data de peliculas y el nombre de productor 
  // para volver a mostrar las peliculas se llama a la funcion createfilms
  filterForProducers: (films, producerName) => {
    if (producerName === 'all' || producerName === "") {
      return films;
    } else {
      const dataFiltered = films.filter(function (film) {
        return film.producer === producerName
      });
      return dataFiltered;
    }
  },
  filterForCharacterGender: (people, genders) => {
    if (genders === 'all' || genders === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.gender === genders
      });
      return dataFiltered;
    }
  },
  filterForCharacterSpecie: (people, species) => {
    if (species === 'all' || species === "") {
      return people;
    } else {
      const dataFiltered = people.filter(function (person) {
        return person.specie === species
      });
      return dataFiltered;
    }
  },
  filterForVehicleClass: (vehicles, classes) => {
    if (classes === 'all' || classes === "") {
      return vehicles;
    } else {
      const dataFiltered = vehicles.filter(function (vehicle) {
        return vehicle.vehicle_class === classes
      });
      return dataFiltered;
    }
  },
}

export const orderImport = {
  sortAToZTitle: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.toSorted((a, b) => a.title < b.title ? -1 : 1);
    } else if (tabActive === 'Characters') {
      return data.toSorted((a, b) => a.name < b.name ? -1 : 1);
    } else if (tabActive === 'Vehicles') {
      return data.toSorted((a, b) => a.name < b.name ? -1 : 1);
    } else {
      return data.toSorted((a, b) => a.name < b.name ? -1 : 1);
    }
  },

  sortZToATitle: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.toSorted((a, b) => a.title > b.title ? -1 : 1);
    } else if (tabActive === 'Characters') {
      return data.toSorted((a, b) => a.name > b.name ? -1 : 1);
    } else if (tabActive === 'Vehicles') {
      return data.toSorted((a, b) => a.name > b.name ? -1 : 1);
    } else {
      return data.toSorted((a, b) => a.name > b.name ? -1 : 1);
    }
  },

  sortRDAsc: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.toSorted((a, b) => a.release_date - b.release_date);
    } else if (tabActive === 'Characters') {
      return data.toSorted((a, b) => a.age - b.age);
    }
  },
  
  sortRDDesc: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.toSorted((a, b) => b.release_date - a.release_date);
    } else if (tabActive === 'Characters') {
      return data.toSorted((a, b) => b.age - a.age);
    }
  },
}
