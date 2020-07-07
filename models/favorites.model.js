const mongoose = require("mongoose")
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    car: {
        type: mongoose.ObjectId,
        ref: 'Car'
    }
}, {
    timestamps: true
})

const Favorite = mongoose.model("Favorite", favoriteSchema)

module.exports = User