// modules

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// configuration

const db = require('./config/db');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes.js')(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/registration.html');
});

app.post('/signup', (req, res) => {

})


app.listen(3000, function() {
  console.log("Now listening to http://localhost:3000");
});
