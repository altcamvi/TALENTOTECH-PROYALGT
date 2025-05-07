const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Nota', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    usuarioId: DataTypes.INTEGER,
    asignatura: DataTypes.STRING,
    valor: DataTypes.FLOAT
  });
};