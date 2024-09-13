const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Cliente
const Prodotti = sequelize.define('Prodotti', {
    id: { type:
        DataTypes.INTEGER,
        primaryKey: true, autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false },
    descrizione:
        { type: DataTypes.TEXT
        },
    prezzo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    quantità_in_stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    id_categoria: {
        type: DataTypes.INTEGER
    },
    id_brand: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'prodottis',
    timestamps: false
});

module.exports = Prodotti;
