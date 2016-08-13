const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const db = require('./config/db');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes.js')(app);

app.listen(port, function() {
  console.log("Now listening to http://localhost:3000");
});
