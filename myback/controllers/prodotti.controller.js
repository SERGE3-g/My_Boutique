// controllers/prodottiController.js
const Prodotto = require('../models/prodotti.model');

exports.getProdotti = async (req, res) => {
    try {
        const prodotti = await Prodotto.findAll();
        res.json(prodotti);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei prodotti' });
    }
};

exports.addProdotto = async (req, res) => {
    try {
        const nuovoProdotto = await Prodotto.create(req.body);
        res.status(201).json(nuovoProdotto);
    } catch (error) {
        res.status(500).json({ error: 'Errore nella creazione del prodotto' });
    }
};

exports.updateProdotto = async (req, res) => {
    try {
        const prodotto = await Prodotto.findByPk(req.params.id);
        if (!prodotto) {
            return res.status(404).json({ error: 'Prodotto non trovato' });
        }
        await prodotto.update(req.body);
        res.json(prodotto);
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'aggiornamento del prodotto' });
    }

}

exports.deleteProdotto = async (req, res) => {
    try {
        const prodotto = await Prodotto.findByPk(req.params.id);
        if (!prodotto) {
            return res.status(404).json({ error: 'Prodotto non trovato' });
        }
        await prodotto.destroy();
        res.json({ message: 'Prodotto eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del prodotto' });
    }
};
