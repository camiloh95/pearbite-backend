const app = require('express').Router();

const VideogameController = require('../controllers/videogame.controller');

let anVideogameController = new VideogameController();

app.get('/read', anVideogameController.read);
app.post('/save', anVideogameController.save);

module.exports = app;