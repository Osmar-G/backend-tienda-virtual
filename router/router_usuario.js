const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/controller_usuario');


router.post('/login', usuarioController.login);


router.get('/', usuarioController.list);


router.get('/nombre/:nombre', usuarioController.find);
router.post('/', usuarioController.create);

router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);


module.exports = router;