const User = require('./models/user');

module.exports = function(app) {

  app.post('/signup', (req, res) => {
    if (!req.body.name || !req.body.password) {
      res.json({ success: false, msg: 'Please enter a name and password.' });
    } else {
      let newUser = new User({
        name: req.body.name,
        password: req.body.password
      });
      newUser.save((err) => {
        if (err) {
          return res.json({ success: false, msg: 'Username is taken.' });
        }
        res.json({success: true, msg: 'Successfully created new user.'});
      });
    }
  });

  app.get('*', (req, res) => {
    res.sendfile('./public/views/index.html');
  });



};
