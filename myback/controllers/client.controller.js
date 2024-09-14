// Desc: Controller per la gestione dei clienti effettivi
// (quelli che hanno già acquistato un prodotto o un servizio)
/*
const Client = require('../models/client.model');

// Creare un nuovo cliente
exports.createClient = async (req, res) => {
    try {
        const { id, name, email, phone, company, country } = req.body;
        const client = await Client.create({ id, name, email, phone, company, country });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del cliente' });
    }
};

// Ottenere tutti i clienti
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei clienti' });
    }
};

// Ottenere un singolo cliente
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del cliente' });
    }
};

// Aggiornare un cliente
exports.updateClient = async (req, res) => {
    try {
        const { id, name, email, phone, company, country } = req.body;
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        await client.update({ id, name, email, phone, company, country });
        res.json(client);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del cliente' });
    }
};

// Eliminare un cliente
exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        await client.destroy();
        res.json({ message: 'Cliente eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del cliente' });
    }
};

 */

const Client = require('../models/client.model');

// Creare un nuovo cliente
exports.createClient = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const client = await Client.create({ name, email, phone, address });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del cliente' });
    }
};

// Ottenere tutti i clienti con paginazione
exports.getClients = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await Client.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            clients: rows,
        });
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei clienti' });
    }
};

// Ottenere un singolo cliente
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del cliente' });
    }
};

// Aggiornare un cliente
exports.updateClient = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        await client.update({ name, email, phone, address });
        res.json(client);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del cliente' });
    }
};

// Eliminare un cliente
exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Cliente non trovato' });
        }
        await client.destroy();
        res.json({ message: 'Cliente eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del cliente' });
    }
};


