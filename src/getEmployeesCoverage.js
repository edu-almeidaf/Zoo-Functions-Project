const data = require('../data/zoo_data');

const getSpecies = (ids) => {
  const speciesNames = [];
  const speciesLocation = [];

  ids.forEach((id) => {
    const { name, location } = data.species.find((specie) => specie.id === id);
    speciesNames.push(name);
    speciesLocation.push(location);
  });

  return {
    names: speciesNames,
    locations: speciesLocation,
  };
};

const getEmployee = (empregado) => ({
  id: empregado.id,
  fullName: `${empregado.firstName} ${empregado.lastName}`,
  species: getSpecies(empregado.responsibleFor).names,
  locations: getSpecies(empregado.responsibleFor).locations,
});

const getAllEmployees = () => {
  const employees = [];
  data.employees.forEach((employee) => {
    employees.push(getEmployee(employee));
  });

  return employees;
};

const getEmployeesCoverage = (info) => {
  if (!info) {
    return getAllEmployees();
  }

  const empregado = data.employees.find((employee) => employee.firstName === info.name
  || employee.lastName === info.name || employee.id === info.id);

  if (empregado) {
    return getEmployee(empregado);
  }

  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
