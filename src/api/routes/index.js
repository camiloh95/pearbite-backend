const app = require('express').Router();

const IterationController = require('../controllers/iteration.controller');

let anInterationController = new IterationController();

app.get('/iteration/read', anInterationController.read);
app.post('/iteration/save', anInterationController.save);
app.put('/iteration/update', anInterationController.update);
app.delete('/iteration/delete', anInterationController.delete);

module.exports = app;