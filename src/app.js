require('./config/db');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());

// Routes
app.use('/', require('./api/routes/index'));

app.listen(port, () => {
    console.log('Server listening on port:', port);
});