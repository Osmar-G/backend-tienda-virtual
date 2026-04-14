const express = require('express');
const router = express.Router();

const carritoDetalleController = require('../controllers/controller_carrito_detalle');

router.get('/', carritoDetalleController.list);
router.get('/:id_carrito', carritoDetalleController.find);
router.post('/', carritoDetalleController.create);
router.delete('/:id', carritoDetalleController.delete);
router.put('/:id', carritoDetalleController.update);

module.exports = router;