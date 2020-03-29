const express = require("express");
const userRouter = require("./routes/appointments");
var cors = require('cors')
require('./db/mongoose.js');

const app = express();
app.use(express.json());
app.use(cors())
app.use(userRouter);

module.exports = app
