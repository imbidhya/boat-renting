var mongoose = require('mongoose');

const boatSchema = mongoose.Schema({
    
    id: String,
    bookingDate: [{
        year: Number,
        month: Number,
        day: Number,
        time: String,
    }]
});

module.exports = mongoose.model('boat',boatSchema)
