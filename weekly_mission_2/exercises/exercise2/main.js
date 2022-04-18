const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

explorers.forEach((explorer) => {
  // Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
  console.log(explorer.name);

  // Imprime el stack de cada explorer, usa FOR EACH
  console.log(explorer.stack);
});

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const stacks = explorers.map((explorer) => explorer.stack);
console.log(stacks);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
let explorers_stack_with_js = explorers.map((explorer) => {
  if (explorer.stack.includes("js")) {
    return explorer.stack;
  }
});

explorers_stack_with_js = explorers_stack_with_js.filter(function (element) {
  return element !== undefined;
});

console.log(explorers_stack_with_js);

// Busca el primer explorer que sea de la CDMX, usa FIND
const explorer_cdmx = explorers.find((e) => e.city === "CDMX");
console.log(explorer_cdmx.name);

// Obtén la suma de todos los exercises_completed, usa REDUCE
const total_completado = explorers.reduce(
  (acc, lista_explorers) => acc + lista_explorers.exercises_completed,
  0
);
console.log(total_completado);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const frontend_finished_status = (explorer) =>
  explorer.missions.frontend.isFinished === true;

console.log(explorers.some(frontend_finished_status));

const onboarding_finished_status = (explorer) =>
  explorer.missions.onboarding.isFinished === true;

console.log(explorers.every(onboarding_finished_status));
