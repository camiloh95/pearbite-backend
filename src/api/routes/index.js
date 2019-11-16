const app = require('express').Router();

const IterationController = require('../controllers/iteration.controller');

let anInterationController = new IterationController();

app.get('/iteration/read', anInterationController.read);
app.post('/iteration/save', anInterationController.save);

module.exports = app;