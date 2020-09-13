const service = require('../service/service-imc');

describe('ServiceIMC', () => {
  it('calculateIMC', async () => {
    const mock = jest.fn();
    service.calculate = mock.mockReturnValue(25);
    service.score = mock.mockReturnValue({ index: 'peso normal' });
    const result = await service.calculateIMC(168, 80);
    expect(result).resolves.toMatchObject({
      score: 'acima do peso',
      imc: '28.3',
    });
  });
});
