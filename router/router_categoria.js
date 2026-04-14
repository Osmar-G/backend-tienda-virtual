const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/controller_categoria');

router.get('/', categoriaController.list);
router.get('/:nombreCategoria', categoriaController.find);
router.post('/', categoriaController.create);
router.delete('/:id', categoriaController.delete);
router.put('/:id', categoriaController.update);

module.exports = router;