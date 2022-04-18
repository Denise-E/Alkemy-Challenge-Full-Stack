const express = require('express');
const router = express.Router();
const api = require('../controllers/api.js');

router.get('/', api.list)

module.exports = router;