import { orderImport } from "/Users/Usuario/ghibli-data-lovers/src/data.js";

const TITLES_A_TO_Z = [
  "Castle in the Sky",
  "Porco Rosso",
  "My Neighbor Totoro",
  "The Cat Returns",
];

describe("orderImport", () => {
  describe("orderimport.sortAToZTitle", () =>
    it(
      'debería retornar los título de la A a la Z "' + TITLES_A_TO_Z + '"',
      () => {
        expect(orderImport.sortAToZTitle(TITLES_A_TO_Z)).toBe([
          "Castle in the Sky",
          "My Neighbor Totoro",
          "Porco Rosso",
          "The Cat Returns",
        ]);
      },
    ));
});


/*describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});*/
