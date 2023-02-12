const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função com parâmetro vazio retorna o objeto com o horário de funcionamento', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toStrictEqual(expected);
  });

  it('Verifica se a função com o dia errado retorna uma mensagem de erro', () => {
    expect(() => getOpeningHours('fri', '12:00-PM')).toThrow();
  });

  it('Verifica os casos de erro da função', () => {
    expect(() => getOpeningHours('friday', '1b:00-PM')).toThrow();
    expect(() => getOpeningHours('friday', '10:b0-PM')).toThrow();
    expect(() => getOpeningHours('friday', '10:00-BM')).toThrow();
    expect(() => getOpeningHours('friday', '13:00-PM')).toThrow();
    expect(() => getOpeningHours('friday', '12:60-PM')).toThrow();
  });

  it('Verifica o horário que o zoológico está fechado', () => {
    expect(getOpeningHours('monday', '01:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('thursday', '12:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica o horário que o zoológico está aberto', () => {
    expect(getOpeningHours('thursday', '12:00-PM')).toBe('The zoo is open');
  });
});
