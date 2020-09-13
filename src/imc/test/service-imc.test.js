const service = require('../service/service-imc');

describe('ServiceIMC', () => {
  it('calculateIMC', async () => {
    const result = await service.calculateIMC(168, 80);
    expect(Promise.resolve(result)).resolves.toStrictEqual({
      imc: '28.3',
      score: 'acima do peso',
    });
  });
  it('calculateIMC', async () => {
    const result = await service.calculateIMC(168, 800);
    expect(Promise.resolve(result)).resolves.toStrictEqual({
      imc: '283.4',
      score: null,
    });
  });
});
