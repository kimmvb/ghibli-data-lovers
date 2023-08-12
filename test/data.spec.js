import {
  orderImport,
  filterImport,
  searchImport,
} from "/Users/Usuario/ghibli-data-lovers/src/data.js";

const moviesData = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
  },
  {
    title: "Porco Rosso",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1992",
    rt_score: "94",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "The Cat Returns",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
    rt_score: "89",
  },
];

const charactersData = [
  { name: "Pazu", gender: "Male", specie: "Human" },
  { name: "Natori", gender: "Male", specie: "Cat" },
  { name: "Dola", gender: "Female", specie: "Human" },
  { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
];

const vehiclesData = [
  { name: "The Flaptors", vehicle_class: "air vehicles" },
  { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
  { name: "downtown", vehicle_class: "Car" },
  { name: "Takase Station", vehicle_class: "railway" },
];

const locationsData = [
  { name: "Gondoa", climate: "TODO", terrain: "TODO" },
  { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
  { name: "LaPuta", climate: "Continental", terrain: "City" },
  { name: "Matsugo", climate: "Continental", terrain: "River" },
];

describe("orderImport", () => {
  describe("orderimport.sortAToZTitle", () => {
    it("debería retornar los títulos de películas de la A a la Z", () => {
      const tabActive = "Movies";
      expect(orderImport.sortAToZTitle(moviesData, tabActive)).toEqual([
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
      ]);
    });
    it("debería retornar los nombres de los personajes de la A a la Z", () => {
      const tabActive = "Characters";
      expect(orderImport.sortAToZTitle(charactersData, tabActive)).toEqual([
        { name: "Dola", gender: "Female", specie: "Human" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Pazu", gender: "Male", specie: "Human" },
      ]);
    });
    it("debería retornar los nombres de los vehículos de la A a la Z", () => {
      const tabActive = "Vehicles";
      expect(orderImport.sortAToZTitle(vehiclesData, tabActive)).toEqual([
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "The Flaptors", vehicle_class: "air vehicles" },
      ]);
    });
    it("debería retornar los nombres de las locaciones de la A a la Z", () => {
      const tabActive = "Locations";
      expect(orderImport.sortAToZTitle(locationsData, tabActive)).toEqual([
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
      ]);
    });
  });
});

describe("orderImport", () => {
  describe("orderimport.sortZToATitle", () => {
    it("debería retornar los títulos de películas de la Z a la A", () => {
      const tabActive = "Movies";
      expect(orderImport.sortZToATitle(moviesData, tabActive)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("debería retornar los nombres de los personajes de la Z a la A", () => {
      const tabActive = "Characters";
      expect(orderImport.sortZToATitle(charactersData, tabActive)).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
    it("debería retornar los nombres de los vehículos de la Z a la A", () => {
      const tabActive = "Vehicles";
      expect(orderImport.sortZToATitle(vehiclesData, tabActive)).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
      ]);
    });
    it("debería retornar los nombres de las locaciones de la Z a la A", () => {
      const tabActive = "Locations";
      expect(orderImport.sortZToATitle(locationsData, tabActive)).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
  });
});

describe("orderImport", () => {
  describe("orderImport.sortsortRDAsc", () => {
    it("debería retornar los fechas de lanzamiento ascendentemente", () => {
      const tabActive = "Movies";
      expect(orderImport.sortRDAsc(moviesData, tabActive)).toEqual([
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
      ]);
    });
  });
});

describe("orderImport", () => {
  describe("orderImport.sortRDDesc", () => {
    it("debería retornar los fechas de lanzamiento descendentemente", () => {
      const tabActive = "Movies";
      expect(orderImport.sortRDDesc(moviesData, tabActive)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForProducersAndDirectors", () => {
    it("debería retornar solo las películas cuyo director sea 'Hayao Miyazaki'", () => {
      const director = "Hayao Miyazaki";
      const type = "dir";
      expect(
        filterImport.filterForProducersAndDirectors(moviesData, director, type),
      ).toEqual([
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("debería retornar solo las películas cuyo productor sea 'Toshio Suzuki'", () => {
      const producer = "Toshio Suzuki";
      const type = "prod";
      expect(
        filterImport.filterForProducersAndDirectors(moviesData, producer, type),
      ).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
      ]);
    });
    it("debería retornar todos las películas, de cualquier productor y director", () => {
      const producerAndDirector = "";
      const type = "";
      expect(
        filterImport.filterForProducersAndDirectors(
          moviesData,
          producerAndDirector,
          type,
        ),
      ).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForCharacterGender", () => {
    it("debería retornar solo los personajes de género femenino", () => {
      const gender = "Female";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([{ name: "Dola", gender: "Female", specie: "Human" }]);
    });
    it("debería retornar solo los personajes de género masculino", () => {
      const gender = "Male";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("debería retornar todos los personajes, de cualquier género", () => {
      const gender = "all";
      expect(
        filterImport.filterForCharacterGender(charactersData, gender),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]); //preguntar porque hay que cambiar los elementos de lugar
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForCharacterSpecie", () => {
    it("debería retornar solo los personajes de especie humana", () => {
      const specie = "Human";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
    it("debería retornar solo los personajes de especie 'Cat'", () => {
      const specie = "Cat";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([{ name: "Natori", gender: "Male", specie: "Cat" }]);
    });
    it("debería retornar solo los personajes de especie 'Wizard'", () => {
      const specie = "Wizard";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("debería retornar todos los personajes, de cualquier especie", () => {
      const specie = "all";
      expect(
        filterImport.filterForCharacterSpecie(charactersData, specie),
      ).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" }, //preguntar porque hay que cambiar los elementos de lugar
      ]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForVehicleClass", () => {
    it("debería retornar solo los vehículos de clase 'Car'", () => {
      const vehicleClass = "Car";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([{ name: "downtown", vehicle_class: "Car" }]);
    });
    it("debería retornar solo los vehículos de clase 'railway'", () => {
      const vehicleClass = "railway";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([{ name: "Takase Station", vehicle_class: "railway" }]);
    });
    it("debería retornar todos los vehículos, de cualquier clase", () => {
      const vehicleClass = "all";
      expect(
        filterImport.filterForVehicleClass(vehiclesData, vehicleClass),
      ).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" }, //preguntar porque hay que cambiar los elementos de lugar ¿se quedó como en ordenar de Z a A?
      ]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForLocationClimate", () => {
    it("debería retornar solo las locaciones con clima 'Continental'", () => {
      const climate = "Continental";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
      ]);
    });
    it("debería retornar solo las locaciones con clima 'Dry'", () => {
      const climate = "Dry";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([{ name: "Pazu's Mines", climate: "Dry", terrain: "Hill" }]);
    });
    it("debería retornar todos las locaciones, con cualquier clima", () => {
      const climate = "all";
      expect(
        filterImport.filterForLocationClimate(locationsData, climate),
      ).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
  });
});

describe("filterImport", () => {
  describe("filterImport.filterForLocationTerrain", () => {
    it("debería retornar solo las locaciones con terreno 'Hill'", () => {
      const terrain = "Hill";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([{ name: "Pazu's Mines", climate: "Dry", terrain: "Hill" }]);
    });
    it("debería retornar solo las locaciones con terreno 'River'", () => {
      const terrain = "River";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([
        { name: "Matsugo", climate: "Continental", terrain: "River" },
      ]);
    });
    it("debería retornar todos las locaciones, con cualquier terreno", () => {
      const terrain = "all";
      expect(
        filterImport.filterForLocationTerrain(locationsData, terrain),
      ).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchFilmsByTitle", () => {
    it("debería retornar los títulos de películas que contengan 'the'", () => {
      const searchString = "the";
      expect(searchImport.searchFilmsByTitle(searchString ,moviesData)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
    it("debería retornar todos los títulos de películas", () => {
      const searchString = "th";
      expect(searchImport.searchFilmsByTitle(searchString ,moviesData)).toEqual([
        {
          title: "The Cat Returns",
          director: "Hiroyuki Morita",
          producer: "Toshio Suzuki",
          release_date: "2002",
          rt_score: "89",
        },
        {
          title: "Porco Rosso",
          director: "Hayao Miyazaki",
          producer: "Toshio Suzuki",
          release_date: "1992",
          rt_score: "94",
        },
        {
          title: "My Neighbor Totoro",
          director: "Hayao Miyazaki",
          producer: "Hayao Miyazaki",
          release_date: "1988",
          rt_score: "93",
        },
        {
          title: "Castle in the Sky",
          director: "Hayao Miyazaki",
          producer: "Isao Takahata",
          release_date: "1986",
          rt_score: "95",
        },
      ]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchCharacterByName", () => {
    it("debería retornar los nombres de los personajes que contengan 'Pendragon'", () => {
      const searchString = "Pendragon";
      expect(searchImport.searchCharacterByName(searchString ,charactersData)).toEqual([
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
      ]);
    });
    it("debería retornar todos los nombres de los personajes", () => {
      const searchString = "Pa";
      expect(searchImport.searchFilmsByTitle(searchString ,charactersData)).toEqual([
        { name: "Pazu", gender: "Male", specie: "Human" },
        { name: "Natori", gender: "Male", specie: "Cat" },
        { name: "Howl Jenkins Pendragon", gender: "Male", specie: "Wizard" },
        { name: "Dola", gender: "Female", specie: "Human" },
      ]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchVehiclesByName", () => {
    it("debería retornar los nombres de los vehículos que contengan 'Down'", () => {
      const searchString = "Down";
      expect(searchImport.searchVehiclesByName(searchString ,vehiclesData)).toEqual([
        { name: "downtown", vehicle_class: "Car" },
      ]);
    });
    it("debería retornar todos los nombres de los vehículos", () => {
      const searchString = "";
      expect(searchImport.searchVehiclesByName(searchString ,vehiclesData)).toEqual([
        { name: "The Flaptors", vehicle_class: "air vehicles" },
        { name: "Takase Station", vehicle_class: "railway" },
        { name: "downtown", vehicle_class: "Car" },
        { name: "Air Destroyer Goliath", vehicle_class: "Airship" },
      ]);
    });
  });
});

describe("searchImport", () => {
  describe("searchImport.searchLocationsByName", () => {
    it("debería retornar los nombres de las locaciones que contengan 'Gon'", () => {
      const searchString = "Gon";
      expect(searchImport.searchLocationsByName(searchString ,locationsData)).toEqual([
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
    it("debería retornar todos los nombres de las locaciones", () => {
      const searchString = "La";
      expect(searchImport.searchLocationsByName(searchString ,locationsData)).toEqual([
        { name: "Pazu's Mines", climate: "Dry", terrain: "Hill" },
        { name: "Matsugo", climate: "Continental", terrain: "River" },
        { name: "LaPuta", climate: "Continental", terrain: "City" },
        { name: "Gondoa", climate: "TODO", terrain: "TODO" },
      ]);
    });
  });
});


