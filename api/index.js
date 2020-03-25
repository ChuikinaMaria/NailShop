//require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();

mongoose.connect(('mongodb+srv://admin:12345@nailshop-cgjdz.gcp.mongodb.net/test?retryWrites=true&w=majority'), { 
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', ()=>console.error(error));
db.once('open', ()=>console.log('connected to db'));


module.exports = router;

