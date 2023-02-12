const { employees } = require('../data/zoo_data');

const isManager = (id) => {
  const manager = employees.find((employee) => employee.id === id);
  return employees.some((employee) => employee.managers.includes(manager.id));
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = employees.filter((employee) =>
    employee.managers.includes(managerId));
  return relatedEmployees.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
