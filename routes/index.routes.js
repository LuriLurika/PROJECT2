const express = require('express')
const User = require('../models/user.model')
const router = express.Router()

const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect('/login')


router.get('/', (req, res) => res.render('index'))

router.get('/admin', checkRole(['BOSS']), (req, res) => {

    User
        .find()
        .then(allUsers => res.render('admin', {allUsers}))
        .catch(err => console.log("BBDD error", err))

})

router.post('/admin/:id/delete', checkRole(['BOSS']), (req, res) => {

    User
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/admin'))
        .catch(err => console.log('BBDD error', err))
})

module.exports = router