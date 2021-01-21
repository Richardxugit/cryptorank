const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    Volume: {
        type: String,
        required: true
    },
    MarketCap: {
        type: String,
        required: true
    },
});

const model = mongoose.model('currency', schema);

module.exports = model;