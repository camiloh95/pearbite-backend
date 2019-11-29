const app = require('express').Router();

const IterationController = require('../controllers/iteration.controller');

let anInterationController = new IterationController();

app.get('/read', anInterationController.read);
app.post('/save', anInterationController.save);
app.put('/update', anInterationController.update);
app.delete('/delete', anInterationController.delete);

module.exports = app;