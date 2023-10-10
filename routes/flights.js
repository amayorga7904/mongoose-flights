var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')

//localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
//localhost:3000/flights
router.post('/', flightsCtrl.create)
//localhost:3000/flights
//this will show all flights
router.get('/', flightsCtrl.index)

module.exports = router;
