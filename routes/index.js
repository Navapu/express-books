const express = require('express')
const router = express.Router()
const fs = require ('fs')
const {v4: uuidv4} = require('uuid')
const json_libros = fs.readFileSync('libros.json', 'utf-8')
let libros = JSON.parse(json_libros)

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
        id: uuidv4(),
        title,
        imagen,
        descripcion
    }
    libros.push(newBook)
    const json_libros = JSON.stringify(libros)
    fs.writeFileSync('libros.json', json_libros, 'utf-8')

    res.redirect('/')
})

router.get('/delete/:id', (req, res)=>{
    libros = libros.filter(libro => libro.id != req.params.id)
    const json_libros = JSON.stringify(libros)
    fs.writeFileSync('libros.json', json_libros, 'utf-8')
    res.redirect('/')
})
module.exports = router;
