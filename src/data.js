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

/*export const anotherExample = () => {
  return 'OMG';
};


