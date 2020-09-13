const logger = require('../util/log');
const service = require('../service/service-imc');
const constants = require('../util/constants');

class ControllerIMC {
  async getIMC(req, res) {
    const { height, weight } = req.query;
    logger.info(`height ${height} and weight ${weight}`);

    const response = await service.calculateIMC(height, weight);

    if (!response.score) {
      logger.error(constants.invalidParams);
      return res.status(400).send({ message: constants.invalidParams });
    }

    logger.info(response.score);
    res.status(200).send({ result: response });
  }
}

module.exports = new ControllerIMC();
