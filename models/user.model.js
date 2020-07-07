const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    lastName: String,
    address: String,
    email: String,
    phone: Number,
    role: {
        type: String,
        enum: ['USER', 'BOSS'],
        default: 'USER'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User