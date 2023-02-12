const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  const verifyAge = getAnimals.residents.every((resident) => resident.age > age);
  return verifyAge;
};

module.exports = getAnimalsOlderThan;
