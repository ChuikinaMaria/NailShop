require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect((MONGO_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (ev) => console.error(ev));
db.once('open', () => console.log('connected to db'));

module.exports = mongoose.connection;

