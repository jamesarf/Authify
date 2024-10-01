const mongoose = require('mongoose');

const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
