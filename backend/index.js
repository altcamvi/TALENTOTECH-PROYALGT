const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const notaRoutes = require('./routes/notas');
const usuarioRoutes = require('./routes/usuarios');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notas', notaRoutes);
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});