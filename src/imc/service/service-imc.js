const constants = require('../util/constants');
const logger = require('../util/log');

class ServiceIMC {
  async calculateIMC(height, weight) {
    logger.info('Calling Services');
    const imc = this.calculate(height, weight);
    const { index } = this.score(imc);
    return { index, imc };
  }

  calculate(height, weight) {
    logger.info('calculate imc');
    const imc = weight / (height * height);
    return (imc * 10000).toFixed(1);
  }

  score(imc) {
    logger.info('calculate score');
    return constants.imcRange.find(({ min, max, index }) => {
      return imc > min && imc < max && index;
    });
  }
}

module.exports = new ServiceIMC();
