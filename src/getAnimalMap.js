const { species } = require('../data/zoo_data');

const getLocation = () => species.reduce((acc, { location, name }) => {
  acc[location].push(name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const genderFilter = (gender, residents) => residents
  .filter((resident) => resident.sex === gender)
  .map((animal) => animal.name);

const speciesSex = (name, gender, residents) => ({ [name]: genderFilter(gender, residents) });

const speciesSexSorted = (name, gender, residents) => ({ [name]: genderFilter(gender, residents)
  .sort() });

const filterSpecies = (gender, sorted, func1, func2) => species
  .reduce((acc, { location, name, residents }) => {
    if (!sorted) {
      acc[location].push(func1(name, gender, residents));
    } else {
      acc[location].push(func2(name, gender, residents));
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });

const locationSpecies = (name, gender, residents) => ({ [name]: residents
  .map((names) => names.name) });

const locationSpeciesSorted = (name, gender, residents) => ({ [name]: residents
  .map((nomes) => nomes.name).sort() });

const firstVerification = (includeNames, sorted, sex) => {
  if (!includeNames) return getLocation();
  if (includeNames && !sorted && !sex) {
    return filterSpecies(sex, sorted, locationSpecies, locationSpeciesSorted);
  }
};

const secondVerification = (options, sorted, sex) => {
  if (options.includeNames && sorted && !sex) {
    return true;
  }
  return false;
};

const getAnimalMap = (options) => {
  if (!options) return getLocation();

  const { includeNames, sorted, sex } = options;

  if (firstVerification(includeNames, sorted, sex)) {
    return firstVerification(includeNames, sorted, sex);
  }

  if (secondVerification(options, sorted, sex)) {
    return filterSpecies(sex, sorted, locationSpecies, locationSpeciesSorted);
  }

  return filterSpecies(sex, sorted, speciesSex, speciesSexSorted);
};

module.exports = getAnimalMap;
