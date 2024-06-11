const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JadenD:647777@clusterjad.eeqlknz.mongodb.net/?retryWrites=true&w=majority&appName=healthy_huncho');

module.exports = mongoose.connection;