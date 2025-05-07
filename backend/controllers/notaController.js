const { Nota } = require('../models');

exports.obtenerNotas = async (req, res) => {
  const notas = await Nota.findAll({ where: { usuarioId: req.params.usuarioId } });
  res.json(notas);
};

exports.crearNota = async (req, res) => {
  const nota = await Nota.create(req.body);
  res.json(nota);
};

exports.actualizarNota = async (req, res) => {
  const nota = await Nota.findByPk(req.params.id);
  if (nota) {
    await nota.update(req.body);
    res.json(nota);
  } else {
    res.status(404).json({ error: 'Nota no encontrada' });
  }
};

exports.eliminarNota = async (req, res) => {
  const nota = await Nota.findByPk(req.params.id);
  if (nota) {
    await nota.destroy();
    res.json({ mensaje: 'Nota eliminada' });
  } else {
    res.status(404).json({ error: 'Nota no encontrada' });
  }
};