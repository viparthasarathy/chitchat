const User = require('./models/user');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

  app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/registration.html');
  });

  app.post('/signup', (req, res) => {

  });  
}
