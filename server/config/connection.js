const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // these two may not be needed
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
