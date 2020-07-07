const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'popinocar@gmail.com',
        pass: 'Ironhack2020'
    }
})

module.exports = transporter