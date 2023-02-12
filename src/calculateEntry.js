const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const entries = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return entries;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const persons = countEntrants(entrants);
  const priceForChild = persons.child * data.prices.child;
  const priceForAdult = persons.adult * data.prices.adult;
  const priceForSenior = persons.senior * data.prices.senior;
  const totalEntries = priceForChild + priceForAdult + priceForSenior;
  return totalEntries;
};

module.exports = { calculateEntry, countEntrants };
