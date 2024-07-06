const jwt = require("jsonwebtoken");
const Account = require('../models/account.model');

const loginPage = async (req, res) => {

    const { username, password } = req.body;

    const retrieveUser = await Account.findOne({ username: username });

    // Check whether user exist and valid or not
    if (!retrieveUser || retrieveUser.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenPayload = {
        username: retrieveUser.username,
        admin: retrieveUser.admin
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: `${username} login successfully` });
};

module.exports = { loginPage };