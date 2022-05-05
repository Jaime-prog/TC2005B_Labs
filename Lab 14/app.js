const express = require('express');
const Blog = require('./models/blog');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rutas_usuarios = require('./routes/auth.routes')
const path = require('path')

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.use(session({
  secret: 'gKNJFYzbZ4FMaXmTbXhB',
  resave: false,
  saveUninitialized: false,
}));

app.use(cookieParser());

// middleware & archivos estaticos
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Hiroshima', snippet: 'Dojo from a lost city in the east'},
    {title: 'Jakatsuki', snippet: 'Dojo from the far east in the island of japan'},
    {title: 'Nikolasi', snippet: 'Dojo from the lost city of Nikolasi'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new dojo' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
