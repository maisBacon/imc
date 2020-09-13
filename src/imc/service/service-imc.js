const constants = require('../util/constants');
const logger = require('../util/log');

class ServiceIMC {
  async calculateIMC(height, weight) {
    logger.info('Calling Services');
    const imc = this.calculate(height, weight);
    const score = this.score(imc);
    return { score, imc };
  }

  calculate(height, weight) {
    logger.info('calculate imc');
    const imc = weight / (height * height);
    return (imc * 10000).toFixed(1);
  }

  score(imc) {
    logger.info('calculate score');
    const result = constants.imcRange.find(({ min, max }) => {
      return imc > min && imc < max;
    });
    return result ? result.index : null;
  }
}

module.exports = new ServiceIMC();
