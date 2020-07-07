const express = require('express')
const router = express.Router()
const Car = require('../models/car.model')
const User = require('../models/user.model')

const fuelArray = ['Diésel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
const typeCarArray = ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']


//INDEX PERFIL

router.get('/',  (req, res) => res.render("profile/index.hbs", req.user))

//CREAR ANUNCIO

router.get('/new', (req, res) => {
    
    Car
        .find()
        .then(allCars => res.render("catalog/new", {allCars, fuelArray, typeCarArray}))
        .catch(err => console.log('BBDD error', err))

})

router.post('/new', (req, res) => {

    const { brand, model, year, color, fuel, type, price, photo, description } = req.body
    
    Car
        .create({ brand, model, year, color, fuel, type, price, photo, description })
        .then( newCar => {
            console.log("Nuevo coche añadido", newCar)
            res.redirect("/profile/show-car")
        })
        .catch(err => console.log('Error en la BBDD', err))
})

//VER TUS ANUNCIOS

router.get('/show', (req, res) => res.render('profile/show-car'))

//MODIFICAR ANUNCIOS

router.get('/:id/edit-car', (req, res) => {
    
    Car
        .findById(req.params.id)
        .then(theCar => res.render('catalog/edit', {theCar, fuelArray, typeCarArray}))
        .catch(err => ('Error en la BBDD', err))

})

router.post('/:id', (req, res) => {

    const { brand, model, year, color, fuel, type, price, photo, description } = req.body

    Car
        .findById(req.params.id, { brand, model, year, color, fuel, type, price, photo, description }, {new: true})
        .then(() => res.redirect('profile/show-car'))
        .catch(err => ('Error en la BBDD', err))  
})

//ELIMINAR ANUNCIOS

router.post('/:id/delete', (req, res) => {

    Car
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/profile/show-car'))
        .catch(err => ('Error en la BBDD', err))  
})

//MODIFICAR PERFIL

router.get('/:id/edit-profile', (req, res) => {
    
    User    
        .findById(req.params.id)
        .then(theUser => res.render("profile/edit-profile", theUser))
        .catch(err => console.log('BBDD error', err))
})

router.post('/:id', (req, res) => {

    const { username, password } = req.body

    User
        .findByIdAndUpdate(req.params.id, {  username, password }, { new: true })
        .then(() => res.redirect('/profile'))
        .catch(err => console.log('BBDD error', err))
})


module.exports = router

