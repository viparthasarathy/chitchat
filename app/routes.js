const User = require('./models/user');

module.exports = function(app) {

  app.post('/signup', (req, res) => {

  });

  app.get('*', (req, res) => {
    res.sendfile('./public/views/index.html');
  });

};
