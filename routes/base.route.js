const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/base.controller');
const { loginPage } = require('../controllers/jwt.controller');

router.post('/registration', createUser);

router.post('/login', loginPage);

module.exports = router;