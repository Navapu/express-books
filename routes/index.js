const express = require('express')
const router = express.Router()
const fs = require ('fs')

const libros = []

router.get('/', (req , res) => {
    res.render('index.hbs', {
        libros
    })
})

router.get('/formulario', (req, res) =>{
    res.render('formulario')
})
router.post('/formulario', (req, res) => {
    const {title, imagen, descripcion} = req.body
    let newBook = {
        title,
        imagen,
        descripcion
    }
    libros.push(newBook)
    const json_libros = JSON.stringify(libros)
    fs.writeFileSync('libros.json', json_libros, 'utf-8')

    res.send('Recibido');
})
module.exports = router;
