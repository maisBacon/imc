const { Router } = require('express');

const routes = new Router();

const AsyncMiddleware = require('./middlewares/try_catch');
const ControllerIMC = require('./controller/controller-imc');

routes.get('/api/imc', AsyncMiddleware.tryCatch(ControllerIMC.getIMC));

module.exports = routes;
