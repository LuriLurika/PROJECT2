const express = require('express')
const router = express.Router()
const Favorite = require("../models/favorites.model")


router.post('/add/:id', (req, res) => {
    console.log(req.user)
    if (req.user) {
        const favoriteToSave = { user: req.user._id, car: req.params.id }
        Favorite
            .find(favoriteToSave)
            .then(response => {
                if (response.length === 0) {
                    Favorite
                         .create(favoriteToSave)
                        .then(result => {
                            console.log(result)
                            res.json({result: true})
                        })
                        .catch(err => console.log('error en la BBDD', err))
                } else {
                    Favorite
                        .deleteOne(favoriteToSave)
                        .then(response => {
                            res.json({ result: true })
                        })
                        .catch(err => console.log('error en la BBDD', err))
                }
            })
            .catch(err => console.log('error en la BBDD', err)) 
    } else {
        res.json({result: false})
    }
    
    
})


module.exports = router
