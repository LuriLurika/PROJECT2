const mongoose = require('mongoose')
const Car = require('../models/car.model')
require('dotenv').config()


mongoose.connect(process.env.DB_REMOTE, {
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
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
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'BMW',
        model: 'Serie 4',
        year: 2017,
        color: 'Blanco',
        fuel: 'Diésel',
        type: 'Coupe',
        price: '39.000€',
        photo: 'https://images0.autocasion.com/unsafe/820x461/ad/0420/30/2427373/f1d4fdc019dd2b5d35cac7cf7845b2b2.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.868363, -4.025102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        year: 2019,
        color: 'Blanco',
        fuel: 'Híbrido',
        type: 'Berlina',
        price: '43.000€',
        photo: 'https://prod.pictures.autoscout24.net/listing-images/5816c96b-7f7a-400c-9a47-0c9aaa92e94e_0b7c014a-5650-41a6-9b95-c4a1a4f0c44d.jpg/640x480.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.868363, -4.025102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'ALFA ROMEO',
        model: 'Giulia',
        year: 2020,
        color: 'Rojo',
        fuel: 'Gasolina',
        type: 'Coupe',
        price: '33.000€',
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/21.jpg?itok=Wiz7rc8S',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.878995, -4.035523]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'SEAT',
        model: 'León',
        year: 2019,
        color: 'Rojo',
        fuel: 'Híbrido',
        type: 'Berlina',
        price: '23.000€',
        photo: 'https://www.topgear.es/sites/topgear.es/public/styles/main_element/public/dc/fotos/Leon-FR-Desire-Red-5D_04_HQ.jpg?itok=g5X0STjT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.868363, -4.225102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'RENAULT',
        model: 'Clio',
        year: 2019,
        color: 'Naranja',
        fuel: 'Diésel',
        type: 'Coupe',
        price: '18.000€',
        photo: 'https://www.diariomotor.com/imagenes/picscache/750x/renault-clio-2019-naranja-exterior-frontal_750x.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.668363, -4.225102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'RENAULT',
        model: 'Clio',
        year: 2019,
        color: 'Azul',
        fuel: 'Diésel',
        type: 'Coupe',
        price: '17.000€',
        photo: 'https://static.motor.es/fotos-noticias/2019/04/precio-renault-clio-2019-francia-201956096-1554196291_1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [39.665363, -4.125102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'PEUGEOT',
        model: '508',
        year: 2020,
        color: 'Rojo',
        fuel: 'Híbrido',
        type: 'Berlina',
        price: '37.000€',
        photo: 'https://www.diariomotor.com/imagenes/2018/02/peugeot_508_2202styp_012.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [38.665363, -4.125102]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'MERCEDES-BENZ',
        model: 'Clase A',
        year: 2018,
        color: 'Gris',
        fuel: 'Diésel',
        type: 'Coupe',
        price: '27.000€',
        photo: 'https://imagenes-cdn.autofacil.es/multimedia/fotos/2018/02/05/116153/mercedes-benz-clase-2018-39_g.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.030513, -3.605299]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'NISSAN',
        model: 'Qashqai',
        year: 2019,
        color: 'Azul',
        fuel: 'Híbrido',
        type: '4x4 SUV',
        price: '22.000€',
        photo: 'https://www.coches.com/fotos_historicas/nissan/Qashqai-2017/high_nissan_qashqai-2017_r25.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.033834, -3.609117]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'VOLKSWAGEN',
        model: 'Arteon',
        year: 2019,
        color: 'Amarillo',
        fuel: 'Híbrido',
        type: 'Berlina',
        price: '42.000€',
        photo: 'https://imagenes-cdn.autofacil.es/multimedia/fotos/2017/03/07/85090/volkswagen-arteon-14_g.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.193756, -3.664997]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'FERRARI',
        model: 'California',
        year: 2020,
        color: 'Rojo',
        fuel: 'Gasolina',
        type: 'Cabrio',
        price: '212.000€',
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/855/public/dc/fotos/Ferrari-California_T_2015_01.jpg?itok=5FCuMc0d',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.496128, -3.865277]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'AUDI',
        model: 'A5',
        year: 2020,
        color: 'Verde',
        fuel: 'Híbrido',
        type: 'Coupe',
        price: '42.000€',
        photo: 'https://i.blogs.es/e9f0d2/audi-a5-coupe-2020-022/1366_2000.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.495136, -3.879253]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    },
    {
        brand: 'MAZDA',
        model: 'CX-5',
        year: 2020,
        color: 'Rojo',
        fuel: 'Híbrido',
        type: '4x4 SUV',
        price: '22.000€',
        photo: 'https://www.autobild.es/sites/autobild.es/public/styles/855/public/dc/fotos/Mazda-CX-5_2017-C01.jpg?itok=FLHFt9eP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: {
            type: 'Point',
            coordinates: [40.462959,  -3.649263]
        },
        email: "popinocar@gmail.com",
        user: '5f021bcbb8036c41a04b8213'
    }
]

Car.create(cars)
    .then(allTheCars => {
        console.log(`Created ${allTheCars.length} cars`)
    })
    .catch(err => console.log('There was an error creating the cars', err))

