const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema({

    brand: String,
    model: String,
    year: Number,
    color: String,
    fuel: {
        type: String,
        enum: ['Diésel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
    },
    type: {
        type: String,
        enum: ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']
    },
    price: String,
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
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
        }
    }, {
    timestamps: true
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car