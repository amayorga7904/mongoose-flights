const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index, 
    show
  };

async function show(req, res) {
  const flight = await Flight.findById(req.params.id)
  const tickets = await Ticket.find({flight: flight._id})
  res.render('flights/show', { title: 'Flight Details', flight, tickets})
}
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