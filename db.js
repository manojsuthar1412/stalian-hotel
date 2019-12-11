const mongoose = require('mongoose');
const keys = require('./keys')

mongoose.connect(keys.mongoUrl,  { useNewUrlParser: true ,useUnifiedTopology: true }, (err) => {
    if(!err) {
        console.log('MongoDB connection succeded');
    } else {
        console.log('Error in DB connection:- ' + err);
        
    }
});

module.exports = { mongoose };