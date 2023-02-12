const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função handlerElephants Existe e se é uma função', () => {
    expect(handlerElephants).toBeDefined();
    expect(typeof handlerElephants).toBe('function');
  });

  it('Verifica os casos de erro para a função', () => {
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica os parâmetros passados para a função', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('xablau')).toBe(null);
    expect(handlerElephants('location')).toBe('NW');
  });
});
