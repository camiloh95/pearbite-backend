const app = require('express').Router();

app.get('/test', require('../controllers/test.controller'));

module.exports = app;