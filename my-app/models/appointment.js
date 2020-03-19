const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    secondName: {
        type: String
    },
    email: {
        type: String
    },
    dateTime: {
        type: Date,
        required: true
    },
    product: {
        type: String
    }
})

module.exports = mongoose.model('appointment', appointmentSchema)