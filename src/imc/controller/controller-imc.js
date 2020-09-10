const logger = require('../util/log');
const service = require('../service/service-imc');
const constants = require('../util/constants');

class ControllerIMC {
  async getIMC(req, res, next) {
    const { height, weight } = req.query;
    logger.info(`height ${height} and weight ${weight}`);
    try {
      logger.info('Calling Services');
      const response = await service.calculateIMC(height, weight);

      if (!response.score) {
        logger.error(constants.invalidParams);
        return res.status(400).send({ message: constants.invalidParams });
      }

      logger.info(response.score);
      res.status(200).send({ result: response });
      return next();
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new ControllerIMC();
