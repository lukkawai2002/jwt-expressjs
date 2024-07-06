const jwt = require("jsonwebtoken");

const jwtIsAdmin = (req, res, next) => {

    const token = req.cookies.token;

    const decodedToken = jwt.decode(token);

    const isAdmin = decodedToken.admin;
    
    if (isAdmin === true) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized Access!! You are not admin.' });
    }
};

module.exports = jwtIsAdmin;