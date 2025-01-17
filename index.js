const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());


const blog = require('./routes/routes');
//mount

app.use("/api/v1/", blog);


//database connect

const connectWithDb = require("./config/database");
connectWithDb();


app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`)
})


app.get("/", (req, res) => {
  res.send(`<h1>This is blog home page</h1>`)
})