const express = require('express');
const router = express.Router();
const quotes = require('./quotes');

// default /quotes for each route

router.use('/quotes', quotes);

module.exports = router;
