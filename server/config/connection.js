const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JadenD:647777@clusterjad.eeqlknz.mongodb.net/?retryWrites=true&w=majority&appName=JadenD');

module.exports = mongoose.connection;