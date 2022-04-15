const express = require('express');
const router = express.Router();
const operations = require('../controllers/operations.js');

router.get('/create', operations.create);

router.get('/:id', operations.show);
router.get('/edit/:id', operations.edit);

router.post('/save', operations.save);
//router.post('/modify', operations.modify);


module.exports = router;