const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

const verifyMonday = (result) => {
  const object = JSON.parse(JSON.stringify(result));
  object.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return object;
};

const animalsAvailability = () => {
  const result = days.reduce((acc, day) => {
    acc[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.includes(day))
        .map((animal) => animal.name),
    };
    return acc;
  }, {});

  return verifyMonday(result);
};

const getDay = (scheduleTarget) => {
  const result = {};
  if (scheduleTarget === 'Monday') {
    return verifyMonday(result);
  }

  result[scheduleTarget] = {
    officeHour:
      `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes(scheduleTarget))
      .map((animal) => animal.name),
  };
  return result;
};

const getSchedule = (scheduleTarget) => {
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }

  if (days.some((day) => day === scheduleTarget)) {
    return getDay(scheduleTarget);
  }

  return animalsAvailability();
};

module.exports = getSchedule;
