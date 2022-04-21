const User = require("./../../app/models/User");

describe("Tests para User", () => {
  test("Requerimiento 1: Creación de User", () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio");

    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
  });

  test("Requerimiento 2: Fechas en atributos de User", () => {
    const user = new User(1, "carlogilmar", "carlo", "Bio");

    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test("Requerimiento 3: Agregando getters", () => {
    const user = new User(1, "carlogilmar", "carlo", "Bio");

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test("Requerimiento 4: Agregando setters", () => {
    const user = new User(1, "carlogilmar", "carlo", "Bio");

    user.setUsername = "Gilmar";
    expect(user.username).toBe("Gilmar");

    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});
