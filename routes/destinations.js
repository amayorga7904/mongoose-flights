const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations')

//flights/:id/destinstions
router.post('/flights/:id/destinations', destinationsCtrl.create)
// GET /tickets/:id
module.exports = router;