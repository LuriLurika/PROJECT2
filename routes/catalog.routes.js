const express = require('express')
const router = express.Router()

const passport = require('passport')

const Car = require("../models/car.model")
const User = require("../models/user.model")

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')

const fuelArray = ['Diésel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
const typeCarArray = ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']

router.get('/', (req, res) => {

    Car
        .find()
        .then(allCars => res.render("catalog/index.hbs", {allCars}))
        .catch(err => console.log('BBDD error', err))
})

//ADD

router.get('/add', (req, res) => {
    
    Car
        .find()
        .then(allCars => res.render("catalog/new.hbs", { allCars, fuelArray, typeCarArray }))
        .catch(err => console.log('BBDD error', err))

})

router.post('/add', (req, res) => {

    const { brand, model, year, color, fuel, type, price, photo, description, lat, lng } = req.body

    Car
        .create({ brand, model, year, color, fuel, type, price, photo, description,location: { type: 'Point', coordinates: [lat, lng] }})
        .then( newCar => {
            console.log("New car added", newCar)
            res.redirect('/catalog')
        })
        .catch(err => console.log('BBDD error', err))
   
})

//DETAILS

router.get('/:id',  (req, res) => {

    Car
        .findById(req.params.id)
        .then(theCar => res.render("catalog/show.hbs", theCar))
        .catch(err => console.log('BBDD error', err))
})

//EDIT

router.get('/:id/edit',  (req, res) => {

    Car
        .findById(req.params.id)
        .then(theCar => res.render("catalog/edit.hbs", {theCar, fuelArray, typeCarArray}))
        .catch(err => console.log('BBDD error', err))

})

router.post('/:id', (req, res) => {

    const {brand, model, year, color, fuel, type, price, photo, description, lat, lng}= req.body

    Car
        .findByIdAndUpdate(req.params.id, {brand, model, year, color, fuel, type, price, photo, description,location: { type: 'Point', coordinates: [lat, lng] }}, { new: true })
        .then(() => res.redirect('/catalog'))
        .catch(err => console.log('BBDD error', err))
})

//DELETE 

router.post('/:id/delete', (req, res) => {

    Car
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/catalog'))
        .catch(err => console.log('BBDD error', err))
})

//GOOGLE MAPS

router.get('/:carId/api', (req, res, next) => {
    Car
        .findById(req.params.carId)
        .then(data => {
            console.log(data)
            console.log(req.params.carId)
            res.json([data])
        })
        .catch(err => console.log(err))
})

module.exports = router



