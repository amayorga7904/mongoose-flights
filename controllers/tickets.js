const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
   addTicket,
   create
}
// async function create(req, res) {
//   const movie = await Movie.findById(req.params.id)
//   movie.cast.push(req.body.performerId)
//   await movie.save()
//   res.redirect(`/movies/${movie._id}`)
// }

async function addTicket(req, res) {
    //find flight by id and asign to variable called "flight"
    const flight = await Flight.findById(req.params.id) 

    //render a template (new ticket)
    //
        // Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          res.render('tickets/new', { flight })
        }

async function create(req, res) {
    const ticketInfo = req.body
    const flightId = req.params.id
    ticketInfo.flight = flightId
    try {
    const ticket = await Ticket.create(req.body)
    await ticket.save()
} catch (err) {
    console.log(err)
}
    res.redirect(`/flights/${flightId}`)
    
}
