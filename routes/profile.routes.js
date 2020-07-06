const express = require('express')
const router = express.Router()
const Car = require('../models/car.model')
const User = require('../models/user.model')


//INDEX PERFIL

router.get('/',  (req, res) => {
res.render("profile/index.hbs")
    //User
    //    .then(theUser => res.render("profile/index.hbs", theUser))
    //    .catch(err => console.log('BBDD error', err))
})

//CREAR ANUNCIO

router.get('/new', (req, res) => res.send('CREA TU ANUNCIO'))
router.post('/new', (req, res) => {
    const { brand, model, year, color, fuel, type, price, photo, description } = req.body
    
    Car
        .create({ brand, model, year, color, fuel, type, price, photo, description })
        .then(response => {
            res.redirect('/new')
        })
        .catch(err => console.log('Error en la BBDD', err))
})

//VER TUS ANUNCIOS

router.get('/ver', (req, res) => res.send('ESTOS SON TUS COCHES EN VENTA'))

//MODIFICAR ANUNCIOS

router.get('/editCar', (req, res) => res.send('MODIFICA TU ANUNCIO'))
router.get('/editCar/:id', (req, res) => {
    Car
        .findById(req.params.id)
        .then(theCar => res.render('/editCar', { theCar }))
        .catch(err => ('Error en la BBDD', err))  
})

//ELIMINAR ANUNCIOS

router.get('/delete', (req, res) => res.send('ELIMINAR ANUNCIO'))

//MODIFICAR PERFIL

router.get('/editProfile', (req, res) => res.send('MODIFICA TU PERFIL'))
router.post('/editProfile', (req, res) => {
    User
        .then(theUser => res.render('/profile', { theUser }))
        .catch(err => ('Error en la BBDD', err))
})


module.exports = router