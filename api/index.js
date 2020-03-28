require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();

mongoose.connect((process.env.MONGO_URI), { 
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', ()=>console.error(error));
db.once('open', ()=>console.log('connected to db'));


module.exports = router;

