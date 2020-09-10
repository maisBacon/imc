const logger = require('../util/log');
const constants = require('../util/constants');

class ErrorHandler {
  throw(err, req, res, next) {
    logger.error(err.message);
    res.status(500).send({ message: constants.generic });
  }
}

module.exports = new ErrorHandler();
