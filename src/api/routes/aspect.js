const app = require('express').Router();

const AspectController = require('../controllers/aspect.controller');

let anAspectController = new AspectController();

app.get('/read', anAspectController.read);
app.post('/save', anAspectController.save);

module.exports = app;