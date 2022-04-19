const Superhero = require("../app/superhero");

describe("Unit Test for Superhero", () => {
  test("Case 1: Get a Superhero", () => {
    const ironman = new Superhero("Iron Man", "Tony Stark", "Robert");

    expect(ironman.name).toBe("Iron Man");
    expect(ironman.actor).toBe("Robert");
    expect(ironman.heroName).toBe("Tony Stark");
  });
});
