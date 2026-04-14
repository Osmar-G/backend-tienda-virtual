module.exports = (app) => {
  app.use('/api/categorias', require('./router_categoria'));
  app.use('/api/productos', require('./router_productos'));
  app.use('/api/usuarios', require('./router_usuario'));
  app.use('/api/carrito', require('./router_carrito'));
  app.use('/api/carrito-detalle', require('./router_carrito_detalle'));
};