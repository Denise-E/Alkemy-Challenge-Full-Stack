const express = require('express');
const router = express.Router();
const main = require('../controllers/main.js');

router.get('/', main.index);

module.exports = router;