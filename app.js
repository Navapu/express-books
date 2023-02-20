const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')
const indexRouter = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir:  path.join(app.get('views'), 'layouts'),
  partialsDir:  path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))

app.set('view engine', '.hbs');

app.use('/', indexRouter)

app.listen(3000)
console.log('Escuchando en el puerto 3000')
module.exports = app;