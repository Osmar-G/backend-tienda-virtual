
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
require('dotenv').config();

const app = express(); // ✅ primero se crea app

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
require('./router/index')(app); // ✅ después de crear app

// Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Bienvenido al servidor de Node.js'
  });
});

// Puerto
const port = process.env.PORT || 8000;
app.set('port', port);

// Servidor
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;