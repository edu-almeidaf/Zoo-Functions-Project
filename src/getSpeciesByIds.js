const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((specie) =>
  ids.some((element) => element === specie.id));
module.exports = getSpeciesByIds;
