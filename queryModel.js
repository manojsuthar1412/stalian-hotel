const mongoose = require('mongoose');

var queryData = mongoose.model('queryData', {
    name: { type: String },
    email: { type: String },
    message: { type:String }
});

module.exports = { queryData };