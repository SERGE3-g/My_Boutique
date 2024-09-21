// Desc: Middleware per la protezione delle rotte
const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Estrai il token dall'intestazione Authorization

    if (!token) {
        return res.status(401).json({ error: 'Accesso negato, token mancante' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica il token con la chiave segreta
        req.user = decoded; // Salva i dati dell'utente decodificati nella richiesta
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token non valido' });
    }
};
