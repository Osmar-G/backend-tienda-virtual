
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Bienvenido al servidor de Node.js'
  });
});

const port = process.env.PORT || 8000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;