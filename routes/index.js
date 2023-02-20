const express = require('express')
const router = express.Router()

const libros = []

router.get('/', (req , res) => {
    res.render('index.hbs')
})

router.get('/formulario', (req, res) =>{
    res.render('formulario')
})
router.post('/formulario', (req, res) => {
    book.push(req.body)
    res.send('Recibido');
})
module.exports = router;
