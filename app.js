const express = require('express');
const taskRouter = require('./routes/taskRouter');

const db = require('./config/db');
db();
let methodOverride = require('method-override');

let app = express();

//register template engine
app.set('view engine', 'ejs');

//middleware
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// app.get('/home', (req, res) => {
//   res.render('home', { title: 'home', name: 'shashidhar' });
// });

//base route
app.use('/api/v1/taskRouter', taskRouter);

module.exports = app;
