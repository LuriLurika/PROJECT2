const express = require('express')
const router = express.Router()
const multer = require('multer')
const Picture = require('../models/picture.model')

// File upload settings
const uploadLocal = multer({ dest: './public/uploads/' })


const cloudUploader = require('../configs/cloudinary.config')

router.get('/upload-cdn', (req, res, next) => res.render('files/upload-form-cdn'))

router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

    console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

    Picture.create({
        name: req.body.imageName,
        path: req.file.url,
        originalName: req.file.originalname
    })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


module.exports = router