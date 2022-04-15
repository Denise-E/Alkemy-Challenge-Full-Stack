const express = require('express');
const router = express.Router();
const operations = require('../controllers/operations.js');

router.get('/create', operations.create);
router.get('/edit', operations.edit);
router.get('/:id', operations.show);

router.post('/save', operations.save);
router.post('/modify', operations.modify);


module.exports = router;