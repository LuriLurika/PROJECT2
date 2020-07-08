const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")

const bcrypt = require("bcrypt")
const bcryptSalt = 10


// User signup

router.get("/signup", (req, res) => res.render("auth/signup"))
router.post("/signup", (req, res, next) => {

    const { username, password, name, lastName, address, email, phone } = req.body

    if (!username || !password || !name || !address || !email || !phone) {
        res.render("auth/signup", { errorMsg: "Rellena todos los campos obligatorios" })
        return
    }

    User.findOne({ username })
        .then(user => {
            if (user) {
                res.render("auth/signup", { errorMsg: "El usuario ya existe en la BBDD" })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({ username, password: hashPass, name, lastName, address, email, phone })
                .then(() => res.redirect("/login"))
                .catch(() => res.render("auth/signup", { errorMsg: "No se pudo crear el usuario" }))
        })
        .catch(error => next(error))
})


// User login
router.get('/login', (req, res) => res.render('auth/login', { "errorMsg": req.flash("error") }))
router.post('/login', passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true,
    badRequestMessage: 'Rellena todos los campos',
    
}))


// User logout
router.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/login")
})

module.exports = router