const express = require('express')
const router = express.Router()

router.post('/add/:id', (req, res) => {
console.log('estoy añadiendo a favoritos', req.params.id)
})


module.exports = router
