const express = require('express');
var bodyParser = require('body-parser')
const app = express();

const fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//viewengine
app.set('view engine', 'ejs');
app.listen(3000);

app.use((req, res, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (req, res) => {
    const dojos = [
        {title: 'Hamerashi', snippet: 'En Japon'},
        {title: 'Tibetashi', snippet: 'En Japon'},
        {title: 'Arigato', snippet: 'En Japon'},
      ];
    res.render('index', { title: 'Inicio', blogs });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'Sobre los Ninjas' });
})

app.get('/dojos', (req, res) => {
    res.render('create', { title: 'Crear nuevo Dojo' });
})

app.post('/dojos', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('index');
})


app.get('/hogares', (req, res) => {
    res.render('hogares');
})


//404 middleware
app.use((req, res) => {
    res.status(404).render('404');
    response.send('Error 404-esta ruta no existe');
})

