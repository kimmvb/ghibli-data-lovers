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

export const filterImport = {
  // Se crea funcion para recibir data de peliculas y el nombre de productor y filtra
  // para volver a mostrar las peliculas se llama a la funcion createfilms
  filterForProducers: (films, producerName) => {
    if (producerName === 'todos' || producerName === "") {
      return films;
    } else {
      const dataFiltered = films.filter(function (film) {
        return film.producer === producerName
      });
      return dataFiltered;
    }
  }
}

export const orderImport = {
  sortAToZTitle: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.sort((a, b) => a.title < b.title ? -1 : 1);
    } else if (tabActive === 'Characters') {
      return data.sort((a, b) => a.name < b.name ? -1 : 1);
    } else if (tabActive === 'Vehicles') {
      return data.sort((a, b) => a.name < b.name ? -1 : 1);
    } else {
      return data.sort((a, b) => a.name < b.name ? -1 : 1);
    }
  },

  sortZToATitle: (data, tabActive) => {
    if (tabActive === 'Movies') {
      return data.sort((a, b) => a.title > b.title ? -1 : 1);
    } else if (tabActive === 'Characters') {
      return data.sort((a, b) => a.name > b.name ? -1 : 1);
    } else if (tabActive === 'Vehicles') {
      return data.sort((a, b) => a.name > b.name ? -1 : 1);
    } else {
      return data.sort((a, b) => a.name > b.name ? -1 : 1);
    }
  },

  yearsDown: (data) => {
    return data.sort(function (a, b) {
      return a - b;
    });
  },
  //función años ascendente
  yearsUp: (data) => {
    return data.sort(function (a, b) {
      return b - a;
    });
  }

}
