const mongoose = require('mongoose')
const Car = require('../models/car.model')
require('dotenv').config()

const dbtitle = 'coches-molones'
 //mongoose.connect(process.env.DB_REMOTE, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
mongoose.connect(`mongodb://localhost/${dbtitle}`, {

    useUnifiedTopology: true,
    useNewUrlParser: true
})


Car.collection.drop()

const cars = [{
        brand: 'VOLKSWAGEN',
        model: 'Golf GTE 1.4 TSI ePower 150kW 204CV DSG 5p.',
        year: 2020,
        color: 'Blanco',
        fuel: 'Híbrido Enchufable',
        type: 'Berlina',
        price: '47.545€',
        photo: 'https://www.masqrenting.es/wp-content/uploads/2018/07/volkswagen-golf-gte-blanco.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.378677, -3.531051]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'SKODA',
        model: 'Octavia Combi 1.5 TSI 110KW 150CV DSG Style 5p.',
        year: 2019,
        color: 'Azul',
        fuel: 'Gasolina',
        type: 'Familiar',
        price: '23.990€',
        photo: 'https://az749841.vo.msecnd.net/external/sfv4/httpsdownloadportalblobcorewindowsnetk2ngtoolsImagesMC7GLYHSWV33OOHDMUYUCMHFYQpng/0x8D6E35718C07FDE/600x300-Fill.bin',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.300452, -3.731259]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'MERCEDES-BENZ',
        model: 'Clase C C Coupe 220 d 2p.',
        year: 2016,
        color: 'Rojo',
        fuel: 'Diésel',
        type: 'Coupe',
        price: '28.500€',
        photo: 'https://www.km77.com/media/fotos/mercedes_clase_c_2011_coupe_3848_1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.340523, -3.832357]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'PEUGEOT',
        model: 'Rifter Active Standard BlueHDi 73kW 5p.',
        year: 2019,
        color: 'Naranja',
        fuel: 'Diésel',
        type: 'Monovolumen',
        price: '16.490€',
        photo: 'https://static.motor.es/fotos-jato/peugeot/carrocerias/peugeotrifter20205mm-121916_1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.416564, -3.898446]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'CITROEN',
        model: 'C3 Aircross PureTech 81kW 110CV SS EAT6 SHINE 5p.',
        year: 2019,
        color: 'Rojo',
        fuel: 'Gasolina',
        type: '4x4 SUV',
        price: '17.300€',
        photo: 'https://s3.eu-central-1.amazonaws.com/vophotos/ORIGINAL/AC/ES/CITROEN-C3-AIRCROSS-91428_1.JPG',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.427460, -3.900635]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'BMW',
        model: 'Z4 M Roadster 2p.',
        year: 2006,
        color: 'Negro',
        fuel: 'Gasolina',
        type: 'Cabrio',
        price: '29.995€',
        photo: 'https://a.ccdn.es/cnet/2020/07/03/46467519/334582647_g.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.418802, -3.881752]
        },
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'MERCEDES-BENZ',
        model: 'Clase X',
        year: 2020,
        color: 'Blanco',
        fuel: 'Diésel',
        type: 'Pick Up',
        price: '49.005€',
        photo: 'https://images1.autocasion.com/unsafe/1200x800/actualidad/wp-content/uploads/2020/02/Mercedes-Benz-X-Class-2018-1280-01.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.537974, -3.634301]
        },
        user: '5f021bcbb8036c41a04b8213'
    }
]

Car.create(cars)
    .then(allTheCars => {
        console.log(`Created ${allTheCars.length} cars`)
    })
    .catch(err => console.log('There was an error creating the cars', err))

