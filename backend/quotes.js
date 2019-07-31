const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET */
router.get('/', (req, res) => {
  try {
    // read the data from quotes file
    const quotesData = fs.readFileSync(`${__dirname}/quotes.json`);
    const quotes = JSON.parse(quotesData);
    res.json({ quotes });
  } catch (error) {
    throw error;
  }
});

/* POST */
router.post('/', (req, res) => {
  try {
    const { quote } = req.body;
    // read the data from quotes file
    const data = fs.readFileSync(`${__dirname}/quotes.json`);
    const quotesArray = JSON.parse(data);

    // prepend new created quote to the array.
    quotesArray.unshift(quote);
    // add the quote to the quotes file
    fs.writeFileSync(`${__dirname}/quotes.json`, JSON.stringify(quotesArray));
    res.json({ quote });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
