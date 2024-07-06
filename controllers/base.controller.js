const Account = require('../models/account.model');

const createUser = async (req, res) => {

    const { username, password, admin } = req.body;

    try {

        const existingUser = await Account.findOne({ username: username });

        if (existingUser) {
            return res.status(400).json({ message: `User ${username} already exists` });
        };

        const user = await Account.create({ username, password, admin });

        res.status(201).json({ message: `User ${username} created successfully` });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

module.exports = { createUser };