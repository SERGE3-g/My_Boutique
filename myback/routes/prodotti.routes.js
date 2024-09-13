// routes/prodotti.js
const express = require('express');
const router = express.Router();
const prodottiController = require('../controllers/prodotti.controller');

router.get('/prodotti', prodottiController.getProdotti);
router.post('/prodotti', prodottiController.addProdotto);
router.put('/prodotti/:id', prodottiController.updateProdotto);
router.delete('/prodotti/:id', prodottiController.deleteProdotto);

module.exports = router;
