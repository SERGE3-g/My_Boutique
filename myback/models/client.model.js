// models/client.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Cliente
const Client = sequelize.define('Client', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true, // Verifica che il campo sia un'email valida
        },
    },
    telefono: {
        type: DataTypes.STRING,
    },
    indirizzo: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Clienti', // Specifica il nome della tabella se differisce dal nome del modello
    timestamps: false, // Se non usi campi createdAt e updatedAt
});
module.exports = Client;

