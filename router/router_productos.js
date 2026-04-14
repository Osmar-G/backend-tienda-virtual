const express = require('express');
const router = express.Router();

const productosController = require('../controllers/controller_producto');

router.get('/', productosController.list);
router.get('/:nombre', productosController.find);
router.post('/', productosController.create);
router.delete('/:id', productosController.delete);
router.put('/:id', productosController.update);

module.exports = router;