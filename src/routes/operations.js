const express = require('express');
const router = express.Router();
const operations = require('../controllers/operations.js');

router.get('/create', operations.create);
router.get('/edit', operations.edit);

router.post('/save', operations.save);


module.exports = router;