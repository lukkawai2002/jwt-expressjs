const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'Missing JWT token' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.status(403).json({ message: 'Invalid token. Please login again.' });
    }
};

module.exports = jwtAuth;