const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');

router.get('/:usuarioId', notaController.obtenerNotas);
router.post('/', notaController.crearNota);
router.put('/:id', notaController.actualizarNota);
router.delete('/:id', notaController.eliminarNota);

module.exports = router;