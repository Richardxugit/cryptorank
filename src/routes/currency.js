const express = require('express');

const { getAllCurrency,addCurrency } = require('../controllers/currency');

const router = express.Router();

router.get('/', getAllCurrency);
router.post('/', addCurrency);

module.exports = router;