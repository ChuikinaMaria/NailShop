// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send({ wow: 'it works' });
// });

// module.exports = router;



require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();

mongoose.connect(('mongodb+srv://admin:12345@nailshop-cgjdz.gcp.mongodb.net/test?retryWrites=true&w=majority'), { 
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', ()=>console.error(error));
db.once('open', ()=>console.log('connected to db'));

// const appointmentsRouter = require('./routes/appointments.js')
// app.use('/api/appointments', appointmentsRouter)

module.exports = router;

// if (process.env.NODE_ENV==='production'){
//     app.use(express.static('client/build'))

//     app.get('*', (res, req) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })
// }

//  app.listen(port, ()=>console.log(`Server started on port ${port}`));

    

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