const { sequelize } = require('../config/db');
const Nota = require('./Nota')(sequelize);
const Usuario = require('./Usuario')(sequelize);

Usuario.hasMany(Nota, { foreignKey: 'usuarioId' });
Nota.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = { sequelize, Nota, Usuario };