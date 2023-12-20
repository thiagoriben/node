const calculadora = require("./calculadora")


test('somar 1 + 2 to equal 3', () => {
    expect(calculadora.somar(1, 2)).toBe(3);
  });