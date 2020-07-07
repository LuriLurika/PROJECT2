const express = require('express')
const router = express.Router()

const Car = require("../models/car.model")

const cloudUploader = require('../configs/cloudinary.config')
const { defaultMaxListeners } = require('nodemailer/lib/mailer')

const mailer = require('../configs/nodemailer.config')

const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


const fuelArray = ['Diésel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
const typeCarArray = ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']

function filterCatalog(allCars, allCarsFilter) {
    const filterBrand = allCars.map(elm => {
        return elm.brand
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    const filterModel = allCars.map(elm => {
        return elm.model
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    const filterYear = allCars.map(elm => {
        return elm.year
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    const filterColor = allCars.map(elm => {
        return elm.color
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    const filterFuel = allCars.map(elm => {
        return elm.fuel
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    const filterType = allCars.map(elm => {
        return elm.type
    }).filter((item, pos, self) => self.indexOf(item) == pos)
    return {filterBrand, filterModel, filterYear, filterColor, filterFuel,  filterType, allCars: allCarsFilter}
}

router.get('/', (req, res) => {

    if(req.user == undefined) { 
   
        Car
            .find()
            .then(allCars => res.render("catalog/index.hbs", {filter: filterCatalog(allCars, allCars), allCars: allCars}))
            .catch(err => console.log('BBDD error', err)) 
            
    } else {

        const isUser = req.user.role == "BOSS" || "USER"

        Car
            .find()
            .then(allCars => res.render("catalog/index.hbs", {filter: filterCatalog(allCars, allCars), isUser: isUser, allCars: allCars}))
            .catch(err => console.log('BBDD error', err)) 

    }
})

//ADD

router.get('/add', checkRole(['BOSS']), (req, res) => {
    
    Car
        .find()
        .then(allCars => res.render("catalog/new.hbs", { allCars, fuelArray, typeCarArray }))
        .catch(err => console.log('BBDD error', err))

})

router.post('/add', cloudUploader.single('imageFile'), checkRole(['BOSS']), (req, res) => {

    const { brand, model, year, color, fuel, type, price, photo, description, lat, lng } = req.body

    if (req.file !== undefined) {

        Car
            .create({ brand, model, year, color, fuel, type, price, photo: req.file.url, description, location: { type: 'Point', coordinates: [lat, lng] } })
            .then(newCar => {
                console.log("New car added", newCar)
                res.redirect('/catalog')
            })
            .catch(err => console.log('BBDD error', err))
         
    } else {

        Car
            .create({ brand, model, year, color, fuel, type, price, photo, description, location: { type: 'Point', coordinates: [lat, lng] } })
            .then(newCar => {
                console.log("New car added", newCar)
                res.redirect('/catalog')
            })
            .catch(err => console.log('BBDD error', err))

    }  
   
})

//DETAILS

router.get('/:id', checkRole(['BOSS', 'USER']),  (req, res) => {

    const isBoss = req.user.role == 'BOSS'

    console.log(isBoss)

    Car
        .findById(req.params.id)
        .then(theCar => res.render("catalog/show.hbs", {theCar, isBoss}))
        .catch(err => console.log('BBDD error', err))
})

//FILTER

router.post('/search', (req, res) => {
    const { brand, model, year, color, fuel, type } = req.body
    const result = {}
    if (brand) {
        result.brand = brand
    }
    if (model) {
        result.model = model
    }
    if (year) {
        result.year = year
    }
    if (color) {
        result.color = color
    }
    if (fuel) {
        result.fuel = fuel
    }
    if (type) {
        result.type = type
    }
    Car
        .find(result)
        .then(allCarsFilter => {
            Car 
                .find()
                .then(allCars => {
                    filterCatalog(allCars)
                    res.render("catalog/index.hbs", {filter: filterCatalog(allCars, allCarsFilter)})
        })
            
        })
        .catch(err => console.log('BBDD error', err))    
})

//EDIT

router.get('/:id/edit', checkRole(['BOSS']),  (req, res) => {

    Car
        .findById(req.params.id)
        .then(theCar => res.render("catalog/edit.hbs", {theCar, fuelArray, typeCarArray}))
        .catch(err => console.log('BBDD error', err))

})

router.post('/:id', cloudUploader.single('imageFile'), checkRole(['BOSS']), (req, res) => {

    const { brand, model, year, color, fuel, type, price, photo, description, lat, lng } = req.body
    
    if (req.file !== undefined) {

        Car
            .findByIdAndUpdate(req.params.id, { brand, model, year, color, fuel, type, price, photo: req.file.url, description, location: { type: 'Point', coordinates: [lat, lng] } }, { new: true })
            .then(() => res.redirect('/catalog'))
            .catch(err => console.log('BBDD error', err))
    
    } else {

        req.body.photo = 'https://res.cloudinary.com/dz0aow7wm/image/upload/v1594049637/popinoCar/logo_dmxa3v.png'

        Car
            .findByIdAndUpdate(req.params.id, { brand, model, year, color, fuel, type, price, photo, description, location: { type: 'Point', coordinates: [lat, lng] } }, { new: true })
            .then(() => res.redirect('/catalog'))
            .catch(err => console.log('BBDD error', err))

        console.log(req.body)
        
    }
})

//DELETE 

router.post('/:id/delete', checkRole(['BOSS']), (req, res) => {

    Car
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/catalog'))
        .catch(err => console.log('BBDD error', err))
})

//NODEMAILER

router.get('/:id/send', (req, res) => res.render('catalog/email'))

router.post('/', (req, res) => {

    let { email, subject, message } = req.body

    mailer.sendMail({
        from: '"PopinoCar" <popinocar@gmail.com>',
        to: email,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`

    })
        .then(info => res.render('catalog/email-resume', { email, subject, message, info }))
        .catch(err => console.log(err))
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




