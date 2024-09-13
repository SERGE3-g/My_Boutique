// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const prodottiRoutes = require('./routes/prodotti.routes');
const {sync} = require("./config/database");

const app = express();
app.use(bodyParser.json());

// Rotte
app.use('/api', prodottiRoutes);

// Gestione degli errori
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Qualcosa è andato storto!');
});

/// Sincronizzazione con il database e avvio del server
/*async function syncDB() {
    try {
        await sync();
        console.log('Database sincronizzato con successo!');
    } catch (error) {
        console.error('Errore nella sincronizzazione del database:', error);
    }
}

syncDB().then(r => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
);*/

// Connessione al database
const  PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
