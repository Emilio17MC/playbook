const Ajolonauta = require("./../app/ajolonauta");

describe("Pruebas de unidad de ajolonauta", () => {
  test("Caso de prueba 1: Creación del objeto", () => {
    const woopa = new Ajolonauta("Woopa");

    expect(woopa.name).toBe("Woopa");
  });
});
