const { Usuario } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registrar = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const usuario = await Usuario.create({ ...req.body, password: hashed });
  res.json(usuario);
};

exports.login = async (req, res) => {
  const usuario = await Usuario.findOne({ where: { email: req.body.email } });
  if (usuario && await bcrypt.compare(req.body.password, usuario.password)) {
    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
};