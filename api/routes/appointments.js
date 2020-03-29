const express = require('express')
const router = express.Router()
const Appointment = require('../models/appointment')


/**
* Just a simple test endpoint to demo how to test with Jest
**/
router.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})


//getting all
router.get('/', async (req, res)=>{
    try {
        const appointments = await Appointment.find()
        res.json(appointments)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
    })
//getting one
router.get('/:phoneNumber', async (req, res)=>{
    //const phoneNumber = req.params.id
    try {
        const appointment = await Appointment.find( {phoneNumber: req.params.phoneNumber})
        res.json(appointment)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
    });

// get by date

//creating one
router.post('/', async (req, res)=>{
    const appointment = new Appointment ({
        phoneNumber: req.body.phoneNumber,
        firstName:  req.body.firstName,
        secondName:  req.body.secondName,
        email:  req.body.email,
        dateTime:  req.body.dateTime,
        product:  req.body.product
    })
    try {
       const newAppointment = await appointment.save()
       res.status(201).json(newAppointment)

    } catch (e) {
        res.status(400).json({ message: e.message})

    }

})
//upgrading one
router.patch('/:id', (req, res)=>{

})
//deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router