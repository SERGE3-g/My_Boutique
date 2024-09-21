// controllers/authController.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Funzione per creare il token JWT
const createToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token valido per 1 ora
    });
};

// Registrazione di un nuovo utente
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ where: { email } });

        if (userExists) {
            return res.status(400).json({ error: 'Email già registrata' });
        }

        const user = await User.create({ name, email, password });
        const token = createToken(user);

        res.status(201).json({ message: 'Utente registrato con successo', token });
    } catch (error) {
        res.status(500).json({ error: 'Errore durante la registrazione' });
    }
};

// Login utente
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }

        // Confronta la password inserita con quella salvata nel database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Password non valida' });
        }

        const token = createToken(user);

        res.json({ message: 'Login effettuato con successo', token });
    } catch (error) {
        res.status(500).json({ error: 'Errore durante il login' });
    }
};
