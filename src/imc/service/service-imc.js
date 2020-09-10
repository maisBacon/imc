const constants = require('../util/constants');
const logger = require('../util/log');

class ServiceIMC {
  async calculateIMC(height, weight) {
    const imcValue = this.calculate(height, weight);
    const scoreValue = this.score(imcValue);
    return this.buildResponse(scoreValue, imcValue);
  }

  buildResponse(score, imc) {
    logger.info('build Response');
    const isScore = score === '' ? null : score;
    return { score: isScore, imc: imc.toFixed(1) };
  }

  calculate(height, weight) {
    logger.info('calculate imc');
    const imc = weight / (height * height);
    const imcFixed = imc.toFixed(5);
    const imcFloat = Number.parseFloat(imcFixed);
    return imcFloat * 10000;
  }

  score(imc) {
    logger.info('calculate score');
    let result = '';
    constants.imcRange.forEach(elem => {
      const min = elem[0];
      const max = elem[1];
      if (imc > min && imc < max) {
        const { index } = elem[2];
        result = index;
      }
    });
    return result;
  }
}

module.exports = new ServiceIMC();
