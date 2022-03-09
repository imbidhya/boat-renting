var mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    
    Name: String,
    Contact: string
});

module.exports = mongoose.model('boatbooking',bookingSchema)
