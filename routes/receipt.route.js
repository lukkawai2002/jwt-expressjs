const express = require('express');
const router = express.Router();
const { getReceipts, getReceipt, postReceipt, putReceipt, deleteReceipt } = require('../controllers/receipt.controller');
const jwtIsAdmin = require('../middlewares/jwtIsAdmin.middleware');

router.get('/', getReceipts);
router.get('/:id', getReceipt);

router.post('/', jwtIsAdmin, postReceipt);

router.put('/:id', jwtIsAdmin, putReceipt);

router.delete('/:id', jwtIsAdmin, deleteReceipt);

module.exports = router;