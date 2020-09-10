const yup = require('yup');
const constants = require('../util/constants');

class Validation {
  async check(req, res, next) {
    const schema = yup.object().shape({
      height: yup
        .number()
        .required()
        .positive()
        .integer(),
      weight: yup
        .number()
        .required()
        .positive()
        .integer(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ message: constants.invalidParams });
    }
    return next();
  }
}

module.exports = new Validation();
