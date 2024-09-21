// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Rotte per registrazione e login
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
