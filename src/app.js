const express = require('express');
const routes = require('./imc/routes');
const ErrorHandler = require('./imc/middlewares/error');
const validation = require('./imc/middlewares/validation');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.middlewaresError();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(validation.check);
  }

  middlewaresError() {
    this.server.use(ErrorHandler.throw);
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
