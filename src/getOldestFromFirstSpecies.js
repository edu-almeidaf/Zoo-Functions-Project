const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const empregado = data.employees.find((employee) => employee.id === id);
  const specieId = empregado.responsibleFor[0];
  const especie = data.species.find((specie) => specie.id === specieId);
  const residents = especie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(residents);
};

module.exports = getOldestFromFirstSpecies;
