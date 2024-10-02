const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Loginreg:LoginRegistrationPassword@login-registration.pdnh0qt.mongodb.net/?retryWrites=true&w=majority&appName=login-registration';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;