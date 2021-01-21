const Currency = require('../models/currency');

async function addCurrency(req, res) {
  const { name, hour, day, month, Volume, MarketCap } = req.body;

  const currency = new Currency({
    name,
    hour,
    day,
    month,
    Volume,
    MarketCap
  });
  await currency.save();
  return res.json(currency);
}

async function getAllCurrency(req, res) {
  const currency = await Currency.find().exec();
  console.log(currency)
  return res.json(currency);
}

module.exports = {
  addCurrency,
  getAllCurrency
}