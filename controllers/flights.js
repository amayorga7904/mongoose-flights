const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
  };

   //this will show all the flights in my DB
 function index(req, res) {
    Flight.find({})
    .then((flights) => {
        res.render('flights/index', { flights })
    })
    .catch((err) => {
        //handle error
        console.log(err)
    })
 }

 function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' })
      }

      async function create(req, res) {
     try {
       await Flight.create(req.body);
       // Always redirect after CUDing data
       // We'll refactor to redirect to the movies index after we implement it
       res.redirect('/flights');
     } catch (err) {
       // Typically some sort of validation error
       console.log(err);
       res.render('flights/new', { errorMsg: err.message });
     }
    } 