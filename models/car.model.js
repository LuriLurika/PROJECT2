const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema({

    brand: {
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: Number,
    },
    color: {
        type: String,
    },
    fuel: {
        type: String,
        enum: ['Diésel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
    },
    type: {
        type: String,
        enum: ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']
    },
    price: {
        type: String,
    },
    photo: {
        type: String,
        default: 'https://res.cloudinary.com/dz0aow7wm/image/upload/v1594049637/popinoCar/logo_dmxa3v.png'
    },
    description: String,
    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number]
        }
    },
    email: {
        type: String,
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
        }
    }, {
    timestamps: true
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car