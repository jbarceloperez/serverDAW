const cors = require('cors');
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Ruta para obtener el catálogo completo
app.get('/api/productos', (req, res) => {
  fs.readFile('./data/productos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo de productos.' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Ruta para filtrar productos por categoría
app.get('/api/productos/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria.toLowerCase();
  fs.readFile('./data/productos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo de productos.' });
    } else {
      const productos = JSON.parse(data);
      const filtrados = productos.filter(
        (producto) => producto.categoria.toLowerCase() === categoria
      );
      res.json(filtrados);
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor API REST escuchando en http://localhost:${PORT}`);
});
