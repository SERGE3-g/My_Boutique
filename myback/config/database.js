// Importo il modulo Sequelize e dotenv per la configurazione del database
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Configurazione di Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    DB_USER:'root',
    DB_PASSWORD:'3892978507Gs',
    dialect: 'mysql',
});

//


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connessione a MySQL avvenuta con successo!');
    } catch (error) {
        console.error('Errore nella connessione a MySQL:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB};
