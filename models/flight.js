const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'LAX'
    },
    flightno: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: Date
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)