require('./config/db');
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());

app.use(cors());

// Routes
app.use('/videogame', require('./api/routes/videogame'));
app.use('/aspect',    require('./api/routes/aspect.js'));
app.use('/iteration', require('./api/routes/iteration'));

app.listen(port, () => {
    console.log('Server listening on port:', port);
});