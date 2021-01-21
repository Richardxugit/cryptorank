const express = require('express');
const currencyRoute = require('./routes/currency');

const router = express.Router();

router.use('/currency', currencyRoute);

module.exports = router;