const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const patientRoutes = require('./controllers/patients');
app.use('/patient', patientRoutes);

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.post('/', (req, res) => {
  res.status(405).send('Not allowd!');
});

module.exports = app;
