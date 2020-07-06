const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema({
    
    brand: String,
    model: String,
    year: Number,
    color: String,
    fuel: {
        type: String,
        enum: ['Diesel', 'Gasolina', 'Eléctrico', 'Híbrido', 'Híbrido Enchufable', 'Gas Licuado', 'Gas Natural', 'Otros']
    },
    type: {
        type: String,
        enum: ['Berlina', 'Familiar', 'Coupe', 'Monovolumen', '4x4 SUV', 'Cabrio', 'Pick Up']
    },
    price: String,
    photo: {
        type: String,
        default: 'https: //images.vexels.com/media/users/3/135595/isolated/preview/40f5a24bdee6c119cb7d7cdcafcf7be6-icono-de-c--rculo-de-coche-by-vexels.png'
    },
    description: String
}, {
    timestamps: true
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car