const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://JadenD:647777@clusterjad.eeqlknz.mongodb.net/healthyhuncho?retryWrites=true&w=majority&appName=ClusterJad', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
