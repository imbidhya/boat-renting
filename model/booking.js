var mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    
    name: String,
    contact: String,
    ticketNo:Number,
    checkIn:Date,
    checkOut:Date
});

module.exports = mongoose.model('boatbooking',BookingSchema)
