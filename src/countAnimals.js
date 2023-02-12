const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const zooSpecies = species.map(({ name, residents }) => ({ [name]: residents.length }));
  if (animal === undefined) {
    return Object.assign({}, ...zooSpecies);
  }

  const getAnimals = species.find((specie) => specie.name === animal.species);

  const getGender = getAnimals.residents.filter((resident) => resident.sex === animal.sex);

  if (animal.sex) {
    return getGender.length;
  }

  return getAnimals.residents.length;
};

module.exports = countAnimals;
