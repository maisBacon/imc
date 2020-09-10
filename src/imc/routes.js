const { Router } = require('express');

const routes = new Router();

const ControllerIMC = require('./controller/controller-imc');

routes.get('/api/imc', ControllerIMC.getIMC);

module.exports = routes;
