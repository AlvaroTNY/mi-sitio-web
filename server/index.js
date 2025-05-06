const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a SQLite
const db = new sqlite3.Database('./database.db');

// Crear tabla
db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT
  )
`);

// Ruta POST
app.post('/api/usuarios', (req, res) => {
  const { nombre, apellido } = req.body;
  db.run(
    'INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)',
    [nombre, apellido],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Usuario guardado en SQLite' });
    }
  );
});

app.listen(5000, () => {
  console.log('Servidor en http://localhost:5000');
});