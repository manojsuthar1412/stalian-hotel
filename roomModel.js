const mongoose = require('mongoose');

var roomsData = mongoose.model('roomsData', {
    name: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: Number },
    room: { type:String }
});

module.exports = { roomsData };