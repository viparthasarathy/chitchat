// modules

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// configuration

const port = process.env.PORT || 3000;




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/registration.html');
})

app.post('/signup', (req, res) => {

})


app.listen(3000, function() {
  console.log("Now listening to http://localhost:3000");
});
