require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect((process.env.DATABASE_URI), { 
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', ()=>console.error(error));
db.once('open', ()=>console.log('connected to db'));

app.use(express.json())

const appointmentsRouter = require('./routes/appointments.js')
app.use('/appointments', appointmentsRouter)



 app.listen(port, ()=>console.log(`Server started on port ${port}`));

    

// app.get('/api/appointments', (req, res) =>{
//     const appointments = [
//         {date: '12.03.20', time: '12.00', firstName: 'John', secondName: 'Smith', product: 'manicure', phoneNumber: '0123456789'},
//         {date: '13.03.20', time: '13.00', firstName: 'Paul', secondName: 'Johnson', product: 'pedicure', phoneNumber: '2345678901'},
//         {date: '14.03.20', time: '14.00', firstName: 'Mary', secondName: 'Bloemkool', product: 'Shellac', phoneNumber: '345789012'},
//         {date: '15.03.20', time: '15.00', firstName: 'Peggy', secondName: 'Swanson', product: 'Acryl', phoneNumber: '4567890123'}
// ]
// res.json(appointments);
// })

// app.listen(port, ()=>console.log(`Server started on port ${port}`));