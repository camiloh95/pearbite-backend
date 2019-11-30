const app = require('express').Router();

const IterationController = require('../controllers/iteration.controller');

let anInterationController = new IterationController();

app.get('/read', anInterationController.read);
app.get('/readById', anInterationController.readById);
app.get('/readByVideogameId', anInterationController.readByVideogameId);
app.post('/save', anInterationController.save);
app.put('/update', anInterationController.update);
app.delete('/delete', anInterationController.delete);

module.exports = app;