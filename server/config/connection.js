const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JadenD:6477@clusterjad.eeqlknz.mongodb.net/?retryWrites=true&w=majority&appName=healthy_honcho', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
