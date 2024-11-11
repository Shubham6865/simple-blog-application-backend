
const mongoose = require('mongoose');

require('dotenv').config();

const connectWithDb = () => {

  mongoose.connect(process.env.DATABASE_URL, {

  })
    .then(console.log("DB connected Successfull"))
    .catch((err) => {
      console.log("DB connection Failed");
      console.error(err.message);
      process.exit(1);
    })



};

module.exports = connectWithDb;