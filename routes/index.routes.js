const express = require('express')
const User = require('../models/user.model')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/admin', (req, res) => {

    User
        .find()
        .then(allUsers => res.render('admin', {allUsers}))
        .catch(err => console.log("BBDD error", err))

})

router.post('/admin/:id/delete', (req, res) => {

    User
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/admin'))
        .catch(err => console.log('BBDD error', err))
})

module.exports = router