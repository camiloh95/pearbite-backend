const app = require('express').Router();

const IterationService = require('../../services/iteration.service');
const IterationController = require('../controllers/iteration.controller');

let anInterationController = new IterationController(IterationService);

app.get('/iteration/read', anInterationController.read());

module.exports = app;