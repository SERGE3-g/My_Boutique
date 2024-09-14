// Importo il controller client

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Rotte per gestire i clienti
router.get('clients/', clienteController.getClienti);
router.get('/clients/:id', clienteController.getClienteById);
router.post('/api/clients', clienteController.addCliente);
router.put('/clients/:id', clienteController.updateCliente);
router.delete('/clients/:id', clienteController.deleteCliente);

module.exports = router;
