var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app = express();

var appRoutes = require('./routes/appRoutes');

app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(morgan('short'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', appRoutes);

module.exports = app;
