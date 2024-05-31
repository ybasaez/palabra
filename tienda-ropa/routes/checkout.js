const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  res.render('checkout');
});

router.post('/confirm', (req, res) => {
  const { detalles, total, estado, numero_seguimiento } = req.body;
  const query = 'INSERT INTO pedidos (detalles, total, estado, numero_seguimiento) VALUES (?, ?, ?, ?)';
  db.query(query, [detalles, total, estado, numero_seguimiento], (err, results) => {
    if (err) throw err;
    res.render('confirmation', { pedido: req.body });
  });
});

module.exports = router;
