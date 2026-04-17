const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/controller_usuario');

// 🔐 LOGIN (antes que todo)
router.post('/login', usuarioController.login);

// 📄 CRUD
router.get('/', usuarioController.list);

// 🔍 búsqueda por nombre (ruta clara)
router.get('/nombre/:nombre', usuarioController.find);
router.post('/', usuarioController.create);
// 📌 por ID
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);


module.exports = router;