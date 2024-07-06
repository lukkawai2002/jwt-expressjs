const Receipt = require('../models/receipt.model');

const getReceipts = async (req, res) => {

    try {
        const receipts = await Receipt.find({});
        return res.status(200).json(receipts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

const getReceipt = async (req, res) => {

    try {
        const id = req.params.id;
        const receipt = await Receipt.findById(id);

        if (!receipt) {
            return res.status(404).json({ message: `Receipt with ID: ${id} not found` });
        };

        return res.status(200).json(receipt);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

const postReceipt = async (req, res) => {

    try {
        const receipt = req.body;
        const newRecipt = await Receipt.create(receipt);
        return res.status(201).json(newRecipt);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

};

const putReceipt = async (req, res) => {

    try {
        const id = req.params.id;
        const putReceipt = await Receipt.findByIdAndUpdate(id, req.body, { new: true });

        if (!putReceipt) {
            return res.status(404).json({ message: `Receipt with ID: ${id} not found` });
        };

        return res.status(200).json(putReceipt);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

};

const deleteReceipt = async (req, res) => {

    try {
        const id = req.params.id;
        const deleteReceipt = await Receipt.findByIdAndDelete(id);

        if (!deleteReceipt) {
            return res.status(404).json({ message: `Receipt with ID: ${id} not found` });
        };

        return res.status(200).json({ message: 'Receipt deleted successfully' });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}

module.exports = { getReceipts, getReceipt, postReceipt, putReceipt, deleteReceipt };