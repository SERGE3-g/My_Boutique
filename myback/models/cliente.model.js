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
            isEmail: true,
        },
    },
    telefono: {
        type: DataTypes.STRING,
    },
    indirizzo: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Clienti',
    timestamps: false,
});
module.exports = Client;

