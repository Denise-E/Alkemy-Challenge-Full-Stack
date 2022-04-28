const express = require('express');
const router = express.Router();
const operations = require('../controllers/operations.js');

router.get('/create', operations.create);
router.get('/list', operations.list);
router.get('/incomes', operations.incomes);

router.get('/edit/:id', operations.edit);
router.get('/:id', operations.show);

router.post('/save', operations.save);

router.put('/:id', operations.modify);


module.exports = router;