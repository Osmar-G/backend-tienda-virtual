const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/controller_carrito');

router.get('/', carritoController.list);
router.get('/:id_usuario', carritoController.find);
router.post('/', carritoController.create);
router.delete('/:id', carritoController.delete);
router.put('/:id', carritoController.update);

module.exports = router;